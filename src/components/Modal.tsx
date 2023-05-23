import React, { ReactNode } from "react";

import Overlay from "./Overlay";
import { AiOutlineClose } from "react-icons/ai";
const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <Overlay>
      <div className="bg-primary text-primary-foreground max-w-lg rounded-lg">{children}</div>
    </Overlay>
  );
};

export default Modal;
