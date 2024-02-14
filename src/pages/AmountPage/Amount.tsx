import { useContext, Dispatch, SetStateAction } from "react";
import { MoneyContext } from "../../contexts/UserContext";
import * as A from "./AmountStyled";
import { useNavigate } from "react-router-dom";

interface CurrentMoneyContextType {
  money: string | number | null; // money alanının türü string, number veya null olabilir
  setMoney?: Dispatch<SetStateAction<string | number | null>> | undefined;
}

export const Amount: React.FC = () => {
  const navigate = useNavigate();

  const { money, setMoney } = useContext<CurrentMoneyContextType>(MoneyContext);

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
          <input
            value={money ?? " "}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMoney?.(parseFloat(e.target.value))
            }
          />
          <span> , </span>
          <A.Input />
          <span> TL </span>
        </A.AmountContainer>
      </A.Box>
    </A.Container>
  );
};
