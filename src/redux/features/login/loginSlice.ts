import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginFormInput } from "../../../types/userData";

const initialState: ILoginFormInput = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { setEmail, setPassword, resetForm } = loginSlice.actions;

export default loginSlice.reducer;
