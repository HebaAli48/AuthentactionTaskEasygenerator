import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateSignIn } from '../utils/validation';
import type { SignInData, ValidationErrors } from '../types';
import toast from 'react-hot-toast';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { SignInForm } from '@/components/signin/SignInForm';

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState<SignInData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: SignInData) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev: ValidationErrors) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateSignIn(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      await signIn(formData, rememberMe);
      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      heroTitle="Welcome Back"
      heroDescription="Sign in to access your account and continue your learning journey. Stay connected with our community and unlock all premium features!"
      formTitle="Sign in to your account"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkTo="/signup"
    >
      <SignInForm
        formData={formData}
        errors={errors}
        isLoading={isLoading}
        rememberMe={rememberMe}
        handleChange={handleChange}
        setRememberMe={setRememberMe}
        handleSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};
