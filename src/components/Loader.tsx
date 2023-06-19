import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="flex min-h-screen   w-full items-center    justify-center ">
      <BiLoader className="text-4xl animate-spin" />
    </div>
  );
};

export default Loader;
