import { useAuthStore } from "@/stores/auth.store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) return <Navigate to="/" replace />;

  if (user?.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }
  return <Outlet />;
}
