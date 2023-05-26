import Logo from "@/components/Logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="p-4">
      <Logo />
      {children}
    </header>
  );
};

export default AuthLayout;
