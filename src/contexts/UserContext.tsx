import { createContext, useState } from "react";

interface CurrentMoneyContextType {
  money?: string;
  user: string | null;
  setUser?: React.Dispatch<React.SetStateAction<null>>;
}

interface UserContextType {
  children: JSX.Element | JSX.Element[];
}

export const MoneyContext = createContext<CurrentMoneyContextType>({
  user: null,
});

export const UserContext = ({ children }: UserContextType) => {
  const [user, setUser] = useState(null);

  return (
    <MoneyContext.Provider value={{ user, setUser }}>
      {children}
    </MoneyContext.Provider>
  );
};
