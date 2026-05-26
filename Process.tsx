import React from 'react';
import FadeIn from './FadeIn';
import { ArrowRight, Lightbulb, Cog, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and requirements through detailed consultation and research.',
      color: 'text-yellow-400'
    },
    {
      icon: Cog,
      title: 'Design & Development',
      description: 'Our creative team brings your ideas to life with innovative solutions and cutting-edge technology.',
      color: 'text-blue-400'
    },
    {
      icon: Rocket,
      title: 'Launch & Optimization',
      description: 'We deploy your project and continuously optimize for maximum performance and user satisfaction.',
      color: 'text-green-400'
    }
  ];

  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-purple">Process</span>
            </h2>
            <p className="text-xl text-gray-400">How we turn ideas into reality</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 0.2}>
              <div className="glass-card p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 ${step.color} mx-auto mb-6 flex items-center justify-center text-3xl`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-brand-purple mx-auto mt-6 hidden md:block" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="text-center mt-16">
            <div className="glass-card p-8 rounded-2xl inline-block">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-400 mb-6">Let's discuss how we can help bring your vision to life</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-purple">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-purple">Fast</div>
                  <div className="text-sm text-gray-400">Turnaround Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-purple">100%</div>
                  <div className="text-sm text-gray-400">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Process;