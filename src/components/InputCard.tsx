import React, { useContext } from 'react';
import { CardContext } from '../context/CardContext';
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
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onclick?: boolean;
}

const InputCard: React.FC<InputCardProps> = ({
  type,
  placholder,
  inputMode,
  pattern,
  minLength,
  maxLength,
  value,
  onChange,
  onclick,
}) => {
  const { handleFlipCard } = useContext(CardContext);

  return (
    <label
      htmlFor={`User${placholder}`}
      className="relative block w-full overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      onFocus={onclick ? handleFlipCard : undefined}
    >
      <input
        type={type}
        id={`User${placholder}`}
        placeholder={placholder}
        inputMode={inputMode}
        pattern={pattern}
        value={value}
        onChange={onChange}
        onBlurCapture={onclick ? handleFlipCard : undefined}
        minLength={minLength}
        maxLength={maxLength}
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm uppercase"
      />

      <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
        {placholder}
      </span>
    </label>
  );
};

export default InputCard;
