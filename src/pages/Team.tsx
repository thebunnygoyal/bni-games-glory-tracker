
import React from 'react';
import { Users, Code, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

const Team = () => {
  const coordinators = [
    {
      name: 'Yogesh Pugalia',
      title: 'Senior Director Consultant',
      location: 'Kolkata CBD(A) & North'
    },
    {
      name: 'Kaushal Mohata',
      title: 'Senior Director Consultant',
      location: 'Kolkata CBD(A) & North'
    }
  ];

  const directors = [
    'Aditya Himmatsinghka', 'Aditya Agarwal', 'Abhik Chatterjee',
    'Rahul Agarwal', 'Rishav Choudhary', 'Akkash Banthia'
  ];

  const ambassadors = ['Harshit Modi', 'Suhani Dhanania', 'Anil Kumar Gupta'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            The Team Behind Independence Games 2.0
          </h1>
          <p className="text-center text-xl opacity-90">
            Meet the dedicated individuals making BNI Games a success
          </p>
        </div>
      </div>

      {/* Games Coordinators */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Games Coordinators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{coordinator.name}</h3>
                    <p className="text-gray-600">{coordinator.title}</p>
                    <p className="text-sm text-gray-500">{coordinator.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Movers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Game Movers
          </h2>
          
          {/* Managing Director */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-600">
              <h3 className="text-xl font-semibold text-center text-red-600">Managing Director</h3>
              <p className="text-center text-lg mt-2">Vivek Jaiswal</p>
            </div>
          </div>
          
          {/* Associate Area Director */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-center text-red-600">Associate Area Director</h3>
              <p className="text-center text-lg mt-2">Krishna Singh</p>
            </div>
          </div>
          
          {/* Director Consultants */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center mb-4 text-red-600">Director Consultants</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {directors.map((name) => (
                <div key={name} className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Support Ambassadors */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-4 text-red-600">Support Ambassadors</h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {ambassadors.map((name) => (
                <div key={name} className="bg-white rounded-lg shadow p-4 text-center">
                  <p className="font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Developer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-red-600 to-amber-500 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Code className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Website Developed By</h2>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600">RG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Rishav Goyal</h3>
                  <p className="text-lg text-gray-600 mb-6">Full Stack Developer</p>
                  
                  <button 
                    onClick={() => window.open('https://wa.me/919999999999', '_blank')}
                    className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Contact Developer
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    For technical support or custom development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
