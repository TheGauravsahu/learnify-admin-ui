import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function ClassesListPage() {
  return (
    <div className="bg-background flex-1 m-4 mt-0">
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-70">Info</TableHead>
              <TableHead>Class ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Session</TableHead>
              <TableHead>Section</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className="even:bg-slate-50 dark:even:bg-secondary px-4 border-none cursor-pointer"
            >
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-lg grayscale">
                    {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                    <AvatarFallback className="rounded-lg bg-background"></AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm  leading-tight">
                    <span className="truncate font-medium text-sm ">
                      {/* {teacher.user.name} */}
                    </span>
                    <span className="text-muted-foreground truncate text-xs">
                      {/* {teacher.user.email} */}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right gap-2 flex items-center justify-end"></TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  //   onClick={() => updateParam("page", Math.max(1, page - 1))}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className="cursor-pointer"
                  // isActive={page === i + 1}
                  // onClick={() => updateParam("page", i + 1)}
                >
                  {/* {i + 1} */}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  //   onClick={() =>
                  //     // updateParam("page", Math.min(totalPages, page + 1))
                  //   }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
