import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="w-full h-full">
      <Loader2 className="animate-spin" />
    </div>
  );
}

export const ScreenLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
};
