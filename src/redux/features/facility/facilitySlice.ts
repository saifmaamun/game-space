import { createSlice } from "@reduxjs/toolkit";
export interface IFacilityState {
  id: string;
}

const initialState: IFacilityState = {
  id: "",
};

const facilitySlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    setFacilityId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setFacilityId } = facilitySlice.actions;

export default facilitySlice.reducer;
