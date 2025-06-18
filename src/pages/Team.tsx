
import React from 'react';
import { Users, Code, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

const Team = () => {
  const gameMovers = {
    managingDirector: 'Vivek Jaiswal',
    associateAreaDirector: 'Krishna Singh',
    directorConsultants: [
      'Aditya Himmatsinghka',
      'Aditya Agarwal', 
      'Abhik Chatterjee',
      'Rahul Agarwal',
      'Rishav Choudhary',
      'Akkash Banthia'
    ],
    supportAmbassadors: [
      'Harshit Modi',
      'Suhani Dhanania',
      'Anil Kumar Gupta'
    ]
  };

  const handleWhatsAppClick = () => {
    // Track click event
    console.log('WhatsApp contact clicked');
    
    // Get phone number from data attribute (to be configured later)
    const phoneNumber = '919999999999'; // Default fallback
    const message = encodeURIComponent('Hi, I need help with the BNI Games Tracker website.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-bni-red to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 font-inter">
            The Team Behind Independence Games 2.0
          </h1>
          <p className="text-center text-xl opacity-90">
            Meet the dedicated individuals making BNI Games a success
          </p>
        </div>
      </div>

      {/* Games Coordinators Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-inter">
            Games Coordinators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Coordinator Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-bni-red">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-bni-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Yogesh Pugalia</h3>
                  <p className="text-bni-red font-medium">Senior Director Consultant</p>
                  <p className="text-sm text-gray-500">Kolkata CBD(A) & North</p>
                </div>
              </div>
            </div>
            
            {/* Coordinator Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-bni-red">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-bni-red to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Kaushal Mohata</h3>
                  <p className="text-bni-red font-medium">Senior Director Consultant</p>
                  <p className="text-sm text-gray-500">Kolkata CBD(A) & North</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Movers Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-inter">
            Game Movers
          </h2>
          
          {/* Managing Director */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-bni-red hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center text-bni-red mb-2">Managing Director</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bni-red to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">VJ</span>
                </div>
                <p className="text-lg font-medium text-gray-800">{gameMovers.managingDirector}</p>
              </div>
            </div>
          </div>
          
          {/* Associate Area Director */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-center text-bni-red mb-2">Associate Area Director</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bni-gray to-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KS</span>
                </div>
                <p className="text-lg font-medium text-gray-800">{gameMovers.associateAreaDirector}</p>
              </div>
            </div>
          </div>
          
          {/* Director Consultants */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-6 text-bni-red">Director Consultants</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {gameMovers.directorConsultants.map((name, index) => (
                <div key={name} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <p className="font-medium text-gray-800">{name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support Ambassadors */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-6 text-bni-red">Support Ambassadors</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {gameMovers.supportAmbassadors.map((name, index) => (
                <div key={name} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <p className="font-medium text-gray-800">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Developer Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-bni-red to-bni-amber rounded-2xl p-1 shadow-2xl">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Code className="w-12 h-12 text-bni-red mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-inter">Website Developed By</h2>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-bni-red to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">RG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Rishav Goyal</h3>
                  <p className="text-lg text-gray-600 mb-6">Full Stack Developer</p>
                  
                  {/* WhatsApp Contact Button */}
                  <button 
                    onClick={handleWhatsAppClick}
                    data-whatsapp-number="TO_BE_CONFIGURED"
                    className="inline-flex items-center gap-3 bg-whatsapp-green hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contact Developer
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    For technical support or custom development
                  </p>
                  
                  {/* Optional Social Links */}
                  <div className="flex justify-center gap-4 mt-6">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                      <span className="text-sm font-bold">in</span>
                    </button>
                    <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                      <Code className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appreciation Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Special Thanks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We extend our heartfelt gratitude to all chapter members, referral partners, and supporters 
            who make the BNI Independence Games a tremendous success. Your dedication and enthusiasm 
            drive the spirit of this competition.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-4">
            For game-related queries, contact:
          </p>
          <a 
            href="mailto:benchmarkgames.bnikol@gmail.com" 
            className="inline-flex items-center gap-2 text-bni-red hover:text-red-700 font-semibold text-lg hover:underline transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            benchmarkgames.bnikol@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 BNI Independence Games 2.0</p>
          <p className="text-gray-400">
            Powered by BNI GameTracker Pro | Developed with ❤️ for BNI Community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Team;
