# Frontend Component Structure

## Overview

The frontend has been refactored into a well-organized, modular component structure following React best practices.

## Directory Structure

```
frontend/src/
├── components/
│   ├── layouts/
│   │   ├── Header.tsx           # Navigation header with auth menus
│   │   ├── Footer.tsx           # Footer with social links
│   │   ├── AppLayout.tsx        # Main layout wrapper
│   │   └── index.ts             # Barrel export
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Input.tsx            # Reusable input component
│   │   ├── Modal.tsx            # Reusable modal component
│   │   ├── PasswordInput.tsx    # Password input with toggle visibility
│   │   ├── PasswordStrengthIndicator.tsx  # Password strength display
│   │   └── index.ts             # Barrel export
│   ├── signup/
│   │   ├── SignUpForm.tsx       # Signup form component
│   │   ├── SignUpHero.tsx       # Left side hero section
│   │   ├── TermsModal.tsx       # Terms & conditions modal
│   │   └── index.ts             # Barrel export
│   ├── signin/
│   │   ├── SignInForm.tsx       # Signin form component
│   │   ├── SignInHero.tsx       # Left side hero section
│   │   └── index.ts             # Barrel export
│   └── ProtectedRoute.tsx       # Route guard for authentication
├── pages/
│   ├── SignUpPage.tsx           # Main signup page container with business logic
│   ├── SignInPage.tsx           # Main signin page container with auth logic
│   └── DashboardPage.tsx        # Dashboard with stats & courses
├── contexts/
│   └── AuthContext.tsx          # Authentication context provider
├── services/
│   └── api.ts                   # API service layer
├── types/
│   └── index.ts                 # TypeScript type definitions
└── utils/
    └── validation.ts            # Form validation utilities
```

## Component Architecture

### Layouts (`components/layouts/`)

**Purpose**: Shared layout components that wrap pages

- **Header**:
  - Responsive navigation bar
  - User authentication dropdown
  - Mobile hamburger menu
  - Centered desktop navigation

- **Footer**:
  - Brand information
  - Quick links
  - Social media icons (Facebook, TikTok, YouTube, Instagram)
  - Contact information

- **AppLayout**:
  - Combines Header + Content + Footer
  - Used as page wrapper in App.tsx

### UI Components (`components/ui/`)

**Purpose**: Reusable, presentational components

- **Button**: Multi-variant button with loading state
- **Input**: Styled text input with label and error display
- **Modal**: Customizable modal dialog
- **PasswordInput**: Password field with show/hide toggle
- **PasswordStrengthIndicator**: Visual password strength meter

### Signup Components (`components/signup/`)

**Purpose**: Signup-specific presentational components

- **SignUpForm**: Form UI with validation and input fields
- **SignUpHero**: Marketing content with gradient background
- **TermsModal**: Full terms and conditions in modal dialog

### Signin Components (`components/signin/`)

**Purpose**: Signin-specific presentational components

- **SignInForm**: Login form UI with email/password fields
- **SignInHero**: Welcome back messaging with gradient

### Pages (`pages/`)

**Purpose**: Container components with business logic and state management

- **SignUpPage**: Manages signup form state, validation, and API calls
- **SignInPage**: Manages authentication state and login flow
- **DashboardPage**: Displays user dashboard with stats and courses

## Benefits of This Structure

### 1. **Separation of Concerns**

- Layout logic separated from page logic
- Presentation components separate from business logic
- Each component has a single responsibility

### 2. **Reusability**

- UI components can be used across multiple pages
- Consistent design system through shared components
- Easier to maintain and update styling

### 3. **Maintainability**

- Easier to locate and update specific features
- Clear file organization
- Barrel exports for clean imports

### 4. **Scalability**

- Easy to add new pages or features
- Component library grows organically
- Type-safe with TypeScript

## Usage Examples

### Page Imports (from components)

```tsx
// In pages/SignUpPage.tsx
import { SignUpForm, SignUpHero, TermsModal } from "../components/signup";

// In pages/SignInPage.tsx
import { SignInForm, SignInHero } from "../components/signin";
```

### Component Imports (within components)

```tsx
// In components/signup/SignUpForm.tsx
import { Button, Input, PasswordInput, PasswordStrengthIndicator } from "../ui";

// In components/signin/SignInForm.tsx
import { Button, Input, PasswordInput } from "../ui";
```

### Layout Usage in App.tsx

```tsx
import { AppLayout } from "./components/layouts/AppLayout";
import { SignUpPage } from "./pages/SignUpPage";

<Route
  path="/signup"
  element={
    <AppLayout>
      <SignUpPage />
    </AppLayout>
  }
/>;
```

## Component Props

### Button

```tsx
<Button
  variant="primary" | "secondary" | "danger" | "ghost"
  size="sm" | "md" | "lg"
  isLoading={boolean}
  onClick={handler}
>
  Click me
</Button>
```

### Input

```tsx
<Input
  label="Email"
  type="email"
  name="email"
  value={value}
  onChange={handler}
  placeholder="Enter email"
  error={error}
/>
```

### Modal

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
  maxWidth="md"
  footer={<Button>Accept</Button>}
>
  Content here
</Modal>
```

### PasswordInput

```tsx
<PasswordInput
  label="Password"
  name="password"
  value={value}
  onChange={handler}
  error={error}
/>
```

## Migration Notes

### Changes Made

The structure was reorganized to better separate concerns and improve maintainability:

1. **Removed old Layout component**
   - `components/Layout.tsx` → `components/layouts/AppLayout.tsx` (already existed)

2. **Moved signup components from pages to components**
   - `pages/signup/SignUpForm.tsx` → `components/signup/SignUpForm.tsx`
   - `pages/signup/SignUpHero.tsx` → `components/signup/SignUpHero.tsx`
   - `pages/signup/TermsModal.tsx` → `components/signup/TermsModal.tsx`

3. **Moved signin components from pages to components**
   - `pages/signin/SignInForm.tsx` → `components/signin/SignInForm.tsx`
   - `pages/signin/SignInHero.tsx` → `components/signin/SignInHero.tsx`

4. **Simplified pages folder**
   - Removed nested folders `/signup` and `/signin`
   - Kept only page containers: `SignUpPage.tsx`, `SignInPage.tsx`, `DashboardPage.tsx`

### Import Path Updates

```tsx
// Before (in SignUpPage.tsx)
import { SignUpForm } from "./SignUpForm";
import { SignUpHero } from "./SignUpHero";
import { TermsModal } from "./TermsModal";

// After (in SignUpPage.tsx)
import { SignUpForm, SignUpHero, TermsModal } from "../components/signup";
```

```tsx
// Before (in SignUpForm.tsx when in pages/signup/)
import { Button, Input } from "../../components/ui";

// After (in SignUpForm.tsx when in components/signup/)
import { Button, Input } from "../ui";
```

### Key Benefits of Migration

1. **Clear separation**: Pages contain business logic, components contain UI
2. **Better organization**: Related components grouped together
3. **Easier navigation**: Flat pages folder, organized components folder
4. **Cleaner imports**: Barrel exports enable clean import statements

## Future Enhancements

### Potential Additions

1. **Dashboard Components** (`pages/dashboard/`)
   - StatCard.tsx
   - CourseCard.tsx
   - Chart.tsx

2. **UI Components**
   - Dropdown.tsx
   - Tooltip.tsx
   - Badge.tsx
   - Alert.tsx

3. **Form Components**
   - Select.tsx
   - Checkbox.tsx
   - TextArea.tsx
   - FileUpload.tsx

## Best Practices

1. **Keep components small and focused**
2. **Use TypeScript for type safety**
3. **Export via index.ts for clean imports**
4. **Follow naming conventions (PascalCase for components)**
5. **Colocate related components in folders**
6. **Use barrel exports (index.ts) for public APIs**
7. **Keep business logic in page containers**
8. **Keep presentation in UI components**

---

**Last Updated**: February 7, 2026
