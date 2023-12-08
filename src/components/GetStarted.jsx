import React from 'react';
import arrow from '../assets/arrow-up.svg';

function GetStarted() {
  return (
    <a className="btn-large block gradient-circle cursor-pointer rounded-full top-4 sm:top-[-0.5rem] md:top-2 w-[140px] h-[140px]  p-0.5">
      <div className="w-[100%] h-[100%] bg-primary rounded-full flex flex-col justify-center items-center">
        <div className="flex item-center gap-0.5">
          <p className="gradient-text-sm font-bold text-lg">Get</p>
          <img src={arrow} alt="Illustration of upwoard facing arrow" />
        </div>
        <p className="gradient-text-sm font-bold">Started</p>
      </div>
    </a>
  );
}

export default GetStarted;
