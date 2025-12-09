'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface MasonryGalleryProps {
  id: string;
  title: string;
  images: string[];
  description?: string;
  accentColor?: 'lavender' | 'green';
}

export default function MasonryGallery({ id, title, images, description, accentColor = 'lavender' }: MasonryGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const accentColorClass = accentColor === 'lavender' ? 'text-lavender' : 'text-grass-green';

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-5xl md:text-6xl font-bad-script ${accentColorClass} mb-4`}>
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Masonry Grid - 2 columns */}
        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto image-hover"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-sm tracking-wide font-medium">
                  VIEW FULL SIZE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={selectedImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
          onPrev={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}
          title={title}
        />
      )}
    </section>
  );
}
