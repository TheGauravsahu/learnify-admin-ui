import { Search } from "lucide-react";
import UserDropdown from "./sidebar/UserDropdown";
import { ModeToggle } from "../common/ModeToggle";

export default function Navbar() {
  return (
    <div className="w-full p-4 flex items-center  justify-between">
      <div className="rounded-full border border-gray-200 px-4 py-1 shadow-xs w-xs hidden md:flex items-center  gap-2">
        <Search className="size-4 text-muted-foreground" />
        <input
          placeholder="Search.."
          className="border-none outline-none placeholder:text-muted-foreground placeholder:text-sm"
        />
      </div>

      <div className="w-full flex items-center justify-end">
        <UserDropdown />
        <ModeToggle />
      </div>
    </div>
  );
}
