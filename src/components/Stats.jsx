import React from 'react';
import { stats } from '../constants';

function Stats() {
  return (
    <section id="stats" className="mt-[4rem] md:mt-[5rem]">
      <ul
        role="list"
        className="container flex flex-col sm:flex-row sm:justify-center sm:flex-wrap md:row md:items-center gap-8 md:gap-[3.25rem]"
      >
        {stats.map((stat, index) => {
          return (
            <li
              className="flex md:items-center  md:gap-[3.25rem]"
              key={stat.id}
            >
              <div className="flex items-center gap-4">
                <p className="fs-700 font-bold">{stat.value}</p>
                <p className="fs-600 gradient-stats md:text-[1.125rem]">
                  {stat.title}
                </p>
              </div>
              {index < stats.length - 1 && (
                <span className="hidden md:inline-block">|</span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Stats;
