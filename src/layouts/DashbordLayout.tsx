import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar";
import Navbar from "@/components/dashboard/Navbar";

export default function DashbordLayout() {
  return (
    <div className="h-screen flex">
      {/* SIDEBAR */}
      <div className="lg:w-[16%] md:w-[20%] w-[12%]  h-full">
        <Sidebar />
      </div>

      <div className="lg:w-[84%] md:w-[80%] w-[88%] h-full overflow-y-scroll bg-[#F7F8FA]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
