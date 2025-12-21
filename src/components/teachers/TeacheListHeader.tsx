import { Button } from "@/components/ui/button";
import {
  ArrowDownWideNarrow,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export default function TeacheListHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-xs">
        <h1 className="font-semibold lg:block hidden">All Teachers</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-end lg:items-center justify-end  gap-2">
        <div className="rounded-full border border-gray-200 px-4 py-1 shadow-xs w-72  flex items-center  gap-2">
          <Search className="size-4 text-muted-foreground" />
          <input
            placeholder="Search from table.."
            className="border-none outline-none placeholder:text-muted-foreground placeholder:text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
            <SlidersHorizontal />
          </Button>
          <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
            <ArrowDownWideNarrow />
          </Button>
          <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
