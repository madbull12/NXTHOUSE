import Container from "@/components/Container";
import HostFooter from "@/components/HostFooter";
import Logo from "@/components/Logo";
import { getCurrentUser } from "@/lib/session";
import { User } from "@prisma/client";
import React from "react";

const Layout = async({ children }: { children: React.ReactNode, }) => {
  const session = await getCurrentUser();


  return (
    <div>
      <header className="fixed bg-white border-b  top-0 max-w-7xl mx-auto p-4 right-0 left-0 w-full flex items-center  justify-between">
        <Logo />
        <button className="text-sm px-4 py-2 rounded-full font-[500] hover:border-black transition-colors ease-in-out border">
          Save & exit
        </button>
      </header>

      {children}
      <Container>
        <HostFooter to="/about-your-place" session={session as User} />
      </Container>
    </div>
  );
};

export default Layout;
