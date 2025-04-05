import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prefixUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/api";

export const airportApiSlice = createApi({
  reducerPath: "airportApi",
  baseQuery: fetchBaseQuery({ baseUrl: prefixUrl }),
  endpoints: (builder) => ({
    addAirport: builder.mutation({
      query: (newAirport) => ({
        url: "/airports",
        method: "POST",
        body: newAirport,
      }),
    }),

    updateAirport: builder.mutation({
      query: ({newAirport, id}) => ({
        url: `/airports/${id}`,
        method: "PUT",
        body: newAirport,
      }),
    }),

    deleteAirport: builder.mutation({
      query: (id) => ({
        url: `/airports/${id}`,
        method: "DELETE"
        
      }),
    }),



    getAirport: builder.query({
      query: () => ({
        url: "/airports",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddAirportMutation, useGetAirportQuery, useUpdateAirportMutation, useDeleteAirportMutation} = airportApiSlice;
