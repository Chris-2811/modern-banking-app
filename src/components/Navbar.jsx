import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { navLinks } from '../constants';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  function handleNavClick(index) {
    setActiveLink(index);
  }

  function closeMobileMenu() {
    setNavToggle(false);
  }

  return (
    /* Navbar */
    <section
      id="navbar"
      className="container flex justify-between items-center pt-6 lg:pt-[1.875rem]"
    >
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <div className="logo w-28  md:w-36">
        <img src={logo} alt="logo of hoobank" />
      </div>
      <nav aria-label="Primary-navigation" className="hidden sm:block">
        <ul
          className="flex items-center text-dimWhite gap-6 lg:gap-[3.5rem]"
          role="list"
        >
          {navLinks.map((link, index) => {
            return (
              <li
                key={link.id}
                className={`nav-link ${
                  index === activeLink ? 'text-white' : ''
                }`}
              >
                <a href={`#${link.id}`} onClick={() => handleNavClick(index)}>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div id="mobile-nav-toggle" className="sm:hidden">
        <span className="sr-only">Menu</span>
        <img
          src={!navToggle ? menu : close}
          alt="menu"
          onClick={() => {
            setNavToggle(!navToggle ? true : false);
          }}
          aria-label={!navToggle ? 'openMenu' : 'closeMenu'}
        />
      </div>
      {/* mobile menu */}
      {navToggle && (
        <div className="mobile-menu absolute w-[8.75rem] slide-top z-10 bg-mobile-menu p-6 rounded-xl right-6 top-20 bg-">
          <ul
            role="list"
            aria-label="Primary-navigation"
            className="flex flex-col gap-4 "
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-body font-semibold text-xl"
                  onClick={() => closeMobileMenu()}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Navbar;
