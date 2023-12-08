import React from 'react';
import { footerLinks } from '../constants';
import logo from '../assets/logo.svg';
import { socialMedia } from '../constants';

function Footer() {
  return (
    <footer id="footer" className="bg-footer mt-[5.125rem]">
      <div className="container">
        {/* Footer top */}
        <div className="pt-8 md:pt-[4.5rem] pb-10 border-b border-border-footer">
          <div className="flex flex-col md:flex-row  md:gap-[6.75rem] lg:gap-[8.75rem] ">
            <div>
              <img src={logo} alt="logo of hoobank" className="" />
              <p className="text-body max-w-[312px] mt-[1.875rem]">
                A new way to make the payments easy, reliable and secure.
              </p>
            </div>
            <div className="flex flex-1 md:justify-between flex-wrap gap-16 sm:gap-[5rem] mt-10 md:mt-0">
              {footerLinks.map((link) => (
                <ul
                  role="list"
                  key={link.title}
                  aria-label="Secondary-navigation"
                  className="flex flex-col gap-3 "
                >
                  <h3>{link.title}</h3>
                  {link.links.map((item) => (
                    <li className="text-body">
                      <a className="hover:text-secondary" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="flex flex-col text-center md:flex-row items-center justify-between py-[1.875rem] md:text-left">
          <p className="text-body">
            Copyright &copy; 2021 HooBank. All Rights Reserved.
          </p>
          <ul role="list" className="flex items-center gap-6 mt-6 md:mt-0">
            {socialMedia.map((social) => {
              return (
                <li>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon} alt={social.title} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
