import { Routes, Route } from "react-router-dom";
import DashbordLayout from "../layouts/DashbordLayout";
import NotFoundPage from "../pages/NotFound";
import DashboardPage from "../pages/Dashboard";
import TeacherListPage from "@/pages/Teachers";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DashbordLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/teachers" element={<TeacherListPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
