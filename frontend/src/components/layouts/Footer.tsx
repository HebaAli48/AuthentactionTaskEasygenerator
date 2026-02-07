import React from 'react';
import { Rocket, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">EasyGenerator</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Empowering learners worldwide with premium courses and expert-led content. Join our community and start your learning journey today.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-lg transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-pink-600 rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>support@easygenerator.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+2 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; 2026 EasyGenerator. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
