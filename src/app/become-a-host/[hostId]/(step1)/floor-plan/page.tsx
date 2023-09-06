"use client";

import Container from "@/components/Container";
import React from "react";
import { motion } from "framer-motion";
import HostFooter from "@/components/HostFooter";
import { Button } from "@/components/ui/button";
import { useHousingStore } from "@/lib/zustand";
import { FloorPlan } from "@/types/types";

const PlanCounter = ({title }:{title:string})=>{
  const { housing,setFloorPlan } = useHousingStore();
  const value = housing?.floorPlan[title as keyof FloorPlan];
  return (
    <div className="flex items-center justify-between py-8 border-b-border border-b">
      <span className="text-lg capitalize">{title}</span>
      <div className="gap-4 flex items-center">
        <Button variant="outline" disabled={value <= 1} onClick={()=>setFloorPlan({
          ...housing.floorPlan,
          [title]:value -1
        })}>-</Button>
        <span>{housing?.floorPlan[title as keyof FloorPlan]}</span>
        <Button variant="outline"  onClick={()=>setFloorPlan({
          ...housing.floorPlan,
          [title]:value + 1
        })}>+</Button>

      </div>
    </div>
  )
}

const FloorPlanPage = () => {
  return (
    <Container>
      <div className="flex min-h-[90vh]  gap-x-4 mx-auto py-16 flex-col max-w-2xl  justify-center leading-4">
        <h1 className="text-4xl font-[500] ">
          Share some basics about your place
        </h1>
        <p className="text-lg">You'll add more details later, like bed types.</p>
        <PlanCounter title="guests" />
        <PlanCounter title="bedrooms" />
        <PlanCounter title="beds" />
        <PlanCounter title="bathrooms" />
      </div>
      <HostFooter disableNext={false} />
    </Container>
  );
};

export default FloorPlanPage;
