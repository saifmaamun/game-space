import { createSlice } from "@reduxjs/toolkit";

export interface TBooking {
  facility: string;
  date: string;
  startTime: string;
  endTime: string;
}
const initialState: TBooking = {
  facility: "",
  date: "",
  startTime: "",
  endTime: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBookingFacility: (state, action) => {
      state.facility = action.payload;
    },
    setBookingDate: (state, action) => {
      state.date = action.payload;
    },
    setBookingStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setBookingEndTime: (state, action) => {
      state.endTime = action.payload;
    },
  },
});

export const {
  setBookingStartTime,
  setBookingEndTime,
  setBookingDate,
  setBookingFacility,
} = bookingSlice.actions;

export default bookingSlice.reducer;
