import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

function Testimonials() {
  return (
    <section id="clients" className="mt-[7rem] md:mt-[10.625rem]">
      <div className="container relative">
        <div className="flex flex-col md:items-center  gap-10 lg:gap-[8rem] md:flex-row">
          <h2 className="fs-700 sm:max-w-[450px]">
            What people are saying about us
          </h2>
          <p className="text-body mb-20 sm:mb-0 md:max-w-[400px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-[1.875rem] mt-10 md:mt-20">
          {feedback.map((item, index) => {
            return (
              <FeedbackCard
                key={item.id}
                {...item}
                index={index}
                id={item.id}
              />
            );
          })}
        </div>
        {/* Gradient */}
        <div className="absolute top-20 -right-[24rem] blue-gradient-testimonial border-radius-[12.5rem] w-[426px] h-[544px] rotate-45"></div>
      </div>
    </section>
  );
}

export default Testimonials;
