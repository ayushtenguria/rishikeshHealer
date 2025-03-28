import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Map Section */}
      <div className="w-full h-64 md:h-80 lg:h-96 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.393743471815!2d77.3935!3d28.5767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzM2LjEiTiA3N8KwMjMnMzYuNiJF!5e0!3m2!1sen!2sin!4v1616661262548!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen={false} 
          loading="lazy"
          title="Location Map"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            CONTACT US
            <Separator className="w-16 h-1 bg-white mx-auto mt-3" />
          </h2>

          <div className="grid grid-cols-1 bg-white rounded-2xl md:grid-cols-3 gap-8">
            {/* School Timing */}
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex flex-col items-center p-6">
                <div className="bg-green-500 rounded-full p-5 mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">School Timing</h3>
                <p className="text-center">09:00 AM to 4:00 PM</p>
                <p className="text-center">Monday to Saturday</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex flex-col items-center p-6">
                <div className="bg-red-500 rounded-full p-5 mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Address</h3>
                <p className="text-center">Kilkari Montessori House Of Children</p>
                <p className="text-center">House No SK-21, Ground Floor,</p>
                <p className="text-center">Sector 116, Noida, UP 201301</p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-transparent border-none shadow-none">
              <CardContent className="flex flex-col items-center p-6">
                <div className="bg-yellow-400 rounded-full p-5 mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Contact</h3>
                <p className="text-center">+91 70428 92232</p>
                <p className="text-center">admin@kilkarimontessori.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-gray-300 py-4 text-center text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Kilkari Montessori House Of Children. All rights reserved.</p>
          <div className="flex justify-center mt-2 space-x-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;