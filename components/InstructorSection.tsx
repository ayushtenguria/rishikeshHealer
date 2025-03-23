// components/InstructorSection.tsx
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface InstructorProps {
  name: string;
  title: string;
  imageSrc: string;
  biography: string[];
}

const InstructorSection: React.FC = () => {
  // Instructor data can be moved to a CMS or props if needed
  const instructor: InstructorProps = {
    name: "Ayushi Desai",
    title: "Founder & Sound Healer",
    imageSrc: "/images/instructor-ayushi.jpg",
    biography: [
      "Meet Ayushi Desai, our high-spirited founder. Hailing from the bustling city of Mumbai, she has always longed for the calming shores of Rishikesh and the freedom of practicing yoga. In her attempts to find her calling, she felt an irredeemable void until 2017, when an internal voice convinced her to fully dedicate herself to the practice of yoga. From that moment on, her path was set in stone.",
      "For Ayushi, yoga is something more than just a physical practice. She finds a sense of purpose in yoga in today's era of disconnect, degrading health, and constant hustle. She comes from a deeply spiritual Jain background, where individuals seek to realize their higher possibilities. Her philosophy of life aligned with the principles of yoga. Having dedicated years to yoga, she highlights its significance for the spiritual well-being of people.",
      "To dive deeper into the spiritual and healing world she went ahead and explored the world of Sound. On the path of discovery she found out the magic that sound can create for a person. The power that sound holds to heal a person in all three aspects i.e physically, mentally and spiritually.",
      "As she wanted to share the transformational power of yoga and sound, she laid the foundation of Jeevatman Yogshala. This initiative was taken to help people discover their true selves and live a life of purpose and fulfillment."
    ]
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Our Instructor
        </h2>
        
        {/* Decorative Divider */}
        <div className="flex justify-center mb-12">
          <div className="relative w-64 h-8 flex items-center justify-center">
            <Separator className="w-full" />
            <div className="absolute w-8 h-8 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>
        
        {/* Instructor Card */}
        <Card className="border-0 shadow-md overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 md:p-10">
              {/* Instructor Name and Title */}
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                {instructor.name} - {instructor.title}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                {/* Biography Paragraphs */}
                <div className="space-y-4">
                  {instructor.biography.slice(0, 2).map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Instructor Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-md h-auto rounded-lg overflow-hidden">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={instructor.imageSrc}
                        alt={`${instructor.name}, ${instructor.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Biography Paragraphs */}
              <div className="mt-6 space-y-4">
                {instructor.biography.slice(2).map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InstructorSection;