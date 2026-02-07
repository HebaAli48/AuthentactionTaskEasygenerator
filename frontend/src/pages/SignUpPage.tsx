import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { validateSignUp } from '../utils/validation';
import type { SignUpData, ValidationErrors } from '../types';
import toast from 'react-hot-toast';
import { SignUpForm, SignUpHero, TermsModal } from '../components/signup';

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
    <div className="flex-1 flex">
      <SignUpHero />

      {/* Right Side - White Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Create your account</h2>

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

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <TermsModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        onAccept={() => {
          setShowTermsModal(false);
          setAgreedToTerms(true);
        }}
      />
    </div>
  );
};
