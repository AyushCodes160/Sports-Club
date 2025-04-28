import React from 'react';
import { Trophy, Users, Star, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Our College</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Learn about our history, values, and commitment to excellence in sports and academics.
          </p>
        </div>
      </div>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1985, our College Sports Club began with just three teams and a handful of dedicated students. Over the decades, we've grown into one of the region's premier collegiate sports programs, with state-of-the-art facilities and a reputation for excellence.
              </p>
              <p className="text-gray-700 mb-4">
                Through the vision of our founding directors and the support of our college administration, we've expanded our offerings to include a wide range of sports, from traditional team activities to emerging athletic disciplines.
              </p>
              <p className="text-gray-700">
                Today, we're proud to host regional tournaments, send athletes to national competitions, and maintain a tradition of both athletic and academic achievement.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg" 
                  alt="College Campus" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="font-semibold">Over 35 years of sporting excellence and community building.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're guided by a clear mission and strong values that shape everything we do.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To develop well-rounded student-athletes through exceptional sports programs, fostering physical excellence, teamwork, leadership, and lifelong healthy habits.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Trophy className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-700">
                We push boundaries and strive for excellence in everything we do, from training to competition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Users className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teamwork</h3>
              <p className="text-gray-700">
                We believe in the power of working together, supporting each other, and achieving common goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Star className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of sportsmanship, honesty, and ethical behavior.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <Calendar className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commitment</h3>
              <p className="text-gray-700">
                We are dedicated to our sports, our studies, and our personal growth as student-athletes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide state-of-the-art training facilities to help our athletes reach their full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg" 
                alt="Indoor Gymnasium" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Indoor Gymnasium</h3>
                <p className="text-gray-700">
                  Our multi-purpose gymnasium features professional flooring, basketball courts, and volleyball setups.
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
                  Our 50-meter Olympic-sized swimming pool includes temperature control and diving platforms.
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
                  Our full-sized soccer field features professional maintenance and lighting for evening practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Key milestones in the development of our college sports program.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:grid grid-cols-9 mx-auto">
              {/* 1985 */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-white col-start-1 col-end-5 p-6 rounded-lg shadow-md my-4 ml-auto md:ml-0 md:mr-4">
                  <h3 className="font-bold text-lg mb-1">1985</h3>
                  <p className="text-gray-700">College Sports Club founded with basketball, soccer, and swimming teams.</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 md:mr-0">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-700 shadow"></div>
                </div>
              </div>
              
              {/* 1992 */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-700 shadow"></div>
                </div>
                <div className="bg-white col-start-6 col-end-10 p-6 rounded-lg shadow-md my-4 mr-auto md:mr-0 md:ml-4">
                  <h3 className="font-bold text-lg mb-1">1992</h3>
                  <p className="text-gray-700">Built our first dedicated sports facility, including gymnasium and outdoor fields.</p>
                </div>
              </div>
              
              {/* 2005 */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-white col-start-1 col-end-5 p-6 rounded-lg shadow-md my-4 ml-auto md:ml-0 md:mr-4">
                  <h3 className="font-bold text-lg mb-1">2005</h3>
                  <p className="text-gray-700">Expanded to 10 sports teams and completed construction of Olympic-sized swimming pool.</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 md:mr-0">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-700 shadow"></div>
                </div>
              </div>
              
              {/* 2015 */}
              <div className="flex md:contents">
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-700 shadow"></div>
                </div>
                <div className="bg-white col-start-6 col-end-10 p-6 rounded-lg shadow-md my-4 mr-auto md:mr-0 md:ml-4">
                  <h3 className="font-bold text-lg mb-1">2015</h3>
                  <p className="text-gray-700">Major renovation of all facilities, including modernized training equipment and technology.</p>
                </div>
              </div>
              
              {/* Today */}
              <div className="flex flex-row-reverse md:contents">
                <div className="bg-blue-700 text-white col-start-1 col-end-5 p-6 rounded-lg shadow-md my-4 ml-auto md:ml-0 md:mr-4">
                  <h3 className="font-bold text-lg mb-1">Today</h3>
                  <p className="text-blue-100">12 competitive teams with over 500 student-athletes and 35 championships.</p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10 md:mr-0">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-blue-700 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-700 shadow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become Part of Our Story</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Join our sports club and help us write the next chapter in our college's sporting history.
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

export default About;