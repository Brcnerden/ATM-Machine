import { Buttons } from "../../components/Buttons";
import * as C from "./MenuStyled";

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
          <Buttons path="/cash" text={"Kredi Kartı Borcu Ödeme"} />
          <Buttons path="/cash" text={"Fatura Ödeme"} />
          <Buttons path="/cash" text={"Kontor yükleme"} />
          <Buttons path="/cash" text={"Diğer"} />
        </div>
      </C.Buttons>
    </C.Container>
  );
};
