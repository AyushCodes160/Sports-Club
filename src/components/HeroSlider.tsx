import React, { useState, useEffect } from 'react';

interface SlideProps {
  image: string;
  title: string;
  subtitle: string;
}

const slides: SlideProps[] = [
  {
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    title: 'Champions in Training',
    subtitle: 'Join our winning teams and reach your full potential',
  },
  {
    image: 'https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg',
    title: 'State-of-the-Art Facilities',
    subtitle: 'Train in our modern facilities with professional coaching',
  },
  {
    image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
    title: 'Build Lasting Friendships',
    subtitle: 'Create bonds that last beyond graduation',
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl animate-fade-in-up">
              {slide.subtitle}
            </p>
            <div className="flex gap-4">
              <a
                href="/sports"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Sports
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-900 transition duration-300 transform hover:scale-105"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;