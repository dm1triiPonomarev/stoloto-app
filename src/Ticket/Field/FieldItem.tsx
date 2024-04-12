import React, { useState } from "react";
import { styled } from "styled-components";
import { IFieldItemProps } from "./types";

const FieldItem = ({ number }: IFieldItemProps) => {
  const [isActive, setIsActive] = useState(false);
  if (isActive)
    return (
      <FieldItemWrapperActive onClick={() => setIsActive(false)}>
        {number}
      </FieldItemWrapperActive>
    );

  return (
    <FieldItemWrapper onClick={() => setIsActive(true)}>
      {number}
    </FieldItemWrapper>
  );
};

const FieldItemWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

const FieldItemWrapperActive = styled.div`
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
`;
export default FieldItem;
