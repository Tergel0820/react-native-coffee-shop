import React, {createContext, useState, useContext} from 'react';

export const Context = createContext({
  bag: [],
  setBag: () => {},
  darkMode: false,
  totalPayment: 0,
  setTotalPayment: () => {},
  darkModeF: () => {},
});

export const Provider = ({children}: {children: any}) => {
  const [bag, setBag] = useState<any>([]);
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const darkModeF = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Context.Provider
      value={{
        bag,
        setBag,
        darkMode,
        darkModeF,
        totalPayment,
        setTotalPayment,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useMyContext = () => {
  return useContext(Context);
};
