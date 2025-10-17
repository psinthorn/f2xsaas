# F2XSAAS Project Setup and Running Guide

## 🚀 Complete Setup Instructions

This guide will walk you through setting up and running the complete F2XSAAS AI-powered SaaS platform on your local machine.

## 📋 Prerequisites

Before starting, ensure you have the following installed:

### Required Software
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Go** (v1.21 or higher) - [Download](https://golang.org/dl/)
- **Docker** and **Docker Compose** - [Download](https://www.docker.com/products/docker-desktop/)
- **Git** - [Download](https://git-scm.com/downloads)

### Optional but Recommended
- **Make** (for using Makefile commands)
- **VS Code** with Go and TypeScript extensions
- **Postman** for API testing

## 🛠 Quick Start (5 Minutes)

### 1. Clone and Initial Setup
```bash
# Clone the repository
git clone <your-repo-url> f2xsaas
cd f2xsaas

# Run initial setup (this installs everything)
make setup
```

### 2. Start Development Environment
```bash
# Start all services at once
make dev

# Or start services individually:
make dev-infrastructure  # Start databases and supporting services
make dev-backend        # Start all Go microservices
make dev-frontend       # Start Next.js frontend
```

### 3. Access the Application
- **Frontend (Web App)**: http://localhost:3000
- **API Gateway**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Grafana Dashboard**: http://localhost:3001 (admin/admin123)
- **Database Admin**: http://localhost:8080 (adminer)
- **Email Testing**: http://localhost:8025 (mailhog)

## 📚 Detailed Setup Instructions

### Step 1: Environment Configuration

1. **Copy environment file:**
```bash
cp .env.example .env
```

2. **Configure your environment variables:**
```bash
# Edit .env file with your specific settings
nano .env  # or use your preferred editor

# Key variables to update:
OPENAI_API_KEY=your-openai-api-key-here
STRIPE_SECRET_KEY=your-stripe-secret-key
JWT_SECRET=your-super-secret-jwt-key
```

### Step 2: Infrastructure Services

Start the supporting services (databases, queues, etc.):

```bash
# Start infrastructure services
docker-compose up -d postgres redis minio rabbitmq elasticsearch

# Wait for services to be ready (about 30 seconds)
# Check service health
make health
```

**Services Started:**
- **PostgreSQL** (port 5432) - Main database
- **Redis** (port 6379) - Caching and sessions
- **MinIO** (port 9000) - File storage (S3-compatible)
- **RabbitMQ** (port 5672, UI: 15672) - Message queue
- **Elasticsearch** (port 9200) - Search and analytics

### Step 3: Database Setup

```bash
# Run database migrations
make migrate-db

# Seed with sample data
make seed-db
```

### Step 4: Backend Services

Start all Go microservices:

```bash
# Install Go dependencies
make install-backend

# Start all backend services
make dev-backend
```

**Services Started:**
- **API Gateway** (port 8000) - Routes requests to services
- **Auth Service** (port 8001) - Authentication & authorization
- **User Service** (port 8002) - User management
- **AI Service** (port 8003) - OpenAI integration
- **Analytics Service** (port 8004) - Data analytics
- **Notification Service** (port 8005) - Email/SMS notifications
- **Billing Service** (port 8006) - Payments & subscriptions

### Step 5: Frontend Application

Start the Next.js frontend:

```bash
# Install frontend dependencies
make install-frontend

# Start frontend development server
make dev-frontend
```

## 🔧 Service Configuration

### Frontend Configuration (frontend/.env.local)
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
```

### Backend Configuration
Each service reads from the main `.env` file. Key configurations:

#### Database
```bash
DATABASE_URL=postgresql://f2xsaas_user:your_secure_password@localhost:5432/f2xsaas_dev
```

#### OpenAI Integration
```bash
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_ORGANIZATION_ID=org-your-organization-id
```

#### Payment Processing
```bash
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## 🏃‍♂️ Running the Application

### Development Mode

**Option 1: All-in-One Command**
```bash
make dev
```

**Option 2: Step-by-Step**
```bash
# Terminal 1: Infrastructure
make dev-infrastructure

# Terminal 2: Backend Services
make dev-backend

# Terminal 3: Frontend
make dev-frontend
```

### Production Build
```bash
# Build all services
make build

# Or build individually
make build-frontend
make build-backend
```

### Docker Development
```bash
# Build and run everything in Docker
make build-docker
docker-compose up
```

## 📊 Monitoring and Debugging

### Access Monitoring Tools
- **Grafana**: http://localhost:3001 (admin/admin123)
- **Prometheus**: http://localhost:9090
- **RabbitMQ Management**: http://localhost:15672 (f2xsaas/f2xsaas_queue_pass)
- **MinIO Console**: http://localhost:9001 (minioadmin/minioadmin)

### View Logs
```bash
# All service logs
make logs

# Backend service logs only
make logs-backend

# Individual service logs
docker-compose logs -f postgres
docker-compose logs -f redis
```

### Database Access
```bash
# Via Adminer (Web UI)
# Go to: http://localhost:8080
# Server: postgres
# Username: f2xsaas_user
# Password: your_secure_password
# Database: f2xsaas_dev

# Via Command Line
docker exec -it f2xsaas-postgres psql -U f2xsaas_user -d f2xsaas_dev
```

## 🧪 Testing

### Run All Tests
```bash
make test
```

### Individual Test Suites
```bash
# Frontend tests
make test-frontend

# Backend tests
make test-backend

# Integration tests
make test-integration

# End-to-end tests
make test-e2e
```

## 🔄 Common Development Workflows

### Adding a New Feature

1. **Create feature branch:**
```bash
git checkout -b feature/new-ai-feature
```

2. **Develop frontend component:**
```bash
cd frontend/src/components
# Create your component
```

3. **Develop backend endpoint:**
```bash
cd backend/services/ai/handlers
# Add new handler
```

4. **Test changes:**
```bash
make test
```

5. **Commit and push:**
```bash
git add .
git commit -m "Add new AI feature"
git push origin feature/new-ai-feature
```

### Database Changes

1. **Create migration:**
```bash
cd backend/tools/migrate
# Create new migration file
```

2. **Run migration:**
```bash
make migrate-db
```

3. **Update models:**
```bash
cd backend/shared/models
# Update Go structs
```

### API Changes

1. **Update API handler:**
```bash
cd backend/services/[service]/handlers
# Modify handler
```

2. **Update frontend API client:**
```bash
cd frontend/src/lib
# Update api.ts
```

3. **Test API:**
```bash
# Use Postman or curl to test
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'
```

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Check what's using the port
lsof -i :3000  # or whatever port

# Kill the process
kill -9 <PID>
```

#### Database Connection Issues
```bash
# Check if PostgreSQL is running
docker-compose ps postgres

# Restart PostgreSQL
docker-compose restart postgres

# Check logs
docker-compose logs postgres
```

#### Service Not Starting
```bash
# Check service logs
make logs

# Restart specific service
docker-compose restart [service-name]

# Check environment variables
env | grep DATABASE_URL
```

#### Frontend Build Issues
```bash
# Clear Next.js cache
cd frontend
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

#### Backend Build Issues
```bash
# Clean Go cache
go clean -cache

# Update dependencies
cd backend
go mod tidy

# Check for syntax errors
go vet ./...
```

### Performance Issues

#### Slow Database Queries
```bash
# Check database performance
docker exec -it f2xsaas-postgres psql -U f2xsaas_user -d f2xsaas_dev -c "SELECT * FROM pg_stat_activity;"
```

#### High Memory Usage
```bash
# Check Docker resource usage
docker stats

# Restart services
make stop
make dev
```

## 🔧 Advanced Configuration

### Environment-Specific Settings

#### Development
```bash
LOG_LEVEL=debug
DEBUG_MODE=true
ENABLE_SWAGGER=true
```

#### Production
```bash
LOG_LEVEL=info
DEBUG_MODE=false
ENABLE_SWAGGER=false
```

### Feature Flags
```bash
ENABLE_AI_FEATURES=true
ENABLE_ANALYTICS=true
ENABLE_NOTIFICATIONS=true
ENABLE_BILLING=true
```

### Security Settings
```bash
JWT_EXPIRY=24h
RATE_LIMIT_REQUESTS_PER_MINUTE=100
CSRF_SECRET=your-csrf-secret-key
```

## 📱 API Usage Examples

### Authentication
```bash
# Register user
curl -X POST http://localhost:8000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "firstName": "John",
    "lastName": "Doe"
  }'

# Login
curl -X POST http://localhost:8000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword"
  }'
```

### AI Features
```bash
# AI Chat
curl -X POST http://localhost:8000/api/v1/ai/chat \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "Hello, how can AI help my business?"}
    ],
    "model": "gpt-4"
  }'
```

### Analytics
```bash
# Get dashboard data
curl -X GET http://localhost:8000/api/v1/analytics/dashboard \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## 🚀 Deployment

### Staging Deployment
```bash
make deploy-staging
```

### Production Deployment
```bash
make deploy-production
```

## 📞 Support and Resources

### Documentation
- **API Docs**: http://localhost:8000/docs (when running)
- **Architecture**: `/docs/architecture/system-architecture.md`
- **Deployment**: `/docs/deployment/deployment-guide.md`

### Development Tools
- **Frontend**: React DevTools, Next.js DevTools
- **Backend**: Delve debugger, pprof profiler
- **Database**: pgAdmin, Adminer
- **API Testing**: Postman, Insomnia

### Useful Commands
```bash
# Check all service status
make health

# View all logs
make logs

# Reset everything
make stop
make clean
make setup
make dev

# Backup data
make backup

# Run code formatting
make format

# Run linting
make lint
```

This setup guide provides everything needed to get F2XSAAS running locally and start development. The modular architecture ensures you can work on individual components while the full system runs seamlessly.