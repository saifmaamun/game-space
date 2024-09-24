import { baseApi } from "../../api/apiSlice";

const registerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: `auth/signup`,
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useSignUpMutation } = registerApi;
