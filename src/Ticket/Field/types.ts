import { ReactNode } from "react";

export interface ITicketProps {
  ticketNumber: number;
}

export interface IFieldProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

export interface IFieldItemProps {
  number: number;
  fieldNumber: "firstField" | "secondField";
  disabled: boolean;
}
