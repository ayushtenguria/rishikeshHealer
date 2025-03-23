import SoundHealingCourseSection from "@/components/CourseSection";
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
      <SoundHealingCourseSection />
      <AboutGallerySection />
      <InstructorSection />
      <Footer />
    </div>
  );
}
