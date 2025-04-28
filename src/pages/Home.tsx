import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import { Trophy, Users, Award, Calendar } from 'lucide-react';
import { sportsData } from '../data/sportsData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-900">
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
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Sports Programs</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Discover the diverse range of sports programs offered at our college. From competitive teams to recreational activities, there's something for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sportsData.slice(0, 3).map((sport) => (
              <div 
                key={sport.id} 
                className="bg-slate-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-700"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sport.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">{sport.name}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{sport.description}</p>
                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-slate-200 mb-3">Team Coordinator</h4>
                    <div className="space-y-2">
                      <p className="text-slate-300">
                        <span className="text-slate-400">Name:</span> {sport.coordinator.name}
                      </p>
                      <p className="text-slate-300">
                        <span className="text-slate-400">Contact:</span>{' '}
                        <a 
                          href={`mailto:${sport.coordinator.contact}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {sport.coordinator.contact}
                        </a>
                      </p>
                    </div>
                  </div>
                  <Link
                    to="/sports"
                    className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
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
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              View All Sports
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg" 
                  alt="College Campus" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="font-semibold">Founded in 1985, our sports club has a rich tradition of excellence and community.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">About Our College Sports Club</h2>
              <p className="text-slate-300 mb-6">
                At our college, we believe sports are an essential part of student development. Our sports club provides opportunities for students to compete, grow, and excel both athletically and academically.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700 p-4 rounded border border-slate-600">
                  <h3 className="font-semibold text-slate-100 mb-2">Vision</h3>
                  <p className="text-slate-300">To create champions on and off the field through dedication and teamwork.</p>
                </div>
                
                <div className="bg-slate-700 p-4 rounded border border-slate-600">
                  <h3 className="font-semibold text-slate-100 mb-2">Mission</h3>
                  <p className="text-slate-300">To provide elite training, facilities, and opportunities for all students.</p>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Sports Community?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Whether you're a seasoned athlete or just starting out, there's a place for you in our college sports club.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors transform hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;