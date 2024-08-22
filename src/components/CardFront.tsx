import { useContext } from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import { LuNfc } from 'react-icons/lu';
import { SiVisa } from 'react-icons/si';
import { CardContext } from '../context/CardContext.tsx';
function CardFront() {
  const { cardNumber, cardHolder, expiryMonth, expiryYear } =
    useContext(CardContext);
  function formatCardNumber(number: string) {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  }
  const defaultCardNumber = '0000 0000 0000 0000';
  const defaultCardHolder = 'JANE APPLESEED';

  return (
    <>
      <div
        className="min-w-56 max-w-80 h-52 w-full   bg-white/30  rounded-xl m-1  
      p-4 flex flex-col justify-center items-stretch  gap-3 shadow-2xl"
      >
        <div className="flex justify-between items-center text-slate-700">
          <LuNfc className="size-8" />
          <SiVisa className="size-12 " />
        </div>
        <div>
          <FcSimCardChip className="size-12" />
        </div>
        <div className="text-xl flex  flex-col  justify-start gap-2">
          <span className="mx-auto text-xl">
            {cardNumber ? formatCardNumber(cardNumber) : defaultCardNumber}
          </span>
          <div className="ps-2 pe-6 flex justify-between text-xs">
            <span className="uppercase text-nowrap">
              {cardHolder ? cardHolder : defaultCardHolder}
            </span>
            <div className="flex items-center text-center gap-1">
              <span className="text-[0.5rem] leading-none">
                VALID
                <br />
                THRU
              </span>
              <p className="">
                {expiryMonth ? expiryMonth : '00'}/
                {expiryYear ? expiryYear : '00'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFront;
