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
  }),
});

export const { usePlaceBookingMutation } = availabilityApi;
