import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { auth, signIn, signOut } from "@/auth";
import { Badge } from "./ui/badge";

const LoginButton = async ({
  className,
  longText = false,
}: {
  className?: string;
  longText?: boolean;
}) => {
  const session = await auth();
  const user = session?.user;
  return (
    <>
      {user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn("flex items-center gap-2", {
                [className || ""]: className,
              })}
            >
              <Avatar>
                <AvatarImage
                  src={user.image || ""}
                  alt={`${user.name || "User"} avatar`}
                />
                <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <span className="paragraph hidden text-white xs:flex md:hidden">
                {user.name || "User"}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[99]">
              <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                Profile <Badge className="caption">DEV</Badge>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                My Blogs <Badge className="caption">DEV</Badge>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 dark:text-red-400">
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button
                    type="submit"
                    className="flex w-full items-center gap-1"
                  >
                    <LogOut className="size-[1.1em]" />
                    Logout
                  </button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button
            variant="secondary"
            className={cn("w-full py-2 md:w-fit", className || "")}
            title="Log In with Google"
          >
            <Image
              src="/icons/google.png"
              alt="Login with Google"
              width={20}
              height={20}
            />
            Login{longText && <> with Google</>}
          </Button>
        </form>
      )}
    </>
  );
};

export default LoginButton;
