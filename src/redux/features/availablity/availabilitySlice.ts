import { createSlice } from "@reduxjs/toolkit";

export interface TAvailabilityCheck {
  facility: string;
  date: string;
  //   startTime: string;
  //   endTime: string;
}
const initialState: TAvailabilityCheck = {
  facility: "",
  date: "",
  //   startTime: "",
  //   endTime: "",
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
    // setStartTime: (state, action) => {
    //   state.startTime = action.payload;
    // },
    // setEndTime: (state, action) => {
    //   state.endTime = action.payload;
    // },
  },
});

export const {
  setDateForAvaiblablityChecking,
  setFacilityForAvaiblablityChecking,
} = availabilitySlice.actions;

export default availabilitySlice.reducer;
