import { create } from "zustand";

interface HousingState {
  structure: string;
}

interface HousingStoreState {
  housing: HousingState;
  setStructure:(value:string)=>void;
}

export const useHousingStore = create<HousingStoreState>((set) => ({
  housing: {
    structure: "",
  },
  setStructure: (value: string) => {
    set((state) => ({
      housing: { ...state.housing, structure: value },
    }));
  },
}));
