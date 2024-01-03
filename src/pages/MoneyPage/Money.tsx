import * as M from "./MoneyStyled";

export const Money = () => {
  return (
    <M.Container>
      <M.User>
        <M.Text>
          <p>000-00000</p>
          <p>Poyraz Karayel</p>
        </M.Text>
        <M.UserBox>
          <p>Hesap No</p>
          <p>Hesap Sahibi</p>
          <p>Kullanıla Bilir İşlem Limiti</p>
        </M.UserBox>
      </M.User>
      <M.Table>
        <thead>
          <tr>
            <th>Bankanot</th>
            <th>Birim</th>
            <th>Adet</th>
            <th>Toplam</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>13000</th>
            <th>TL</th>
            <th>13</th>
            <th>13000</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>Toplam</th>
            <th></th>
            <th></th>

            <M.Total>13000</M.Total>
          </tr>
        </tbody>
      </M.Table>
    </M.Container>
  );
};
