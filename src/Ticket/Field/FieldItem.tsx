import React, { useState } from "react";
import { styled } from "styled-components";
import { IFieldItemProps } from "./types";
import { useAppDispatch } from "../../store/hooks";
import { pushNumber, removeNumber } from "../../store/TicketSlice";

const FieldItem = ({ number, fieldNumber, disabled }: IFieldItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useAppDispatch();
  if (isActive)
    return (
      <FieldItemWrapperActive
        onClick={() => {
          setIsActive(false);
          dispatch(removeNumber({ number, fieldNumber }));
        }}
      >
        {number}
      </FieldItemWrapperActive>
    );

  return (
    <FieldItemWrapper
      onClick={() => {
        setIsActive(true);
        dispatch(pushNumber({ number, fieldNumber }));
      }}
      disabled={disabled}
    >
      {number}
    </FieldItemWrapper>
  );
};

const FieldItemWrapper = styled.button`
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background-color: inherit;
  padding: 0;
`;

const FieldItemWrapperActive = styled.button`
  min-width: 34px;
  height: 34px;
  border: none;
  background-color: #ffd205;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  margin: 3px;
  padding: 0;
`;
export default FieldItem;
