import Container from "@/components/Container";
import Logo from "@/components/Logo";
import React from "react";

const Layout = () => {
  return (
    <div>
      <Container>
        <header className=" flex items-center justify-between">
          <Logo />
          <button className="text-sm px-4 py-2 rounded-full font-[500] hover:border-black transition-colors ease-in-out border">
            Save & exit
          </button>
        </header>
      </Container>
    </div>
  );
};

export default Layout;
