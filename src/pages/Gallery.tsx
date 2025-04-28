import React, { useState } from 'react';
import GalleryItem from '../components/GalleryItem';
import Lightbox from '../components/Lightbox';
import { galleryData } from '../data/galleryData';

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(galleryData.map(item => item.category)))];
  
  const filteredImages = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };
  
  const goToNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Photo Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
            Explore moments captured from our events, competitions, and training sessions.
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <GalleryItem
                key={item.id}
                image={item.image}
                title={item.title}
                caption={item.caption}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onPrev={goToPrevImage}
          onNext={goToNextImage}
        />
      )}
    </div>
  );
};

export default Gallery;