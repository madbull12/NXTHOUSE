import { houses } from "@/fakeData";
import React from "react";
import HouseCard from "./HouseCard";

const HouseList = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {houses.map((house) => (
        <HouseCard key={house.id}  house={house}/>
      ))}
    </div>
  );
};

export default HouseList;
