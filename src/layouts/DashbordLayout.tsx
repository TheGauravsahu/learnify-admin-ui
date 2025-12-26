import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashbordLayout() {
  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div className="lg:w-[16%] w-[20%] h-full">
        <Sidebar />
      </div>

      <div className="lg:w-[84%] w-[80%] h-full overflow-y-scroll bg-[#F7F8FA]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
