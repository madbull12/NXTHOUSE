import { houses } from "@/fakeData";
import React from "react";
import HouseCard from "./HouseCard";

const HouseList = () => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-6">
      {houses.map((house) => (
        <HouseCard  house={house}/>
      ))}
    </div>
  );
};

export default HouseList;
