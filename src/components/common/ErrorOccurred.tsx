import { useAuthStore } from "@/stores/auth.store";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

export interface ErrorOccurredProps {
  error?: Error | string;
  title?: string;
  description?: string;
}

export default function ErrorOccurred({
  error,
  title = "Something went wrong",
  description = "An unexpected error occurred. Please try again later.",
}: ErrorOccurredProps) {
  const { logout } = useAuthStore();
  const errorMessage =
    typeof error === "string" ? error : error?.message ?? "Unknown error";

  useEffect(() => {
    if (errorMessage === "Authentication required") {
      toast.error("Session expired. Please login again.");
      logout();
    }
  }, [errorMessage, logout]);

  if (errorMessage === "Authentication required") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 text-center">
      <img
        src="./server-error.svg"
        alt="Error"
        className="w-64 mb-6 opacity-90"
      />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground max-w-md mb-4">{description}</p>

      {error && (
        <code className="bg-destructive/10 text-destructive px-4 py-2 rounded text-sm">
          {errorMessage}
        </code>
      )}
    </div>
  );
}
