// components/Footer.tsx
"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  // Load Tally script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Enquiry Form & Location Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Enquiry Form Section */}
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-4">Enquiry Form</h2>
              <p className="text-gray-700 mb-8">
                Please submit your inquiry using the contact form below, and we'll get in touch 
                with details about our packages and courses via email.
              </p>

              {/* Tally Form directly embedded */}
              <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <iframe
                  src="https://tally.so/embed/YOUR_FORM_ID_HERE?alignLeft=1&hideTitle=1&transparentBackground=1"
                  width="100%"
                  height={450}
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Jeevatman Yogshala Enquiry Form"
                ></iframe>
              </div>
            </div>

            {/* Location Information */}
            <div>
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-purple-900 mb-8 border-b pb-2">Location</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-purple-900 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Gayatri Kunj guest house Near hotel moksha Swarg Ashram Rishikesh, Uttarakhand 249304
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-purple-900 flex-shrink-0" />
                      <div className="text-gray-700">
                        <p>+91 8169145495</p>
                        <p>+91 9324139712</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-purple-900 flex-shrink-0" />
                      <a href="mailto:jeevatmanyogshala@gmail.com" className="text-gray-700 hover:text-purple-900">
                        jeevatmanyogshala@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="w-32 h-32 relative">
              <Image 
                src="/images/logo-jeevatman.png" 
                alt="Jeevatman Yogshala Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <div className="w-32 h-16 relative">
              <Image 
                src="/images/logo-yoga-alliance.png" 
                alt="Yoga Alliance Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <div className="w-32 h-16 relative">
              <Image 
                src="/images/logo-trustpilot.png" 
                alt="Trustpilot Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <div className="w-32 h-16 relative">
              <Image 
                src="/images/logo-google-reviews.png" 
                alt="Google Reviews Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section with Dynamic Year */}
      <div className="w-full bg-purple-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Copyright © {currentYear} Jeevatman Yogshala. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;