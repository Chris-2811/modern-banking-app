import React from 'react';
import Button from './Button';
import card from '../assets/card.png';

function Deal() {
  return (
    <section id="deal" className=" mt-[7rem] md:mt-[10rem]">
      <div className="container flex flex-col md:flex-row gap-[4.875rem]">
        <div className="deal-content md:w-[50%] md:self-center ">
          <h2 className="fs-800 sm:max-w-[570px]">
            Find a better card deal in few easy steps.
          </h2>
          <p className="text-body mt-6 mb-12 sm:max-w-[430px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button text={'Get Started'} />
        </div>
        <div className="deal-image md:w-[50%]">
          <img src={card} alt="Illustrations of financials" />
        </div>
      </div>
    </section>
  );
}

export default Deal;
