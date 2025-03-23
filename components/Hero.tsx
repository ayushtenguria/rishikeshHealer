// components/HeroSection.tsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SlideContent {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const HeroSection = () => {
  // Slideshow data
  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Discover Wellness & Sound Healing in Rishikesh: Your Journey to Inner Peace",
      description: "Are you looking for relaxation, self-discovery, Spiritual experiences and growth that transforms your life? Join us in the divine surroundings of Rishikesh, the Yoga Capital of the World, for a transformative journey. Our Sound healing courses offer a perfect escape from the stress of your day to day life and is designed to provide holistic healing and rejuvenation.",
      imageSrc: "/images/sound-healing-1.jpg"
    },
    {
      id: 2,
      title: "Experience Traditional Sound Healing Techniques",
      description: "Immerse yourself in ancient sound healing practices using Tibetan singing bowls, gongs, and other traditional instruments. Our experienced practitioners guide you through sessions that promote deep relaxation, stress reduction, and emotional balance.",
      imageSrc: "/images/sound-healing-2.jpg"
    },
    {
      id: 3,
      title: "Connect with Nature's Healing Energy",
      description: "Our retreat center is nestled in the serene foothills of the Himalayas, where the sacred Ganges flows. This pristine environment enhances your healing journey, allowing you to reconnect with nature while discovering your inner harmony.",
      imageSrc: "/images/sound-healing-3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  // Slide navigation functions
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="w-full bg-gray-50 overflow-hidden">
      <div className="relative h-[600px] md:h-[650px]">
        {/* Slide content */}
        <div className={cn(
          "transition-opacity duration-500 ease-in-out w-full h-full",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}>
          {/* Image and content container */}
          <div className="flex flex-col lg:flex-row items-center h-full px-4 max-w-7xl mx-auto py-8">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
              {/* Title and decorative element */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-gray-800 mb-6">
                {slides[currentSlide].title}
              </h1>
              
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative w-48 h-4 flex items-center justify-center">
                  <div className="absolute w-full h-px bg-gray-300"></div>
                  <div className="absolute w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Description card */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-gray-700 leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                
                <Button className="mt-6 bg-purple-900 text-white hover:bg-purple-800">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Image container with shape */}
            <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-[40%_60%_60%_40%_/_40%_50%_50%_60%]">
                <div className="absolute inset-0 rounded-[40%_60%_60%_40%_/_40%_50%_50%_60%] overflow-hidden">
                  <Image
                    src={slides[currentSlide].imageSrc}
                    alt="Sound healing session"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-purple-900 w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;