# Development with Docker (Optional)

Docker setup for easy local development.

## Prerequisites

- Docker Desktop installed
- Docker Compose installed

## Quick Start

1. **Clone the repository**:

```bash
git clone https://github.com/HebaAli48/AuthentactionTaskEasygenerator.git
cd easyGenrator
```

2. **Start all services**:

```bash
docker-compose up
```

This will start:

- MongoDB on `localhost:27017`
- Backend on `localhost:3000`
- Frontend on `localhost:5173`

## Docker Compose Configuration

### Services

- **mongodb**: MongoDB 7 database
- **backend**: NestJS API server
- **frontend**: React development server

### Volumes

- MongoDB data persisted in `mongodb_data` volume
- Source code mounted for hot reload

## Commands

### Start services

```bash
docker-compose up
```

### Start in background

```bash
docker-compose up -d
```

### Stop services

```bash
docker-compose down
```

### View logs

```bash
docker-compose logs -f
```

### Rebuild containers

```bash
docker-compose up --build
```

### Remove volumes

```bash
docker-compose down -v
```

## Environment Variables

Create `.env` files before starting:

Backend (`.env`):

```env
MONGODB_URI=mongodb://mongodb:27017/auth-app
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

Frontend (`.env`):

```env
VITE_API_URL=http://localhost:3000
```

## Troubleshooting

### Port conflicts

If ports are already in use, modify `docker-compose.yml`:

```yaml
ports:
  - "3001:3000" # Change 3001 to any available port
```

### MongoDB connection issues

Ensure MongoDB container is healthy:

```bash
docker-compose ps
```

## Production Docker Image

### Backend

```dockerfile
# Build
docker build -t auth-backend ./backend

# Run
docker run -p 3000:3000 auth-backend
```

### Frontend

```dockerfile
# Build
docker build -t auth-frontend ./frontend

# Run
docker run -p 80:80 auth-frontend
```
