
import React from 'react';
import Navigation from '../components/Navigation';
import { HelpCircle, Book, MessageCircle, Download } from 'lucide-react';

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-inter">Help & Support</h1>
          <p className="text-lg text-gray-600">Get help with using the BNI GameTracker Pro system</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Book className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">User Guide</h3>
            <p className="text-gray-600 text-sm mb-4">Complete guide on how to use all features</p>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Read Guide
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Download className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Templates</h3>
            <p className="text-gray-600 text-sm mb-4">Download Excel templates for data entry</p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
              Download
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <MessageCircle className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
            <p className="text-gray-600 text-sm mb-4">Get in touch with our support team</p>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">How do I submit weekly data?</h3>
              <p className="text-gray-600">Navigate to the Chapters page, select your chapter, and click "Submit Data". Fill in the required fields and submit.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">How is scoring calculated?</h3>
              <p className="text-gray-600">Scoring is based on referrals (1 coin each), visitors (50 coins each), attendance bonuses, and other activities as per BNI rules.</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold mb-2">Can I download reports?</h3>
              <p className="text-gray-600">Yes, you can download reports in Excel and PDF formats from the Scoring dashboard.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-bni-red text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-4">For game-related queries, contact our support team:</p>
          <a 
            href="mailto:benchmarkgames.bnikol@gmail.com" 
            className="inline-flex items-center gap-2 bg-white text-bni-red py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            benchmarkgames.bnikol@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
