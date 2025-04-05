import { configureStore } from "@reduxjs/toolkit";
import { airportApiSlice } from "./airportApiSlice";
import { flightApiSlice } from "./flightApiSlice";

export const store = configureStore({
  reducer: {
    [airportApiSlice.reducerPath]: airportApiSlice.reducer,
    [flightApiSlice.reducerPath]: flightApiSlice.reducer, // Add RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(airportApiSlice.middleware)
      .concat(flightApiSlice.middleware), // Add missing middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

