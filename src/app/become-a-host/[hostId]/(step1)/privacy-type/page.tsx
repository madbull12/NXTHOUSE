"use client";
import Container from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";
import { BsFillHouseDoorFill,BsDoorOpenFill } from 'react-icons/bs';
import { FaPeopleArrows } from 'react-icons/fa'

const PrivacyTypePage = () => {
    const placeTypes = [{
        title:"An entire place",
        description:"Guests have the whole place to themselves",
        icon:<BsFillHouseDoorFill />
    },{
        title:"A room",
        description:"Guests have their own room in a home, plus access to shared spaces",
        icon:<BsDoorOpenFill />
    },{
        title:"Share room",
        description:"Guests sleep in a room or common area that may be shared with you or others",
        icon:<FaPeopleArrows />
    }]
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
        <div className="mt-8 space-y-4 ">
          {placeTypes.map((type,i)=>(
            <div key={i} className="p-6 flex transition-all ease-in-out duration-75 ring-1 ring-gray-300 items-center hover:ring-black cursor-pointer hover:ring-2  justify-between rounded-xl">
                <div>
                    <h1 className="font-[500] text-lg">{type.title}</h1>
                    <p className="text-sm">{type.description}</p>
                </div>
                <span className="text-3xl">
                {type.icon}

                </span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PrivacyTypePage;
