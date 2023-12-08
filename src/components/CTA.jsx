import React from 'react';
import Button from './Button';

function CTA() {
  return (
    <section id="cta" className="mt-[6.5rem]">
      <div className="container ">
        <div className="wrapper flex flex-col md:flex-row items-center justify-between bg-gradient-cta py-[2rem] px-6 md:py-[4.5rem] md:px-[6.25rem] rounded-[1.125rem]">
          <div>
            <h2 className="leading-[1.2] fs-800">Let's try our service now!</h2>
            <p className="text-body mt-4 mb-8 md:mt-0 md:max-w-[445px]">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <Button text={'Get Started'} />
        </div>
      </div>
    </section>
  );
}

export default CTA;
