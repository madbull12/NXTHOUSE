"use client";

import Container from "@/components/Container";
import React, { useRef, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import {
  MdApartment,
  MdCabin,
  MdCastle,
  MdFreeBreakfast,
  MdHouseboat,
} from "react-icons/md";
import {
  GiBarn,
  GiBaseDome,
  GiCaveEntrance,
  GiSailboat,
  GiTreehouse,
  GiWindmill,
} from "react-icons/gi";
import { RiCaravanFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { motion } from "framer-motion";
import { useHousingStore } from "@/lib/zustand";
import useOutsideClick from "@/hooks/use-outside-click";
import HostFooter from "@/components/HostFooter";
type HomeStructure = {
  icon: React.ReactElement;
  name: string;
};

const StructurePage = () => {
  const structures: HomeStructure[] = [
    {
      icon: <AiFillHome />,
      name: "House",
    },
    {
      icon: <MdApartment />,
      name: "Apartment",
    },
    {
      icon: <GiBarn />,
      name: "Barn",
    },
    {
      icon: <MdFreeBreakfast />,
      name: "Bed & Breakfast",
    },
    {
      icon: <GiSailboat />,
      name: "Boat",
    },
    {
      icon: <MdCabin />,
      name: "Cabin",
    },
    {
      icon: <RiCaravanFill />,
      name: "RV",
    },
    {
      icon: <MdCastle />,
      name: "Castle",
    },
    {
      icon: <GiCaveEntrance />,
      name: "Cave",
    },
    {
      icon: <GiBaseDome />,
      name: "Dome",
    },
    {
      icon: <FaHotel />,
      name: "Hotel",
    },
    {
      icon: <MdHouseboat />,
      name: "Houseboat",
    },
    {
      icon: <GiWindmill />,
      name: "Windmill",
    },
    {
      icon: <GiTreehouse />,
      name: "Treehouse",
    },
  ];
  const container = {
    hidden: {
      y: "-100vw",
      opacity: 0, //move out of the site
    },
    show: {
      opacity: 1,
      y: 0, // bring it back to nrmal
      transition: { staggerChildren: 0.2 },
    },
  };
  const listVariant = {
    hidden: {
      y: 50, //move out of the site
      opacity: 0,
      
    },
    show: {
      y: 0, // bring it back to nrmal
      opacity: 1,
      transition: {
        duration: 0.2,
        
      },
    },
  };
  const { housing, setStructure} = useHousingStore();

  const structureRef = useRef<HTMLDivElement>(null);



  console.log(housing)
  return (
    <Container>
      <div className="flex min-h-[90vh]  gap-x-4 mx-auto py-16 flex-col max-w-2xl  justify-center ">
        <motion.h1
          animate={{
            y: 0, // bring it back to nrmal
            opacity: 1,
            transition: {
              duration: 0.5,
              easings:["easeInOut"]
            },
          }}
          initial={{
            y: 50, //move out of the site
            opacity: 0,
          }}
          className="text-4xl font-[500] "
        >
          Which of these best describes <br /> your place?
        </motion.h1>
        {structures ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 mt-4 gap-4 w-full"
          >
            {structures.map((structure, i) => (
              <motion.div
                variants={listVariant}
                whileTap={{
                  scale:0.9
                }}
                key={i}
                ref={structureRef}
                onClick={()=>setStructure(structure.name)}
                className={`flex flex-col gap-y-2 p-4 group rounded-lg border transition-all ease-out duration-100 cursor-pointer hover:ring-2 ring-ring ${structure.name === housing.structure ? "ring-2" : ''}`}
              >
                <span className="text-3xl ">{structure.icon}</span>
                <p className="font-[500]">{structure.name}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
      <HostFooter disableNext={housing.structure === ""} />

    </Container>
  );
};

export default StructurePage;
