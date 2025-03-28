import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const location = useLocation();
  const userData = Cookies.get("user_data");
  const isAuthenticated = userData ? JSON.parse(userData)?.auth_token : null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
