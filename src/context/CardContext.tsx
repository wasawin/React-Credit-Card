import React, { createContext, useState } from 'react';

interface CardProviderProps {
  children: React.ReactNode;
}
interface CardContextProps {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
}
const CardContext = createContext<CardContextProps>({
  cardNumber: '',
  setCardNumber: () => {},
});

const Cardcontext: React.FC<CardProviderProps> = ({ children }) => {
  const [cardNumber, setCardNumber] = useState('');
  return (
    <CardContext.Provider value={{ cardNumber, setCardNumber }}>
      {children}
    </CardContext.Provider>
  );
};

export default Cardcontext;
