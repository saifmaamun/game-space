import { createSlice } from "@reduxjs/toolkit";

export interface TAvailabilityCheck {
  facility: string;
  date: string;
}
const initialState: TAvailabilityCheck = {
  facility: "",
  date: "",
};

const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setFacilityForAvaiblablityChecking: (state, action) => {
      state.facility = action.payload;
    },
    setDateForAvaiblablityChecking: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {
  setDateForAvaiblablityChecking,
  setFacilityForAvaiblablityChecking,
} = availabilitySlice.actions;

export default availabilitySlice.reducer;
