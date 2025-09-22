import React from 'react';
import { Shield, MapPin, FileText, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface LandingPageProps {
  onPageChange: (page: Page) => void;
}

export default function LandingPage({ onPageChange }: LandingPageProps) {
  const features = [
    {
      icon: Shield,
      title: 'Secure Ownership',
      description: 'Blockchain-backed property certificates prevent fraud and ensure authentic ownership records.'
    },
    {
      icon: MapPin,
      title: 'Digital Mapping',
      description: 'Interactive maps with precise land boundaries and comprehensive property information.'
    },
    {
      icon: FileText,
      title: 'Document Verification',
      description: 'Automated verification of property documents with immutable blockchain storage.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Blockchain Land Registry System
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Preventing Property Fraud in Urban India through transparent, secure, and immutable blockchain technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onPageChange('register')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Register Property
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => onPageChange('map')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Properties
              <MapPin className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">1,247</div>
              <div className="text-gray-300">Properties Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">89</div>
              <div className="text-gray-300">Fraud Cases Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">15</div>
              <div className="text-gray-300">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.8%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}