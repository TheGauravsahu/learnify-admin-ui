import { useAuthStore } from "@/stores/auth.store";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
}
