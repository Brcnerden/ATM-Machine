import { useState } from "react";
import * as H from "./HomeStyled";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [value, setValue] = useState<string>("");
  const [goToPage, setgoToPage] = useState<boolean>(false);

  const navigate = useNavigate();

  const Handle_Click = () => {
    setgoToPage(!goToPage);
    if (value.length == 4) {
      return navigate("./menu");
    } else {
      alert("Lütfen şifrenizi giriniz.");
    }
  };

  return (
    <H.Container>
      <div>Lütfen Şifrenizi Girin</div>
      <H.Password>
        <H.Inputs
          value={value}
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setValue(e.target.value)}
        />
        <H.Button>
          <button onClick={Handle_Click} type="submit">
            Submit
          </button>
        </H.Button>
      </H.Password>
    </H.Container>
  );
};
