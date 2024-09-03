import { createSlice } from "@reduxjs/toolkit";
export interface IFacilityState {
  id: string;
  name: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
}

const initialState: IFacilityState = {
  id: "",
  name: "",
  description: "",
  pricePerHour: 0,
  location: "",
  isDeleted: false,
};

const facilitySlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setFacilityId: (state, action) => {
      state.id = action.payload;
    },
    setFacilityName: (state, action) => {
      state.name = action.payload;
    },
    setFacilityDescription: (state, action) => {
      state.description = action.payload;
    },
    setFacilityPrice: (state, action) => {
      state.pricePerHour = action.payload;
    },
    setFacilityLocation: (state, action) => {
      state.location = action.payload;
    },
    resetFacility: (state) => {
      state.name = "";
      state.description = "";
      state.location = "";
      state.pricePerHour = 0;
    },
  },
});

export const {
  setFacilityId,
  setFacilityDescription,
  setFacilityLocation,
  setFacilityName,
  setFacilityPrice,
  resetFacility,
} = facilitySlice.actions;

export default facilitySlice.reducer;
