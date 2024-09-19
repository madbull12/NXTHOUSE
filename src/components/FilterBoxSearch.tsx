import React from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
const variants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};
const FilterBoxSearch = () => {
  return (
    <AnimatePresence >
      <motion.div
      key='filter-box'
        variants={variants}
        animate={"visible"}
        initial={"hidden"}
        exit="hidden"
        className="rounded-full w-3/4 shadow-lg mx-auto h-20 bg- flex justify-between my-4"
      >
        <Button
          variant={"ghost"}
          className="rounded-full h-full flex flex-col items-start flex-1"
        >
          <p>Where</p>
          <p className="text-gray-400">Search destinations</p>
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full h-full flex flex-col items-start flex-1"
        >
          <p>Where</p>
          <p className="text-gray-400">Search destinations</p>
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full h-full flex flex-col items-start flex-1"
        >
          <p>Where</p>
          <p className="text-gray-400">Search destinations</p>
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full h-full flex flex-col items-start flex-1"
        >
          <p>Where</p>
          <p className="text-gray-400">Search destinations</p>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FilterBoxSearch;
