import React from 'react';
import bill from '../assets/bill.png';
import apple from '../assets/apple.svg';
import google from '../assets/google.svg';

function Billing() {
  return (
    <section id="product" className="mt-[7rem] md:mt-[10rem]">
      <div className="container  flex flex-col md:flex-row gap-[4.875rem]">
        <div className="testimonial-image relative  md:w-[50%] sm:order-1 md:-order-1">
          <img src={bill} alt="Illustrations of bills" />
          {/* Gradients */}
          <div className=" absolute top-0 z-[3] -left-1/2 rotate-180 gradient-white border-radius-[471px] w-[50%] h-[50%] "></div>
          <div className=" absolute bottom-0 z-[0] -left-1/2  pink-gradient border-radius-[471px] w-[50%] h-[50%] "></div>
        </div>
        <div className="testimonial-content md:w-[50%] md:self-center">
          <h2 className="fs-800 sm:max-w-[470px]">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-body mt-6 mb-12 sm:max-w-[430px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://www.apple.com/de/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={apple} alt="App store" />
            </a>
            <a
              href="https://play.google.com/store/games?gl=DE&utm_source=emea_Med&utm_medium=hasem&utm_content=Sep2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-de-1001280-Med-hasem-py-Evergreen-Sep2020-Text_Search_BKWS%7CONSEM_kwid_43700006975732154&gclid=CjwKCAiAmsurBhBvEiwA6e-WPG5tpy60G10QHmty70UITWaaJqZkxqGfbu04WA20irMJZ-brJ-w5WBoCh-EQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={google}
                alt="Google play store"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Billing;
