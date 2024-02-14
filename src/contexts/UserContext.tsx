import { createContext, useState, Dispatch, SetStateAction } from "react";

interface CurrentMoneyContextType {
  money: string | number | null; // money alanının türü string, number veya null olabilir
  setMoney?: Dispatch<SetStateAction<string | number | null>> | undefined;
}

interface UserContextType {
  children: JSX.Element | JSX.Element[];
}

export const MoneyContext = createContext<CurrentMoneyContextType>({
  money: null,
});

export const UserContext = ({ children }: UserContextType) => {
  const [money, setMoney] = useState<string | number | null>(null); // Başlangıç değeri string, number veya null olabilir

  return (
    <MoneyContext.Provider value={{ money, setMoney }}>
      {children}
    </MoneyContext.Provider>
  );
};
