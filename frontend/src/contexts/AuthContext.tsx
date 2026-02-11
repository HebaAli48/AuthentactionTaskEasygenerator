import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/api';
import type { User, AuthContextType, SignUpData, SignInData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on mount (check both localStorage and sessionStorage)
    const initAuth = () => {
      try {
        const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
        const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');

        console.log('Checking stored auth:', { 
          hasToken: !!storedToken, 
          hasUser: !!storedUser,
          tokenSource: localStorage.getItem('token') ? 'localStorage' : sessionStorage.getItem('token') ? 'sessionStorage' : 'none'
        });

        if (storedToken && storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setToken(storedToken);
          console.log(' Auth restored from storage');
        } else {
          console.log(' No stored auth found');
        }
      } catch (error) {
        console.error(' Error initializing auth:', error);
      } finally {
        // Use setTimeout to ensure state updates have processed
        setTimeout(() => setLoading(false), 0);
      }
    };

    initAuth();
  }, []);

  const signUp = async (data: SignUpData) => {
    try {
      const response = await authService.signUp(data);
      setUser(response.user);
      setToken(response.access_token);
      localStorage.setItem('token', response.access_token);
      localStorage.setItem('user', JSON.stringify(response.user));
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Sign up failed');
    }
  };

  const signIn = async (data: SignInData, rememberMe: boolean = false) => {
    console.log("🚀 ~ signIn ~ rememberMe:", rememberMe)
    try {
      const response = await authService.signIn(data);
      setUser(response.user);
      setToken(response.access_token);
      console.log("🚀 ~ signIn ~ response:", response)
      // Store in localStorage if remember me is checked, otherwise sessionStorage
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem('token', response.access_token);
      storage.setItem('user', JSON.stringify(response.user));
      console.log(' Token stored in:', rememberMe ? 'localStorage' : 'sessionStorage');
      
      // Clear the other storage to avoid conflicts
      const otherStorage = rememberMe ? sessionStorage : localStorage;
      otherStorage.removeItem('token');
      otherStorage.removeItem('user');
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Sign in failed');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    // Clear both storages
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');

  };

  const value: AuthContextType = {
    user,
    token,
    loading,
    signUp,
    signIn,
    logout,
    isAuthenticated: !!token && !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
