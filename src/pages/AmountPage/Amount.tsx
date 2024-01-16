import { useContext } from "react";
import { MoneyContext } from "../../contexts/UserContext";
import * as A from "./AmountStyled";
import { useNavigate } from "react-router-dom";

export const Amount: React.FC = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(MoneyContext);

  const handle_Amount = () => {
    navigate("/validation");
  };

  return (
    <A.Container>
      <A.Box>
        <A.Text>
          <p>Çıkmak için</p>
          <button>
            İPTAL
            <A.ColorRed />
          </button>
        </A.Text>
        <A.Text>
          <p>Düzeltmek için</p>
          <button>
            DÜZELTME <A.ColorYellow />
          </button>
        </A.Text>
        <A.Text>
          <p>İlerleme için</p>
          <button onClick={handle_Amount}>
            GİRİŞ <A.ColorGreen />
          </button>
        </A.Text>

        <A.AmountContainer>
          <input value={user} onChange={(e) => setUser(e.target.value)} />
          <span> , </span>
          <A.Input />
          <span> TL </span>
        </A.AmountContainer>
      </A.Box>
    </A.Container>
  );
};
