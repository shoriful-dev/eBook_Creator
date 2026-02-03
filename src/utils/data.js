import { Lightbulb, BookOpen, Download, Library } from 'lucide-react';

export const FEATURES = [
  {
    title: 'AI-Powered Writing',
    description: 'Overcome writer\'s block with our smart assistant that helps you generate ideas, outlines, and content.',
    icon: Lightbulb,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Immersive Reader',
    description: 'Preview your eBook in a clean, read-only format. adjust font sizes for a comfortable reading experience before exporting.',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'On-Click Export',
    description: 'export your eBook to PDF, and DOCX formats instantly, ready for publishing',
    icon: Download,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'eBook Management',
    description: 'Organize all your eBook projects is a personal dashboard, Esily track progress, edit details, and manage exports.',
    icon: Library,
    gradient: 'from-pink-500 to-rose-600',
  }
]

export const TESTIMONIALS = [
  {
    quote: 'This platform made it so easy to write and publish my first eBook. The AI assistant was a game-changer!',
    author: 'Jane Doe',
    title: 'Best-Selling Author',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    quote: 'I love the customizable templates. I was able to create a beautiful eBook that matched my brand perfectly',
    author: 'John Smith',
    title: 'Marketing Expert',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
  },
  {
    quote: 'The export feature is fantastic! I could download my eBook in multiple formats with just one click.',
    author: 'Emily Johnson',
    title: 'Freelance Writer',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
    rating: 5,
  }
]
