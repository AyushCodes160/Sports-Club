import React, { useState } from 'react';

interface GalleryItemProps {
  image: string;
  title: string;
  caption?: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, caption, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          {caption && <p className="text-sm text-gray-200">{caption}</p>}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;