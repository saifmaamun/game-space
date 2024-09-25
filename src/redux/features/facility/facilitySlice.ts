import { createSlice } from "@reduxjs/toolkit";
export interface IFacilityState {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
  oldData: {
    name: string;
    description: string;
    imgUrl: string;
    pricePerHour: number;
    location: string;
  };
}

const initialState: IFacilityState = {
  id: "",
  name: "",
  description: "",
  imgUrl: "",
  pricePerHour: 0,
  location: "",
  isDeleted: false,
  oldData: {
    name: "",
    description: "",
    imgUrl: "",
    pricePerHour: 0,
    location: "",
  },
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
    setFacilityImageUrl: (state, action) => {
      state.imgUrl = action.payload;
    },
    setFacilityPrice: (state, action) => {
      state.pricePerHour = action.payload;
    },
    setFacilityLocation: (state, action) => {
      state.location = action.payload;
    },
    setOldFacility: (state, action) => {
      state.oldData.name = action.payload.name;
      state.oldData.description = action.payload.description;
      state.oldData.location = action.payload.location;
      state.oldData.pricePerHour = action.payload.pricePerHour;
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
  setFacilityImageUrl,
  setFacilityLocation,
  setFacilityName,
  setFacilityPrice,
  setOldFacility,
  resetFacility,
} = facilitySlice.actions;

export default facilitySlice.reducer;
