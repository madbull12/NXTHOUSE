import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="flex min-h-[90vh]  gap-x-4 w-full py-16 flex-col  justify-center ">
      <BiLoader className="text-4xl animate-spin" />
    </div>
  );
};

export default Loader;
