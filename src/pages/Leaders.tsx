import React from 'react';
import LeaderCard from '../components/LeaderCard';
import { leadersData } from '../data/leadersData';

const Leaders: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Team Leaders</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Meet the passionate professionals and students who lead our sports programs.
          </p>
        </div>
      </div>
      
      {/* Leadership Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals and dedicated students work together to create an exceptional sports environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadersData.map((leader) => (
              <LeaderCard
                key={leader.id}
                name={leader.name}
                role={leader.role}
                image={leader.image}
                bio={leader.bio}
                sport={leader.sport}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our leadership team and shape our sports programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700">We strive for excellence in everything we do, from training to competition to academics.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Teamwork</h3>
              <p className="text-gray-700">We believe in the power of collaboration, support, and working together toward common goals.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedication</h3>
              <p className="text-gray-700">We are committed to helping every athlete reach their full potential through hard work and perseverance.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Leadership Team */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Leadership Opportunities?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students and professionals to join our leadership team.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Leaders;