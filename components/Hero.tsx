// // components/HeroSection.tsx
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// interface SlideContent {
//   id: number;
//   title: string;
//   description: string;
//   imageSrc: string;
// }

// const HeroSection = () => {
//   // Slideshow data
//   const slides: SlideContent[] = [
//     {
//       id: 1,
//       title: "Discover Wellness & Sound Healing in Rishikesh: Your Journey to Inner Peace",
//       description: "Are you looking for relaxation, self-discovery, Spiritual experiences and growth that transforms your life? Join us in the divine surroundings of Rishikesh, the Yoga Capital of the World, for a transformative journey. Our Sound healing courses offer a perfect escape from the stress of your day to day life and is designed to provide holistic healing and rejuvenation.",
//       imageSrc: "/images/sound-healing-1.jpg"
//     },
//     {
//       id: 2,
//       title: "Experience Traditional Sound Healing Techniques",
//       description: "Immerse yourself in ancient sound healing practices using Tibetan singing bowls, gongs, and other traditional instruments. Our experienced practitioners guide you through sessions that promote deep relaxation, stress reduction, and emotional balance.",
//       imageSrc: "/images/sound-healing-2.jpg"
//     },
//     {
//       id: 3,
//       title: "Connect with Nature's Healing Energy",
//       description: "Our retreat center is nestled in the serene foothills of the Himalayas, where the sacred Ganges flows. This pristine environment enhances your healing journey, allowing you to reconnect with nature while discovering your inner harmony.",
//       imageSrc: "/images/sound-healing-3.jpg"
//     }
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   // Auto slide functionality
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       nextSlide();
//     }, 6000);

//     return () => clearInterval(slideInterval);
//   }, [currentSlide]);

//   // Slide navigation functions
//   const nextSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//       setIsTransitioning(false);
//     }, 500);
//   };

//   const prevSlide = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//       setIsTransitioning(false);
//     }, 500);
//   };

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentSlide) return;
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentSlide(index);
//       setIsTransitioning(false);
//     }, 500);
//   };

//   return (
//     <section className="w-full bg-gray-50 overflow-hidden">
//       <div className="relative h-[600px] md:h-[650px]">
//         {/* Slide content */}
//         <div className={cn(
//           "transition-opacity duration-500 ease-in-out w-full h-full",
//           isTransitioning ? "opacity-0" : "opacity-100"
//         )}>
//           {/* Image and content container */}
//           <div className="flex flex-col lg:flex-row items-center h-full px-4 max-w-7xl mx-auto py-8">
//             <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
//               {/* Title and decorative element */}
//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left text-gray-800 mb-6">
//                 {slides[currentSlide].title}
//               </h1>
              
//               <div className="flex justify-center lg:justify-start mb-8">
//                 <div className="relative w-48 h-4 flex items-center justify-center">
//                   <div className="absolute w-full h-px bg-gray-300"></div>
//                   <div className="absolute w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
//                     <div className="w-2 h-2 rounded-full bg-gray-400"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Description card */}
//               <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
//                 <p className="text-gray-700 leading-relaxed">
//                   {slides[currentSlide].description}
//                 </p>
                
//                 <Button className="mt-6 bg-purple-900 text-white hover:bg-purple-800">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
            
//             {/* Image container with shape */}
//             <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
//               <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-[40%_60%_60%_40%_/_40%_50%_50%_60%]">
//                 <div className="absolute inset-0 rounded-[40%_60%_60%_40%_/_40%_50%_50%_60%] overflow-hidden">
//                   <Image
//                     src={slides[currentSlide].imageSrc}
//                     alt="Sound healing session"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Navigation arrows */}
//         <button 
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="h-6 w-6" />
//         </button>
        
//         <button 
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="h-6 w-6" />
//         </button>
        
//         {/* Slide indicators */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentSlide ? 'bg-purple-900 w-6' : 'bg-gray-400'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

interface Slide {
  imageUrl: string;
  heading: string;
  subheading: string;
}

const HeroSection = () => {
  // Sample slides - replace with your actual images and content
  const slides: Slide[] = [
    {
      imageUrl: "/api/placeholder/1600/900", // Replace with actual image path
      heading: "Welcome to Kilkari Montessori",
      subheading: "Nurturing young minds for a brighter future"
    },
    {
      imageUrl: "/api/placeholder/1600/900", // Replace with actual image path
      heading: "Child-Centered Education",
      subheading: "Discover our unique learning approach"
    },
    {
      imageUrl: "/api/placeholder/1600/900", // Replace with actual image path
      heading: "Join Our Community",
      subheading: "Where children learn, grow, and thrive together"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Handle slide change with animation
  const changeSlide = (index: number) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsChanging(false);
    }, 300);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // About us content
  const aboutContent = {
    title: "About Us",
    subtitle: "Learn about our philosophy",
    description: "Kilkari Montessori House of Children is dedicated to providing a nurturing environment where children can develop their full potential. Our child-centered approach focuses on each student's individual needs, fostering independence, creativity, and a lifelong love of learning.",
    highlightPoints: [
      "Certified Montessori teachers",
      "Child-centered learning environment",
      "Holistic development approach"
    ],
    buttonText: "Discover More"
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.heading}
              className="object-cover w-full h-full"
            />
            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center z-10">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-10">
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8">
          {/* Left side: Slide content */}
          <div className={`text-white transform transition-all duration-500 ${isChanging ? 'opacity-0 -translate-y-8' : 'opacity-100 translate-y-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-xl">
              {slides[currentSlide].subheading}
            </p>
            
            {/* CTA Button */}
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-6 text-lg rounded-md">
              Enroll Now
            </Button>
            
            {/* Slide indicators */}
            <div className="flex space-x-3 mt-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-white w-8" 
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side: About Us card */}
          <div className="hidden lg:block">
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 max-w-md ml-auto transform transition-all duration-500 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-800">{aboutContent.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">{aboutContent.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{aboutContent.description}</p>
                <ul className="space-y-2 mb-4">
                  {aboutContent.highlightPoints.map((point, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="mr-2 w-1.5 h-1.5 rounded-full bg-cyan-600"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 group">
                  {aboutContent.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile About Us - Only visible on smaller screens */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20 p-4 bg-white/90 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-gray-800">{aboutContent.title}</h2>
        <p className="text-gray-700 text-sm mt-2 line-clamp-2">{aboutContent.description}</p>
        <Button variant="link" className="text-cyan-600 p-0 mt-1 h-auto">
          {aboutContent.buttonText} <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;