import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Context.Provider
      value={{ isActive, setIsActive, isDarkMode, setIsDarkMode }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
