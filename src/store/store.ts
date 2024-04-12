import { configureStore } from "@reduxjs/toolkit";
import TicketSlice from "./TicketSlice";

export const store = configureStore({
  reducer: {
    ticket: TicketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
