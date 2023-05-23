"use client";

import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
const Overlay: FC<Props> = ({ children }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md absolute top-0 right-0 bottom-0 left-0  grid place-items-center">
      {children}
    </div>
  );
};

export default Overlay;
