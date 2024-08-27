import { baseApi } from "../../api/apiSlice";

const availabilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    availityCheck: builder.query({
      query: (data) => ({
        url: `/check-availability?date=${data.date}&facility=${data.facility}`,
        method: "Get",
      }),
    }),
  }),
});

export const { useAvailityCheckQuery } = availabilityApi;
