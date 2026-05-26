import React from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 'video-editing',
      title: 'Video Editing Project',
      description: 'Cinematic storytelling for a tech startup',
      tech: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve'],
      link: '/portfolio/video-editing',
      fullDescription: 'Created a compelling promotional video for a tech startup, featuring advanced editing techniques, motion graphics, and color grading to showcase their innovative product. The video achieved over 1 million views on social media platforms.',
      images: ['🎥', '🎬', '✂️'],
      duration: '3 months',
      client: 'TechFlow Inc.'
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Solution',
      description: 'Custom AI workflow for content creation',
      tech: ['Python', 'TensorFlow', 'API Integration'],
      link: '/portfolio/ai-automation',
      fullDescription: 'Developed an AI-powered content generation system that automates blog post creation, social media content, and email marketing campaigns. Reduced content creation time by 70% while maintaining high quality.',
      images: ['🤖', '⚙️', '📝'],
      duration: '4 months',
      client: 'ContentPro Agency'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      description: 'Modern responsive website for e-commerce',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '/portfolio/website-development',
      fullDescription: 'Built a fully responsive e-commerce platform with secure payment processing, inventory management, and admin dashboard. Features include user authentication, product search, and order tracking.',
      images: ['💻', '🛒', '🔒'],
      duration: '5 months',
      client: 'FashionHub'
    },
    {
      id: 'brand-identity',
      title: 'Brand Identity Design',
      description: 'Complete branding package for new business',
      tech: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      link: '/portfolio/brand-identity',
      fullDescription: 'Designed a comprehensive brand identity including logo, color palette, typography, business cards, letterheads, and brand guidelines for a new restaurant chain.',
      images: ['🎨', '📐', '🏷️'],
      duration: '2 months',
      client: 'Bella Vista Restaurants'
    },
    {
      id: 'mobile-app-uiux',
      title: 'Mobile App UI/UX',
      description: 'User-centered design for mobile application',
      tech: ['Figma', 'Sketch', 'Prototyping'],
      link: '/portfolio/mobile-app-uiux',
      fullDescription: 'Created intuitive UI/UX designs for a fitness tracking mobile app, including user research, wireframing, prototyping, and high-fidelity mockups. The design increased user engagement by 40%.',
      images: ['📱', '🎯', '👥'],
      duration: '3 months',
      client: 'FitLife App'
    },
    {
      id: 'social-media-campaign',
      title: 'Social Media Campaign',
      description: 'Comprehensive social media strategy and content creation',
      tech: ['Canva', 'Hootsuite', 'Analytics'],
      link: '/portfolio/social-media-campaign',
      fullDescription: 'Managed a 6-month social media campaign for a fashion brand, creating engaging content, managing multiple platforms, and analyzing performance metrics. Grew follower base by 150%.',
      images: ['📱', '📊', '📈'],
      duration: '6 months',
      client: 'StyleCo Fashion'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '/portfolio/ecommerce-platform',
      fullDescription: 'Developed a scalable e-commerce platform with advanced features like product recommendations, wishlist, reviews, and multi-vendor support. Integrated with Stripe for secure payments.',
      images: ['🛍️', '💳', '📦'],
      duration: '6 months',
      client: 'MarketPlace Pro'
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for business intelligence',
      tech: ['D3.js', 'React', 'Firebase'],
      link: '/portfolio/data-visualization',
      fullDescription: 'Built an interactive data visualization dashboard for a logistics company, displaying real-time shipment tracking, performance metrics, and predictive analytics using D3.js and React.',
      images: ['📊', '📈', '🚚'],
      duration: '4 months',
      client: 'LogiTech Solutions'
    },
    {
      id: 'logo-design',
      title: 'Logo Design Collection',
      description: 'Creative logo designs for various brands',
      tech: ['Adobe Illustrator', 'Photoshop', 'Branding'],
      link: '/portfolio/logo-design',
      fullDescription: 'Designed a collection of modern, memorable logos for startups and established businesses across various industries. Each logo reflects the brand\'s personality and values.',
      images: ['🎨', '✏️', '🏷️'],
      duration: 'Various',
      client: 'Multiple Clients'
    },
    {
      id: 'motion-graphics',
      title: 'Motion Graphics Animation',
      description: 'Engaging animations for marketing campaigns',
      tech: ['After Effects', 'Cinema 4D', 'Motion Design'],
      link: '/portfolio/motion-graphics',
      fullDescription: 'Created stunning motion graphics animations for product launches, explainer videos, and social media content. Used advanced 3D modeling and particle effects to captivate audiences.',
      images: ['🎬', '🎭', '✨'],
      duration: 'Various',
      client: 'AdVantage Marketing'
    }
  ];

  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-brand-purple">Portfolio</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full mx-auto"></div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-xl flex items-center justify-center">
                    <span className="text-4xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-brand-purple/20 text-brand-purple rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={project.link} className="text-brand-purple hover:text-white transition-colors font-medium">
                  View Project →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;