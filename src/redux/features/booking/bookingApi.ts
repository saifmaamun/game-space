import { baseApi } from "../../api/apiSlice";

const availabilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    placeBooking: builder.mutation({
      query: (data) => ({
        url: `/bookings`,
        method: "POST",
        body: data,
      }),
    }),
    allBooking: builder.query({
      query: () => ({
        url: `/bookings`,
        method: "Get",
      }),
    }),
    usersBooking: builder.query({
      query: () => ({
        url: `/bookings/user`,
        method: "Get",
      }),
      providesTags: ["UserBookingData"],
    }),
    cancelBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserBookingData"],
    }),
  }),
});

export const {
  usePlaceBookingMutation,
  useUsersBookingQuery,
  useCancelBookingMutation,
  useAllBookingQuery,
} = availabilityApi;
