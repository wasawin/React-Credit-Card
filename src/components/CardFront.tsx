import React from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import { LuNfc } from 'react-icons/lu';
import { SiVisa } from 'react-icons/si';
function CardFront() {
  return (
    <>
      <div
        className="min-w-56 max-w-80 h-52 w-full backdrop-blur-xl  bg-white/35 rounded-xl m-1  
      p-4 flex flex-col justify-center items-stretch  gap-3 shadow-2xl shadow-black/50"
      >
        <div className="flex justify-between items-center text-slate-700">
          <LuNfc className="size-8" />
          <SiVisa className="size-12 " />
        </div>
        <div>
          <FcSimCardChip className="size-12" />
        </div>
        <div className="text-xl flex  flex-col  justify-start w-full ">
          <span className="mx-auto text-xl">3455 4562 7710 3507</span>
          <div className="grid grid-cols-2 gap-6 w-full  text-xs">
            <span className="uppercase text-nowrap">John carter</span>
            <div className="flex  items-center text-center gap-1">
              <span className="text-[0.5rem] leading-none">
                VALID
                <br />
                THRU
              </span>
              <p className="">10/24</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardFront;
