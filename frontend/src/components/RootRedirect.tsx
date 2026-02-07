import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const RootRedirect: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  console.log('🏠 Root redirect:', isAuthenticated ? 'dashboard' : 'signin');
  return <Navigate to={isAuthenticated ? '/dashboard' : '/signin'} replace />;
};
