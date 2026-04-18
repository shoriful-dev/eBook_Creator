import React from 'react';
import { PenLine, Wand2, BookOpen, Download, Layers } from 'lucide-react';

const steps = [
  {
    icon: PenLine,
    title: 'Describe Your Idea',
    description: 'Enter your book topic, target audience, and preferred language. Our AI understands context and crafts the perfect starting point.',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Wand2,
    title: 'Generate Outline',
    description: 'The AI creates a structured chapter-by-chapter outline. Reorder, rename, add or remove chapters until the structure feels right.',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: BookOpen,
    title: 'Write & Design',
    description: 'One click generates detailed content for each chapter. Upload or create a custom cover image to complete your book\'s identity.',
    gradient: 'from-indigo-500 to-violet-600',
  },
  {
    icon: Download,
    title: 'Export & Share',
    description: 'Download your finished eBook as a professionally formatted PDF or DOCX file — ready for Amazon KDP, Gumroad, or your audience.',
    gradient: 'from-violet-500 to-fuchsia-600',
  }
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-50/50 via-transparent to-purple-50/50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header — matches Features & Testimonials style */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-violet-900">How It Works</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            From Idea to Published
            <span className='block mt-2 bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent'>In Just 4 Steps</span>
          </h2>
          <p className='text-base text-gray-600 max-w-2xl mx-auto'>
            No writing experience needed. Our AI handles the heavy lifting so you can focus on your message.
          </p>
        </div>

        {/* Steps Grid — matches Features card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className='group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1'
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-50/0 to-purple-50/0 group-hover:from-violet-50/50 group-hover:to-purple-50/30 rounded-2xl transition-all duration-300"></div>

                <div className='relative space-y-4'>
                  {/* Step Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-14 h-14 bg-linear-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className='w-7 h-7 text-white' />
                    </div>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-violet-100 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-900 transition-colors'>{step.title}</h3>
                    <p className='text-gray-600 leading-relaxed text-sm'>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
