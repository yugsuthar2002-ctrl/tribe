import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';

const ServicesPreview: React.FC = () => {
  const previewServices = SERVICES.slice(0, 3); // Show first 3

  return (
    <section className="py-16 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="text-brand-purple">Expertise</span>
            </h2>
            <p className="text-lg text-gray-400">Discover what we can do for you</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className={`mb-4 p-3 rounded-xl bg-white/5 w-fit mx-auto ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="bg-brand-purple px-6 py-3 rounded-full font-bold hover:bg-brand-purple/90 transition-colors inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;