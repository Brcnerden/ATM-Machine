import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/HomePage/Home";
import { Menu } from "./pages/MenuPage/Menu";
import { Money } from "./pages/MoneyPage/Money";
import { Cash } from "./pages/CashPage/Cash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cash" element={<Cash />} />
      <Route path="/menu" element={<Menu />} />

      <Route path="/money" element={<Money />} />
    </Routes>
  );
}

export default App;
