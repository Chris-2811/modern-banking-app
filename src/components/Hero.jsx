import React from 'react';
import discount from '../assets/Discount.svg';
import robot from '../assets/robot.png';
import GetStarted from './GetStarted';

function Hero() {
  return (
    <section id="home" className="mt-[3.75rem] hero">
      <div className="container-hero relative">
        {/* Content */}
        <div className="hero-content md:self-center md:mt-10">
          <div className="flex items-center gap-3 bg-discount-gradient py-[0.375rem] mb-4 px-4 rounded-[10px] ss:w-max sm:mb-6">
            <img src={discount} alt="discount icon" />
            <p className="uppercase text-body text-base md:text-md">
              <span className="text-body-secondary">20%</span> Discount for 1{' '}
              <span className="text-body-secondary">Month</span> account
            </p>
          </div>

          <div className="header flex items-center justify-between md:mt-5 ">
            <h1 className="relative fs-900">
              The Next <br />
              <span className="gradient-text">Generation</span>
            </h1>
            <div className="btn-large-top mr-36 hidden sm:block md:mr-[5vw] md:mb-5 lg:mr-20">
              <GetStarted />
            </div>
          </div>
          <h1>Payment Method</h1>
          <p className="text-body md:max-w-[483px] leading-[1.7] mt-6 mb-10 ss:max-w-[440px] ss:text-lg">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>

          <div className="absolute hidden md:block top-20 w-[195px] h-[324px] border-radius-[323px] bg-white blur-225 -translate-x-[6.565rem]"></div>
        </div>
        {/* Image */}
        <div className="hero-image flex justify-center items-center  relative sm:mt-6">
          <img
            src={robot}
            alt="Illustration of a robot hand"
            className="relative z-10"
          />

          <div
            className="absolute z-[0] pink-gradient top-0  w-[40%] h-[35%]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute z-[1] gradient-white top-0 left-[50%] -translate-x-[50%] w-[80%] h-[80%]"
            aria-hidden="true"
          ></div>
          <div
            className="absolute z-[0] blue-gradient right-20 bottom-20 left-[50%] -translate-x-[50%] w-[50%] h-[50%]"
            aria-hidden="true"
          ></div>
        </div>

        <div className="getStarted mt-12 sm:hidden">
          <GetStarted />
        </div>
      </div>
    </section>
  );
}

export default Hero;
