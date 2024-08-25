import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://gameplan-mu.vercel.app/api",
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: () => ({}),
});
