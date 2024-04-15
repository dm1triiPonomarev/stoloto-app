import { styled } from "styled-components";
import { IButtonProps } from ".";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { checkWinner } from "../../utils/random";
import { winTheGame } from "../../store/TicketSlice";

const Button = ({ title, fn, disabled = false }: IButtonProps) => {
  return (
    <MyButton
      disabled={disabled}
      style={{ backgroundColor: disabled ? "lightgrey" : "inherit" }}
      onClick={() => {
        fn();
      }}
    >
      {title}
    </MyButton>
  );
};

const MyButton = styled.button`
  border-radius: 40px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.16);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
  font-size: 14px;
`;

export default Button;
