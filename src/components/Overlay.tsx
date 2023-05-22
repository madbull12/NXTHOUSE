"use client";

import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const Overlay: FC<Props> = ({ children }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md min-h-screen w-full grid place-items-center">
      {children}
    </div>
  );
};

export default Overlay;
