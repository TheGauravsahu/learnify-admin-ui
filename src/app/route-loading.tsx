import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoadingBar } from "react-top-loading-bar";

export default function RouteLoading() {
  const location = useLocation();
  const { start, complete } = useLoadingBar();

  useEffect(() => {
    start();
    // Simulate page load completion
    const timeout = setTimeout(() => {
      complete();
    }, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname, complete, start]);

  return null;
}
