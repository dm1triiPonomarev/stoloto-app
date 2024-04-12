import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPayloadProps, IStore } from "./types";

const initialState: IStore = {
  firstField: [] as number[],
  secondField: [] as number[],
};

export const TicketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    pushNumber: (state, action: PayloadAction<IPayloadProps>) => {
      state[action.payload.fieldNumber].push(action.payload.number);
    },
    removeNumber: (state, action: PayloadAction<IPayloadProps>) => {
      state[action.payload.fieldNumber] = state[
        action.payload.fieldNumber
      ].filter((num) => num !== action.payload.number);
    },
  },
});

export const { pushNumber, removeNumber } = TicketSlice.actions;

export default TicketSlice.reducer;
