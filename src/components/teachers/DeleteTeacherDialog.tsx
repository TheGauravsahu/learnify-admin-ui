import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { useMutation } from "@apollo/client/react";
import { DELETE_TEACHER } from "@/graphql/queries/teacher.query";
import { toast } from "sonner";

interface DeleteTeacherDialogProps {
  teacherId: string;
}

export default function DeleteTeacherDialog({
  teacherId,
}: DeleteTeacherDialogProps) {
  const [deleteTeacher, { loading }] = useMutation(DELETE_TEACHER, {
    refetchQueries: ["ListTeachers"],
    awaitRefetchQueries: true,
  });

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-[#d28fdb] text-white">
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="dark:text-foreground">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <DialogClose>
            <Button
              onClick={() => {
                deleteTeacher({
                  variables: {
                    teacherId,
                  },
                });
                toast.success("Teacher deleted successfully.");
              }}
              type="submit"
              variant="destructive"
              disabled={loading}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
