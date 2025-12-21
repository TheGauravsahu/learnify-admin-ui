import ErrorOccurred from "@/components/common/ErrorOccurred";
import { ScreenLoader } from "@/components/common/Loader";
import TeacheListHeader from "@/components/teachers/TeacheListHeader";
import type { ListTeachersQuery } from "@/gql/graphql";
import { LIST_TEACHERS } from "@/graphql/queries/teacher.query";
import { useQuery } from "@apollo/client/react";
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

export default function TeacherListPage() {
  const { data, loading, error } = useQuery<ListTeachersQuery>(LIST_TEACHERS);

  if (loading) return <ScreenLoader />;
  if (error) return <ErrorOccurred error={error} />;

  return (
    <div className="bg-background p-4 rounded-md flex-1 m-4 mt-0">
      <TeacheListHeader />

      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-70">Info</TableHead>
              <TableHead>Teacher ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.teachers.map((teacher) => (
              <TableRow
                key={teacher._id}
                className="odd:bg-secondary px-4 cursor-pointer"
              >
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 rounded-lg grayscale">
                      {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
                      <AvatarFallback className="rounded-lg bg-background">
                        {teacher.user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm  leading-tight">
                      <span className="truncate font-medium text-sm ">
                        {teacher.user.name}
                      </span>
                      <span className="text-muted-foreground truncate text-xs">
                        {teacher.user.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{teacher._id}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.experience}</TableCell>
                <TableCell className="text-right gap-2 flex items-center justify-end">
                  <Button className="bg-[#6eddcec9]/70 text-white">
                    <Pencil />
                  </Button>
                  <Button className="bg-[#d28fdb] text-white">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#1">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#2">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
