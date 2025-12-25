'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const weddingImages = [
  '/anniversary/images/wedding/2017-12-24_07-39-52.jpg',
  '/anniversary/images/wedding/2017-12-24_07-41-19.jpg',
  '/anniversary/images/wedding/2017-12-24_07-42-26.jpg',
  '/anniversary/images/wedding/2017-12-24_07-42-47.jpg',
  '/anniversary/images/wedding/2017-12-24_07-43-09.jpg',
  '/anniversary/images/wedding/2017-12-24_07-43-16.jpg',
  '/anniversary/images/wedding/2017-12-24_07-43-21.jpg',
  '/anniversary/images/wedding/2017-12-24_07-44-55.jpg',
  '/anniversary/images/wedding/2017-12-24_07-45-48.jpg',
  '/anniversary/images/wedding/2017-12-24_07-46-20.jpg',
  '/anniversary/images/wedding/2017-12-24_07-46-27.jpg',
  '/anniversary/images/wedding/2017-12-24_07-46-53.jpg',
];

export default function WeddingSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % weddingImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + weddingImages.length) % weddingImages.length,
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlay || isLightboxOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, isLightboxOpen, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      id="wedding-photos"
      className="py-10 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
            Ngày Cưới Của Chúng Mình
          </h2>
          <p className="font-dancing text-2xl text-gray-600">
            26 Tháng 12, 2017 - Ngày trọng đại nhất 💒
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="relative">
          {/* Main Image */}
          <div
            className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={weddingImages[currentIndex]}
              alt={`Ảnh cưới ${currentIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-contain bg-gradient-to-br from-pink-100 to-purple-100 transition-transform duration-500"
              priority
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="glass px-6 py-3 rounded-full text-gray-800 font-medium">
                🔍 Click để xem lớn
              </span>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 glass px-4 py-2 rounded-full">
              <span className="text-gray-700 font-medium">
                {currentIndex + 1} / {weddingImages.length}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors shadow-lg"
            aria-label="Ảnh trước"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-pink-100 transition-colors shadow-lg"
            aria-label="Ảnh tiếp"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div
          className="mt-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 justify-center min-w-max px-4 [&::-webkit-scrollbar]:hidden">
            {weddingImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-primary scale-110 shadow-md'
                    : 'opacity-50 hover:opacity-100 hover:scale-105'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-pink-400 transition-colors z-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>

          {/* Main Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={weddingImages[currentIndex]}
              alt={`Ảnh cưới ${currentIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation in Lightbox */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-2 rounded-full">
            <span className="text-gray-700 font-medium">
              {currentIndex + 1} / {weddingImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
