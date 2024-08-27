import { baseApi } from "../../api/apiSlice";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useGetFacilityQuery, useGetSingleFacilityQuery } = facilityApi;
