import { baseApi } from "../../api/apiSlice";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `auth/users`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
