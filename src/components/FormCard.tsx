import React, { useContext } from 'react';
import InputCard from './InputCard';
import { CardContext } from '../context/CardContext.tsx';
function FormCard() {
  const {
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
  } = useContext(CardContext);

  const handleChangeCardnumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    const formatted = input.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };
  const handleChangeCardholder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolder(e.target.value);
  };
  const handleChangeExpiryMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryMonth(e.target.value);
  };
  const handleChangeExpiryYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryYear(e.target.value);
  };
  const handleChangeCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
  };

  return (
    <>
      <div className="bg-white  h-96 w-full">
        <h1>Detail for Card</h1>
        <section className="flex flex-col justify-center items-center gap-4 p-3 ">
          <InputCard
            type="tel"
            placholder="Card number"
            inputMode="numeric"
            minLength={19}
            maxLength={19}
            pattern="[0-9]*"
            value={cardNumber}
            onChange={handleChangeCardnumber}
          />
          <InputCard
            type="text"
            placholder="Card holder"
            pattern="[a-zA-Z]*"
            minLength={0}
            maxLength={20}
            value={cardHolder}
            onChange={handleChangeCardholder}
          />
          <div className="flex gap-4">
            <InputCard
              type="text"
              inputMode="numeric"
              placholder="Month"
              minLength={2}
              maxLength={2}
              pattern="[0-9]*"
              value={expiryMonth}
              onChange={handleChangeExpiryMonth}
            />
            <InputCard
              type="text"
              inputMode="numeric"
              placholder="Year"
              minLength={2}
              maxLength={2}
              pattern="[0-9]*"
              value={expiryYear}
              onChange={handleChangeExpiryYear}
            />
          </div>
          <InputCard
            type="text"
            inputMode="numeric"
            placholder="CVC"
            minLength={3}
            maxLength={3}
            pattern="[0-9]*"
            value={cvc}
            onChange={handleChangeCvc}
            onclick={'Back'}
          />
        </section>
      </div>
    </>
  );
}

export default FormCard;
