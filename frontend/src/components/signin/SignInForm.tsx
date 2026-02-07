import React from 'react';
import type { SignInData, ValidationErrors } from '../../types';
import { Input } from '../ui/Input';
import { PasswordInput } from '../ui/PasswordInput';
import { Button } from '../ui/Button';

interface SignInFormProps {
  formData: SignInData;
  errors: ValidationErrors;
  isLoading: boolean;
  rememberMe: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setRememberMe: (value: boolean) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({
  formData,
  errors,
  isLoading,
  rememberMe,
  handleChange,
  setRememberMe,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
      <PasswordInput
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter Password"
        error={errors.password}
      />

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
          Forgot password?
        </a>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </Button>
    </form>
  );
};
