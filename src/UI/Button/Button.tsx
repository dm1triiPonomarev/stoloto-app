import { styled } from "styled-components";
import { IButtonProps } from ".";
import { useAppSelector } from "../../store/hooks";
import { checkWinner } from "../../utils/random";

const Button = ({ title }: IButtonProps) => {
  const store = useAppSelector((store) => store.ticket);
  return <MyButton onClick={() => checkWinner(store)}>{title}</MyButton>;
};

const MyButton = styled.button`
  border-radius: 40px;
  margin: 0 auto;
  background-color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.16);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.64);
  font-size: 14px;
`;

export default Button;
