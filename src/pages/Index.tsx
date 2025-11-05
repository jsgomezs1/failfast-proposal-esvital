import { useEffect, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ClientIntroductionSection from "@/components/sections/ClientIntroductionSection";
import AboutFailFastSection from "@/components/sections/AboutFailFastSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import SmallTeamsSection from "@/components/sections/SmallTeamsSection";
import ProjectDeliverablesSection from "@/components/sections/ProjectDeliverablesSection";
import PricingSection from "@/components/sections/PricingSection";
import ClosingSection from "@/components/sections/ClosingSection";
import { SectionNavigation } from "@/components/ui/section-navigation";
const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  //hola
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="min-h-screen gradient-bg">
      <SectionNavigation sectionsRef={sectionsRef} />
      
      <HeroSection sectionsRef={sectionsRef} index={0} />
      <ClientIntroductionSection sectionsRef={sectionsRef} index={1} />
      <AboutFailFastSection sectionsRef={sectionsRef} index={2} />
      <BrandStorySection sectionsRef={sectionsRef} index={3} />
      <SmallTeamsSection sectionsRef={sectionsRef} index={4} />
      <ProjectDeliverablesSection sectionsRef={sectionsRef} index={5} />
      <PricingSection sectionsRef={sectionsRef} index={6} />
      <ClosingSection sectionsRef={sectionsRef} index={7} />
    </div>
  );
};
export default Index;