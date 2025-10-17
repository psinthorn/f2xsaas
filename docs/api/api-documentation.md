# F2XSAAS API Documentation

## Overview

The F2XSAAS API is a RESTful API that provides access to all platform features. All APIs are accessible through the API Gateway at `https://api.f2xsaas.com` (production) or `http://localhost:8000` (development).

## Authentication

### JWT Token Authentication

All API endpoints (except public endpoints) require authentication using JWT tokens.

**Headers:**
```http
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

### Authentication Flow

1. **Login/Register** to obtain access and refresh tokens
2. **Use access token** for API requests
3. **Refresh token** when access token expires

## API Base URLs

- **Production**: `https://api.f2xsaas.com/v1`
- **Staging**: `https://staging-api.f2xsaas.com/v1`
- **Development**: `http://localhost:8000/v1`

## Response Format

All API responses follow a consistent format:

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data here
  },
  "message": "Operation completed successfully",
  "timestamp": "2025-10-17T10:30:00Z"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      // Additional error details
    }
  },
  "timestamp": "2025-10-17T10:30:00Z"
}
```

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Unprocessable Entity
- `429` - Too Many Requests
- `500` - Internal Server Error

---

# Auth Service API

Base URL: `/auth`

## Authentication Endpoints

### POST /auth/register

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "organizationName": "Acme Corp" // Optional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "emailVerified": false,
      "createdAt": "2025-10-17T10:30:00Z"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 3600
    }
  }
}
```

### POST /auth/login

Authenticate user credentials.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user",
      "organizations": ["org_456"]
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIs...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
      "expiresIn": 3600
    }
  }
}
```

### POST /auth/refresh

Refresh access token using refresh token.

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 3600
  }
}
```

### POST /auth/logout

Logout user and invalidate tokens.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "message": "Successfully logged out"
}
```

### POST /auth/forgot-password

Request password reset.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

### POST /auth/reset-password

Reset password with token.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "newPassword": "newSecurePassword123"
}
```

### GET /auth/me

Get current user information.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user",
      "emailVerified": true,
      "organizations": ["org_456"],
      "preferences": {
        "theme": "dark",
        "language": "en"
      }
    }
  }
}
```

---

# User Service API

Base URL: `/users`

## User Management

### GET /users/profile

Get user profile information.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "profile": {
      "id": "user_123",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "avatar": "https://cdn.f2xsaas.com/avatars/user_123.jpg",
      "bio": "AI enthusiast and entrepreneur",
      "timezone": "UTC",
      "language": "en",
      "createdAt": "2025-10-17T10:30:00Z",
      "updatedAt": "2025-10-17T10:30:00Z"
    }
  }
}
```

### PUT /users/profile

Update user profile.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Updated bio",
  "timezone": "America/New_York",
  "language": "en"
}
```

### GET /users/organizations

Get user's organizations.

**Response:**
```json
{
  "success": true,
  "data": {
    "organizations": [
      {
        "id": "org_456",
        "name": "Acme Corp",
        "role": "admin",
        "plan": "professional",
        "memberCount": 15,
        "createdAt": "2025-10-17T10:30:00Z"
      }
    ]
  }
}
```

### POST /users/organizations

Create new organization.

**Request Body:**
```json
{
  "name": "New Organization",
  "description": "Organization description",
  "industry": "technology"
}
```

---

# AI Service API

Base URL: `/ai`

## AI Chat and Completion

### POST /ai/chat

Start or continue AI conversation.

**Request Body:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What are the latest trends in AI?"
    }
  ],
  "model": "gpt-4",
  "temperature": 0.7,
  "maxTokens": 1000,
  "conversationId": "conv_123" // Optional, for continuing conversation
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": {
      "id": "resp_789",
      "content": "AI trends include...",
      "model": "gpt-4",
      "usage": {
        "promptTokens": 50,
        "completionTokens": 200,
        "totalTokens": 250
      },
      "conversationId": "conv_123",
      "createdAt": "2025-10-17T10:30:00Z"
    }
  }
}
```

### POST /ai/completion

Generate text completion.

**Request Body:**
```json
{
  "prompt": "Write a professional email about...",
  "model": "gpt-3.5-turbo",
  "temperature": 0.5,
  "maxTokens": 500
}
```

### POST /ai/embedding

Generate text embeddings.

**Request Body:**
```json
{
  "input": "Text to embed",
  "model": "text-embedding-ada-002"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "embedding": [0.1, 0.2, 0.3, ...], // 1536-dimensional vector
    "model": "text-embedding-ada-002",
    "usage": {
      "promptTokens": 10,
      "totalTokens": 10
    }
  }
}
```

### POST /ai/image-generation

Generate images using DALL-E.

**Request Body:**
```json
{
  "prompt": "A futuristic AI dashboard",
  "model": "dall-e-3",
  "size": "1024x1024",
  "quality": "standard",
  "style": "vivid"
}
```

### GET /ai/conversations

Get user's AI conversations.

**Query Parameters:**
- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20)
- `search` (string): Search in conversation titles

**Response:**
```json
{
  "success": true,
  "data": {
    "conversations": [
      {
        "id": "conv_123",
        "title": "AI Trends Discussion",
        "messageCount": 5,
        "lastMessage": "AI trends include...",
        "createdAt": "2025-10-17T10:30:00Z",
        "updatedAt": "2025-10-17T10:35:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 45,
      "totalPages": 3
    }
  }
}
```

---

# Analytics Service API

Base URL: `/analytics`

## Dashboard and Metrics

### GET /analytics/dashboard

Get dashboard data for the current user/organization.

**Query Parameters:**
- `period` (string): `day|week|month|quarter|year` (default: month)
- `organizationId` (string): Organization ID (required for organization data)

**Response:**
```json
{
  "success": true,
  "data": {
    "dashboard": {
      "metrics": {
        "totalUsers": 1250,
        "activeUsers": 850,
        "aiRequests": 15000,
        "apiCalls": 25000,
        "revenue": 12500.00
      },
      "charts": {
        "userGrowth": [
          { "date": "2025-10-01", "value": 1200 },
          { "date": "2025-10-02", "value": 1220 }
        ],
        "aiUsage": [
          { "date": "2025-10-01", "requests": 500 },
          { "date": "2025-10-02", "requests": 520 }
        ]
      },
      "topFeatures": [
        { "feature": "AI Chat", "usage": 8500 },
        { "feature": "Analytics", "usage": 3200 }
      ]
    }
  }
}
```

### POST /analytics/events

Track custom events.

**Request Body:**
```json
{
  "event": "feature_used",
  "properties": {
    "feature": "ai_chat",
    "duration": 120,
    "tokens_used": 250
  },
  "userId": "user_123",
  "organizationId": "org_456"
}
```

### GET /analytics/reports

Get analytical reports.

**Query Parameters:**
- `type` (string): `usage|performance|revenue|users`
- `period` (string): Time period
- `format` (string): `json|csv|pdf`

---

# Notification Service API

Base URL: `/notifications`

## Notification Management

### POST /notifications/send

Send notification.

**Request Body:**
```json
{
  "type": "email",
  "recipients": ["user@example.com"],
  "subject": "Welcome to F2XSAAS",
  "content": "Thank you for joining...",
  "template": "welcome_email",
  "variables": {
    "userName": "John Doe",
    "loginUrl": "https://app.f2xsaas.com/login"
  }
}
```

### GET /notifications/inbox

Get user's notifications.

**Response:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "notif_123",
        "type": "info",
        "title": "New feature available",
        "message": "Check out our new AI assistant",
        "read": false,
        "createdAt": "2025-10-17T10:30:00Z"
      }
    ],
    "unreadCount": 3
  }
}
```

### PUT /notifications/:id/read

Mark notification as read.

---

# Billing Service API

Base URL: `/billing`

## Subscription Management

### GET /billing/subscription

Get current subscription.

**Response:**
```json
{
  "success": true,
  "data": {
    "subscription": {
      "id": "sub_123",
      "plan": "professional",
      "status": "active",
      "currentPeriodStart": "2025-10-01T00:00:00Z",
      "currentPeriodEnd": "2025-11-01T00:00:00Z",
      "cancelAtPeriodEnd": false,
      "trialEnd": null,
      "usage": {
        "aiRequests": 8500,
        "apiCalls": 15000,
        "users": 25
      },
      "limits": {
        "aiRequests": 50000,
        "apiCalls": 100000,
        "users": 100
      }
    }
  }
}
```

### POST /billing/subscribe

Create new subscription.

**Request Body:**
```json
{
  "planId": "professional",
  "paymentMethodId": "pm_123456789",
  "billingCycle": "monthly"
}
```

### GET /billing/usage

Get current billing period usage.

**Response:**
```json
{
  "success": true,
  "data": {
    "usage": {
      "aiRequests": {
        "current": 8500,
        "limit": 50000,
        "percentage": 17
      },
      "apiCalls": {
        "current": 15000,
        "limit": 100000,
        "percentage": 15
      },
      "storage": {
        "current": 2.5, // GB
        "limit": 100,
        "percentage": 2.5
      }
    },
    "period": {
      "start": "2025-10-01T00:00:00Z",
      "end": "2025-11-01T00:00:00Z"
    }
  }
}
```

## Rate Limits

All API endpoints are subject to rate limiting:

- **Authentication endpoints**: 10 requests per minute
- **AI endpoints**: 100 requests per hour (varies by plan)
- **General endpoints**: 1000 requests per hour
- **Upload endpoints**: 10 requests per minute

Rate limit headers are included in responses:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1634567890
```

## Pagination

List endpoints support pagination:

**Query Parameters:**
- `page` (integer): Page number (default: 1)
- `limit` (integer): Items per page (default: 20, max: 100)
- `sort` (string): Sort field
- `order` (string): `asc|desc` (default: desc)

**Response:**
```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8,
    "hasNext": true,
    "hasPrev": false
  }
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `INVALID_REQUEST` | Request validation failed |
| `UNAUTHORIZED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `RATE_LIMITED` | Rate limit exceeded |
| `PAYMENT_REQUIRED` | Subscription upgrade needed |
| `INTERNAL_ERROR` | Server error |

## SDK and Examples

### JavaScript/TypeScript SDK

```typescript
import { F2XSaaSClient } from '@f2xsaas/sdk';

const client = new F2XSaaSClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.f2xsaas.com/v1'
});

// AI Chat
const response = await client.ai.chat({
  messages: [{ role: 'user', content: 'Hello!' }],
  model: 'gpt-4'
});

// Analytics
const dashboard = await client.analytics.getDashboard({
  period: 'month'
});
```

### cURL Examples

```bash
# Login
curl -X POST https://api.f2xsaas.com/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password"}'

# AI Chat
curl -X POST https://api.f2xsaas.com/v1/ai/chat \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"messages": [{"role": "user", "content": "Hello!"}]}'
```

This API documentation provides a comprehensive overview of all available endpoints and their usage patterns.