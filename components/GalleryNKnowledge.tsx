// components/AboutGallerySection.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryImage {
  src: string;
  alt: string;
}

const AboutGallerySection: React.FC = () => {
  // Gallery images
  const galleryImages: GalleryImage[] = [
    {
      src: "/images/sound-healing-session-1.jpg",
      alt: "Sound healing group session with participants lying down"
    },
    {
      src: "/images/sound-healing-session-2.jpg", 
      alt: "Woman playing singing bowl in white attire"
    },
    {
      src: "/images/sound-healing-session-3.jpg",
      alt: "Candle-lit sound healing ceremony"
    },
    {
      src: "/images/sound-healing-session-4.jpg",
      alt: "Sound healer with multiple singing bowls"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle dialog open/close
  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="w-full">
      {/* About Sound Healing Section */}
      <section className="w-full pb-16">
        <div className="w-full relative overflow-hidden mb-8">
          <div className="w-full h-64 md:h-80 lg:h-96 relative">
            <Image
              src="/images/sound-healing-banner.jpg"
              alt="Sound healing session with singing bowls"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
            What is Sound Healing?
          </h2>
          
          {/* Decorative divider */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-8 flex items-center justify-center">
              <Separator className="w-full" />
              <div className="absolute w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          <Card className="max-w-3xl mx-auto border-0 shadow-none">
            <CardContent className="p-0 space-y-6 text-gray-700">
              <p className="text-lg">
                Sound healing is believed to date back to ancient Greece, when music was used in an 
                attempt to cure mental disorders. Throughout history, sound has been used to boost morale.
              </p>
              
              <p className="text-lg">
                It is an ancient technique that uses vibrational frequencies from instruments like Tuning 
                Forks, Gongs, Tibetan Bowls, Crystal Bowls, Tingsha bells and many more to harmonise the 
                mind, body and soul.
              </p>
              
              <p className="text-lg">
                Almost everything we experience in the universe is simply our perception of waves and these 
                instruments create sound waves that penetrates through our body and mind, releasing 
                blockages and promoting deep relaxation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className="border-0 shadow-md overflow-hidden h-72 md:h-96">
              <CardContent className="p-0 h-full relative">
                <Image
                  src="/images/sound-healing-course.jpg"
                  alt="Sound healing course session"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-none">
              <CardContent className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  What to Expect in The Sound Healing Course at Jeevatman Yogshala
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our Sound Healing Course is more than just a learning technique—it's a path that leads you 
                    to inner peace. Set against the divine backdrop of Rishikesh, this course offers you a chance 
                    to get away from your daily life and reconnect with your inner self.
                  </p>
                  
                  <p>
                    Whether you're looking for a short yoga retreat or sound healing in Rishikesh, this course is 
                    designed to rejuvenate your mind, body and soul.
                  </p>
                  
                  <ul className="space-y-3 mt-6">
                    {[
                      "Learn the art of sound healing using different instruments.",
                      "Understand how different Sound Waves and frequencies affect the body and mind.",
                      "Art of using sound to balance the chakra.",
                      "Experience Meditation and Yog Nidra that compliments sound healing."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900 flex items-center justify-center mt-0.5">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 text-white" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
            Our Gallery
          </h2>
          
          {/* Decorative divider */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-8 flex items-center justify-center">
              <Separator className="w-full" />
              <div className="absolute w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className={cn(
                  "border-0 shadow-md overflow-hidden h-64 relative",
                  "transition-all duration-300 hover:shadow-xl cursor-pointer"
                )}
                onClick={() => openImage(image.src)}
              >
                <CardContent className="p-0 h-full relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Dialog using shadcn Dialog component */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
          <div className="relative h-[80vh] w-full">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                style={{ objectFit: 'contain' }}
                className="bg-black bg-opacity-80"
              />
            )}
          </div>
          <DialogClose className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutGallerySection;