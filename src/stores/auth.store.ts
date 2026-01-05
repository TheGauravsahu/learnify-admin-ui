import type { User } from "@/gql/graphql";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface LoginResponse {
  user: User;
  token: string;
  rememberMe?: boolean;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (data: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: ({ user, token }) => {
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },
      logout: () => {
        toast.success("Logged out successfully.");
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "learnify-auth-store",
    }
  )
);
