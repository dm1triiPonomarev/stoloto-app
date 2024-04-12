import React from "react";
import { styled } from "styled-components";
import generateSrc from "../assets/magic-wand.svg";
import Button from "../UI/Button/Button";
import Field from "./Field/Field";
import FieldItem from "./Field/FieldItem";
const Ticket = () => {
  const testArr1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const testArr2 = [1, 2];
  return (
    <TicketWrapper>
      <TicketHeaderBlock>
        <TicketHeader>Билет 1</TicketHeader>
        <img src={generateSrc} alt="generate" />
      </TicketHeaderBlock>
      <Field title="Поле 1" subTitle="Отметьте 8 чисел.">
        {testArr1.map((num) => {
          return <FieldItem number={num} />;
        })}
      </Field>
      <Field title="Поле 2" subTitle="Отметьте 1 число.">
        {testArr2.map((num) => {
          return <FieldItem number={num} />;
        })}
      </Field>
      <Button title="Показать результат" />
    </TicketWrapper>
  );
};

const TicketWrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-wrap: wrap;
  padding: 15px;
`;
const TicketHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
`;
const TicketHeader = styled.h2`
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
`;
export default Ticket;
