import { Button } from "@/components/ui/button";
import { Logos3Demo } from "@/components/blocks/logos3-demo";
import { Calendar } from "lucide-react";
import failFastLogo from "@/assets/logo.png";
import proposalInfo from "@/proposal_info.json";

interface ClosingSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const ClosingSection: React.FC<ClosingSectionProps> = ({
  sectionsRef,
  index,
}) => {
  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="pt-16 opacity-0 transition-opacity duration-700 relative overflow-hidden"
    >
      {/* Celebratory Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16 lg:mb-10">
          {/* Rocket Icon - Hero Element */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
            <div
              className="relative w-36 h-36 lg:w-36 lg:h-36 mx-auto rounded-3xl flex items-center justify-center animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <img src={failFastLogo} alt="Fail Fast Logo" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground block mb-2">Listos para que</span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent inline-block ">
              {proposalInfo.client_name} sea AI First
            </span>
          </h1>

          {/* Primary CTA Button - MASSIVE */}
          <div className="pt-4 space-y-4">
            <Button
              size="lg"
              className="text-2xl md:text-3xl lg:text-xl px-12 lg:px-12 py-8 lg:py-8 font-bold bg-gradient-to-r from-primary to-blue-300 hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 group relative overflow-hidden"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />

              <span className="relative flex items-center gap-4">
                <Calendar className="w-8 h-8 lg:w-8 lg:h-8" />
                Agendar Kickoff
              </span>
            </Button>
          </div>
        </div>

        {/* Client Logos Carousel - PROMINENT */}
        <div className="mb-16">
          <Logos3Demo />
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
