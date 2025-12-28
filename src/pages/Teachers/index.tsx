import ErrorOccurred from "@/components/common/ErrorOccurred";
import { ScreenLoader } from "@/components/common/Loader";
import TeacheListHeader from "@/components/teachers/TeacheListHeader";
import type { ListTeachersQuery } from "@/gql/graphql";
import { LIST_TEACHERS, UPDATE_TEACHER } from "@/graphql/queries/teacher.query";
import { useMutation, useQuery } from "@apollo/client/react";
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
import { useDebounce } from "@/hooks/useDebounce";
import DeleteTeacherDialog from "@/components/teachers/DeleteTeacherDialog";
import TeacherForm from "@/components/teachers/TeacherForm";
import { toast } from "sonner";

export default function TeacherListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") as "createdAt" | "experience";
  const sortOrder = searchParams.get("sortOrder") as "asc" | "desc";
  const limit = 10;
  const [searchInput, setSearchInput] = useState(search);
  const debouncedSearch = useDebounce(searchInput);

  const updateParam = (key: string, value: string | number) => {
    setSearchParams((prev) => {
      prev.set(key, String(value));
      return prev;
    });
  };

  const { data, loading, error } = useQuery<ListTeachersQuery>(LIST_TEACHERS, {
    variables: {
      page,
      limit,
      sortBy,
      sortOrder,
      search: debouncedSearch || undefined,
    },
    fetchPolicy: "cache-and-network",
  });
  const totalPages = Math.ceil((data?.teachers.total ?? 0) / limit);

  // ----------- UPDATE MUTATION ------
  const [updateTeacher, { loading: isUpdateTeacherLoadig }] =
    useMutation(UPDATE_TEACHER);

  if (loading) return <ScreenLoader />;
  if (error) return <ErrorOccurred error={error} />;

  return (
    <div className="bg-background p-4 rounded-md flex-1 m-4 mt-0">
      <TeacheListHeader
        updateParam={updateParam}
        sortOrder={sortOrder}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

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
            {data?.teachers.data.map((teacher) => (
              <TableRow
                key={teacher._id}
                className="even:bg-slate-50 dark:even:bg-secondary px-4 border-none cursor-pointer"
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
                  <TeacherForm
                    mode="update"
                    loading={isUpdateTeacherLoadig}
                    initialData={teacher}
                    onSubmit={async (values) => {
                      updateTeacher({
                        variables: {
                          teacherId: teacher._id,
                          input: values,
                        },
                        onCompleted: () => {
                          toast.success("Teacher updated successfully.");
                        },
                        onError: (err) => {
                          toast.error(err.message);
                          console.log(err);
                          throw err;
                        },
                      });
                    }}
                  />

                  <DeleteTeacherDialog teacherId={teacher._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => updateParam("page", Math.max(1, page - 1))}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    className="cursor-pointer"
                    isActive={page === i + 1}
                    onClick={() => updateParam("page", i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() =>
                    updateParam("page", Math.min(totalPages, page + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
