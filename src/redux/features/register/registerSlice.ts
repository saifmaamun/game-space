import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisterFormInput } from "../../../types/userData";

const initialState: IRegisterFormInput = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  role: "user",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },

    resetForm: () => {
      return initialState;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setAddress,
  setPhone,
  resetForm,
} = registerSlice.actions;

export default registerSlice.reducer;
