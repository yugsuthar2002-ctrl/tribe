import React from 'react';
import Contact from '../components/Contact';
import ServicesPreview from '../components/ServicesPreview';
import CTA from '../components/CTA';

const ContactPage: React.FC = () => {
  return <>
    <Contact />
    <ServicesPreview />
    <CTA />
  </>;
};

export default ContactPage;