import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LIST_CLASSES } from "@/graphql/queries/classes.query";
import { useQuery } from "@apollo/client/react";
import { ScreenLoader } from "@/components/common/Loader";
import ErrorOccurred from "@/components/common/ErrorOccurred";
import type { ListClassesQuery } from "@/gql/graphql";
import DeleteClassDialog from "@/components/classes/DeleteClassDialog";
import EditClassDialog from "@/components/classes/EditClassDialog";

export default function ClassesListPage() {
  const { data, loading, error } = useQuery<ListClassesQuery>(LIST_CLASSES);

  if (loading) return <ScreenLoader />;
  if (error) return <ErrorOccurred error={error} />;

  return (
    <div className="bg-background flex-1 m-4 mt-0">
      <div className="mt-4">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-70">Class ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Session</TableHead>
              <TableHead>Section</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.classes.map((grade) => (
              <TableRow
                key={grade._id}
                className="even:bg-slate-50 dark:even:bg-secondary px-4 border-none cursor-pointer"
              >
                <TableCell>{grade._id}</TableCell>
                <TableCell>{grade.name}</TableCell>
                <TableCell>{grade.academicYear}</TableCell>
                <TableCell>{grade.section}</TableCell>
                <TableCell className="text-right gap-2 flex items-center justify-end">
                  <DeleteClassDialog classId={grade._id} />
                  <EditClassDialog grade={grade} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
