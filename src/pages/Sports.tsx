import React from 'react';
import SportCard from '../components/SportCard';
import { sportsData } from '../data/sportsData';

const Sports: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Sports Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Discover our diverse range of sports programs led by experienced coaches in state-of-the-art facilities.
          </p>
        </div>
      </div>

      {/* Sports Cards */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsData.map((sport) => (
              <SportCard
                key={sport.id}
                name={sport.name}
                image={sport.image}
                description={sport.description}
                coach={sport.coach}
                schedule={sport.schedule}
                achievements={sport.achievements}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on providing top-notch facilities for all our athletes. These training spaces are designed to help you reach your full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" 
                alt="Indoor Gymnasium" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Indoor Gymnasium</h3>
                <p className="text-gray-700">
                  A multi-purpose gymnasium with professional flooring, basketball courts, and volleyball setups.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg" 
                alt="Olympic Pool" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Olympic Pool</h3>
                <p className="text-gray-700">
                  A 50-meter Olympic-sized swimming pool with temperature control and diving platforms.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" 
                alt="Soccer Field" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Soccer Field</h3>
                <p className="text-gray-700">
                  A full-sized soccer field with professional maintenance and lighting for evening practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Team?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Contact us today to learn about tryouts, practice schedules, and membership options.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sports;