import React from 'react';
import Button from './Button';
import { features } from '../constants';

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex items-center  gap-5 ${
      index === 1 ? 'highlighted-feature' : 'pl-5'
    }`}
  >
    <div
      className="w-[3.875rem]
      h-[3.875rem] bg-icon-feature grid place-items-center rounded-full flex-shrink-0"
    >
      <img src={icon} alt="star icon" className="w-4 h-4" />
    </div>
    <div className="w-auto">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-body">{content}</p>
    </div>
  </div>
);

function Business() {
  return (
    <section
      id="features"
      className="mt-[5rem] sm:mt-[7.5rem] md:mt-[11.25rem]"
    >
      <div className="container flex flex-col md:flex-row gap-10 md:gap-[4.875rem]">
        <div className="business-content md:w-[50%]">
          <h2 className="sm:max-w-[622px]">
            You do the business we'll handle the money.
          </h2>
          <p className="text-body mt-6 mb-12 leading-[1.7] sm:max-w-[430px]">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button text={'Get Started'} />
        </div>

        <div className="md:w-[50%] flex flex-col gap-10 mt-6 md:mt-0">
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                content={feature.content}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Business;
