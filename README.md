# EasyGenerator - Course Management Platform

A production-ready full-stack modern authentication, interactive dashboard, and beautiful UI.

## 🚀 Features

### Authentication & Security

- **JWT-based authentication** with bcrypt password hashing (10 rounds)
- **Advanced password strength** indicator (weak/medium/strong)
- **Comprehensive validation** on client and server side
- **Protected routes** with authentication guards
- **Session persistence** with localStorage
- **Secure token** management

### User Experience

- **Modern split-screen** authentication UI with gradients
- **Interactive dashboard** with course statistics and charts
- **Real-time validation** feedback on all forms
- **Toast notifications** for user actions
- **Responsive design** for all device sizes
- **Smooth animations** and transitions
- **Password visibility** toggle with eye icons
- **Terms & conditions** modal with detailed sections

### Technical Features

- **React 18** with TypeScript for frontend
- **NestJS 10** with TypeScript for backend
- **MongoDB** with Mongoose ODM
- **Recharts** for data visualization
- **Swagger/OpenAPI** documentation
- **Winston logging** with file output
- **Comprehensive security** headers with Helmet
- **CORS protection** configured
- **Full name validation** (3-20 characters)
- **Organized component** architecture

## 📁 Project Structure

```
├── backend/              # NestJS backend application
│   ├── src/
│   │   ├── auth/        # Authentication module (JWT, strategies)
│   │   ├── users/       # Users module (schemas, services)
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env             # Environment configuration
│   └── README.md        # Backend documentation
├── frontend/            # React + Vite frontend application
│   ├── src/.2 with TypeScript 5.3
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React 0.263
- **Charts**: Recharts 2.5
- **HTTP Client**: Axios 1.6
- **Routing**: React Router DOM 6.21 (with v7 future flags)
- **Notifications**: React Hot Toast

### Backend
- **Framework**: NestJS 10.3 with TypeScript 5.3
- **Database**: MongoDB 8.0 with Mongoose ODM
- **Authentication**: JWT + Passport strategies
- **Validation**: class-validator + class-transformer
- **Documentation**: Swagger 7.1
- **Logging**: Winston 3.11
- **Security**: Helmet 7.1, CORS, bcrypt 5.1tions workflows
├── ARCHITECTURE.md      # System architecture documentation
├── QUICKSTART.md        # Quick start guide
└── README.md            # This file
```

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router DOM

### Backend

- **Framework**: NestJS
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Passport
- **Validation**: class-validator
- **Documentation**: Swagger/OpenAPI
- **Logging**: Winston
- **Security**: Helmet, CORS, bcrypt

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
```

4. Start the development server:

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`
API documentation at `http://localhost:3000/api/docs`

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

## 🎯 Application Pages

### Sign Up (`/signup`)

- Split-screen design with blue gnew user (email, name, password)
- `POST /auth/signin` - Sign in user (email, password)

### Protected Endpoints (requires JWT token)

- `GET /users/profile` - Get current user profile
- `GET /users/me` - Get current user details

### API Documentation

Access interactive Swagger docs at: `http://localhost:3000/api/docs`

### Sign In (`/signin`)

- Split-screen design matching signup
- Email and password with show/hide toggle
- **Password hashing**: bcrypt with 10 salt rounds
- **JWT authentication**: Secure token-based auth with 7-day expiration
- **Input validation**: Comprehensive DTO validation on server
- **Client validation**: Real-time validation preventing bad requests
- **CORS protection**: Configured allowed origins
- **Security headers**: Helmet middleware for HTTP security
- **MongoDB protection**: Mongoose query sanitization
- **XSS prevention**: Input sanitization and escaping
- **Protected routes**: Authentication guards on frontend and backend
- **Token storage**: Secure localStorage with automatic injection
- **Password requirements**: Enforced complexity rulesea chart (course enrollments)
- Featured courses grid with icons and details
- Responsive layout for all devices
- Navigation header with dropdown menu

The application will be available at `http://localhost:5173`

## 📚 API Endpoints

### Public Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/signin` - Sign in a user

### Protected Endpoints

- `GET /users/profile` - Get current user profile
- `GET /users/me` - Get current user details
- `POST /auth/logout` - Logout user (clears session)

## 🔒 Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token-based authentication
- HTTP-only cookies for token storage
- CORS protection
- Helmet for security headers
- Input validation and sanitization
- Rate limiting (can be added)
- XSS protection

## 🧪 Testing

### BaValidation Rules

### Sign Up

- **Email**: Valid email format, required
- **Name**:
  - Minimum 3 characters
  - Maximum 20 characters
  - Required field
- **Password**:
  - **Weak**: 8+ characters
  - **Medium**: 10+ characters with 2 special characters
  - **Strong**: 12+ characters with letters, numbers, and special characters
  - Required field
- **Confirm Password**: Must match password field
- **Terms**: Must agree to terms and conditions

### Sign In

- **Email**: Valid email format, r

## 📝 Field Validation Rules

### Sign Up

- **Email**: Must be a valid email format
- **Name**: Minimum 3 characters
- **Password**:
  - Minimum 8 characters
  - At least one letter
  - At least one number
  - At least one special character
    NODE_ENV=development
    MONGODB_URI=mongodb://localhost:27017/auth-app
    JWT_SECRET=your-super-secret-jwt-key-change-in-production
    JWT_EXPIRES_IN=7d
    CORS_ORIGIN=http://localhost:5173

````

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
````

**Important**: Change `JWT_SECRET` to a strong random string in production!T=3000
MO**[Backend README](./backend/README.md)** - Complete backend API documentation

- **[Frontend README](./frontend/README.md)** - Frontend features and setup guide
- **[Component Structure](./frontend/COMPONENT_STRUCTURE.md)** - Component architecture
- **[Architecture](./ARCHITECTURE.md)** - System architecture overview
- **[Quick Start](./QUICKSTART.md)** - Step-by-step setup guide
- **[API Docs](http://localhost:3000/api/docs)** - Interactive Swagger documentation (when running)

## ✨ Key Features Highlights

### Dashboard Features

- Interactive area chart with course enrollment data
- Real-time statistics (students, completion rate, revenue)
- Featured courses grid with icons and details
- Fully responsive design
- Personalized welcome message

### Authentication Features

- 🔐 Advanced password strength calculation

---

## 🙏 Acknowledgments

Built with modern technologies and best practices for a scalable, maintainable application.

**Note**: This is a course management platform featuring authentication, dashboard, and modern UI/UX design

- Clean component architecture
- Organized folder structure
- TypeScript throughout
- Optimized with Vite
- Tailwind CSS styling
- React Router with future flags
- Recharts integration
- Lucide React icons
  NODE_ENV=development

````

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
````

## 📖 Additional Documentation

- Backend API documentation available at `/api/docs` when running
- Code is fully commented and follows best practices
- TypeScript for type safety

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License

## 👤 Author

Created for easyGenerator technical assessment

---
