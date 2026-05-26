import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesPreview from '../components/ServicesPreview';
import About from '../components/About';
import Process from '../components/Process';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return <>
    <Hero />
    <Stats />
    <ServicesPreview />
    <About />
    <Process />
    <CTA />
  </>;
};

export default Home;