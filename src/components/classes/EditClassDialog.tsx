import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useEffect } from "react";
import { useMutation } from "@apollo/client/react";
import { EDIT_CLASS } from "@/graphql/queries/classes.query";
import { toast } from "sonner";

interface IGrade {
  __typename?: "Class" | undefined;
  _id: string;
  name: string;
  section: string;
  academicYear: string;
  classTeacher?:
    | {
        __typename?: "Teacher" | undefined;
        _id: string;
        user: {
          __typename?: "User" | undefined;
          name: string;
        };
      }
    | null
    | undefined;
}

interface EditClassDialogProps {
  grade: IGrade | undefined;
}

const schema = z.object({
  name: z
    .string()
    .regex(/^(1[0-2]|[1-9])$/, "Class must be a number between 1 and 12"),

  section: z
    .string()
    .regex(/^[A-Z]$/, "Section must be a single capital letter (A-Z)"),
});

type EditClassFormValues = z.infer<typeof schema>;

export default function EditClassDialog({ grade }: EditClassDialogProps) {
  const form = useForm<EditClassFormValues>({
    defaultValues: {
      name: grade?.name,
      section: grade?.section,
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (grade) {
      form.reset({
        name: grade.name,
        section: grade.section,
      });
    }
  }, [grade, form]);

  const [editClass, { loading }] = useMutation(EDIT_CLASS, {
    refetchQueries: ["ListClasses"],
    awaitRefetchQueries: true,
  });

  function onSubmit(input: EditClassFormValues) {
    console.log(input);
    editClass({
      variables: {
        classId: grade?._id,
        input,
      },
      onCompleted: () => {
        toast.success("Class updated successfully.");
      },
      onError: (err) => {
        toast.error(err.message);
        throw err;
      },
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#6eddcec9]/70 text-white">
          <Pencil />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-106.25 dark:text-foreground border-none">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Edit Class</DialogTitle>
              <DialogDescription>
                Make changes to class here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mb-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2">Class Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter class name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="section"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-2">Section</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter section" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button disabled={loading} type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
