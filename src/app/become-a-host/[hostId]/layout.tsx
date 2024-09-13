import Container from "@/components/Container";
import HostFooter from "@/components/HostFooter";
import Logo from "@/components/Logo";
import { auth } from "@/lib/auth";

import React from "react";



const Layout = async({ children }: { children: React.ReactNode, }) => {
  const session = await auth();


  return (
    <div>
      <header className="fixed z-50 bg-background border-b  top-0 max-w-7xl mx-auto p-4 right-0 left-0 w-full flex items-center  justify-between">
        <Logo />
        <button className="text-sm px-4 py-2 rounded-full font-[500] hover:border-black transition-colors ease-in-out border">
          Save & exit
        </button>
      </header>

      {children}
    </div>
  );
};

export default Layout;
