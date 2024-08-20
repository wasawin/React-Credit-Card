import React, { useState } from 'react';
interface InputCardProps {
  type: 'text' | 'tel' | 'date' | 'email' | 'number' | 'date' | 'month';
  placholder: string;
  inputMode?:
    | 'text'
    | 'numeric'
    | 'decimal'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  pattern?: '[0-9]*' | '[a-zA-Z]*' | '[a-zA-Z0-9]*';
  minLength?: number;
  maxLength?: number;
  formatnumber?: boolean;
}

const InputCard: React.FC<InputCardProps> = ({
  type,
  placholder,
  inputMode,
  pattern,
  minLength,
  maxLength,
  formatnumber,
}) => {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    const formatted = input.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  return (
    <label
      htmlFor={`User${placholder}`}
      className="relative block w-full overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <input
        type={type}
        id={`User${placholder}`}
        placeholder={placholder}
        inputMode={inputMode}
        pattern={pattern}
        value={formatnumber ? cardNumber : undefined}
        onChange={formatnumber ? handleChange : undefined}
        minLength={minLength}
        maxLength={maxLength}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
        {placholder}
      </span>
    </label>
  );
};

export default InputCard;
