
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const token = localStorage.getItem("token");
 // Perfect place to add a loading state if you want to check token validity with an API call
  // If user is logged in, block public pages
  if (token) {
    return <Navigate to="/" replace />;
  }

  // Otherwise allow access
  return <Outlet />;
};
