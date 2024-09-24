import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAuthToken } from "../features/user/userSlice";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gameplan-mu.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      // Get the token from the store or any other method
      const state = getState() as RootState;
      const token = selectAuthToken(state);
      // If the token exists, set it in the Authorization header
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["UserBookingData", "Facilities", "Users"],
  endpoints: () => ({}),
});
