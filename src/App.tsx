import AppRouter from "./app/router";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <AppRouter />;
      <Toaster position="top-center" />
    </>
  );
}

export default App;
