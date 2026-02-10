import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

interface AuthLayoutProps {
  heroTitle: string;
  heroDescription: string;
  formTitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  heroTitle,
  heroDescription,
  formTitle,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) => {
  return (
    <div className="flex-1 flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Decorative wavy pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-32">
          <svg viewBox="0 0 100 1000" className="absolute h-full w-full text-white opacity-10">
            <path d="M0,0 Q50,50 0,100 T0,200 T0,300 T0,400 T0,500 T0,600 T0,700 T0,800 T0,900 T0,1000 L100,1000 L100,0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="mb-8 flex flex-col justify-center items-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6">
                <Rocket className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4">{heroTitle}</h2>
            </div>
            <p className="text-lg text-blue-100 max-w-md leading-relaxed">
              {heroDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">{formTitle}</h2>

            {children}

            {/* Footer Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {footerText}{' '}
                <Link to={footerLinkTo} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {footerLinkText}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
