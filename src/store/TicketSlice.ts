import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPayloadProps, IStore } from "./types";

const initialState: IStore = {
  firstField: [] as number[],
  secondField: [] as number[],
  isTicketWon: undefined,
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
    winTheGame: (state) => {
      state.isTicketWon = true;
    },
    loseTheGame: (state) => {
      state.isTicketWon = false;
    },
    clearTicket: () => initialState,
    setRandomTicketValue: (state, action: PayloadAction<IStore>) =>
      action.payload,
  },
});

export const {
  pushNumber,
  removeNumber,
  winTheGame,
  clearTicket,
  loseTheGame,
  setRandomTicketValue,
} = TicketSlice.actions;

export default TicketSlice.reducer;
