import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const slides = [
    { id: 1, image: '/uploads/campus/banner-1.png', alt: 'Banner Magister Keuangan Daerah Uncen' },
    { id: 2, image: '/uploads/campus/campus-1.webp', alt: 'Kampus Universitas Cenderawasih' },
    { id: 3, image: '/uploads/campus/banner-2.png', alt: 'Kurikulum dan Riset Kebijakan Fiskal' },
    { id: 4, image: '/uploads/campus/campus-2.webp', alt: 'Fasilitas Akademik & Riset Perpustakaan' },
    { id: 5, image: '/uploads/campus/campus-3.webp', alt: 'Gedung Pascasarjana Uncen Abepura' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#f4f4f4] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container - Exact 1920:650 aspect ratio so NO slide is ever cropped */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '1920 / 650' }}
      >
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-80 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center transition-all opacity-80 md:opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gold w-6 sm:w-8'
                : 'bg-white/60 hover:bg-white w-2 sm:w-2.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
