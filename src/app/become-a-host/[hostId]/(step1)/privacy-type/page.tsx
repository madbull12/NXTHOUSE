"use client";
import Container from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";
import { BsFillHouseDoorFill, BsDoorOpenFill } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { useHousingStore } from "@/lib/zustand";

const PrivacyTypePage = () => {
  const placeTypes = [
    {
      title: "An entire place",
      description: "Guests have the whole place to themselves",
      icon: <BsFillHouseDoorFill />,
    },
    {
      title: "A room",
      description:
        "Guests have their own room in a home, plus access to shared spaces",
      icon: <BsDoorOpenFill />,
    },
    {
      title: "A Shared room",
      description:
        "Guests sleep in a room or common area that may be shared with you or others",
      icon: <FaPeopleArrows />,
    },
  ];

  const container = {
    hidden: {
      y: -50,
      opacity: 0, //move out of the site
    },
    show: {
      opacity: 1,
      y: 0, // bring it back to nrmal
      transition: { staggerChildren: 0.3,delay:0.4 },
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
        duration: .3,
      },
    },
  };
  const { setPrivacyType, housing } = useHousingStore();
  console.log(housing);

  return (
    <Container>
      <div className="flex min-h-[90vh]  gap-x-4 mx-auto py-16 flex-col max-w-2xl  justify-center ">
        <motion.h1
          animate={{
            y: 0, // bring it back to nrmal
            opacity: 1,
            transition: {
              duration: 0.5,
              easings: ["easeInOut"],
            },
          }}
          initial={{
            y: 50, //move out of the site
            opacity: 0,
          }}
          className="text-4xl font-[500] "
        >
          What type of place will guests have?
        </motion.h1>
        <motion.div
          className="mt-8 space-y-4 "
          variants={container}
          initial="hidden"
          animate="show"
        >
          {placeTypes.map((type, i) => {
            return (
              <motion.div
                onClick={() => setPrivacyType(type.title)}
                key={i}
                variants={listVariant}
                className={` ${
                  type.title === housing.privacyType
                    ? "ring-2 ring-black "
                    : "ring-1 ring-gray-300"
                } p-6 flex transition-all ease-in-out duration-75 items-center hover:ring-border cursor-pointer hover:ring-2  justify-between rounded-xl`}
              >
                <div>
                  <h1 className="font-[500] text-lg">{type.title}</h1>
                  <p className="text-sm">{type.description}</p>
                </div>
                <span className="text-3xl">{type.icon}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Container>
  );
};

export default PrivacyTypePage;
