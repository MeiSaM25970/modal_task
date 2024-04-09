import { ButtonHTMLAttributes, FC } from "react";
import { ButtonContainer } from "./style";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button: FC<IProps> = (props) => {
  return <ButtonContainer {...props} />;
};
