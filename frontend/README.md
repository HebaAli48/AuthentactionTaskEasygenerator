# EasyGenerator Frontend

Modern React application built with Vite, TypeScript, and Tailwind CSS for the course management platform.

## ✨ Features

- ✅ Modern split-screen authentication UI with gradient design
- ✅ User registration with advanced password strength indicator
- ✅ Real-time form validation with visual feedback
- ✅ Interactive dashboard with course statistics and charts
- ✅ Password visibility toggle and confirmation field
- ✅ Terms & conditions modal with detailed sections
- ✅ Protected routes with JWT authentication
- ✅ Responsive navigation with mobile hamburger menu
- ✅ User avatar dropdown menu (desktop) and mobile menu
- ✅ Beautiful UI with Tailwind CSS and smooth animations
- ✅ Recharts integration for data visualization
- ✅ React Hot Toast for notifications
- ✅ Lucide React icons throughout
- ✅ TypeScript for complete type safety
- ✅ Organized component architecture

## 🛠️ Tech Stack

- **React 18.2** - UI library
- **TypeScript 5.3** - Type safety
- **Vite 5.0** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Router DOM 6.21** - Client-side routing with v7 future flags
- **Axios 1.6** - HTTP client for API requests
- **Recharts 2.5** - Data visualization library
- **React Hot Toast** - Toast notifications
- **Lucide React 0.263** - Beautiful icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running (see backend README)

## 🚀 Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

### Development

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── layouts/              # Layout components
│   │   │   ├── AppLayout.tsx     # Main layout wrapper
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   ├── Footer.tsx        # Footer with social links
│   │   │   └── index.ts          # Barrel exports
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button.tsx        # Multi-variant button
│   │   │   ├── Input.tsx         # Styled input field
│   │   │   ├── Modal.tsx         # Modal dialog
│   │   │   ├── PasswordInput.tsx # Password with toggle
│   │   │   ├── PasswordStrengthIndicator.tsx
│   │   │   └── index.ts          # Barrel exports
│   │   ├── signup/               # Signup components
│   │   │   ├── SignUpForm.tsx    # Form UI
│   │   │   ├── SignUpHero.tsx    # Hero section
│   │   │   ├── TermsModal.tsx    # Terms & conditions
│   │   │   └── index.ts          # Barrel exports
│   │   ├── signin/               # Signin components
│   │   │   ├── SignInForm.tsx    # Login form UI
│   │   │   ├── SignInHero.tsx    # Welcome section
│   │   │   └── index.ts          # Barrel exports
│   │   ├── dashboard/            # Dashboard components
│   │   ├── ProtectedRoute.tsx    # Auth route wrapper
│   │   └── RootRedirect.tsx      # Root path handler
│   ├── pages/                    # Page containers
│   │   ├── SignUpPage.tsx        # Signup page with logic
│   │   ├── SignInPage.tsx        # Signin page with auth
│   │   └── DashboardPage.tsx     # Dashboard with stats
│   ├── contexts/                 # React contexts
│   │   └── AuthContext.tsx       # Authentication state
│   ├── services/                 # API services
│   │   └── api.ts                # Axios HTTP client
│   ├── types/                    # TypeScript types
│   │   └── index.ts              # Type definitions
│   ├── utils/                    # Utility functions
│   │   └── validation.ts         # Form validators
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # Global styles
│   └── vite-env.d.ts             # Vite types
├── public/                       # Static assets
├── package.json                  # Dependencies
├── vite.config.ts                # Vite configuration
├── tailwind.config.js            # Tailwind CSS config
├── postcss.config.js             # PostCSS config
├── tsconfig.json                 # TypeScript config
├── tsconfig.node.json            # TypeScript Node config
├── index.html                    # Entry HTML
├── nginx.conf                    # Nginx configuration
├── Dockerfile                    # Production Docker
├── Dockerfile.dev                # Development Docker
├── COMPONENT_STRUCTURE.md        # Component docs
└── README.md                     # This file
```

## 🎯 API Integration

The frontend communicates with the backend API using Axios.

### API Service (`src/services/api.ts`)

**TypeScript** for complete type safety

- ✅ **Component-based architecture** with clear separation of concerns
- ✅ **Custom hooks** (useAuth for authentication state)
- ✅ **Context API** for global state management
- ✅ **Protected routes** with authentication guards
- ✅ **Client-side routing** with React Router v6 + v7 future flags
- ✅ **Comprehensive form validation** with real-time feedback
- ✅ **Error boundaries** for graceful error handling
- ✅ **Loading states** for better UX
- ✅ **Responsive design** with mobile-first approach
- ✅ **Accessibility** considerations (ARIA labels, keyboard navigation)
- ✅ **Clean code structure** with barrel exports
- ✅ **Reusable components** in organized folders
- ✅ **Toast notifications** for user feedback
- ✅ **Optimized bundle** with Vite build tool
- ✅ **Git-friendly** component organizationlly added to request headers:

```
Authorization: Bearer <token>
```

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎨 Color Palette

Primary colors (blue theme):

- `primary-50` to `primary-900`
- Main brand color: `primary-600` (#0284c7)

## 🔧 Environment Variables

| Variable     | Description     | Default               |
| ------------ | --------------- | --------------------- |
| VITE_API_URL | Backend API URL | http://localhost:3000 |

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking

## 🐛 Troubleshooting

### API Connection Issues

- Ensure backend is running on the correct port
- Check VITE_API_URL in `.env` file
- Check browser console for CORS errors

### Build Errors

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### Type Errors

- Run type check: `npm run type-check`
- Ensure all TypeScript files have proper type annotations

## 🌟 Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Custom hooks (useAuth)
- ✅ Context API for state management
- ✅ Client-side routing
- ✅ Form validation
- ✅ Error boundaries
- ✅ Loading states
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ Clean code structure
- ✅ Reusable components
