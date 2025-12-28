import { type Teacher } from "@/gql/graphql";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { generatePassword } from "@/utils/passwordGen";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const schema = z.object({
  register: z.object({
    name: z.string().min(2),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    sendWelcomeEmail: z.boolean(),
  }),
  subject: z.string().min(2).max(50),
  experience: z.number().min(0),
});

interface TeacherFormProps {
  mode: "create" | "update";
  initialData?: Teacher;
  onSubmit: (value: TeacherFormValues) => void;
  loading: boolean;
}

type TeacherFormValues = z.infer<typeof schema>;

export default function TeacherForm({
  mode,
  initialData,
  onSubmit,
  loading,
}: TeacherFormProps) {
  const form = useForm<TeacherFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      register: {
        name: "",
        email: "",
        password: generatePassword(),
        sendWelcomeEmail: true,
      },

      subject: "",
      experience: 0,
    },
  });

  useEffect(() => {
    if (mode === "update" && initialData) {
      form.reset({
        register: {
          name: initialData.user.name,
          email: initialData.user.email,
          password: "",
          sendWelcomeEmail: false,
        },
        subject: initialData.subject,
        experience: initialData.experience,
      });
    }
  }, [mode, initialData, form]);

  const generateAndSetPassword = () => {
    form.setValue("register.password", generatePassword(20));
  };

  const handleSubmit = async (values: TeacherFormValues) => {
    await onSubmit(values);

    if (mode === "create") {
      form.reset({
        register: {
          name: "",
          email: "",
          password: generatePassword(),
          sendWelcomeEmail: true,
        },
        subject: "",
        experience: 0,
      });
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-lightYellow hover:bg-yellow-400 text-black rounded-full">
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="capitalize">{mode} Teacher</SheetTitle>
          <SheetDescription>
            Make changes to teacher here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form>
            <Tabs
              className="w-100 px-6 overflow-y-scroll hide-scrollbar"
              defaultValue="account"
            >
              <TabsList className="*:cursor-pointer">
                <TabsTrigger className="py-4 px-8" value="account">
                  Account Details
                </TabsTrigger>
                <TabsTrigger className="py-4 px-8" value="teacher">
                  Teacher Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-4 pt-4">
                <FormField
                  control={form.control}
                  name="register.name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2">Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter full name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="register.email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2">Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-end   gap-2">
                  <FormField
                    control={form.control}
                    name="register.password"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="mb-2">Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter password"
                            type="text"
                            {...field}
                            className="dark:text-muted-foreground"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="button"
                    variant="outline"
                    onClick={generateAndSetPassword}
                    className="dark:text-foreground"
                  >
                    Generate
                  </Button>
                </div>

                <div className="mt-6">
                  <FormLabel className="mb-2">Others</FormLabel>
                  <FormField
                    control={form.control}
                    name="register.sendWelcomeEmail"
                    render={({ field }) => (
                      <FormItem className="flex items-start justify-between mt-1  border border-gray-300 cursor-pointer p-4 py-3 rounded-lg shadow-md">
                        <FormLabel className="mb-2 dark:text-muted-foreground">
                          Send Welcome Email
                        </FormLabel>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-6 pt-4">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2">Subjects</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter subjects" {...field} />
                      </FormControl>
                      <FormDescription>Eg. "Maths, Science".</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-2">
                        Experience
                        <span className="text-primary/80">(years)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter experience"
                          className="dark:text-foreground"
                          {...field}
                          onChange={(e) =>
                            field.onChange(e.target.valueAsNumber)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>
          </form>
        </Form>

        <SheetFooter>
          <Button
            disabled={loading}
            onClick={form.handleSubmit(handleSubmit)}
            type="submit"
          >
            Save changes
          </Button>

          <SheetClose asChild>
            <Button className="dark:text-muted-foreground" variant="outline">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
