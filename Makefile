# F2XSAAS Development Makefile

# =============================================================================
# VARIABLES
# =============================================================================
PROJECT_NAME := f2xsaas
FRONTEND_DIR := frontend
BACKEND_DIR := backend
DOCKER_COMPOSE := docker-compose.yml
GO_VERSION := 1.21
NODE_VERSION := 18

# Colors for terminal output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[0;33m
BLUE := \033[0;34m
PURPLE := \033[0;35m
CYAN := \033[0;36m
WHITE := \033[0;37m
NC := \033[0m # No Color

# =============================================================================
# HELP
# =============================================================================
.PHONY: help
help: ## Show this help message
	@echo "$(CYAN)F2XSAAS Development Commands$(NC)"
	@echo "================================"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "$(GREEN)%-20s$(NC) %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# =============================================================================
# SETUP AND INSTALLATION
# =============================================================================
.PHONY: setup
setup: ## Initial project setup
	@echo "$(BLUE)Setting up F2XSAAS project...$(NC)"
	@cp .env.example .env
	@echo "$(GREEN)✓ Environment file created$(NC)"
	@$(MAKE) install-frontend
	@$(MAKE) install-backend
	@$(MAKE) setup-infrastructure
	@echo "$(GREEN)✓ Project setup complete!$(NC)"

.PHONY: install-frontend
install-frontend: ## Install frontend dependencies
	@echo "$(BLUE)Installing frontend dependencies...$(NC)"
	@cd $(FRONTEND_DIR) && npm install
	@echo "$(GREEN)✓ Frontend dependencies installed$(NC)"

.PHONY: install-backend
install-backend: ## Install backend dependencies
	@echo "$(BLUE)Installing backend dependencies...$(NC)"
	@cd $(BACKEND_DIR) && go mod tidy
	@cd $(BACKEND_DIR)/services/auth && go mod tidy
	@cd $(BACKEND_DIR)/services/user && go mod tidy
	@cd $(BACKEND_DIR)/services/ai && go mod tidy
	@cd $(BACKEND_DIR)/services/analytics && go mod tidy
	@cd $(BACKEND_DIR)/services/notification && go mod tidy
	@cd $(BACKEND_DIR)/services/billing && go mod tidy
	@cd $(BACKEND_DIR)/gateway && go mod tidy
	@echo "$(GREEN)✓ Backend dependencies installed$(NC)"

.PHONY: setup-infrastructure
setup-infrastructure: ## Setup infrastructure services
	@echo "$(BLUE)Setting up infrastructure services...$(NC)"
	@docker-compose up -d postgres redis minio rabbitmq elasticsearch
	@echo "$(YELLOW)Waiting for services to be ready...$(NC)"
	@sleep 10
	@$(MAKE) migrate-db
	@echo "$(GREEN)✓ Infrastructure setup complete$(NC)"

# =============================================================================
# DEVELOPMENT
# =============================================================================
.PHONY: dev
dev: ## Start development environment
	@echo "$(BLUE)Starting development environment...$(NC)"
	@$(MAKE) dev-infrastructure
	@$(MAKE) dev-backend &
	@$(MAKE) dev-frontend &
	@echo "$(GREEN)✓ Development environment started$(NC)"
	@echo "$(CYAN)Frontend: http://localhost:3000$(NC)"
	@echo "$(CYAN)API Gateway: http://localhost:8000$(NC)"
	@echo "$(CYAN)Grafana: http://localhost:3001$(NC)"

.PHONY: dev-infrastructure
dev-infrastructure: ## Start infrastructure services for development
	@echo "$(BLUE)Starting infrastructure services...$(NC)"
	@docker-compose up -d postgres redis minio rabbitmq elasticsearch prometheus grafana mailhog adminer
	@echo "$(GREEN)✓ Infrastructure services started$(NC)"

.PHONY: dev-frontend
dev-frontend: ## Start frontend development server
	@echo "$(BLUE)Starting frontend development server...$(NC)"
	@cd $(FRONTEND_DIR) && npm run dev

.PHONY: dev-backend
dev-backend: ## Start all backend services
	@echo "$(BLUE)Starting backend services...$(NC)"
	@cd $(BACKEND_DIR)/services/auth && go run . &
	@cd $(BACKEND_DIR)/services/user && go run . &
	@cd $(BACKEND_DIR)/services/ai && go run . &
	@cd $(BACKEND_DIR)/services/analytics && go run . &
	@cd $(BACKEND_DIR)/services/notification && go run . &
	@cd $(BACKEND_DIR)/services/billing && go run . &
	@cd $(BACKEND_DIR)/gateway && go run . &
	@echo "$(GREEN)✓ Backend services started$(NC)"

.PHONY: stop
stop: ## Stop all services
	@echo "$(BLUE)Stopping all services...$(NC)"
	@docker-compose down
	@pkill -f "go run" || true
	@echo "$(GREEN)✓ All services stopped$(NC)"

# =============================================================================
# BUILDING
# =============================================================================
.PHONY: build
build: ## Build all services
	@echo "$(BLUE)Building all services...$(NC)"
	@$(MAKE) build-frontend
	@$(MAKE) build-backend
	@echo "$(GREEN)✓ All services built$(NC)"

.PHONY: build-frontend
build-frontend: ## Build frontend application
	@echo "$(BLUE)Building frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run build
	@echo "$(GREEN)✓ Frontend built$(NC)"

.PHONY: build-backend
build-backend: ## Build all backend services
	@echo "$(BLUE)Building backend services...$(NC)"
	@cd $(BACKEND_DIR)/services/auth && go build -o ../../bin/auth-service .
	@cd $(BACKEND_DIR)/services/user && go build -o ../../bin/user-service .
	@cd $(BACKEND_DIR)/services/ai && go build -o ../../bin/ai-service .
	@cd $(BACKEND_DIR)/services/analytics && go build -o ../../bin/analytics-service .
	@cd $(BACKEND_DIR)/services/notification && go build -o ../../bin/notification-service .
	@cd $(BACKEND_DIR)/services/billing && go build -o ../../bin/billing-service .
	@cd $(BACKEND_DIR)/gateway && go build -o ../bin/gateway .
	@echo "$(GREEN)✓ Backend services built$(NC)"

.PHONY: build-docker
build-docker: ## Build Docker images for all services
	@echo "$(BLUE)Building Docker images...$(NC)"
	@docker-compose build
	@echo "$(GREEN)✓ Docker images built$(NC)"

# =============================================================================
# TESTING
# =============================================================================
.PHONY: test
test: ## Run all tests
	@echo "$(BLUE)Running all tests...$(NC)"
	@$(MAKE) test-frontend
	@$(MAKE) test-backend
	@echo "$(GREEN)✓ All tests completed$(NC)"

.PHONY: test-frontend
test-frontend: ## Run frontend tests
	@echo "$(BLUE)Running frontend tests...$(NC)"
	@cd $(FRONTEND_DIR) && npm run test
	@echo "$(GREEN)✓ Frontend tests completed$(NC)"

.PHONY: test-backend
test-backend: ## Run backend tests
	@echo "$(BLUE)Running backend tests...$(NC)"
	@cd $(BACKEND_DIR) && go test ./...
	@echo "$(GREEN)✓ Backend tests completed$(NC)"

.PHONY: test-integration
test-integration: ## Run integration tests
	@echo "$(BLUE)Running integration tests...$(NC)"
	@cd tests/integration && go test ./...
	@echo "$(GREEN)✓ Integration tests completed$(NC)"

.PHONY: test-e2e
test-e2e: ## Run end-to-end tests
	@echo "$(BLUE)Running end-to-end tests...$(NC)"
	@cd $(FRONTEND_DIR) && npm run test:e2e
	@echo "$(GREEN)✓ End-to-end tests completed$(NC)"

# =============================================================================
# DATABASE
# =============================================================================
.PHONY: migrate-db
migrate-db: ## Run database migrations
	@echo "$(BLUE)Running database migrations...$(NC)"
	@cd $(BACKEND_DIR) && go run tools/migrate/main.go up
	@echo "$(GREEN)✓ Database migrations completed$(NC)"

.PHONY: seed-db
seed-db: ## Seed database with sample data
	@echo "$(BLUE)Seeding database...$(NC)"
	@cd $(BACKEND_DIR) && go run tools/seed/main.go
	@echo "$(GREEN)✓ Database seeded$(NC)"

.PHONY: reset-db
reset-db: ## Reset database (drop and recreate)
	@echo "$(YELLOW)Resetting database...$(NC)"
	@cd $(BACKEND_DIR) && go run tools/migrate/main.go down
	@cd $(BACKEND_DIR) && go run tools/migrate/main.go up
	@$(MAKE) seed-db
	@echo "$(GREEN)✓ Database reset completed$(NC)"

# =============================================================================
# CODE QUALITY
# =============================================================================
.PHONY: lint
lint: ## Run linters for all code
	@echo "$(BLUE)Running linters...$(NC)"
	@$(MAKE) lint-frontend
	@$(MAKE) lint-backend
	@echo "$(GREEN)✓ Linting completed$(NC)"

.PHONY: lint-frontend
lint-frontend: ## Run frontend linter
	@echo "$(BLUE)Linting frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run lint
	@echo "$(GREEN)✓ Frontend linting completed$(NC)"

.PHONY: lint-backend
lint-backend: ## Run backend linter
	@echo "$(BLUE)Linting backend...$(NC)"
	@cd $(BACKEND_DIR) && golangci-lint run ./...
	@echo "$(GREEN)✓ Backend linting completed$(NC)"

.PHONY: format
format: ## Format all code
	@echo "$(BLUE)Formatting code...$(NC)"
	@$(MAKE) format-frontend
	@$(MAKE) format-backend
	@echo "$(GREEN)✓ Code formatting completed$(NC)"

.PHONY: format-frontend
format-frontend: ## Format frontend code
	@echo "$(BLUE)Formatting frontend...$(NC)"
	@cd $(FRONTEND_DIR) && npm run format
	@echo "$(GREEN)✓ Frontend formatting completed$(NC)"

.PHONY: format-backend
format-backend: ## Format backend code
	@echo "$(BLUE)Formatting backend...$(NC)"
	@cd $(BACKEND_DIR) && go fmt ./...
	@echo "$(GREEN)✓ Backend formatting completed$(NC)"

# =============================================================================
# DEPLOYMENT
# =============================================================================
.PHONY: deploy-staging
deploy-staging: ## Deploy to staging environment
	@echo "$(BLUE)Deploying to staging...$(NC)"
	@./scripts/deploy.sh staging
	@echo "$(GREEN)✓ Deployed to staging$(NC)"

.PHONY: deploy-production
deploy-production: ## Deploy to production environment
	@echo "$(BLUE)Deploying to production...$(NC)"
	@./scripts/deploy.sh production
	@echo "$(GREEN)✓ Deployed to production$(NC)"

# =============================================================================
# UTILITIES
# =============================================================================
.PHONY: logs
logs: ## View logs from all services
	@echo "$(BLUE)Viewing service logs...$(NC)"
	@docker-compose logs -f

.PHONY: logs-backend
logs-backend: ## View backend service logs
	@echo "$(BLUE)Viewing backend logs...$(NC)"
	@docker-compose logs -f auth-service user-service ai-service analytics-service notification-service billing-service

.PHONY: clean
clean: ## Clean build artifacts and caches
	@echo "$(BLUE)Cleaning build artifacts...$(NC)"
	@cd $(FRONTEND_DIR) && rm -rf .next node_modules/.cache
	@cd $(BACKEND_DIR) && rm -rf bin/
	@docker system prune -f
	@echo "$(GREEN)✓ Cleanup completed$(NC)"

.PHONY: backup
backup: ## Backup database and files
	@echo "$(BLUE)Creating backup...$(NC)"
	@./scripts/backup.sh
	@echo "$(GREEN)✓ Backup completed$(NC)"

.PHONY: health
health: ## Check health of all services
	@echo "$(BLUE)Checking service health...$(NC)"
	@curl -f http://localhost:3000/api/health || echo "$(RED)Frontend health check failed$(NC)"
	@curl -f http://localhost:8000/health || echo "$(RED)API Gateway health check failed$(NC)"
	@curl -f http://localhost:8001/health || echo "$(RED)Auth service health check failed$(NC)"
	@curl -f http://localhost:8002/health || echo "$(RED)User service health check failed$(NC)"
	@curl -f http://localhost:8003/health || echo "$(RED)AI service health check failed$(NC)"
	@echo "$(GREEN)✓ Health checks completed$(NC)"

.PHONY: install-tools
install-tools: ## Install development tools
	@echo "$(BLUE)Installing development tools...$(NC)"
	@go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
	@go install github.com/swaggo/swag/cmd/swag@latest
	@npm install -g prettier eslint typescript
	@echo "$(GREEN)✓ Development tools installed$(NC)"

# =============================================================================
# DEFAULT TARGET
# =============================================================================
.DEFAULT_GOAL := help