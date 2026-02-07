import type { ValidationErrors, SignUpData, SignInData } from '../types';

export const validateSignUp = (data: SignUpData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  // Name validation
  if (!data.name) {
    errors.name = 'Name is required';
  } else if (data.name.length < 3) {
    errors.name = 'Name must be at least 3 characters long';
  } else if (data.name.length > 20) {
    errors.name = 'Name must not exceed 20 characters';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/(?=.*[A-Za-z])/.test(data.password)) {
    errors.password = 'Password must contain at least one letter';
  } else if (!/(?=.*\d)/.test(data.password)) {
    errors.password = 'Password must contain at least one number';
  } else if (!/(?=.*[@$!%*#?&])/.test(data.password)) {
    errors.password = 'Password must contain at least one special character (@$!%*#?&)';
  }

  return errors;
};

export const validateSignIn = (data: SignInData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(data.email)) {
    errors.email = 'Please provide a valid email address';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

export const getPasswordStrength = (password: string): { 
  strength: string; 
  color: string;
  percentage: number;
} => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[@$!%*#?&]/.test(password)) strength++;

  const percentage = (strength / 5) * 100;

  if (strength <= 2) return { strength: 'Weak', color: 'bg-red-500', percentage };
  if (strength <= 3) return { strength: 'Fair', color: 'bg-yellow-500', percentage };
  if (strength <= 4) return { strength: 'Good', color: 'bg-blue-500', percentage };
  return { strength: 'Strong', color: 'bg-green-500', percentage };
};
