import HeroSection from "@/components/sections/hero-section";
import AnimatedStatsSlider from "@/components/sections/animated-stats-slider";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ServicesSection from "@/components/sections/services-section";
import ProcessSection from "@/components/sections/process-section";
import CtaSection from "@/components/sections/cta-section";
import AnimatedContactSection from "@/components/sections/animated-contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedStatsSlider />
      <WhyChooseUs />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
      <AnimatedContactSection />
    </>
  );
}
