import React, { useState, useRef, useEffect } from 'react';
import type { SignUpData, ValidationErrors } from '../../types';
import { Info, Check, ShieldAlert, Shield, ShieldCheck } from 'lucide-react';
import { Input } from '../ui/Input';
import { PasswordInput } from '../ui/PasswordInput';
import { PasswordStrengthIndicator } from '../ui/PasswordStrengthIndicator';
import { Button } from '../ui/Button';

interface SignUpFormProps {
  formData: SignUpData;
  confirmPassword: string;
  errors: ValidationErrors;
  isLoading: boolean;
  agreedToTerms: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setConfirmPassword: (value: string) => void;
  setErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
  setAgreedToTerms: (value: boolean) => void;
  setShowTermsModal: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  formData,
  confirmPassword,
  errors,
  isLoading,
  agreedToTerms,
  handleChange,
  setConfirmPassword,
  setErrors,
  setAgreedToTerms,
  setShowTermsModal,
  handleSubmit
}) => {
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);
  const passwordInfoRef = useRef<HTMLDivElement>(null);

  // Close password info when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (passwordInfoRef.current && !passwordInfoRef.current.contains(event.target as Node)) {
        setShowPasswordInfo(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <Input
        label="Full name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter full name"
        maxLength={20}
        error={errors.name}
      />

      {/* Email */}
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter email"
        error={errors.email}
      />

      {/* Password */}
      <div className="relative" ref={passwordInfoRef}>
        <div className="flex items-center gap-2 mb-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <button
            type="button"
            onClick={() => setShowPasswordInfo(!showPasswordInfo)}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Password Requirements Tooltip */}
        {showPasswordInfo && (
          <div className="absolute z-10 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-2 bottom-full left-0 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Password Requirements</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldAlert className="w-3 h-3 text-red-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Weak</p>
                  <p className="text-xs text-gray-500">At least 8 characters</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-yellow-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-3 h-3 text-yellow-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Moderate</p>
                  <p className="text-xs text-gray-500">10+ characters with at least 2 special characters (!@#$%^&*)</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Strong</p>
                  <p className="text-xs text-gray-500">12+ characters with uppercase, lowercase, numbers & special characters</p>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">Tip: Use a mix of characters for maximum security</p>
            </div>
          </div>
        )}

        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Password"
          error={errors.password}
        />
        
        <PasswordStrengthIndicator password={formData.password} />
      </div>

      {/* Confirm Password */}
      <div className="relative">
        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) {
              setErrors((prev: ValidationErrors) => ({ ...prev, confirmPassword: undefined }));
            }
          }}
          placeholder="Re-enter Password"
          error={errors.confirmPassword}
        />
        {confirmPassword && formData.password === confirmPassword && (
          <div className="flex items-center gap-1 mt-1">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-xs text-green-600 font-medium">Passwords match</span>
          </div>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          I agree to the{' '}
          <button
            type="button"
            onClick={() => setShowTermsModal(true)}
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            terms and Conditions
          </button>
        </label>
      </div>

      {/* Sign Up Button */}
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? 'Creating Account...' : 'Sign Up'}
      </Button>
    </form>
  );
};
