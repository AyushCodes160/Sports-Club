import React from 'react';
import SportCard from '../components/SportCard';
import { sportsData } from '../data/sportsData';
import { Link } from 'react-router-dom';

const Sports: React.FC = () => {
  return (
    <div className="pt-16 bg-slate-900">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Sports Programs</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-center">
            Discover our diverse range of sports programs led by experienced coaches in state-of-the-art facilities.
          </p>
        </div>
      </div>

      {/* Sports Cards */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsData.map((sport) => (
              <SportCard
                key={sport.id}
                name={sport.name}
                image={sport.image}
                description={sport.description}
                coordinator={sport.coordinator}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Our Training Facilities</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              We pride ourselves on providing top-notch facilities for all our athletes. These training spaces are designed to help you reach your full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" 
                alt="Indoor Gymnasium" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Indoor Gymnasium</h3>
                <p className="text-slate-300">
                  A multi-purpose gymnasium with professional flooring, basketball courts, and volleyball setups.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg" 
                alt="Olympic Pool" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Olympic Pool</h3>
                <p className="text-slate-300">
                  A 50-meter Olympic-sized swimming pool with temperature control and diving platforms.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" 
                alt="Soccer Field" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Soccer Field</h3>
                <p className="text-slate-300">
                  A full-sized soccer field with professional maintenance and lighting for evening practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Team?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-slate-100">
            Contact us today to learn about tryouts, practice schedules, and membership options.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Sports;