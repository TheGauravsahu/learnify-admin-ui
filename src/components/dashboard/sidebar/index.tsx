import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Sidebar() {
  return (
    <div className="w-full h-screen  p-6 bg-background">
      <Link to="/dashboard">
        <div className="w-full flex lg:items-center   gap-1">
          <img src="/favicon.ico" className="w-6 h-6" />
          <h1 className="font-semibold text-sm lg:text-[1rem]  hidden md:block text-foreground">
            Learnify - Admin
          </h1>
        </div>
      </Link>
      <Menu />
    </div>
  );
}
