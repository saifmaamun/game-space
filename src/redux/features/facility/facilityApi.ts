import { baseApi } from "../../api/apiSlice";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (data) => ({
        url: `/facility`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Facilities"],
    }),

    getFacility: builder.query({
      query: () => ({
        url: `/facility`,
        method: "GET",
      }),
      providesTags: ["Facilities"],
    }),

    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
      }),
    }),

    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Facilities"],
    }),

    editFacility: builder.mutation({
      query: ({ id, data }) => ({
        url: `/facility/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Facilities"],
    }),
  }),
});

export const {
  useGetFacilityQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useEditFacilityMutation,
} = facilityApi;
