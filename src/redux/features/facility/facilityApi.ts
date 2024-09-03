import { baseApi } from "../../api/apiSlice";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (data) => ({
        url: `/facility`,
        method: "POST",
        body: data,
      }),
    }),

    getFacility: builder.query({
      query: () => ({
        url: `/facility`,
        method: "GET",
      }),
    }),

    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
      }),
    }),
  }),
});

export const {
  useGetFacilityQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
} = facilityApi;
