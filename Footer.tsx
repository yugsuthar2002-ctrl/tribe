import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="glass-card p-6 rounded-2xl">
          <Link to="/" className="text-2xl font-bold tracking-tighter mb-2">
            TALENT<span className="text-brand-purple">TRIBE</span>
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TalentTribe. All rights reserved.
          </p>
        </div>

        <div className="text-gray-500 text-sm">
          Connect with us on social media
        </div>
      </div>
    </footer>
  );
};

export default Footer;