import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I own the copyright to the generated eBooks?",
    answer: "Yes! You have 100% commercial rights to any content or cover generated using our platform. You can sell them on Amazon KDP, your website, or anywhere else."
  },
  {
    question: "How long does it take to write a full eBook?",
    answer: "The process usually takes 5-10 minutes from idea to final PDF. The AI generates the outline instantly, and each chapter takes about 30 seconds to generate."
  },
  {
    question: "Can I edit the AI-generated content?",
    answer: "Absolutely. We provide a built-in rich text editor where you can tweak, rewrite, or add your own content to any chapter before exporting."
  },
  {
    question: "What formats can I export my eBook to?",
    answer: "Currently, we support exporting to high-quality PDF and DOCX (Word Document) formats. We plan to add EPUB support in the near future."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full">
            <span className="text-sm font-semibold text-violet-900">Answers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-purple-600">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-hidden"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-violet-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
