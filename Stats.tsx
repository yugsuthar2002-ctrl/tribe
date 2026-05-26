import React from 'react';
import FadeIn from './FadeIn';

const Stats: React.FC = () => {
  const stats = [
    { number: '11+', label: 'Projects Completed' },
    { number: '6+', label: 'months Experience' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Team Members' }
  ];

  return (
    <section className="py-16 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="glass-card p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-4xl md:text-6xl font-bold text-brand-purple mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;