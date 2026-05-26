import React from 'react';
import { SERVICES } from '../constants';
import FadeIn from './FadeIn';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
              OUR <span className="text-brand-purple">EXPERTISE</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1} className="h-full">
              <div
                className="group relative glass-card p-8 rounded-2xl overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(124,58,237,0.1)]"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;