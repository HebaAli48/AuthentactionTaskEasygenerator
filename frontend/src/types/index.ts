export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  user: User;
  access_token: string;
}

export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  signUp: (data: SignUpData) => Promise<void>;
  signIn: (data: SignInData, rememberMe?: boolean) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface ValidationErrors {
  email?: string;
  name?: string;
  password?: string;
  confirmPassword?: string;
}
