import type { User } from "@/gql/graphql";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
  rememberMe?: boolean;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;

  login: (data: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,

      login: ({ user, accessToken, refreshToken }) => {
        set({
          user,
          accessToken,
          refreshToken,
          isAuthenticated: true,
        });
      },
      logout: () => {
        toast.success("Logged out successfully.");
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "learnify-auth-store",
    }
  )
);
