"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import FilterBoxSearch from "./FilterBoxSearch";
import { useOnClickOutside } from "usehooks-ts";
import FilterBoxCategory from "./FilterBoxCategory";
const Header = () => {
  const { data: session } = useSession();
  const headerRef = useRef(null);
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const handleClickHeader = () => {
    if (!headerExpanded) {
      setHeaderExpanded(true);
    } else {
      setHeaderExpanded(false);
    }
  };

  const closeExpandedHeader = () => {
    setHeaderExpanded(false)
  }

  useOnClickOutside(headerRef, closeExpandedHeader);

  return (
    <div className="flex flex-col sticky top-0  z-[100] right-0">
      <motion.header
         animate={{
          height: headerExpanded ? 200 : 100,
        }}
        ref={headerRef}
        className={`bg-background p-4 border-b ease-in-out transition  duration-150 `}
      >
        <div className="max-w-7xl mx-auto flex  justify-between items-center">
          <Logo />
          {headerExpanded ? <FilterBoxCategory /> : null}
          {!headerExpanded ? (
            <BookingButton
              handleClick={handleClickHeader}
              headerExpanded={headerExpanded}
            />
          ) : null}

          <div className="flex items-center  gap-x-2 ">
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
        {headerExpanded ? <FilterBoxSearch /> : null}
      </motion.header>
      <CategorySection />
    </div>
  );
};

export default Header;
