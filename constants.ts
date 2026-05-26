import { 
  Video, 
  Cpu, 
  Palette, 
  Code, 
  PenTool, 
  BarChart 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    title: 'Video Editing',
    description: 'Cinematic storytelling with high-end VFX and pacing that keeps viewers hooked.',
    icon: Video,
    color: 'text-blue-400'
  },
  {
    title: 'AI Automation',
    description: 'Streamline workflows and scale your business with custom AI solutions.',
    icon: Cpu,
    color: 'text-purple-400'
  },
  {
    title: 'Poster Designing',
    description: 'Eye-catching visuals that communicate your brand message instantly.',
    icon: Palette,
    color: 'text-pink-400'
  },
  {
    title: 'Website Development',
    description: 'Modern, responsive, and high-performance websites built for growth.',
    icon: Code,
    color: 'text-cyan-400'
  },
  {
    title: 'Graphic Designing',
    description: 'Full-spectrum branding and design services to elevate your identity.',
    icon: PenTool,
    color: 'text-green-400'
  },
  {
    title: 'Content Creation',
    description: 'Engaging content strategies that captivate audiences and drive engagement.',
    icon: PenTool,
    color: 'text-orange-400'
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing campaigns to boost your online presence.',
    icon: BarChart,
    color: 'text-red-400'
  },
  {
    title: 'Consulting Services',
    description: 'Expert advice and strategic planning to accelerate your business growth.',
    icon: Cpu,
    color: 'text-indigo-400'
  },
];