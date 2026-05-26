import React from 'react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-cyan relative overflow-hidden">
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <div className="glass-card p-8 md:p-12 rounded-3xl inline-block">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-white/90">Let's discuss your project and bring your vision to life.</p>
          <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block hover:bg-white/90">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;