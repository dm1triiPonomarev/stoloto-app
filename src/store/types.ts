export interface IPayloadProps {
  number: number;
  fieldNumber: "firstField" | "secondField";
}
export interface IStore {
  firstField: number[];
  secondField: number[];
  isTicketWon: boolean;
}
