import React from 'react';
import FadeIn from '../components/FadeIn';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-brand-purple">Us</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the talented individuals behind TalentTribe who are dedicated to bringing your vision to life through creativity and innovation.
            </p>
          </div>
        </FadeIn>

        {/* Team Section */}
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="glass-card p-6 rounded-2xl bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer group flex-1">
              <h3 className="text-2xl font-bold mb-3 text-center">Suthar Yug</h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500">
                <p className="text-brand-purple mb-4 text-lg text-center">Role: Full Stack Developer</p>
                <p className="text-gray-400 text-base text-center mb-2">Languages:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">C</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">C++</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Dart</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">SQL</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">PHP</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl bg-purple-500/5 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer group flex-1">
              <h3 className="text-2xl font-bold mb-3 text-center">Suthar Vansh</h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-96 transition-all duration-500">
                <p className="text-brand-purple mb-4 text-lg text-center">Role: Video Editor and Full Stack Developer</p>
                <p className="text-gray-400 text-base text-center mb-2">Languages:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">C</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">C++</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Additional About Content */}
        <FadeIn delay={0.4}>
          <div className="mt-20 glass-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              At TalentTribe, we believe in the power of collaboration and innovation. Our diverse team brings together expertise from various fields to create exceptional digital experiences that not only meet but exceed our clients' expectations. We're committed to pushing the boundaries of what's possible in the digital world.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;