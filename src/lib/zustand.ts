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
  amenities:string[];
}

interface HousingStoreState {
  housing: HousingState;
  setStructure:(value:string)=>void;
  setPrivacyType:(value:string)=>void;
  setLocation:(latitude:number,longitude:number)=>void;
  setFloorPlan:(floorPlan:FloorPlan)=>void;
  addAmenities:(value:string)=>void;
  deleteAmenity:(value:string)=>void;
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
    },
    amenities:[]
  },
  setStructure: (value) => {
    set((state) => ({
      housing: { ...state.housing, structure: value },
    }));
  },
  setPrivacyType: (value) => {
    set((state) => ({
        housing:{...state.housing,privacyType:value}
    }));
  },
  setLocation:(lat,long) => {
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

  setFloorPlan:(value)=>{
    set((state)=>({
      housing:{
        ...state.housing,
        
        floorPlan:{
          ...value
        }
      }
    }))
  },
  addAmenities(value) {
    set((state)=>({
      housing:{
        ...state.housing,
        amenities:[...state.housing.amenities,value]
      }
    }))
  },
  deleteAmenity(value) {
    set((state)=>({
      housing:{
        ...state.housing,
        amenities:state.housing.amenities.filter((x)=>x !== value)
      }
    }))
  }


}));
