import { FloorPlan } from "@/types/types";
import { create } from "zustand";



interface HousingState {
  structure: string;
  privacyType:string;
  location:null | {
    lat:number | null;
    long:number | null;
  },
  floorPlan:FloorPlan;
}

interface HousingStoreState {
  housing: HousingState;
  setStructure:(value:string)=>void;
  setPrivacyType:(value:string)=>void;
  setLocation:(latitude:number,longitude:number)=>void;
  setFloorPlan:(floorPlan:FloorPlan)=>void;
}

export const useHousingStore = create<HousingStoreState>((set) => ({
  housing: {
    structure: "",
    privacyType:"",
    location:null,
    floorPlan:{
      guests:1,
      bedrooms:1,
      beds:1,
      bathrooms:1,
    }
  },
  setStructure: (value: string) => {
    set((state) => ({
      housing: { ...state.housing, structure: value },
    }));
  },
  setPrivacyType: (value: string) => {
    set((state) => ({
        housing:{...state.housing,privacyType:value}
    }));
  },
  setLocation:(lat:number,long:number) => {
    set((state)=>({
      housing:{
        ...state.housing,
        location:{
          lat,
          long
        }
      }
    }))
  },

  setFloorPlan:(value:FloorPlan)=>{
    set((state)=>({
      housing:{
        ...state.housing,
        floorPlan:{
          ...value
        }
      }
    }))
  }  
}));
