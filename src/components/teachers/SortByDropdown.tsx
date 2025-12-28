import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { SlidersHorizontal } from "lucide-react";

interface SortByDropdownProps {
  updateParam: (key: string, value: string | number) => void;
}

export default function SortByDropdown({ updateParam }: SortByDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
          <SlidersHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => updateParam("sortBy", "experience")}
        >
          Experience
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => updateParam("sortBy", "subject")}
        >
          Subject
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => updateParam("sortBy", "name")}
        >
          Name
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => updateParam("sortBy", "createdAt")}
        >
          Created At
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
