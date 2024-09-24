import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  token: "",

  user: {
    email: "",
    name: "",
    role: "",
    exp: "",
    iat: "",
  },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    setUserName: (state, action) => {
      state.user.name = action.payload;
    },
    logout: (state) => {
      state.token = "";
      state.user = {
        email: "",
        name: "",
        role: "",
        exp: "",
        iat: "",
      };
    },
  },
});

export const { setToken, setUserName, setUser, logout } = userSlice.actions;
export const selectAuthToken = (state: RootState) => state.user.token;
export default userSlice.reducer;
