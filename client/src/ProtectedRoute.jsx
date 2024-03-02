import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <h1>LOADING...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};
export default ProtectedRoute;
