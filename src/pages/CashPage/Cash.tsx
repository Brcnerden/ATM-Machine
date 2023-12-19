import { Buttons } from "../../components/Buttons";
import * as C from "./CashStyled";

export const Cash = () => {
  return (
    <C.Container>
      <C.Text>Seçiminizi Yapınız</C.Text>
      <C.Buttons>
        <div>
          <Buttons text={"Para Çekme"} />
          <Buttons text={"Para Yatırma"} />
          <Buttons text={"Bireysel İhtiyaç Kredisi Başvurusu"} />
          <Buttons text={"Şifrematik/Mobil İmza ilePara Çekme"} />
        </div>
        <div>
          <Buttons text={"Kredi Kartı Borcu Ödeme"} />
          <Buttons text={"Fatura Ödeme"} />
          <Buttons text={"Kontor yükleme"} />
          <Buttons text={"Diğer"} />
        </div>
      </C.Buttons>
    </C.Container>
  );
};
