import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt="Vehicle"
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}