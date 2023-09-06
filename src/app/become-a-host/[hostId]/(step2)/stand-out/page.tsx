"use client"

import Container from "@/components/Container";
import HostFooter from "@/components/HostFooter";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const StandoutPage = () => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <Container>
      <motion.div
        variants={variants}
        initial="hidden"
        transition={{
          ease: "easeInOut",
          duration: 0.7,
        }}
        animate="visible"
        exit="exit"
        className="flex min-h-[90vh]  gap-x-4 md:items-center py-16 flex-col md:flex-row"
      >
        <div className="flex flex-col gap-y-4 w-full md:w-1/2">
          <p>Step 2</p>
          <h1 className=" text-3xl md:text-5xl font-[500] leading-[1.12] ">
            Make your place stand out
          </h1>
          <p>
          In this step, you’ll add some of the amenities your place offers, plus 5 or more photos. Then, you’ll create a title and description.
          </p>
        </div>

        <div className="md:w-1/2 ">
          <Image
            alt="isometric-3d"
            src="/assets/isometric-3d.png"
            sizes="100vw"
            height={100}
            width={200}
            className="w-full h-full"
          />
        </div>
      </motion.div>
      <HostFooter disableNext={false} />
    </Container>
  );
};

export default StandoutPage;
