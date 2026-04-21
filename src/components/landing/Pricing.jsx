import React from 'react';
import { Check, Zap, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleUpgrade = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post(API_PATHS.PAYMENTS.INIT);
      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        toast.error('Failed to initialize payment');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="pricing" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-violet-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-violet-900">Affordable Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Simple Pricing for <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Every Creator</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Get professional features at a minimal cost. One-time payment, unlimited value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-violet-100 transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for trying out our AI tools.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">0 BDT</span>
              <span className="text-gray-500 ml-2">/ forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Create up to 3 eBooks',
                'Standard AI Generation',
                'Basic Export options',
                'Community Support'
              ].map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-violet-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              disabled 
              className="w-full py-3 px-6 rounded-xl bg-gray-50 text-gray-400 font-semibold cursor-not-allowed"
            >
              Current Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white rounded-3xl p-8 border-2 border-violet-500 shadow-xl shadow-violet-500/10 transition-all duration-300">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-linear-to-r from-violet-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
              One-Time Payment
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              Pro Creator <Zap className="w-4 h-4 text-violet-500 fill-violet-500" />
            </h3>
            <p className="text-gray-500 text-sm mb-6">Full power for professional publishing.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">500 BDT</span>
              <span className="text-gray-500 ml-2">/ 1 Year Access</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Unlimited eBook Creation',
                'Advanced AI Models',
                'Priority Export (PDF & DOCX)',
                'Custom Cover Generation',
                'Premium Support',
                'Ad-free experience'
              ].map((feature, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-gray-700">
                  <div className="bg-violet-100 p-0.5 rounded-full">
                    <Check className="w-3.5 h-3.5 text-violet-600" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={handleUpgrade}
              disabled={loading || user?.isPro}
              className={`w-full py-3 px-6 rounded-xl font-bold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-200 ${
                user?.isPro 
                  ? 'bg-green-500 shadow-green-500/20' 
                  : 'bg-linear-to-r from-violet-600 to-purple-600'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : user?.isPro ? (
                'Pro Active ✓'
              ) : (
                'Upgrade via bKash/Nagad'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
