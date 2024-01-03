import { MoneyButtons } from "../../components/MoneyButtons";
import * as C from "./CashStyled";

export const Cash = () => {
  return (
    <C.Container>
      <div>
        <C.UserText>
          <p>1320-0000000 BEŞİKTAŞ</p>
          <hr></hr>
          <p>
            KUL.BAKİYE <span>13000 TL</span>
          </p>
        </C.UserText>
        <MoneyButtons text={"50 TL"} />
        <MoneyButtons text={"100 TL"} />
        <MoneyButtons text={"200 TL"} />
      </div>
      <div>
        <MoneyButtons text={"500 TL"} />
        <MoneyButtons text={"1000 TL"} />
        <MoneyButtons text={"5000 TL"} />
        <MoneyButtons text={"Farklı Tutar Gir"} />
      </div>
    </C.Container>
  );
};
