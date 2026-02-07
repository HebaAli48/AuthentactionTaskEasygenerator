# Quick Start Guide

Get the Course Management Platform running in minutes.

## Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Git

## Installation

### 1. Clone & Install

```bash
git clone https://github.com/HebaAli48/AuthentactionTaskEasygenerator.git
cd easyGenrator

# Backend
cd backend
npm install

# Frontend (new terminal)
cd frontend
npm install
```

### 2. Configure Environment

**Backend `.env`:**

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/auth-app
JWT_SECRET=your-secret-key-change-this
CORS_ORIGIN=http://localhost:5173
```

**Frontend `.env`:**

```env
VITE_API_URL=http://localhost:3000
```

### 3. Start Services

**Start MongoDB:**

- Windows: `net start MongoDB`
- macOS: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongod`

**Start Backend:**

```bash
cd backend
npm run start:dev
```

**Start Frontend:**

```bash
cd frontend
npm run dev
```

## Usage

- **App**: http://localhost:5173
- **API Docs**: http://localhost:3000/api/docs

### Quick Test

1. Sign up at `/signup` with any email, name (3-20 chars), and password (8+ chars)
2. Sign in with "Remember me" to stay logged in
3. Explore the dashboard

## Troubleshooting

**MongoDB connection failed?**

- Check MongoDB is running
- Verify `MONGODB_URI` in `.env`

**Port already in use?**

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**CORS errors?**

- Ensure backend is running
- Check `CORS_ORIGIN` matches frontend URL

## Next Steps

- **Documentation**: See [README.md](./README.md) for features
- **Architecture**: Check [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Testing**: Run `npm run test` in backend
- **Build**: Run `npm run build` for production

---
