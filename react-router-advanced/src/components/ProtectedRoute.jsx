// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = false; // Simulate authentication status

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
