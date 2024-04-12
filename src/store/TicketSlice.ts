import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = [] as number[];

export const TicketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    pushNumber: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    removeNumber: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item !== action.payload);
    },
  },
});

export const { pushNumber, removeNumber } = TicketSlice.actions;

export default TicketSlice.reducer;
