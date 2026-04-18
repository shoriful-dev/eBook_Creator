import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CTA = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="py-20 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-linear-to-r from-violet-500 to-purple-600 rounded-full blur-[100px] opacity-20 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-linear-to-br from-violet-900 to-purple-900 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Internal decoration */}
          <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-violet-400 opacity-20 rounded-full blur-3xl"></div>
          
          <Sparkles className="w-12 h-12 text-violet-300 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight relative z-10">
            Ready to Write Your First eBook?
          </h2>
          <p className="text-violet-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Join thousands of authors and creators who are scaling their content creation with the power of AI.
          </p>
          
          <Link
            to={isAuthenticated ? "/dashboard" : "/signup"}
            className="inline-flex items-center space-x-2 bg-white text-violet-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-200 shadow-xl relative z-10"
          >
            <span>{isAuthenticated ? "Go to Dashboard" : "Get Started for Free"}</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
