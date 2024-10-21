import { createSlice } from "@reduxjs/toolkit";

export interface TLoading {
  isLoading: boolean;
}

const initialState: TLoading = {
  isLoading: false,
};

const loadingStateSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingStateSlice.actions;

export default loadingStateSlice.reducer;
