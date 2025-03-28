import SoundHealingCourseSection from "@/components/CourseSection";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import Footer from "@/components/Footer";
import AboutGallerySection from "@/components/GalleryNKnowledge";
import HeroSection from "@/components/Hero";
import InstructorSection from "@/components/InstructorSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      {/* <SoundHealingCourseSection />
      <AboutGallerySection />
      <InstructorSection /> */}
       <FloatingWhatsApp 
        phoneNumber="+917042892232" 
        message="Hello! I'd like to know more about Kilkari Montessori House Of Children."
        position="bottom-right"
        size="md"
        showTooltip={true}
        tooltipText="Chat with us on WhatsApp"
        pulseEffect={true}
      />
      <Footer />
    </div>
  );
}
