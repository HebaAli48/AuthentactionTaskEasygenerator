import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-gray-50 border ${
          error ? 'border-red-300' : 'border-gray-200'
        } rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'focus:ring-red-500' : 'focus:ring-blue-500'
        } focus:border-transparent transition ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-xs mt-1">{helperText}</p>}
    </div>
  );
};
