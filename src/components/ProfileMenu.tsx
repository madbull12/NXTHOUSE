import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AlignJustify } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

const ProfileMenu = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex rounded-full p-2 border items-center gap-x-2 hover:shadow-lg cursor-pointer transition-all duration-150 ease-in-out">
          <AlignJustify size={15} />
          <Avatar>
            <AvatarImage
              className="rounded-full"
              height={40}
              width={40}
              src={
                status === "unauthenticated"
                  ? "https://github.com/shadcn.png"
                  : session?.user.image!
              }
            />
            <AvatarFallback>
              <Skeleton className="w-[40px] h-[40px] rounded-full" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]" align="end">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        {status === "unauthenticated" ? (
          <>
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/auth/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className=" cursor-pointer">
              <Link href="/auth/register">Register</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem className="cursor-pointer" onClick={()=>signOut()}>
            Logout
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
