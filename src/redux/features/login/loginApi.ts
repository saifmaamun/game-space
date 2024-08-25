import { baseApi } from "../../api/apiSlice";

const loginApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: `auth/login`,
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
