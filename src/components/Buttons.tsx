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

export const Buttonsturn = ({ text, path }: IProps) => {
  const navigate = useNavigate();

  return (
    <I.Buttonturn>
      <I.Button>
        {text}

        <I.Icon
          onClick={() => {
            navigate(path);
          }}
        >
          <Arrow />
        </I.Icon>
      </I.Button>
    </I.Buttonturn>
  );
};
