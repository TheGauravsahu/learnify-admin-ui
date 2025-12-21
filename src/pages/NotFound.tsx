import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full px-4 text-center">
      <img src="./not-found.svg" alt="Error" className="w-64 mb-6 opacity-90" />
      <h2 className="text-2xl font-semibold mb-2">404 Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-4">
        The page you are looking for does not exists.
      </p>

      <Link className={buttonVariants({ variant: "secondary" })} to="/">
        <ArrowLeft /> Go Back
      </Link>
    </div>
  );
}
