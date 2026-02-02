import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false;
  const loading = false;
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
