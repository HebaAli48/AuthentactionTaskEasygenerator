import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Rocket, 
  UserCircle, 
  LogOut,
  Menu,
  User,
  Settings,
  HelpCircle,
  ChevronDown,
  Home,
  BookOpen,
  GraduationCap,
  BarChart
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate('/signin');
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileNavOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node)) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">EasyGenerator</span>
          </Link>

          {/* Navbar - Show only for authenticated users */}
          {user && (
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Dashboard
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Courses
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                My Learning
              </Link>
              <Link 
                to="/dashboard" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <BarChart className="w-4 h-4" />
                Progress
              </Link>
            </nav>
          )}

          {/* Navigation */}
          <div className="flex items-center gap-4">
            {user ? (
              // Authenticated user navigation
              <>
                {/* Mobile Navigation Menu Button */}
                <div className="lg:hidden relative" ref={mobileNavRef}>
                  <button
                    onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                    className="p-2 rounded-lg hover:bg-blue-50 hover:scale-110 transition-all duration-200 group"
                  >
                    <Menu className={`w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-200 ${
                      isMobileNavOpen ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {/* Mobile Navigation Dropdown */}
                  {isMobileNavOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 overflow-hidden animate-in fade-in slide-in-from-top-3 duration-300">
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <Home className="w-5 h-5" />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <BookOpen className="w-5 h-5" />
                        <span>Courses</span>
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <GraduationCap className="w-5 h-5" />
                        <span>My Learning</span>
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <BarChart className="w-5 h-5" />
                        <span>Progress</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Desktop Avatar Dropdown */}
                <div className="hidden md:block relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <UserCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium text-gray-700">{user.name.split(' ')[0].toUpperCase()}</span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user.name.split(' ')[0]}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <HelpCircle className="w-4 h-4" />
                        Help & Support
                      </Link>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Avatar Menu Button */}
                <div className="md:hidden relative" ref={mobileMenuRef}>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200"
                  >
                    <UserCircle className="w-5 h-5 text-white" />
                  </button>

                  {/* Mobile Avatar Dropdown */}
                  {isMobileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 overflow-hidden animate-in fade-in slide-in-from-top-3 duration-300">
                      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <UserCircle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.name.split(' ')[0]}</p>
                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* User Profile Links */}
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        My Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </Link>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <HelpCircle className="w-4 h-4" />
                        Help & Support
                      </Link>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Guest navigation
              <>
                <Link 
                  to="/signin" 
                  className="flex items-center gap-2 px-4 py-2 border border-slate-50 hover:bg-slate-50  rounded-lg text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <UserCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
