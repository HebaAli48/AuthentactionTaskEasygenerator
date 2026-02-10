import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateSignUp } from '../utils/validation';
import type { SignUpData, ValidationErrors } from '../types';
import toast from 'react-hot-toast';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { SignUpForm } from '@/components/signup/SignUpForm';
import { TermsModal } from '@/components/signup/TermsModal';

export const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState<SignUpData>({
    email: '',
    name: '',
    password: '',
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: SignUpData) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev: ValidationErrors) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    if (formData.password !== confirmPassword) {
      setErrors((prev: ValidationErrors) => ({ ...prev, confirmPassword: 'Passwords do not match' }));
      toast.error('Passwords do not match');
      return;
    }

    const validationErrors = validateSignUp(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      await signUp(formData);
      toast.success('Account created successfully! Please sign in.');
      setTimeout(() => navigate('/signin'), 1500);
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthLayout
        heroTitle="EasyGenerator"
        heroDescription="Create your account to unlock premium features and stay updated with the latest news. Join our community and embark on an exciting journey with us!"
        formTitle="Create your account"
        footerText="Already have an account?"
        footerLinkText="Sign in"
        footerLinkTo="/signin"
      >
        <SignUpForm
          formData={formData}
          confirmPassword={confirmPassword}
          errors={errors}
          isLoading={isLoading}
          agreedToTerms={agreedToTerms}
          handleChange={handleChange}
          setConfirmPassword={setConfirmPassword}
          setErrors={setErrors}
          setAgreedToTerms={setAgreedToTerms}
          setShowTermsModal={setShowTermsModal}
          handleSubmit={handleSubmit}
        />
      </AuthLayout>

      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={() => {
          setShowTermsModal(false);
          setAgreedToTerms(true);
        }}
      />
    </>
  );
};
