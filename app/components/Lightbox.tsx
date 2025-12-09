'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  title: string;
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev, title }: LightboxProps) {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-800 hover:text-lavender transition-colors z-50 bg-white/80 rounded-full p-2 shadow-lg"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrev}
        className="absolute left-6 text-gray-800 hover:text-lavender transition-colors z-50 bg-white/80 rounded-full p-3 shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-6 text-gray-800 hover:text-lavender transition-colors z-50 bg-white/80 rounded-full p-3 shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center p-20">
        <Image
          src={images[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          fill
          className="object-contain"
          quality={95}
          priority
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 rounded-full shadow-lg">
        <span className="text-gray-800 text-sm font-medium tracking-wide">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
