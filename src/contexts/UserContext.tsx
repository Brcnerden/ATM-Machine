import { createContext, useState } from "react";

interface CurrentMoneyContextType {
  money: string | null;
  setMoney?: React.Dispatch<React.SetStateAction<null>>;
}

interface UserContextType {
  children: JSX.Element | JSX.Element[];
}

export const MoneyContext = createContext<CurrentMoneyContextType>({
  money: null,
});

export const UserContext = ({ children }: UserContextType) => {
  const [money, setMoney] = useState(null);

  return (
    <MoneyContext.Provider value={{ money, setMoney }}>
      {children}
    </MoneyContext.Provider>
  );
};
