import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/HomePage/Home";
import { Menu } from "./pages/MenuPage/Menu";
import { Money } from "./pages/MoneyPage/Money";
import { Cash } from "./pages/CashPage/Cash";
import { Amount } from "./pages/AmountPage/Amount";
import { Validation } from "./pages/ValidationPage/Validation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cash" element={<Cash />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/money" element={<Money />} />
      <Route path="/amount" element={<Amount />} />
      <Route path="/validation" element={<Validation />} />
    </Routes>
  );
}

export default App;
