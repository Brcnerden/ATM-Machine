import { Buttons } from "../../components/Buttons";
import * as C from "./CashStyled";

export const Cash = () => {
  return (
    <C.Container>
      <div>
        <C.UserText>
          <p>1320-0000000 BEŞİKTAŞ</p>
          <hr />
          <p>
            KUL.BAKİYE <span>13000 TL</span>
          </p>
        </C.UserText>
        <Buttons path="/cash" text={"50 TL"} />
        <Buttons path="/cash" text={"100 TL"} />
        <Buttons path="/cash" text={"200 TL"} />
      </div>
      <C.LeftList>
        <Buttons path="/cash" text={"500 TL"} />
        <Buttons path="/cash" text={"1000 TL"} />
        <Buttons path="/cash" text={"5000 TL"} />
        <Buttons path="/amount" text={"Farklı Tutar Gir"} />
      </C.LeftList>
    </C.Container>
  );
};
