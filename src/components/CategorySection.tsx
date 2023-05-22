"use client";

import { categories } from "@/data";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { v4 } from 'uuid';

const CategorySection = () => {
    const [_category,setCategory] = useState("Rooms")
  return (
    <section className="p-4 flex bg-white shadow-sm items-center gap-x-6 space-between w-full ">
      {categories.map((category) => (
        <div key={v4()} onClick={()=>setCategory(category.title)} className={cn('flex flex-col items-center gap-y-2 cursor-pointer group  border-black py-2',{
            "border-b-2" :(category.title === _category)
        })}>
          <img src={category.icon} height={30} width={30} />
          <p className="text-xs">{category.title}</p>
        </div>
      ))}
    </section>
  );
};

export default CategorySection;
