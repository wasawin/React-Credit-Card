import React, { createContext, useState } from 'react';

interface CardProviderProps {
  children: React.ReactNode;
}
interface CardContextProps {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cardHolder: string;
  setCardHolder: React.Dispatch<React.SetStateAction<string>>;
  expiryMonth: string;
  setExpiryMonth: React.Dispatch<React.SetStateAction<string>>;
  expiryYear: string;
  setExpiryYear: React.Dispatch<React.SetStateAction<string>>;
  cvc: string;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
  isFrontVisible: boolean;
  setIsFrontVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleFlipCard: () => void;
}
const CardContext = createContext<CardContextProps>({
  cardNumber: '',
  setCardNumber: () => {},
  cardHolder: '',
  setCardHolder: () => {},
  expiryMonth: '',
  setExpiryMonth: () => {},
  expiryYear: '',
  setExpiryYear: () => {},
  cvc: '',
  setCvc: () => {},
  isFrontVisible: true,
  setIsFrontVisible: () => {},
  handleFlipCard: () => {},
});

const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isFrontVisible, setIsFrontVisible] = useState(true);

  const handleFlipCard = () => {
    setIsFrontVisible((prevState) => !prevState);
  };

  return (
    <CardContext.Provider
      value={{
        cardNumber,
        setCardNumber,
        cardHolder,
        setCardHolder,
        expiryMonth,
        setExpiryMonth,
        expiryYear,
        setExpiryYear,
        cvc,
        setCvc,
        isFrontVisible,
        setIsFrontVisible,
        handleFlipCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardProvider, CardContext };
