import * as V from "./ValidationStyled";
import { useContext } from "react";
import { MoneyContext } from "../../contexts/UserContext";
import Arrow from "../../Icon/Arrow";
import { useNavigate } from "react-router";
interface CurrentMoneyContextType {
  money: string | null;
  setMoney?: React.Dispatch<React.SetStateAction<null>>;
}

export const Validation = () => {
  const { money } = useContext<CurrentMoneyContextType>(MoneyContext);
  const navigate = useNavigate();

  return (
    <V.Container>
      <V.Box>
        <p>1320-0000000 BEŞİKTAŞ</p>
        <hr />
        <V.Amount>
          <div>Çekilecek Tutar</div>
          <button>{money}TL</button>
        </V.Amount>
        <hr />
        <span>Kullanılabilir Bakiye</span>
      </V.Box>
      <V.ConfirmationButton>
        <p>{money},00 TL</p>
        <V.Arrow>
          Onayla
          <button
            onClick={() => {
              navigate("/finish");
            }}
          >
            <Arrow />
          </button>
        </V.Arrow>
      </V.ConfirmationButton>
    </V.Container>
  );
};
