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


## ✨ App Screens
<img width="1919" height="1490" alt="Image" src="https://github.com/user-attachments/assets/4ddc3eeb-9d47-4166-bb9d-18f522707b0c" />
<img width="1919" height="1215" alt="Image" src="https://github.com/user-attachments/assets/82179a50-18dc-47eb-b5d6-a358296d27b7" />
<img width="1919" height="2595" alt="Image" src="https://github.com/user-attachments/assets/accd79d3-21bd-4369-95aa-4ed91eeb5039" />

### Password Strength Indicator
<img width="1919" height="1580" alt="Image" src="https://github.com/user-attachments/assets/f03d9050-f5ad-4c03-8738-287bd762d6da" />
<img width="1919" height="1602" alt="Image" src="https://github.com/user-attachments/assets/01d8d9ce-4df1-43ef-a9a6-f034583710ef" />
<img width="1919" height="1580" alt="Image" src="https://github.com/user-attachments/assets/fbb05687-0247-467d-829b-531c9fe8f14e" />


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

````
│   ├── layouts/              # Layout components
│   │   ├── AppLayout.tsx     # Main layout wrapper
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Footer with social links
│   │   └── index.ts          # Barrel exports
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx        # Multi-variant button
│   │   ├── Input.tsx         # Styled input field
│   │   ├── Modal.tsx         # Modal dialog
│   │   ├── PasswordInput.tsx # Password with toggle
│   │   ├── PasswordStrengthIndicator.tsx
│   │   └── index.ts          # Barrel exports
│   ├── signup/               # Signup components
│   │   ├── SignUpForm.tsx    # Form UI
│   │   ├── SignUpHero.tsx    # Hero section
│   │   ├── TermsModal.tsx    # Terms & conditions
│   │   └── index.ts          # Barrel exports
│   ├── signin/               # Signin components
│   │   ├── SignInForm.tsx    # Login form UI
│   │   ├── SignInHero.tsx    # Welcome section
│   │   └── index.ts          # Barrel exports
│   └── ProtectedRoute.tsx    # Auth route wrapper
├── pages/
│ **Split-screen design**: Blue gradient hero section + white form area
- **Email validation**: Real-time email format checking
- **Name validation**: 3-20 characters, required
- **Password strength indicator**:
  - **Weak** (Red): 8+ characters
  - **Medium** (Yellow): 10+ characters with 2 special chars
  - **Strong** (Green): 12+ characters with complex mix
- **Password requirements info**: Info icon tooltip showing all requirements
- **Show/hide password**: Eye icon toggle for visibility
- **Confirm password**: Matching validation
- **Terms & conditions**: Clickable link opens detailed modal
- **Real-time validation feedback**: Instant error display
- **Loading states**: Visual feedback during submission
- **Success notification**: Toast message on successful registration

### Sign In Page
- **Split-screen design**: Consistent with signup
- **Email and password fields**: Clean, accessible form
- **Remember me checkbox**: Optional persistence
- **Form validation**: Client-side before submission
- **Show/hide password toggle**: Eye icon for visibility
- **Error handling**: Clear error messages
- **Loading state**: Button shows loading during auth

### Dashboard Page
- **Welcome message**: Personalized with first name only (uppercase)
- **Layout Components (`components/layouts/`)
- **AppLayout**: Main wrapper with header, content area, and footer
- **Header**: Responsive navigation with auth menus, dual mobile menus
- **Footer**: Brand information, quick links, social media icons

### UI Components (`components/ui/`)
- **Button**: Multi-variant (primary, secondary, danger, ghost) with loading state
- **Input**: Styled input with label, error display, and accessibility
- **Modal**: Reusable dialog with customizable footer
- **PasswordInput**: Password field with show/hide eye toggle
- **PasswordStrengthIndicator**: Visual 3-bar strength meter

### Feature Components
- **Signup components** (`components/signup/`): Form, hero, terms modal
- **Signin components** (`components/signin/`): Form, hero

### Icons
Using Lucide React for consistent, professional icons:
- **Dashboard**: Sparkles, Palette, Code, Brain, Library, TrendingUp, Users, DollarSign
- **Navigation**: LayoutDashboard, BookOpen, GraduationCap, BarChart3, Settings
- **User**: User, LogOut, Menu, X
- **Social**: Facebook, Twitter (used for TikTok), Youtube, Instagram
- **Forms**: Eye, EyeOff, Info, Checkacters
  - At least one letter
  - At least one number
  - At least one special character
- Password strength indicator
- Real-time validation feedback
- Show/hide password toggle

### Sign In Page
- Email and password fields
- Form validation
- Show/hide password toggle
- Error handling

### Application Page
- Welcome message
- User profile display
- User information cards
- Logout functionality
- Protected route (requires authentication)

## 🎨 UI Componeregistration form with email, name, password, and confirmation
   - Client-side validation (3-20 chars for name, password strength check)
   - User must agree to terms & conditions
   - Send POST request to `/auth/signup`
   - Receive JWT token and user data
   - Display success toast notification
   - Auto-redirect to sign in page after 1.5 seconds

2. **Sign In**:
   - User enters email and credentials
   - Client-side validation
   - Send POST request to `/auth/signin`
   - Receive JWT token and user data
   - Store token in localStorage
   - Update AuthContext with user info
   - Redirect to dashboard
   - Display welcome toast

3. **Protected Routes**:
   - ProtectedRoute component checks authentication
   - Read token from localStorage
   - Validate token presence
   - Redirect to sign in if not authenticated
   - Allow access to dashboard if authenticated

4. **Logout**:
   - Clear user data from AuthContext
   - Remove JWT token from localStorage
   - Redirect to sign in page (RFC 5322)
- Required field
- Real-time validation on blur

### Name
- Minimum 3 characters
- Maximum 20 characters (enforced with maxLength)
- Required field
- Only first word displayed in header (uppercase)

### Password (Sign Up)
- **Weak**: 8+ characters (any combination)
- **Medium**: 10+ characters with at least 2 special characters
- **Strong**: 12+ characters with letters, numbers, and special characters
- Required field
- Real-time strength calculation
- Visual 3-bar indicator with colors

### Confirm Password
- Must match the password field exactly
- Required field
- Real-time matching validation

### Terms & Conditions
- Checkbox must be checked before signup
- Toast error if not agree
   - User enters credentials
   - Client-side validation
   - Send request to `/auth/signin`
   - Receive JWT token and user data
   - Store in localStorage and context
   - Redirect to application with automatic JWT token injection.

### API Service (`src/services/api.ts`)

```typescript
authService.signUp(data)      // Register new user
authService.signIn(data)      // Sign in user
authService.logout()          // Clear local session
authService.getProfile()      // Get user profile (protected)
authService.getCurrentUser()  // Get current user (protected)
````

### Authorization

JWT token is automatically added to all protected request headers:

```
Authorization: Bearer <token>
```

### Error Handling

- Network errors: Display user-friendly toast messages
- 401 Unauthorized: Auto-redirect towith breakpoints:
- **Mobile** (< 768px): Stacked layout, hamburger menu, mobile avatar dropdown
- **Tablet** (768px - 1023px): Optimized touch targets, adjusted spacing
- **Desktop** (1024px+): Full layout, centered navigation, avatar dropdown

### Responsive Features

- Split-screen auth pages collapse to single column on mobile
- Dashboard grid adapts from 3 columns → 2 columns → 1 column
- Header navigation switches to hamburger menu on mobile
- Separate mobile menus for navigation and user profile
- Touch-friendly button sizes and spacing
- Optimized chart rendering for small screens
- MiniDesign System

### Color Palette

- **Primary**: Blue gradient (#3b82f6 → #1e40af)
- **Secondary**: Purple accent (#8b5cf6 → #6d28d9)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Gray scale**: gray-50 through gray-900

### Typography

- **Font**: Inter (system font stack)
- **Headings**: font-bold, tracking-tight
- **Body**: font-normal, text-gray-700
- **Small text**: text-sm, text-gray-600

### Animations

- Transitions: 200-300ms duration
- Hover effects: scale, shadow, color changes
- Button press: scale(0.95)
- Menu animations: slideDown, fadeIn
- Smooth scroll behavior

### Components

- Rounded corners: rounded-lg (8px), rounded-xl (12px), rounded-2xl (16px)
- Shadows: sm, md, lg, xl for depth
- Spacing: Consistent padding/margin scale (4px increments
- At least one letter (a-z or A-Z)
- At least one number (0-9)
- At least one special character (@$!%\*#?&)
- Required field

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


