import HeroSection from "@/components/HeroSection";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { black } from "tailwindcss/colors";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarousel";
import { FeaturesSectionDemo } from "@/components/BentoGrid";
import { WobbleCardDemo } from "@/components/WobbleCard";
export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: black }} // Lighter shade of black
    >
      <Navbar className="top-2" />
      <HeroSection />
      <WobbleCardDemo />
      {/* <HeroScrollDemo /> */}
      <FeaturesSectionDemo />
      <AppleCardsCarouselDemo />
      <Footer />
    </div>
  );
}
