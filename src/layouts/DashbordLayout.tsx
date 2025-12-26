import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashbordLayout() {
  return (
    <div className="h-screen w-full flex">
      {/* SIDEBAR */}
      <div className="lg:w-[16%] w-[20%] h-screen">
        <Sidebar />
      </div>

      <div className="lg:w-[84%] w-[80%] h-full flex-1 overflow-y-scroll bg-[#F7F8FA]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
