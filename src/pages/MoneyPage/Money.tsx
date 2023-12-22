import * as M from "./MoneyStyled";

export const Money = () => {
  const salary: string | null = prompt("aylık maaş tutarınızı giriniz");

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
            <th>{salary}</th>
            <th>TL</th>
            <th>12</th>
            <th>{salary}</th>
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

            <M.Total>{salary}</M.Total>
          </tr>
        </tbody>
      </M.Table>
    </M.Container>
  );
};
