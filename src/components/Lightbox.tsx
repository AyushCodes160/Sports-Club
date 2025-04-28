import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: {
    image: string;
    title: string;
    caption?: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    // Add keyboard event listeners
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <button
        className="absolute left-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
        onClick={onPrev}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
        onClick={onNext}
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative max-w-6xl max-h-screen p-4">
        <img
          src={currentImage.image}
          alt={currentImage.title}
          className="max-h-[80vh] max-w-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <h3 className="text-xl font-bold">{currentImage.title}</h3>
          {currentImage.caption && <p className="text-gray-300">{currentImage.caption}</p>}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => {
              if (index < currentIndex) onPrev();
              else if (index > currentIndex) onNext();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Lightbox;