# EasyGenerator Backend

NestJS backend application for the course management platform with MongoDB.

## ✨ Features

- ✅ User registration and authentication with JWT
- ✅ Advanced password validation (weak/medium/strong indicators)
- ✅ Protected API endpoints with JWT guards
- ✅ MongoDB database with Mongoose ODM
- ✅ Secure password hashing with bcrypt (10 rounds)
- ✅ Comprehensive Swagger API documentation
- ✅ Winston logging with file and console output
- ✅ Security headers with Helmet
- ✅ CORS enabled for frontend integration
- ✅ Input validation with class-validator
- ✅ TypeScript for complete type safety
- ✅ Full name validation (20 character limit)

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

## Running the Application

### Development mode

```bash
npm run start:dev
```

### Production mode

```bash
npm run build
npm run start:prod
```

### Debug mode

```bash
npm run start:debug
```

## API Documentation

Once the server is running, access the Swagger documentation at:

```
http://localhost:3000/api/docs
```

## API Endpoints

### Public Endpoints

#### Sign Up

```http
POST /auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "Heba Mohammed",
  "password": "SecurePass@123"
}
```

**Validation Rules:**

- **Email**: Must be valid email format, required
- **Name**:
  - Minimum 3 characters
  - Maximum 20 characters
  - Required field
- **Password**:
  - **Weak**: Minimum 8 characters
  - **Medium**: 10+ characters with 2 special characters
  - **Strong**: 12+ characters with letters, numbers, and special characters
  - Required field

**Response:**

```json
{Heba Mohammed",
    "_id": "65f1a2b3c4d5e6f7g8h9i0j1",
    "createdAt": "2026-02-07T12:00:00.000Z",
    "updatedAt": "2026-02-07T12:00:00.000Z",
    "_id": "...",
    "createdAt": "...",
    "updatedAt": "..."
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Sign In

```http
POST /auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "Password123!"
}
```

**Response:**

```json
{
  "user": {
    "email": "user@example.com",
    "name": "Heba Mohammed",
    "_id": "65f1a2b3c4d5e6f7g8h9i0j1"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Protected Endpoints

#### Get User Profile

```http
GET /users/profile
Authorization: Bearer <access_token>
```

**Response:**

```json
{
  "_id": "65f1a2b3c4d5e6f7g8h9i0j1",
  "email": "user@example.com",
  "name": "Heba Mohammed",
  "createdAt": "2026-02-07T12:00:00.000Z",
  "updatedAt": "2026-02-07T12:00:00.000Z"
}
```

#### Get Current User

```http
GET /users/me
Authorization: Bearer <access_token>
```

## Testing

### Run unit tests

```bash
npm run test
```

### Run e2e tests

```bash
npm run test:e2e
```

### Run tests with coverage

```bash
npm run test:cov
```

## Linting and Formatting

### Lint code

```bash
npm run lint
```

### Format code

```bash
npm run format
```

## Project Structure

```
src/
├── auth/
│   ├── dto/              # Data Transfer Objects
│   ├── guards/           # Authentication guards
│   ├── strategies/       # Passport strategies
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── users/
│   ├── schemas/          # Mongoose schemas
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.module.ts         # Main application module
└── main.ts              # Application entry point
```

## Security Features

- **Password Hashing**: bcrypt with 10 salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: class-validator for DTO validation
- **CORS Protection**: Configurable CORS settings
- **Security Headers**: Helmet middleware for HTTP headers
- **MongoDB Injection Protection**: Mongoose sanitization

## Logging

The application uses Winston for logging:

- Console logging with timestamps and colors
- Error logs: `logs/error.log`
- Combined logs: `logs/combined.log`

## Environment Variables

| Variable       | Description               | Default                            |
| -------------- | ------------------------- | ---------------------------------- |
| PORT           | Server port               | 3000                               |
| NODE_ENV       | Environment               | development                        |
| MONGODB_URI    | MongoDB connection string | mongodb://localhost:27017/auth-app |
| JWT_SECRET     | Secret key for JWT        | -                                  |
| JWT_EXPIRES_IN | JWT expiration time       | 7d                                 |
| CORS_ORIGIN    | Allowed CORS origin       | http://localhost:5173              |

## Troubleshooting

### MongoDB Connection Issues

- Ensure MongoDB is running: `mongod` or start MongoDB service
- Check the MONGODB_URI in your `.env` file
- For MongoDB Atlas, ensure your IP is whitelisted

### Port Already in Use

- Change the PORT in `.env` file
- Kill the process using port 3000: `npx kill-port 3000`

## License

MIT
