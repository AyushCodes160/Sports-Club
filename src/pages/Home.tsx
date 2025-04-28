import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import { Trophy, Users, Award, Calendar } from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      
      {/* Stats Section */}
      <StatsCounter 
        items={[
          { 
            end: 8, 
            duration: 2000, 
            label: 'Sports Teams', 
            icon: <Trophy className="w-10 h-10 text-white" /> 
          },
          { 
            end: 200, 
            duration: 2500, 
            label: 'Active Members', 
            icon: <Users className="w-10 h-10 text-white" /> 
          },
          { 
            end: 10, 
            duration: 2500, 
            label: 'Events Per Year', 
            icon: <Calendar className="w-10 h-10 text-white" /> 
          }
        ]}
      />
      
      {/* Featured Sports Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Sports Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover the diverse range of sports programs offered at our college. From competitive teams to recreational activities, there's something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsData.slice(0, 3).map((sport) => (
              <div 
                key={sport.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sport.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{sport.description}</p>
                  <Link
                    to="/sports"
                    className="inline-block px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/sports"
              className="inline-block px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors transform hover:scale-105"
            >
              View All Sports
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg" 
                  alt="College Campus" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="font-semibold">Founded in 1985, our sports club has a rich tradition of excellence and community.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our College Sports Club</h2>
              <p className="text-gray-700 mb-6">
                At our college, we believe sports are an essential part of student development. Our sports club provides opportunities for students to compete, grow, and excel both athletically and academically.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-700">To create champions on and off the field through dedication and teamwork.</p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-700">To provide elite training, facilities, and opportunities for all students.</p>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Sports Community?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're a seasoned athlete or just starting out, there's a place for you in our college sports club.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition-colors transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;