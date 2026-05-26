import React from 'react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Startup',
      content: 'TalentTribe transformed our brand with stunning video content. Their attention to detail and creative vision exceeded our expectations.',
      avatar: '👤'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      content: 'The AI automation solutions saved us countless hours. Professional, efficient, and results-driven approach.',
      avatar: '👩'
    },
    {
      name: 'Mike Chen',
      role: 'Founder, E-commerce',
      content: 'Outstanding website development and SEO optimization. Our online presence has never been stronger.',
      avatar: '👨'
    },
    {
      name: 'Emily Davis',
      role: 'Creative Director',
      content: 'Their poster and graphic design work is phenomenal. They captured our vision perfectly and delivered beyond what we imagined.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Operations Manager',
      content: 'The AI SEO optimization boosted our rankings significantly. Highly recommend their data-driven strategies.',
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Wang',
      role: 'Entrepreneur',
      content: 'From concept to launch, TalentTribe handled our entire digital transformation. Exceptional quality and communication.',
      avatar: '👩‍💻'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-brand-black to-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-brand-purple">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-400">Trusted by businesses worldwide</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.2}>
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-brand-purple text-sm">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;