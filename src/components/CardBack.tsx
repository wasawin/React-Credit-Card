import { BsShieldLockFill } from 'react-icons/bs';
import { CardContext } from '../context/CardContext';
import { useContext } from 'react';
function CardBack() {
  const { cvc } = useContext(CardContext);
  return (
    <div className="min-w-56 max-w-80 h-52 w-full bg-gray-200 rounded-xl m-1  flex flex-col justify-between shadow-2xl shadow-black/50 relative">
      <div className="w-full h-10 bg-black mt-4 "></div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center  gap-2">
          <div className="bg-white w-3/4 h-8 flex justify-end items-center px-1">
            <p className="">{cvc}</p>
          </div>
          <span className="text-sm font-bold">CVV</span>
        </div>
        <p className="text-xs text-gray-600">
          This card is property of Visa. Authorized signature required. Not
          valid unless signed.
        </p>
      </div>
      <div className="flex justify-between items-center p-4">
        <BsShieldLockFill className="text-gray-500" />
        <span className="text-xs text-gray-500">
          For customer service, call 1-800-123-4567
        </span>
      </div>
    </div>
  );
}

export default CardBack;
