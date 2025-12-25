'use client';

import { useState } from 'react';

const placeholderImages = [
  { id: 1, title: 'Kỷ niệm 1', emoji: '📸' },
  { id: 2, title: 'Kỷ niệm 2', emoji: '🎊' },
  { id: 3, title: 'Kỷ niệm 3', emoji: '🎉' },
  { id: 4, title: 'Kỷ niệm 4', emoji: '💑' },
  { id: 5, title: 'Kỷ niệm 5', emoji: '👨‍👩‍👧' },
  { id: 6, title: 'Kỷ niệm 6', emoji: '🏠' },
];

export default function FamilyGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
            Khoảnh Khắc Đáng Nhớ
          </h2>
          <p className="font-dancing text-2xl text-gray-600">
            Những bức ảnh lưu giữ kỷ niệm đẹp 📷
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {placeholderImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
              onClick={() => setSelectedImage(index)}
            >
              {/* Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300 inline-block">
                    {image.emoji}
                  </span>
                  <p className="text-gray-500 mt-2 text-sm">{image.title}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Click để thêm ảnh
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add More Photos Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            💡 Tip: Thay thế các placeholder bằng ảnh thật trong thư mục
            <code className="bg-gray-100 px-2 py-1 rounded mx-1">
              public/anniversary/images/gallery/
            </code>
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-pink-400 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl">
                    {placeholderImages[selectedImage].emoji}
                  </span>
                  <p className="text-gray-600 mt-4 text-xl">
                    {placeholderImages[selectedImage].title}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  className="glass px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev !== null
                        ? (prev - 1 + placeholderImages.length) %
                          placeholderImages.length
                        : 0,
                    );
                  }}
                >
                  ← Trước
                </button>
                <button
                  className="glass px-6 py-2 rounded-full text-gray-700 hover:bg-pink-100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) =>
                      prev !== null ? (prev + 1) % placeholderImages.length : 0,
                    );
                  }}
                >
                  Sau →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
