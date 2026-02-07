import React from 'react';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

type PasswordStrength = 'weak' | 'medium' | 'strong' | null;

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  const calculatePasswordStrength = (pwd: string): PasswordStrength => {
    if (!pwd) return null;
    
    const length = pwd.length;
    const specialCharCount = (pwd.match(/[^a-zA-Z0-9]/g) || []).length;
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(pwd);
    
    // Strong: 12+ characters with uppercase, lowercase, numbers, and special characters
    if (length >= 12 && hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
      return 'strong';
    }
    
    // Moderate: 10+ characters with at least 2 special characters
    if (length >= 10 && specialCharCount >= 2) {
      return 'medium';
    }
    
    // Weak: 8+ characters
    if (length >= 8) {
      return 'weak';
    }
    
    return null;
  };

  const strength = calculatePasswordStrength(password);

  if (!strength) return null;

  const messages = {
    weak: 'Add 2 more characters and special symbols for better security',
    medium: 'Good! Add 2 more characters with uppercase & numbers for strong security',
    strong: 'Excellent! Your password is very secure'
  };

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-600">Password Strength</span>
        <div className="flex items-center gap-1">
          {strength === 'weak' && (
            <>
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-xs font-semibold text-red-600">Weak</span>
            </>
          )}
          {strength === 'medium' && (
            <>
              <Shield className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-semibold text-yellow-600">Medium</span>
            </>
          )}
          {strength === 'strong' && (
            <>
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-xs font-semibold text-green-600">Strong</span>
            </>
          )}
        </div>
      </div>
      <div className="flex gap-1">
        <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
          strength === 'weak' ? 'bg-red-500' :
          strength === 'medium' ? 'bg-yellow-400' :
          'bg-green-500'
        }`}></div>
        <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
          strength === 'medium' ? 'bg-yellow-400' :
          strength === 'strong' ? 'bg-green-500' :
          'bg-gray-200'
        }`}></div>
        <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
          strength === 'strong' ? 'bg-green-500' : 'bg-gray-200'
        }`}></div>
      </div>
      <p className="text-xs text-gray-500 mt-2">{messages[strength]}</p>
    </div>
  );
};
