import { Routes, Route } from "react-router-dom";
import DashbordLayout from "../layouts/DashbordLayout";
import NotFoundPage from "../pages/NotFound";
import DashboardPage from "../pages/Dashboard";
import TeacherListPage from "@/pages/Teachers";
import { Toaster } from "@/components/ui/sonner";
import ClassesListPage from "@/pages/Classes";
import HomePage from "@/pages/Home";
import ProtectedRoutes from "./protected-routes";
import UnauthorizedPage from "@/pages/Unauthorized";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<DashbordLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/teachers" element={<TeacherListPage />} />
            <Route path="/classes" element={<ClassesListPage />} />
          </Route>
        </Route>

        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}
