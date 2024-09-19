import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const FilterBoxCategory = () => {
  return (
    <motion.div className="flex items-center " initial={{ translateY:-100,scale:0}} animate={{translateY:0,scale:1}}>
      <Button variant={"ghost"} className="rounded-full">
        Stays
      </Button>
      <Button variant={"ghost"} className="rounded-full">
        Experiences
      </Button>
    </motion.div>
  );
};

export default FilterBoxCategory;
