import * as M from "./MoneyButtonsStyled";

type IProps = {
  text: string;
};

export const MoneyButtons = ({ text }: IProps) => {
  return (
    <div>
      <M.Buttons>{text}</M.Buttons>
    </div>
  );
};
