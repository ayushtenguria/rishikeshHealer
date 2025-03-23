// components/SoundHealingCourseSection.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SoundHealingCourseSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Course Image */}
          <div className="rounded-lg overflow-hidden shadow-md h-[400px] md:h-[500px] relative">
            <Image
              src="/images/sound-healing-course.jpg"
              alt="Sound healing session with tibetan bowls and participants"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          {/* Course Details */}
          <div className="flex flex-col gap-6">
            {/* Course Details Card */}
            <Card className="shadow-sm border-0">
              <CardHeader className="bg-purple-900 text-white py-4">
                <CardTitle className="text-center text-xl">COURSE DETAIL</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  <div className="flex items-center justify-between p-4 bg-purple-900/10">
                    <span className="font-medium text-purple-900">Duration:</span>
                    <span className="text-right">5 to 6hrs. Per day</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/5">
                    <span className="font-medium text-purple-900">Language:</span>
                    <span className="text-right">English</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/10">
                    <span className="font-medium text-purple-900">Date:</span>
                    <span className="text-right">23-12-24 to 27-12-24</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/5">
                    <span className="font-medium text-purple-900">Module:</span>
                    <span className="text-right">Non-Residential</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/10">
                    <span className="font-medium text-purple-900">Level:</span>
                    <span className="text-right">Beginner to Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-900/5">
                    <span className="font-medium text-purple-900">Certification:</span>
                    <span className="text-right">Yes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Fee Card */}
            <Card className="shadow-sm border-0">
              <CardHeader className="bg-purple-900 text-white py-4">
                <CardTitle className="text-center text-xl">COURSE FEE</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 p-4 gap-4 bg-purple-900/5">
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-600 mb-2">5 to 6hrs.</span>
                    <span className="text-3xl font-bold">₹22000</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-600 mb-2">Early Bird Price</span>
                    <span className="text-3xl font-bold text-purple-600">₹18,500</span>
                  </div>
                </div>
                <div className="p-4 flex justify-center">
                  <Button className="bg-purple-900 hover:bg-purple-800 px-8 py-6 text-lg text-white font-medium rounded">
                    ENROLL NOW
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/918169145495" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512" 
          className="w-6 h-6 fill-current"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 z-50 bg-purple-900 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-6 h-6"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>
    </section>
  );
};

export default SoundHealingCourseSection;