# F2XSAAS Deployment Guide

## Overview

This guide covers the deployment strategies, infrastructure setup, and operational procedures for the F2XSAAS platform. The system is designed to run in multiple environments from local development to production-scale deployments.

## Deployment Environments

### 1. Local Development
- Docker Compose for local services
- Hot reloading for frontend and backend
- Local databases and caches
- Mock external services

### 2. Staging/Testing
- Kubernetes cluster
- Shared databases with test data
- CI/CD integration
- Performance testing environment

### 3. Production
- Multi-region Kubernetes deployment
- High availability databases
- CDN and load balancers
- Monitoring and alerting

## Infrastructure Components

### Container Strategy

All services are containerized using Docker:

```dockerfile
# Example Go service Dockerfile
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/main .
CMD ["./main"]
```

### Kubernetes Deployment

#### Namespace Structure
```yaml
# namespaces.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: f2xsaas-prod
---
apiVersion: v1
kind: Namespace
metadata:
  name: f2xsaas-staging
```

#### Service Deployments
```yaml
# auth-service-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-service
  namespace: f2xsaas-prod
spec:
  replicas: 3
  selector:
    matchLabels:
      app: auth-service
  template:
    metadata:
      labels:
        app: auth-service
    spec:
      containers:
      - name: auth-service
        image: f2xsaas/auth-service:latest
        ports:
        - containerPort: 8001
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-secrets
              key: url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: auth-secrets
              key: jwt-secret
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8001
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8001
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: auth-service
  namespace: f2xsaas-prod
spec:
  selector:
    app: auth-service
  ports:
  - port: 8001
    targetPort: 8001
  type: ClusterIP
```

### Database Setup

#### PostgreSQL Configuration
```yaml
# postgres-deployment.yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
  namespace: f2xsaas-prod
spec:
  serviceName: postgres
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        env:
        - name: POSTGRES_DB
          value: f2xsaas
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: postgres-secrets
              key: username
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secrets
              key: password
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 100Gi
```

#### Redis Configuration
```yaml
# redis-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  namespace: f2xsaas-prod
spec:
  replicas: 2
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis:7-alpine
        ports:
        - containerPort: 6379
        resources:
          requests:
            memory: "64Mi"
            cpu: "50m"
          limits:
            memory: "128Mi"
            cpu: "100m"
```

## CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy F2XSAAS

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: frontend/package-lock.json
    
    - name: Install frontend dependencies
      run: |
        cd frontend
        npm ci
    
    - name: Run frontend tests
      run: |
        cd frontend
        npm run test
    
    - name: Set up Go
      uses: actions/setup-go@v3
      with:
        go-version: '1.21'
    
    - name: Run backend tests
      run: |
        cd backend
        go test ./...

  build-and-push:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main' || github.ref == 'refs/heads/staging'
    
    strategy:
      matrix:
        service: [auth, user, ai, analytics, notification, billing]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v2
    
    - name: Login to Container Registry
      uses: docker/login-action@v2
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Build and push ${{ matrix.service }} service
      uses: docker/build-push-action@v4
      with:
        context: ./backend/services/${{ matrix.service }}
        push: true
        tags: ghcr.io/f2xsaas/${{ matrix.service }}-service:${{ github.sha }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy-staging:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/staging'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to staging
      run: |
        # Update Kubernetes manifests with new image tags
        # Apply to staging cluster
        kubectl config set-context staging-cluster
        kubectl set image deployment/auth-service auth-service=ghcr.io/f2xsaas/auth-service:${{ github.sha }} -n f2xsaas-staging
        kubectl set image deployment/user-service user-service=ghcr.io/f2xsaas/user-service:${{ github.sha }} -n f2xsaas-staging
        # ... other services

  deploy-production:
    needs: build-and-push
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to production
      run: |
        # Blue-green deployment strategy
        kubectl config set-context production-cluster
        # Update blue deployment
        kubectl set image deployment/auth-service-blue auth-service=ghcr.io/f2xsaas/auth-service:${{ github.sha }} -n f2xsaas-prod
        # Wait for rollout
        kubectl rollout status deployment/auth-service-blue -n f2xsaas-prod
        # Switch traffic to blue
        kubectl patch service auth-service -p '{"spec":{"selector":{"version":"blue"}}}' -n f2xsaas-prod
```

## Environment Configuration

### Environment Variables

Create environment-specific configuration files:

#### Development (.env.development)
```bash
# Database
DATABASE_URL=postgresql://localhost:5432/f2xsaas_dev
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=development-secret-key
JWT_EXPIRY=1h

# OpenAI
OPENAI_API_KEY=your-development-key

# Email
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_USER=
SMTP_PASS=

# AWS/Storage
AWS_ACCESS_KEY_ID=minioadmin
AWS_SECRET_ACCESS_KEY=minioadmin
AWS_S3_BUCKET=f2xsaas-dev
AWS_S3_ENDPOINT=http://localhost:9000

# External Services
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Production (.env.production)
```bash
# Database
DATABASE_URL=${DATABASE_URL}
REDIS_URL=${REDIS_URL}

# JWT
JWT_SECRET=${JWT_SECRET}
JWT_EXPIRY=1h

# OpenAI
OPENAI_API_KEY=${OPENAI_API_KEY}

# Email
SMTP_HOST=${SMTP_HOST}
SMTP_PORT=587
SMTP_USER=${SMTP_USER}
SMTP_PASS=${SMTP_PASS}

# AWS/Storage
AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
AWS_S3_BUCKET=f2xsaas-prod
AWS_REGION=us-east-1

# External Services
STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}

# Frontend
NEXT_PUBLIC_API_URL=https://api.f2xsaas.com
NEXT_PUBLIC_APP_URL=https://app.f2xsaas.com
```

### Kubernetes Secrets

```yaml
# secrets.yaml
apiVersion: v1
kind: Secret
metadata:
  name: database-secrets
  namespace: f2xsaas-prod
type: Opaque
stringData:
  url: postgresql://username:password@postgres:5432/f2xsaas
---
apiVersion: v1
kind: Secret
metadata:
  name: auth-secrets
  namespace: f2xsaas-prod
type: Opaque
stringData:
  jwt-secret: your-super-secret-jwt-key
---
apiVersion: v1
kind: Secret
metadata:
  name: openai-secrets
  namespace: f2xsaas-prod
type: Opaque
stringData:
  api-key: your-openai-api-key
```

## Load Balancing and Ingress

### NGINX Ingress Configuration

```yaml
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: f2xsaas-ingress
  namespace: f2xsaas-prod
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/rate-limit: "100"
spec:
  tls:
  - hosts:
    - api.f2xsaas.com
    - app.f2xsaas.com
    secretName: f2xsaas-tls
  rules:
  - host: api.f2xsaas.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-gateway
            port:
              number: 8000
  - host: app.f2xsaas.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend
            port:
              number: 3000
```

## Monitoring and Observability

### Prometheus Configuration

```yaml
# prometheus-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: f2xsaas-prod
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    
    scrape_configs:
    - job_name: 'f2xsaas-services'
      static_configs:
      - targets:
        - auth-service:8001
        - user-service:8002
        - ai-service:8003
        - analytics-service:8004
        - notification-service:8005
        - billing-service:8006
      metrics_path: /metrics
      scrape_interval: 5s
    
    - job_name: 'postgres'
      static_configs:
      - targets: ['postgres-exporter:9187']
    
    - job_name: 'redis'
      static_configs:
      - targets: ['redis-exporter:9121']
```

### Grafana Dashboards

```json
{
  "dashboard": {
    "title": "F2XSAAS System Overview",
    "panels": [
      {
        "title": "API Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total[5m])) by (service)"
          }
        ]
      },
      {
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket[5m])) by (le, service))"
          }
        ]
      },
      {
        "title": "Error Rate",
        "type": "stat",
        "targets": [
          {
            "expr": "sum(rate(http_requests_total{status=~\"5..\"}[5m])) / sum(rate(http_requests_total[5m]))"
          }
        ]
      }
    ]
  }
}
```

## Backup and Disaster Recovery

### Database Backup Strategy

```bash
#!/bin/bash
# backup-database.sh

# Daily full backup
pg_dump -h $DB_HOST -U $DB_USER -d f2xsaas > backup_$(date +%Y%m%d).sql

# Upload to S3
aws s3 cp backup_$(date +%Y%m%d).sql s3://f2xsaas-backups/database/

# Keep last 30 days
find . -name "backup_*.sql" -mtime +30 -delete

# Point-in-time recovery setup
pg_basebackup -h $DB_HOST -U $DB_USER -D /backup/base -Ft -z -P
```

### Application State Backup

```yaml
# backup-cronjob.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: database-backup
  namespace: f2xsaas-prod
spec:
  schedule: "0 2 * * *"  # Daily at 2 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: postgres:15
            env:
            - name: PGPASSWORD
              valueFrom:
                secretKeyRef:
                  name: postgres-secrets
                  key: password
            command:
            - /bin/bash
            - -c
            - |
              pg_dump -h postgres -U postgres f2xsaas > /backup/backup_$(date +%Y%m%d_%H%M%S).sql
              aws s3 cp /backup/backup_$(date +%Y%m%d_%H%M%S).sql s3://f2xsaas-backups/
            volumeMounts:
            - name: backup-storage
              mountPath: /backup
          volumes:
          - name: backup-storage
            emptyDir: {}
          restartPolicy: OnFailure
```

## Scaling Strategies

### Horizontal Pod Autoscaler

```yaml
# hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: auth-service-hpa
  namespace: f2xsaas-prod
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: auth-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

### Database Scaling

```yaml
# postgres-cluster.yaml
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-cluster
  namespace: f2xsaas-prod
spec:
  instances: 3
  
  postgresql:
    parameters:
      max_connections: "200"
      shared_buffers: "256MB"
      effective_cache_size: "1GB"
      maintenance_work_mem: "64MB"
      checkpoint_completion_target: "0.7"
      wal_buffers: "16MB"
      default_statistics_target: "100"
      random_page_cost: "1.1"
      effective_io_concurrency: "200"
  
  bootstrap:
    initdb:
      database: f2xsaas
      owner: f2xsaas_user
      secret:
        name: postgres-secrets
  
  storage:
    size: 500Gi
    storageClass: fast-ssd
```

## Security Hardening

### Network Policies

```yaml
# network-policy.yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: f2xsaas-network-policy
  namespace: f2xsaas-prod
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          name: f2xsaas-prod
    - namespaceSelector:
        matchLabels:
          name: ingress-nginx
  egress:
  - to: []
    ports:
    - protocol: TCP
      port: 53
    - protocol: UDP
      port: 53
  - to:
    - namespaceSelector:
        matchLabels:
          name: f2xsaas-prod
```

### Pod Security Standards

```yaml
# pod-security-policy.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: f2xsaas-prod
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted
```

## Performance Optimization

### Resource Allocation

```yaml
# Resource recommendations per service
auth-service:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"

ai-service:
  requests:
    cpu: "200m"
    memory: "512Mi"
  limits:
    cpu: "1000m"
    memory: "2Gi"

analytics-service:
  requests:
    cpu: "300m"
    memory: "1Gi"
  limits:
    cpu: "1500m"
    memory: "4Gi"
```

### CDN Configuration

```yaml
# CDN setup for static assets
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  nginx.conf: |
    server {
      listen 80;
      server_name app.f2xsaas.com;
      
      location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary "Accept-Encoding";
        
        # Enable compression
        gzip on;
        gzip_vary on;
        gzip_types text/css application/javascript image/svg+xml;
      }
    }
```

This deployment guide provides a comprehensive foundation for running F2XSAAS in various environments with proper monitoring, security, and scalability considerations.