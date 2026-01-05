import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="flex bg-background text-foreground flex-col items-center justify-center h-screen w-full px-4 text-center">
      <img
        src="/unauthorized.svg"
        alt="Error"
        className="w-64 mb-6 opacity-90"
      />
      <h2 className="text-2xl font-semibold mb-2">Unauthorized</h2>
      <code className="bg-destructive/10 text-destructive px-4 py-2 rounded text-sm mb-4">
        You are not authorized to access this page
      </code>

      <Link className={buttonVariants({ variant: "secondary" })} to="/">
        <ArrowLeft /> Go Back
      </Link>
    </div>
  );
}
