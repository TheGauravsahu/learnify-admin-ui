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
import { toast } from "sonner";
import { DELETE_CLASS } from "@/graphql/queries/classes.query";

export default function DeleteClassDialog({ classId }: { classId: string }) {
  const [deleteClass, { loading }] = useMutation(DELETE_CLASS, {
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
            This action cannot be undone. This will permanently delete the
            classs and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <DialogClose>
            <Button
              onClick={() => {
                deleteClass({
                  variables: {
                    classId,
                  },
                  onCompleted: () => {
                    toast.success("Class deleted successfully.");
                  },
                  onError: (err) => {
                    toast.error(err.message);
                    throw err;
                  },
                });
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
