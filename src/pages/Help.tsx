
import React from 'react';
import Navigation from '../components/Navigation';
import { HelpCircle, BookOpen, MessageCircle, Mail } from 'lucide-react';

const Help = () => {
  const faqs = [
    {
      question: "How do I submit weekly data?",
      answer: "Navigate to the dashboard and click 'Submit Weekly Data'. Fill in the required information for your chapter members and submit."
    },
    {
      question: "How is scoring calculated?",
      answer: "Individual scores are based on referrals (1 coin), visitors (50 coins), attendance (-10 for absences), testimonials (5 coins, max 2), and trainings (25 coins, max 3)."
    },
    {
      question: "When does the competition end?",
      answer: "The BNI Independence Games 2.0 competition ends on August 1, 2025. Check the countdown on the dashboard for exact time remaining."
    },
    {
      question: "Who can access the admin panel?",
      answer: "Only designated captains and coaches have access to the admin panel for their respective chapters."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Help & Support</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-red-600 mb-6 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact & Resources */}
          <div className="space-y-6">
            {/* Contact Support */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <a 
                    href="mailto:benchmarkgames.bnikol@gmail.com" 
                    className="text-blue-600 hover:underline"
                  >
                    benchmarkgames.bnikol@gmail.com
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold">Response Time</h3>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Quick Links
              </h2>
              
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  Download Template
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  Game Rules
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  Scoring Guide
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                  Video Tutorials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
