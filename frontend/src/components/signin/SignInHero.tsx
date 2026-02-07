import React from 'react';
import { Rocket } from 'lucide-react';

export const SignInHero: React.FC = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Decorative wavy pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-32">
        <svg viewBox="0 0 100 1000" className="absolute h-full w-full text-white opacity-10">
          <path d="M0,0 Q50,50 0,100 T0,200 T0,300 T0,400 T0,500 T0,600 T0,700 T0,800 T0,900 T0,1000 L100,1000 L100,0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6">
              <Rocket className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
          </div>
          <p className="text-lg text-blue-100 max-w-md leading-relaxed">
            Sign in to access your account and continue your learning journey. Stay connected with our community and unlock all premium features!
          </p>
        </div>
      </div>
    </div>
  );
};
