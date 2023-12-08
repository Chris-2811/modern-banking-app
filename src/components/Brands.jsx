import React from 'react';
import { clients } from '../constants';

function Brands() {
  return (
    <section id="brands" className="mt-[6.25rem] px-6 md:px-10">
      <div className=" flex flex-wrap items-center gap-2 justify-center lg:gap-[6.25rem] ">
        {clients.map((client) => {
          return (
            <img
              src={client.logo}
              alt=""
              className="max-w-[190px]  m-5"
              id={client.id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Brands;
