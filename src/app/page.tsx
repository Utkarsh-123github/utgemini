import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="relative w-full hidden sm:flex items-center justify-center">
          <Navbar/>
      </div>
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
