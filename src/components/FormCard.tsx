import React from 'react';
import InputCard from './InputCard';

function FormCard() {
  return (
    <>
      <div className="bg-white  h-96 w-full">
        <h1>Detail for Card</h1>
        <section className="flex flex-col justify-center items-center gap-4 p-3 ">
          <InputCard
            type="tel"
            placholder="Card number"
            inputMode="numeric"
            minLength={16}
            maxLength={16}
            pattern="[0-9]*"
            formatnumber
          />
          <InputCard type="text" placholder="Card holder" pattern="[a-zA-Z]*" />
          <div className="flex gap-4">
            <InputCard
              type="text"
              inputMode="numeric"
              placholder="Month"
              minLength={2}
              maxLength={2}
              pattern="[0-9]*"
            />
            <InputCard
              type="text"
              inputMode="numeric"
              placholder="Year"
              minLength={2}
              maxLength={2}
              pattern="[0-9]*"
            />
          </div>
          <InputCard
            type="text"
            inputMode="numeric"
            placholder="CVC"
            minLength={3}
            maxLength={3}
            pattern="[0-9]*"
          />
        </section>
      </div>
    </>
  );
}

export default FormCard;
