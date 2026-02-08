# EasyGenerator - Course Management Platform

> A modern full-stack application featuring secure authentication, interactive dashboards, and beautiful UI. Built with React, NestJS, TypeScript, and MongoDB.


---
## ✨ App Screens
<img width="1919" height="1490" alt="Image" src="https://github.com/user-attachments/assets/4ddc3eeb-9d47-4166-bb9d-18f522707b0c" />
<img width="1919" height="1215" alt="Image" src="https://github.com/user-attachments/assets/82179a50-18dc-47eb-b5d6-a358296d27b7" />
<img width="1919" height="2595" alt="Image" src="https://github.com/user-attachments/assets/accd79d3-21bd-4369-95aa-4ed91eeb5039" />

### Password Strength Indicator
<img width="1919" height="1580" alt="Image" src="https://github.com/user-attachments/assets/f03d9050-f5ad-4c03-8738-287bd762d6da" />
<img width="1919" height="1602" alt="Image" src="https://github.com/user-attachments/assets/01d8d9ce-4df1-43ef-a9a6-f034583710ef" />
<img width="1919" height="1580" alt="Image" src="https://github.com/user-attachments/assets/fbb05687-0247-467d-829b-531c9fe8f14e" /> 

## Quick Overview

This platform provides a complete authentication system with an interactive dashboard for course management. Features include JWT authentication, password strength validation, responsive design, data visualization with charts, and comprehensive security measures.

**Key Highlights:**

- Secure JWT authentication with bcrypt
- Interactive dashboard with Recharts
- Modern split-screen UI with Tailwind CSS
- MongoDB database with Mongoose ODM
- Swagger/OpenAPI documentation
- Docker support for easy deployment
- TypeScript throughout for type safety

## Features

### Authentication & Security

- JWT authentication with bcrypt password hashing
- Password strength indicator (weak/medium/strong)
- Client and server validation
- Protected routes with guards
- Session persistence (localStorage/sessionStorage)
- Remember Me functionality

### User Interface

- Split-screen authentication UI
- Interactive dashboard with charts (Recharts)
- Real-time form validation
- Toast notifications
- Responsive design (mobile/tablet/desktop)
- Smooth animations

### Technical

- TypeScript throughout
- MongoDB with Mongoose ODM
- Swagger/OpenAPI documentation
- Winston logging
- Helmet security headers
- CORS protection

## Tech Stack

### Frontend

- React 18.2 + TypeScript 5.3
- Vite 5.0 (build tool)
- Tailwind CSS 3.4 (styling)
- React Router DOM 6.21
- Axios 1.6 (HTTP client)
- Recharts 2.5 (charts)
- Lucide React 0.263 (icons)

### Backend

- NestJS 10.3 + TypeScript 5.3
- MongoDB 8.0 + Mongoose 8.0
- Passport JWT 4.0 (authentication)
- bcrypt 5.1 (password hashing)
- Winston 3.11 (logging)
- Swagger 7.1 (API docs)
- Helmet 7.1 (security)

## Quick Start

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Clone repository
git clone https://github.com/HebaAli48/AuthentactionTaskEasygenerator.git
cd easyGenrator

# Backend setup
cd backend
npm install
# Create .env file (see below)
npm run start:dev

# Frontend setup (new terminal)
cd frontend
npm install
# Create .env file (see below)
npm run dev
```

### Environment Configuration

**Backend `.env`:**

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-secret-key-change-this
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

**Frontend `.env`:**

```env
VITE_API_URL=http://localhost:3000
```

### Access

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **API Docs**: http://localhost:3000/api/docs

## 📁 Project Structure

```
easyGenrator/
├── backend/                      # NestJS backend
│   ├── src/
│   │   ├── auth/                # Authentication module
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── dto/             # Data transfer objects
│   │   │   │   ├── signin.dto.ts
│   │   │   │   └── signup.dto.ts
│   │   │   ├── guards/          # Route guards
│   │   │   │   └── jwt-auth.guard.ts
│   │   │   └── strategies/      # Passport strategies
│   │   │       └── jwt.strategy.ts
│   │   ├── users/               # User management module
│   │   │   ├── users.controller.ts
│   │   │   ├── users.service.ts
│   │   │   ├── users.module.ts
│   │   │   └── schemas/         # MongoDB schemas
│   │   │       └── user.schema.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── logs/                    # Winston log files
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   └── .env
│
├── frontend/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── layouts/         # Layout components
│   │   │   │   ├── AppLayout.tsx     # Main layout wrapper
│   │   │   │   ├── Header.tsx        # Navigation header
│   │   │   │   ├── Footer.tsx        # Footer with social links
│   │   │   │   └── index.ts          # Barrel exports
│   │   │   ├── ui/              # Reusable UI components
│   │   │   │   ├── Button.tsx        # Multi-variant button
│   │   │   │   ├── Input.tsx         # Styled input field
│   │   │   │   ├── Modal.tsx         # Modal dialog
│   │   │   │   ├── PasswordInput.tsx # Password with toggle
│   │   │   │   ├── PasswordStrengthIndicator.tsx
│   │   │   │   └── index.ts          # Barrel exports
│   │   │   ├── signup/          # Signup components
│   │   │   │   ├── SignUpForm.tsx    # Form UI
│   │   │   │   ├── SignUpHero.tsx    # Hero section
│   │   │   │   ├── TermsModal.tsx    # Terms & conditions
│   │   │   │   └── index.ts          # Barrel exports
│   │   │   ├── signin/          # Signin components
│   │   │   │   ├── SignInForm.tsx    # Login form UI
│   │   │   │   ├── SignInHero.tsx    # Welcome section
│   │   │   │   └── index.ts          # Barrel exports
│   │   │   ├── dashboard/       # Dashboard components
│   │   │   ├── ProtectedRoute.tsx    # Auth route wrapper
│   │   │   └── RootRedirect.tsx      # Root path handler
│   │   ├── pages/               # Page containers
│   │   │   ├── SignUpPage.tsx        # Signup page with logic
│   │   │   ├── SignInPage.tsx        # Signin page with auth
│   │   │   └── DashboardPage.tsx     # Dashboard with stats
│   │   ├── contexts/            # React contexts
│   │   │   └── AuthContext.tsx       # Authentication state
│   │   ├── services/            # API services
│   │   │   └── api.ts                # Axios HTTP client
│   │   ├── types/               # TypeScript types
│   │   │   └── index.ts              # Type definitions
│   │   ├── utils/               # Utility functions
│   │   │   └── validation.ts         # Form validators
│   │   ├── App.tsx              # Root component
│   │   ├── main.tsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── public/                  # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── .env
│
├── docker-compose.yml           # Docker orchestration
├── README.md                    # This file
├── ARCHITECTURE.md              # Architecture documentation
├── QUICKSTART.md                # Quick start guide
└── DOCKER.md                    # Docker setup guide
```

## API Endpoints

### Public

- `POST /auth/signup` - Register user (email, name, password)
- `POST /auth/signin` - Login (email, password)

### Protected (requires JWT)

- `GET /users/profile` - Get current user profile

## Validation Rules

### Sign Up

- **Email**: Valid email format, required
- **Name**: 3-20 characters, required
- **Password**:
  - Weak: 8+ characters
  - Medium: 10+ with 2 special characters
  - Strong: 12+ with letters, numbers, special characters
- **Confirm Password**: Must match password
- **Terms**: Must agree to terms

### Sign In

- **Email**: Valid email, required
- **Password**: Required

## Application Pages

### Sign Up (`/signup`)

- Split-screen design with gradient
- Real-time password strength indicator
- Popup info for password requirements
- Terms & conditions modal (10 sections)
- Auto-redirect to sign in after successful signup

### Sign In (`/signin`)

- Split-screen design
- Remember Me checkbox (localStorage vs sessionStorage)
- Password visibility toggle
- Forgot password link

### Dashboard (`/dashboard`)

- Welcome message with user name
- Statistics cards (students, completion rate, revenue)
- Enrollment area chart
- Featured courses grid (6 courses)
- Responsive navigation (hamburger menu on mobile)
- Avatar dropdown (profile, settings, logout)

## Security Features

- **Passwords**: bcrypt hashing (10 rounds)
- **JWT**: HS256, 7-day expiration
- **Storage**: localStorage (persistent) or sessionStorage (temporary)
- **CORS**: Origin whitelist
- **Headers**: Helmet middleware
- **Validation**: class-validator (server) + custom (client)
- **XSS**: Input sanitization
- **MongoDB**: Mongoose query sanitization

## Testing

**Backend:**

```bash
cd backend
npm run test          # Unit tests
npm run test:e2e      # E2E tests
npm run test:cov      # Coverage
```

## Documentation

Comprehensive documentation is available:

### 📘 [QUICKSTART.md](./QUICKSTART.md)

Step-by-step guide to get the application running locally in minutes. Covers:

- Prerequisites and installation
- Environment configuration
- Starting MongoDB, backend, and frontend
- Common troubleshooting issues

### 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md)

Detailed system architecture and technical design. Includes:

- System architecture diagrams
- Complete data flow diagrams (Sign Up, Sign In, Dashboard, Protected Routes)
- Component architecture for both frontend and backend
- Database schema and API endpoints
- Security implementation details
- Error handling and logging strategies
- Deployment architecture

### 🐳 [DOCKER.md](./DOCKER.md)

Docker setup for containerized development. Covers:

- Docker Compose configuration
- Running services in containers
- Volume management and hot reload
- Docker commands and troubleshooting

### 📝 [CHANGELOG.md](./CHANGELOG.md)

Complete version history and release notes. Documents:

- Features added in each version
- Breaking changes and migrations
- Bug fixes and improvements
- Current version: 1.0.0 (Initial release)

### 📚 Module Documentation

- **[backend/README.md](./backend/README.md)** - Backend API documentation, endpoints, validation rules, and development guide
- **[frontend/README.md](./frontend/README.md)** - Frontend component structure, features, styling guide, and development workflow

### 🔗 Live Documentation

- **[API Docs](http://localhost:3000/api/docs)** - Interactive Swagger/OpenAPI documentation (available when backend is running)

## Docker Support

```bash
# Start all services
docker-compose up

# Stop services
docker-compose down
```

## License

MIT License

## Author

Created for easyGenerator technical assessment

---

**Note**: Change `JWT_SECRET` to a strong random string in production!
