import { Routes, Route } from "react-router-dom";
import DashbordLayout from "../layouts/DashbordLayout";
import NotFoundPage from "../pages/NotFound";
import DashboardPage from "../pages/Dashboard";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<DashbordLayout />}>
        <Route path="*" element={<DashboardPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
