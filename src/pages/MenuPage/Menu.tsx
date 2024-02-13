import { Buttons, Buttonsturn } from "../../components/Buttons";
import * as C from "./MenuStyled";
import "../../index.css";

export const Menu = () => {
  return (
    <C.Container>
      <C.Text>Seçiminizi Yapınız</C.Text>
      <C.Buttons>
        <div>
          <Buttons path="/cash" text={"Para Çekme"} />
          <Buttons path="/cash" text={"Para Yatırma"} />
          <Buttons path="/cash" text={"Bireysel İhtiyaç Kredisi Başvurusu"} />
          <Buttons path="/cash" text={"Şifrematik/Mobil İmza ilePara Çekme"} />
        </div>
        <div>
          <Buttonsturn path="/cash" text={"Kredi Kartı Borcu Ödeme"} />
          <Buttonsturn path="/cash" text={"Fatura Ödeme"} />
          <Buttonsturn path="/cash" text={"Kontor yükleme"} />
          <Buttonsturn path="/cash" text={"Diğer"} />
        </div>
      </C.Buttons>
    </C.Container>
  );
};
