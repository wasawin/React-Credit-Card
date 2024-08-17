import React from 'react';

function FormCard() {
  return (
    <>
      <div className="bg-white  h-96 w-full">
        <label htmlFor="Cardnumber">
          <input
            type="text"
            placeholder="Card number"
            className="w-full border border-black"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={3}
          />
        </label>
      </div>
    </>
  );
}

export default FormCard;
