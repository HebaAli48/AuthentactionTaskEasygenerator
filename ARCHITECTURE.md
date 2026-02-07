# System Architecture

Course management platform with authentication, dashboard, and data visualization.

## System Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                       Client Layer (Browser)                     │
├──────────────────────────────────────────────────────────────────┤
│  React 18 + TypeScript + Vite + Tailwind CSS + React Router      │
│                                                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐              │
│  │  Sign Up    │  │  Sign In    │  │  Dashboard   │              │
│  │  Page       │  │  Page       │  │  Page        │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬───────┘              │
│         │                │                │                      │
│  ┌──────▼────────────────▼─────────────────▼───────┐             │
│  │         Component Layer                         │             │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐       │             │
│  │  │ Layouts  │  │    UI    │  │ Features │       │             │
│  │  │ Header   │  │ Button   │  │ SignUp   │       │             │
│  │  │ Footer   │  │ Input    │  │ SignIn   │       │             │
│  │  │ AppLayout│  │ Modal    │  │ Charts   │       │             │
│  │  └──────────┘  └──────────┘  └──────────┘       │             │
│  └─────────────────────────────────────────────────┘             │
│                         │                                        │
│                  ┌──────▼───────┐                                │
│                  │ Auth Context │                                │
│                  │ (User State) │                                │
│                  └──────┬───────┘                                │
│                         │                                        │
│                  ┌──────▼───────┐                                │
│                  │ API Service  │                                │
│                  │ (Axios + JWT)│                                │
│                  └──────┬───────┘                                │
└─────────────────────────┼────────────────────────────────────────┘
                          │ HTTPS/REST
                          │ JSON + JWT Bearer Token
┌─────────────────────────▼────────────────────────────────────────┐
│                    API Gateway Layer                             │
├──────────────────────────────────────────────────────────────────┤
│  CORS │ Helmet │ Validation │ Logging │ Error Handler │ Guards   │
└─────────────────────────┬────────────────────────────────────────┘
                          │
┌─────────────────────────▼────────────────────────────────────────┐
│                   Application Layer                              │
├──────────────────────────────────────────────────────────────────┤
│                  NestJS 10 + TypeScript                          │
│                                                                  │
│  ┌──────────────────┐         ┌──────────────────┐               │
│  │   Auth Module    │         │   Users Module   │               │
│  ├──────────────────┤         ├──────────────────┤               │
│  │ • Controller     │         │ • Controller     │               │
│  │ • Service        │         │ • Service        │               │
│  │ • DTOs           │         │ • User Schema    │               │
│  │ • JWT Guard      │         │ • Validators     │               │
│  │ • JWT Strategy   │         └──────────────────┘               │
│  └──────┬───────────┘                                            │
│         │                                                        │
│         └──────────────┬─────────────────────────────────────────┤
│                        │                                         │
│                 ┌──────▼───────┐                                 │
│                 │ Passport JWT │                                 │
│                 │  Strategy    │                                 │
│                 └──────┬───────┘                                 │
└────────────────────────┼─────────────────────────────────────────┘
                         │
┌────────────────────────▼─────────────────────────────────────────┐
│                     Data Layer                                   │
├──────────────────────────────────────────────────────────────────┤
│                       MongoDB                                    │
└──────────────────────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend

```
React 18.2.0
├── TypeScript 5.3.3
├── Vite 5.0.11
├── React Router DOM 6.21.1
├── Axios 1.6.5
├── Tailwind CSS 3.4.1
├── Recharts 2.5.0
├── React Hot Toast
└── Lucide React 0.263.0
```

### Backend

```
NestJS 10.3.0
├── TypeScript 5.3.3
├── Mongoose 8.0.3
├── Passport JWT 4.0.1
├── bcrypt 5.1.1
├── Winston 3.11.0
├── Swagger 7.1.17
├── Helmet 7.1.0
└── class-validator 0.14.0
```

## Data Flow Diagrams

### Sign Up Flow

```
1. User fills registration form (email, name, password, confirm)
   ↓
2. Client validates:
   - Email format (RFC 5322)
   - Name length (3-20 characters)
   - Password strength (weak: 8+, medium: 10+ with 2 special, strong: 12+ complex)
   - Passwords match
   - Terms accepted
   ↓
3. POST /auth/signup with validated data + toast loading
   ↓
4. Server validates with class-validator DTOs
   ↓
5. Check if email already exists in MongoDB
   ↓
6. Hash password with bcrypt.hash(password, 10)
   ↓
7. Create and save new user document
   ↓
8. Generate JWT token (HS256, expires 7 days)
   ↓
9. Return { user, access_token }
   ↓
10. Success toast notification
    ↓
11. Auto-redirect to /signin after 1.5 seconds
```

### Sign In Flow

```
1. User enters email + password
   ↓
2. Client validates (required fields, format)
   ↓
3. POST /auth/signin with credentials
   ↓
4. Find user by email in MongoDB (indexed query)
   ↓
5. Compare password: bcrypt.compare(plain, hashed)
   ↓
6. If invalid → 401 error
   ↓
7. If valid → generate JWT token
   ↓
8. Return { user, access_token }
   ↓
9. Store token in localStorage/sessionStorage (based on "Remember me")
   Store user in AuthContext
   ↓
10. Success toast: "Welcome back!"
    ↓
11. Redirect to /dashboard
```

### Dashboard Data Flow

```
1. User lands on /dashboard
   ↓
2. ProtectedRoute checks localStorage/sessionStorage for token
   ↓
3. If no token → redirect to /signin
   ↓
4. If token exists → render Dashboard
   ↓
5. Dashboard displays:
   - User first name (extracted and uppercased)
   - Statistics cards (hardcoded for now)
   - Enrollment chart (Recharts AreaChart)
   - Featured courses grid (6 courses with icons)
   ↓
6. User can navigate via:
   - Desktop: Top navbar
   - Mobile: Hamburger menu
   - Avatar dropdown for profile/logout
```

### Protected Endpoint Access

```
1. Client needs protected resource (e.g., GET /users/profile)
   ↓
2. Axios interceptor adds: Authorization: Bearer <token>
   ↓
3. Request hits NestJS backend
   ↓
4. @UseGuards(JwtAuthGuard) intercepts
   ↓
5. JwtAuthGuard extracts token from header
   ↓
6. JwtStrategy.validate() checks:
   - Token signature valid?
   - Token not expired?
   - User still exists?
   ↓
7. If invalid → 401 Unauthorized
   ↓
8. If valid → attach user to request.user
   ↓
9. Controller receives request with user attached
   ↓
10. Return protected data
    ↓
11. Client receives response
```

## Component Architecture

### Backend Modules

**Auth Module**

- AuthController: HTTP endpoints (signup, signin)
- AuthService: Business logic
- DTOs: SignUpDto, SignInDto with class-validator
- JwtStrategy: Token validation
- JwtAuthGuard: Route protection

**Users Module**

- UsersController: Protected endpoints
- UsersService: User operations
- UserSchema: MongoDB schema with Mongoose

### Frontend Structure

**Pages** (`src/pages/`)

- SignUpPage: Registration container with form state, validation, terms modal
- SignInPage: Login container with remember me functionality
- DashboardPage: Main dashboard with stats, charts, course grid

**Layouts** (`src/components/layouts/`)

- AppLayout: Main wrapper (Header + Content + Footer)
- Header: Responsive nav with hamburger menu (mobile) and avatar dropdown
- Footer: Brand info, social links, quick links

**UI Components** (`src/components/ui/`)

- Button: Multi-variant (primary, secondary, danger, ghost) with loading state
- Input: Text field with label and error display
- Modal: Reusable dialog with backdrop
- PasswordInput: Password field with show/hide toggle
- PasswordStrengthIndicator: 3-bar meter (red/yellow/green)

**Feature Components**

- `signup/`: SignUpForm, SignUpHero, TermsModal
- `signin/`: SignInForm, SignInHero

**Contexts** (`src/contexts/`)

- AuthContext: Global auth state with signUp, signIn, logout, localStorage/sessionStorage management

**Services** (`src/services/`)

- api.ts: Axios instance with interceptors (adds JWT token, handles errors)

## Database Schema

### Users Collection

```typescript
interface User {
  _id: ObjectId; // MongoDB auto-generated
  email: string; // Unique, indexed, lowercase
  name: string; // 3-20 characters
  password: string; // Bcrypt hashed (select: false)
  createdAt: Date; // Auto-generated
  updatedAt: Date; // Auto-updated
}
```

**Indexes**: email (unique), createdAt, \_id (default)

## API Endpoints

### POST `/auth/signup`

**Request:**

```json
{
  "email": "user@example.com",
  "name": "User Name",
  "password": "SecurePass@123"
}
```

**Response (201):**

```json
{
  "user": {
    "id": "...",
    "email": "user@example.com",
    "name": "User Name"
  },
  "access_token": "eyJhbGc..."
}
```

### POST `/auth/signin`

**Request:**

```json
{
  "email": "user@example.com",
  "password": "SecurePass@123"
}
```

**Response (200):** Same as signup

### GET `/users/profile`

**Headers:** `Authorization: Bearer <token>`

**Response (200):**

```json
{
  "id": "...",
  "email": "user@example.com",
  "name": "User Name"
}
```

### Error Responses

**400 Bad Request:**

```json
{
  "statusCode": 400,
  "message": ["email must be an email", "password is too weak"],
  "error": "Bad Request"
}
```

**401 Unauthorized:**

```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

**409 Conflict:**

```json
{
  "statusCode": 409,
  "message": "User already exists"
}
```

## Security

### Password Security

```
Plain Password → bcrypt.hash(password, 10) → Hashed Password (Stored in DB)
```

### JWT Token Structure

```json
{
  "header": { "alg": "HS256", "typ": "JWT" },
  "payload": {
    "id": "user_id",
    "email": "user@example.com",
    "iat": 1234567890,
    "exp": 1234567890
  },
  "signature": "HMACSHA256(...)"
}
```

### Security Layers

1. **Transport**: HTTPS (production)
2. **Headers**: Helmet middleware
3. **CORS**: Configured origin whitelist
4. **Input**: class-validator + client validation
5. **Auth**: JWT tokens
6. **Passwords**: bcrypt hashing
7. **Database**: Mongoose sanitization

## Error Handling

### Frontend

- **Client Validation**: Real-time form validation
- **API Errors**: Toast notifications with specific messages
- **Network Errors**: Axios interceptor catches connection issues

### Backend

- **400**: Validation errors (class-validator)
- **401**: Invalid credentials or expired tokens
- **409**: Duplicate email
- **500**: Unhandled exceptions (logged by Winston)

## Logging (Winston)

**Levels**: error (0), warn (1), info (2), http (3), debug (4)

**Transports**:

- **Console**: Development, colorized, debug level
- **Error File**: `logs/error.log`, errors only, JSON, 5MB max, 5 files
- **Combined File**: `logs/combined.log`, info+, JSON, 5MB max, 5 files

**Logged Events**: API requests, auth attempts, DB ops, errors with stack traces, startup/shutdown

## Deployment

### Development Environment

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Frontend    │ ──▶ │   Backend    │ ──▶ │   MongoDB    │
│ localhost:   │     │ localhost:   │     │ localhost:   │
│   5173       │     │   3000       │     │   27017      │
└──────────────┘     └──────────────┘     └──────────────┘
     Vite                 NestJS               Local DB
```

### Environment Configuration

**Backend (.env):**

```env
NODE_ENV=production
PORT=3000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=<strong-random-secret>
JWT_EXPIRES_IN=7d
CORS_ORIGIN=https://your-frontend-domain.com
```

**Frontend (.env.production):**

```env
VITE_API_URL=https://your-backend-api.com
```

### Deployment Flow

```
Push to GitHub
    ↓
Trigger GitHub Actions
    ↓
┌────────────────┐
│ Run Checks:    │
│ • Lint         │
│ • Test         │
│ • Type Check   │
│ • Build        │
│ • Audit        │
└────────┬───────┘
         │
    [All Pass?]
         │
    ┌────┴────┐
    NO       YES
    │         │
[Fail]    [Deploy]
         ├────┬────┤
      Backend  Frontend
         │         │
      [Cloud]  [Cloud]
         │         │
    [Success!] [Success!]
```

### Deployment Checklist

- ✅ Environment variables configured
- ✅ Database connection tested
- ✅ CORS origins updated
- ✅ JWT secret is strong and unique
- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ Logs not exposing sensitive data

## Testing

**Backend:**

```bash
npm run test          # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:cov      # Coverage report
```

**Test Types**: Unit (services, controllers), Integration (DB ops), E2E (complete flows)

---
