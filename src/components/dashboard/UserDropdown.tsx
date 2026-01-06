import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOGOUT } from "@/graphql/queries/auth.query";
import { useAuthStore } from "@/stores/auth.store";
import { useMutation } from "@apollo/client/react";
import { LogOutIcon } from "lucide-react";
import { toast } from "sonner";

export default function UserDropdown() {
  const { user, logout, refreshToken } = useAuthStore();
  const [logoutUser, { loading }] = useMutation(LOGOUT);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant={"ghost"}
          className="p-5 gap-4 flex items-center justify-between"
        >
          <div className="grid flex-1 text-left text-sm *:text-right leading-tight">
            <span className="truncate font-medium text-sm ">{user?.name}</span>
            <span className="text-muted-foreground truncate text-xs">
              {user?.email}
            </span>
          </div>
          <Avatar className="h-8 w-8 rounded-lg grayscale">
            {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
            <AvatarFallback className="rounded-lg bg-background capitalize">
              {user?.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={"bottom"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
              <AvatarFallback className="rounded-lg">
                {user?.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user?.name}</span>
              <span className="text-muted-foreground truncate text-xs">
                {user?.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <IconUserCircle /> */}
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <IconCreditCard /> */}
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <IconNotification /> */}
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logoutUser({
              variables: {
                refreshToken,
              },
              onCompleted: () => {
                logout();
              },
              onError: (err) => {
                toast.error(err.message);
              },
            });
          }}
          disabled={loading}
        >
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
