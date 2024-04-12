import React from "react";
import { IFieldProps } from "./types";
import { styled } from "styled-components";

const Field = ({ title, subTitle, children }: IFieldProps) => {
  return (
    <FieldWrapper>
      <FieldHeader>
        <FieldTitle>{title}</FieldTitle>
        <FieldSubTitle>{subTitle}</FieldSubTitle>
      </FieldHeader>
      <FieldItemsWrapper>{children}</FieldItemsWrapper>
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const FieldHeader = styled.div`
  display: flex;
  gap: 8px;
`;
const FieldTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;
const FieldSubTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const FieldItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export default Field;
