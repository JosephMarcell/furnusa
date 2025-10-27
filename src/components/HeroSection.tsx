'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: '/image/gambar1.jpg', title: 'Furniture unik nusantara', subtitle: 'tradisional modern' },
    { src: '/image/gambar2.jpg', title: 'Furniture kayu nusantara', subtitle: 'modern rattan furniture' },
    { src: '/image/gambar3.jpg', title: 'Merchandise Cusion', subtitle: 'Bantal khas Kutai, Kalimatan Timur' },
    { src: '/image/gambar4.jpg', title: 'Merchandise Cusion', subtitle: 'Bantal khas Bontang, Kalimatan Timur' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative bg-white overflow-hidden" style={{color: 'var(--wood-dark)'}}>
      {/* Background Image - Partial */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-15"
        style={{
          backgroundImage: 'url(/image/gambar1.jpg)',
          backgroundPosition: 'center right'
        }}
      ></div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 wood-texture opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          {/* Text Content */}
          <div className="space-y-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg lg:col-span-1 max-w-2xl lg:pr-4 xl:pr-6">
            <div>
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Furniture Berkualitas
                <span className="block" style={{color: 'var(--wood-accent)'}}>Nusantara</span>
              </h1>
              <p className="text-2xl lg:text-3xl font-medium opacity-90 mt-4 leading-snug">
                Marketplace furniture custom on demand dengan kualitas terbaik
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/produk"
                className="text-white font-semibold px-8 py-4 rounded-lg transition-opacity duration-200 text-center hover:opacity-90"
                style={{backgroundColor: 'var(--primary)'}}
              >
                Jelajahi Produk
              </Link>
              <Link 
                href="/premium"
                className="border-2 hover:wood-gradient-warm hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-center"
                style={{borderColor: 'var(--wood-primary)', color: 'var(--wood-primary)'}}
              >
                Custom Design
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t" style={{borderColor: 'var(--wood-light)'}}>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--wood-accent)'}}>500+</div>
                <div className="opacity-80">Produk</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--wood-accent)'}}>1000+</div>
                <div className="opacity-80">Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--wood-accent)'}}>50+</div>
                <div className="opacity-80">Pengrajin</div>
              </div>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="relative lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl mx-auto">
              <div className="relative h-[45vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-lg opacity-90">{image.subtitle}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 right-6 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 animate-pulse" style={{backgroundColor: 'var(--wood-accent)'}}></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-30 animate-pulse delay-1000" style={{backgroundColor: 'var(--wood-secondary)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}