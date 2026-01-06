import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useMutation } from "@apollo/client/react";
import { LOGIN } from "@/graphql/queries/auth.query";
import Loader from "../common/Loader";
import { toast } from "sonner";
import { Switch } from "../ui/switch";
import { useAuthStore, type LoginResponse } from "@/stores/auth.store";
import { Navigate, useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(3, "Username must be atlease 3 characters long."),
  password: z.string().min(6, "Password must be atleast 6 characters long."),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof schema>;

export default function LoginForm() {
  const { isAuthenticated } = useAuthStore();

  const navigate = useNavigate();
  const authStore = useAuthStore();
  const [login, { loading }] = useMutation(LOGIN);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit({ username, password, rememberMe }: LoginFormValues) {
    login({
      variables: { input: { email: username, password } },
      onCompleted: (res) => {
        const { login: data } = res as { login: LoginResponse };

        // 🚫 ROLE CHECK
        if (data.user.role !== "ADMIN") {
          toast.error("Access denied. Admins only.");
          return;
        }

        // cache login credentials
        if (rememberMe) {
          localStorage.setItem(
            "loginCred-cache",
            JSON.stringify({
              rememberMe: true,
              username,
            })
          );
        } else {
          localStorage.removeItem("loginCred-cache");
        }

        authStore.login({
          user: data.user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          rememberMe,
        });

        toast.success("Login successfully.");
        navigate("/dashboard");
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err);
        throw err;
      },
    });
  }

  useEffect(() => {
    const raw = localStorage.getItem("loginCred-cache");
    if (!raw) return;

    const parsed = JSON.parse(raw) as {
      rememberMe?: boolean;
      username?: string;
    };

    if (parsed.rememberMe && parsed.username) {
      form.setValue("username", parsed.username);
      form.setValue("rememberMe", true);
    }
  }, [form]);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <Card className="dark:border-0 h-100 w-100">
      <CardHeader>
        <CardTitle className="text-lg">Welcome Back</CardTitle>
        <CardDescription className="text-sm">
          Enter you admin credentials to login.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2">Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter username" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      placeholder="Enter password."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex justify-between">
                  <FormLabel className="mb-2">Remember Me?</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={loading} className="w-full">
              {loading ? (
                <span className="flex items-center gap-1">
                  <Loader />
                  <span className="flex items-center gap-1">
                    Login <ArrowRight />
                  </span>
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  Login <ArrowRight />
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
