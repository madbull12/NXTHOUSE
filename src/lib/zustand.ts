import { create } from "zustand";

interface HousingState {
  structure: string;
  privacyType:string;
}

interface HousingStoreState {
  housing: HousingState;
  setStructure:(value:string)=>void;
  setPrivacyType:(value:string)=>void;
}

export const useHousingStore = create<HousingStoreState>((set) => ({
  housing: {
    structure: "",
    privacyType:""
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
}));
