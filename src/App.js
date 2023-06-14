import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Query from './components/Query';
import Contact from './components/Contact';
import Particle from './components/Particle';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden root '>
      <Particle/>
      <Header />
      <Nav />
      <Banner />
      <About />
      <Services />
      <Query />
      <Contact />
      
      
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
