import { useNavigate } from "react-router";
import Arrow from "../Icon/Arrow";
import * as I from "./ButtonsStyled";

type IProps = {
  text: string;
  path: string;
};

export const Buttons = ({ text, path }: IProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <I.Button>
        <I.Icon
          onClick={() => {
            navigate(path);
          }}
        >
          <Arrow />
        </I.Icon>
        {text}
      </I.Button>
    </div>
  );
};
