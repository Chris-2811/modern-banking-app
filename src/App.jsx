import React from 'react';
import {
  Billing,
  Brands,
  Business,
  CTA,
  Deal,
  Hero,
  Navbar,
  Testimonials,
  Stats,
  Footer,
} from './components/index';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main id="main">
        <Stats />
        <Business />
        <Billing />
        <Deal />
        <Testimonials />
        <Brands />
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
