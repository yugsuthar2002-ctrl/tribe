import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleSphere from './ParticleSphere';
import FadeIn from './FadeIn';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Particle Sphere Animation */}
      <ParticleSphere />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/10 to-brand-black/90 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <FadeIn delay={0}>
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium tracking-widest text-brand-purple uppercase">
            The Future of Digital Excellence
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">
              DIGITAL EMPIRES
            </span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            TalentTribe creates world-class digital experiences. From high-retention video editing to AI-driven automation, we engineer success.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan text-white font-bold rounded-full shadow-lg">
              <span className="flex items-center gap-2">
                Start Project <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
            
            <Link to="/services" className="px-8 py-4 rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-sm font-bold uppercase tracking-widest backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]">
              Explore Services
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn delay={1.0} className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;