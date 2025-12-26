import { Button } from "@/components/ui/button";
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  Plus,
  Search,
} from "lucide-react";
import SortByDropdown from "./SortByDropdown";

interface TeacherListHeaderProps {
  sortOrder: "asc" | "desc";
  updateParam: (key: string, value: string | number) => void;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function TeacheListHeader({
  sortOrder,
  updateParam,
  searchInput,
  setSearchInput,
}: TeacherListHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="w-xs">
        <h1 className="font-semibold lg:block hidden">All Teachers</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-end lg:items-center justify-end  gap-2">
        <div className="rounded-full border border-gray-200 px-4 py-1 shadow-xs w-72  flex items-center  gap-2">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              updateParam("search", e.target.value);
              updateParam("page", 1);
            }}
            placeholder="Search teacher..."
            className="border-none outline-none placeholder:text-muted-foreground placeholder:text-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
            <SlidersHorizontal />
          </Button> */}
          <SortByDropdown updateParam={updateParam} />
          <Button
            onClick={() =>
              updateParam("sortOrder", sortOrder === "asc" ? "desc" : "asc")
            }
            className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full"
          >
            {sortOrder === "asc" ? (
              <ArrowUpWideNarrow />
            ) : (
              <ArrowDownWideNarrow />
            )}
          </Button>
          <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}
