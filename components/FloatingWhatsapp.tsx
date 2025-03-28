"use client"

import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
  tooltipText?: string;
  pulseEffect?: boolean;
}

const FloatingWhatsApp = ({
  phoneNumber,
  message = 'Hello! I have a question about your services.',
  position = 'bottom-right',
  size = 'md',
  showTooltip = true,
  tooltipText = 'Chat with us on WhatsApp',
  pulseEffect = true
}: FloatingWhatsAppProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Remove any non-numeric characters from phone number
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Determine position classes
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };
  
  // Determine size classes
  const sizeClasses = {
    'sm': 'w-12 h-12',
    'md': 'w-14 h-14',
    'lg': 'w-16 h-16'
  };
  
  // WhatsApp brand color
  const whatsappGreen = '#25D366';
  
  return (
    <TooltipProvider>
      <div className={`fixed ${positionClasses[position]} z-50`}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center rounded-full shadow-lg ${sizeClasses[size]} ${
                pulseEffect ? 'animate-pulse' : ''
              } transition-all duration-300 transform ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundColor: whatsappGreen }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label="Contact us on WhatsApp"
            >
              <div className="flex items-center justify-center">
                {/* WhatsApp Logo */}
                <svg 
                  viewBox="0 0 32 32" 
                  className={`text-white ${
                    size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-7 h-7' : 'w-8 h-8'
                  }`}
                  fill="currentColor"
                >
                  <path 
                    d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.916 1.456 7.486 3.854 10.214L1.344 31.478l5.453-2.512C9.396 30.928 12.582 32 16.004 32 24.826 32 32 24.822 32 16s-7.174-16-15.996-16zM25.152 22.678c-.56 1.576-2.786 2.886-4.558 3.264-1.212.256-2.796.458-8.132-1.748-6.822-2.81-11.178-9.62-11.514-10.062-.322-.44-2.706-3.596-2.706-6.86 0-3.264 1.71-4.862 2.376-5.542.56-.566 1.476-.832 2.358-.832.286 0 .542.014.772.026.676.028 1.016.068 1.462 1.136.56 1.344 1.924 4.662 2.092 5.01.17.348.282.762.084 1.196-.186.436-.336.628-.616.994-.28.364-.548.644-.83 1.036-.256.336-.542.698-.22 1.33.322.63 1.422 2.694 3.058 4.36 2.108 2.156 3.87 2.826 4.416 3.14.406.238.732.28 1.124.196.56-.12 1.254-.488 1.624-1.034.27-.392.452-.84.644-1.232.17-.35.458-.772 1.066-1.1.392-.196.784-.336 1.176-.56.27-.152.542-.322.814-.492.5-.322 1.01-.68 1.538-.586.42.082 1.65.772 1.932 1.12.292.35.292.854.13 1.344z" 
                  />
                </svg>
              </div>
            </a>
          </TooltipTrigger>
          {showTooltip && (
            <TooltipContent 
              side="left" 
              className="bg-white text-gray-800 shadow-md px-4 py-2 text-sm"
            >
              {tooltipText}
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default FloatingWhatsApp;