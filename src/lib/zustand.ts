import { create } from "zustand";

interface HousingState {
  structure: string;
  privacyType:string;
  location:null | {
    lat:number | null;
    long:number | null;
  }
}

interface HousingStoreState {
  housing: HousingState;
  setStructure:(value:string)=>void;
  setPrivacyType:(value:string)=>void;
  setLocation:(latitude:number,longitude:number)=>void;
}

export const useHousingStore = create<HousingStoreState>((set) => ({
  housing: {
    structure: "",
    privacyType:"",
    location:null
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
  }
}));
