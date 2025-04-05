import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prefixUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/api";

export const flightApiSlice = createApi({
// Name for the API slice
reducerPath: "flightApi",
baseQuery: fetchBaseQuery({ baseUrl: prefixUrl }), // Base URL
  endpoints: (builder) => ({
    getFlight: builder.query({
      query: () => ({
        url: "/flights", // Specify the endpoint relative to the base URL
        method: "GET",
      }),
    }),
    addFlight: builder.mutation({
      query: (flight) => ({
        url: "/flights",
        method: "POST",
        body: flight,
      }),
    }),
 
  }),
});

// Export auto-generated hooks
export const { useGetFlightQuery, useAddFlightMutation} = flightApiSlice;
