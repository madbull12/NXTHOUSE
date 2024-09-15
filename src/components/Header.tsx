"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./Logo";
import BookingButton from "./BookingButton";
import { Globe, AlignJustify } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CategorySection from "./CategorySection";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import ProfileDropdown from "./ProfileMenu";
import ProfileMenu from "./ProfileMenu";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./ModeToggle";
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const { data: session } = useSession();
  const languages = ['de','id','en']
  const pathname = usePathname();
  // if (pathname !== "/") {
  //   if (languages.some((item)=>pathname.includes(item))) {
  //     return (
  //       <div className="flex flex-col sticky top-0  z-[100] right-0">
  //         <header className="bg-background p-4 border-b">
  //           <div className="max-w-7xl mx-auto flex  justify-between items-center">
  //             <Logo />
  //             <BookingButton />
  //             <div className="flex items-center gap-x-2 ">
  //               <Link
  //                 href={`/become-a-host/${session?.user.id}/overview`}
  //                 className="hover:bg-secondary rounded-full px-4 py-2 text-sm"
  //               >
  //                 Host your house
  //               </Link>
  //               <LanguageDropdown />
  //               <ModeToggle />

  //               <ProfileMenu />
  //             </div>
  //           </div>
  //         </header>
  //         <CategorySection />
  //       </div>
  //     );
  //   }
  //   return null;
  // }

  return (
    <div className="flex flex-col sticky top-0  z-[100] right-0">
      <header className="bg-background p-4 border-b">
        <div className="max-w-7xl mx-auto flex  justify-between items-center">
          <Logo />
          <BookingButton />
          <div className="flex items-center gap-x-2 ">
            <Link
              href={`/become-a-host/${session?.user.id}/overview`}
              className="hover:bg-secondary rounded-full px-4 py-2 text-sm"
            >
              Host your house
            </Link>
            <LanguageDropdown />
   
            <ModeToggle />

            <ProfileMenu />
          </div>
        </div>
      </header>
      <CategorySection />
    </div>
  );
};

export default Header;
