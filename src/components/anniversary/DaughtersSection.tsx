'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Daughter {
  name: string;
  fullName: string;
  birthDate: string;
  age: string;
  color: string;
  description: string;
  images: string[];
}

const daughters: Daughter[] = [
  {
    name: 'Phương Thảo',
    fullName: 'Nguyễn Thị Phương Thảo',
    birthDate: '16/03/2019',
    age: '6 tuổi',
    color: 'from-purple-400 to-pink-400',
    description: 'Công chúa lớn, ngoan ngoãn và thông minh',
    images: [
      '/anniversary/images/daughters/phuong-thao/IMG_20241026_180904.jpg',
      '/anniversary/images/daughters/phuong-thao/PXL_20231008_034950121.PORTRAIT.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_20230611_103051.jpg',
      '/anniversary/images/daughters/phuong-thao/PXL_20240121_110515321.PORTRAIT.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_3141.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_20230211_164141.jpg',
      '/anniversary/images/daughters/phuong-thao/20220531_102026.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_0060-EFFECTS(1).jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_1131.JPG',
      '/anniversary/images/daughters/phuong-thao/IMG_20221106_184536.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_2510.jpg',
      '/anniversary/images/daughters/phuong-thao/IMG_3428.JPG',
      '/anniversary/images/daughters/phuong-thao/IMG_6164.JPG',
      '/anniversary/images/daughters/phuong-thao/PXL_20231021_100450084.MP.jpg',
      '/anniversary/images/daughters/phuong-thao/PXL_20231231_102130068.MP.jpg',
      '/anniversary/images/daughters/phuong-thao/PXL_20240107_090602176.jpg',
    ],
  },
  {
    name: 'Ánh Dương',
    fullName: 'Nguyễn Ngọc Ánh Dương',
    birthDate: '20/02/2024',
    age: '1 tuổi',
    color: 'from-amber-400 to-orange-400',
    description: 'Như ánh mặt trời, luôn mang lại niềm vui',
    images: [
      '/anniversary/images/daughters/anh-duong/IMG_20241210_211642.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_5525.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20250105_184230.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20251023_200655.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_5302.jpg',
      '/anniversary/images/daughters/anh-duong/PXL_20240824_090445269.jpg',
      '/anniversary/images/daughters/anh-duong/1aa9b33846bfb629efa79b11f5982721 Copy.JPG',
      '/anniversary/images/daughters/anh-duong/IMG_20240528_195542.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20241226_202810.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20250225_165213_BURST1.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20250829_084800.jpg',
      '/anniversary/images/daughters/anh-duong/IMG_20250913_082147.jpg',
    ],
  },
  {
    name: 'Bảo My',
    fullName: 'Nguyễn Thị Bảo My',
    birthDate: '28/08/2025',
    age: '4 tháng',
    color: 'from-rose-400 to-pink-400',
    description: 'Thành viên mới nhất, viên ngọc quý của gia đình',
    images: [
      '/anniversary/images/daughters/bao-my/IMG_0622.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0705.jpg',
      '/anniversary/images/daughters/bao-my/IMG_20251112_181605.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0693.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0571.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0520.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0545.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0668.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0699.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0706.jpg',
      '/anniversary/images/daughters/bao-my/IMG_0709.JPG',
      '/anniversary/images/daughters/bao-my/IMG_20251020_090638.jpg',
      '/anniversary/images/daughters/bao-my/IMG_20251128_091046.jpg',
      '/anniversary/images/daughters/bao-my/IMG_20251211_091233.jpg',
      '/anniversary/images/daughters/bao-my/IMG_20251213_095341.jpg',
    ],
  },
];

function DaughterCard({
  daughter,
  index,
  onOpenGallery,
}: {
  daughter: Daughter;
  index: number;
  onOpenGallery: (daughterIndex: number, imageIndex: number) => void;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % daughter.images.length);
  }, [daughter.images.length]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div
      className="group glass rounded-3xl p-4 md:p-6 card-hover text-center"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Photo Carousel */}
      <div
        className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-4 shadow-lg cursor-pointer"
        onClick={() => onOpenGallery(index, currentImage)}
      >
        <Image
          src={daughter.images[currentImage]}
          alt={daughter.name}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Click hint overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-xs font-medium">🔍 Xem gallery</span>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
          {currentImage + 1}/{daughter.images.length}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1 mb-3">
        {daughter.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentImage ? 'bg-primary w-4' : 'bg-pink-200'
            }`}
          />
        ))}
      </div>

      {/* Name */}
      <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-800 mb-1">
        {daughter.name}
      </h3>
      <p className="text-gray-500 text-xs md:text-sm mb-2">
        {daughter.fullName}
      </p>

      {/* Birth Info */}
      <div className="inline-block bg-white rounded-full px-3 py-1.5 mb-3 shadow-sm">
        <span className="text-primary font-semibold text-sm">
          {daughter.birthDate}
        </span>
        <span className="text-gray-400 mx-2">•</span>
        <span className="text-gray-600 text-sm">{daughter.age}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {daughter.description}
      </p>
    </div>
  );
}

export default function DaughtersSection() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedDaughter, setSelectedDaughter] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const openGallery = (daughterIndex: number, imageIndex: number) => {
    setSelectedDaughter(daughterIndex);
    setSelectedImage(imageIndex);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    const images = daughters[selectedDaughter].images;
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    const images = daughters[selectedDaughter].images;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeGallery();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, selectedDaughter]);

  const currentDaughter = daughters[selectedDaughter];

  return (
    <section
      id="daughters"
      className="py-16 px-4 bg-gradient-to-b from-pink-50 to-purple-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold gradient-text mb-3">
            Ba Công Chúa Nhỏ
          </h2>
          <p className="font-dancing text-xl md:text-2xl text-gray-600">
            Những thiên thần đáng yêu của bố mẹ 👨‍👩‍👧‍👧
          </p>
        </div>

        {/* Daughters Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {daughters.map((daughter, index) => (
            <DaughterCard
              key={index}
              daughter={daughter}
              index={index}
              onOpenGallery={openGallery}
            />
          ))}
        </div>

        {/* Family Message */}
        <div className="text-center mt-10">
          <div className="inline-block glass rounded-2xl px-6 py-3">
            <p className="font-dancing text-xl md:text-2xl text-gray-700">
              &ldquo;Con là món quà tuyệt vời nhất mà cuộc đời trao tặng&rdquo;
            </p>
            <p className="text-primary mt-2 text-sm md:text-base">
              — Bố Mẹ yêu các con! ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex flex-col"
          onClick={closeGallery}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white">
            <div>
              <h3 className="font-playfair text-xl font-bold">
                {currentDaughter.name}
              </h3>
              <p className="text-sm text-gray-300">
                {currentDaughter.fullName}
              </p>
            </div>
            <button
              className="text-4xl hover:text-pink-400 transition-colors"
              onClick={closeGallery}
            >
              ×
            </button>
          </div>

          {/* Main Image */}
          <div
            className="flex-1 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-4xl max-h-[70vh]">
              <Image
                src={currentDaughter.images[selectedImage]}
                alt={`${currentDaughter.name} - Ảnh ${selectedImage + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
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
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
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

          {/* Thumbnails */}
          <div className="p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {currentDaughter.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
                    i === selectedImage
                      ? 'ring-2 ring-primary scale-110'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-2">
              <span className="text-white text-sm">
                {selectedImage + 1} / {currentDaughter.images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
