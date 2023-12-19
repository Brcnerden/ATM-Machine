import { useNavigate } from "react-router";
import Arrow from "../Icon/Arrow";
import * as I from "./ButtonsStyled";

type IProps = {
  text: string;
};

export const Buttons = ({ text }: IProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <I.Button>
        <I.Icon
          onClick={() => {
            navigate("/money");
          }}
        >
          <Arrow />
        </I.Icon>
        {text}
      </I.Button>
    </div>
  );
};
