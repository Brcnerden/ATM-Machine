import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/HomePage/Home";
import { Cash } from "./pages/CashPage/Cash";
import { Money } from "./pages/MoneyPage/Money";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cash" element={<Cash />} />
      <Route path="/money" element={<Money />} />
    </Routes>
  );
}

export default App;
