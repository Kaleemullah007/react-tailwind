
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const token = localStorage.getItem("token");

  // If user is logged in, block public pages
  if (token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise allow access
  return <Outlet />;
};
