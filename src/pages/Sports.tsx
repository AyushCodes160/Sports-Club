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
              We take pride in providing world-class training facilities designed to enhance your athletic performance and foster skill development in your chosen sport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg" 
                alt="Professional Turf" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Professional Sports Turf</h3>
                <p className="text-slate-300">
                  Experience the thrill of playing on our meticulously maintained professional turf, exclusively reserved for cricket and football training sessions. With dedicated weekly slots, teams can practice and perfect their strategies in an ideal environment.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg" 
                alt="Indoor Sports Arena" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Indoor Sports Arena</h3>
                <p className="text-slate-300">
                  Our state-of-the-art indoor facility features dedicated spaces for table tennis and badminton, complete with professional-grade equipment and optimal lighting. The climate-controlled environment ensures year-round comfort for players of all levels.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md bg-slate-700 border border-slate-600">
              <img 
                src="https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg" 
                alt="Strategic Gaming Center" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 text-slate-100">Strategic Gaming Center</h3>
                <p className="text-slate-300">
                  Our specially designed chess center provides a serene and focused environment for strategic thinking. With soundproofed rooms, ergonomic furniture, and professional chess equipment, it's the perfect space for developing tactical skills and competitive play.
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