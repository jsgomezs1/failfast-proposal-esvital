import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import failFastLogo from "@/assets/Logo-blanco.png";
import esvitalLogo from "@/assets/esvital.webp";
import { ArrowDown, ArrowRight } from "lucide-react";
import proposalInfo from "@/proposal_info.json";  

interface HeroSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ sectionsRef, index }) => {
  const scrollToClientSection = () => {
    const clientSection = sectionsRef.current[1]; // ClientIntroductionSection is at index 1
    if (clientSection) {
      clientSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      className="relative min-h-screen flex flex-col bg-overlay"
      ref={(el) => (sectionsRef.current[index] = el)}
    >
      {/* Floating Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-light/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center container-custom px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 lg:gap-20 items-center w-full">
          {/* Left Content - Asymmetric Layout */}
          <div className="space-y-6 md:space-y-8 lg:pr-8">
            {/* Header Badge */}
            <div className="flex items-center gap-3 animate-fade-in mt-8">
              <Badge
                variant="destructive"
                className="text-xs sm:text-sm px-4 py-2 font-medium bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 shadow-sm"
              >
                Propuesta para {proposalInfo.client_name} •{" "}
                {new Date().toLocaleDateString("es-ES", {
                  month: "long",
                  year: "numeric",
                })}
              </Badge>
            </div>

            {/* Dramatic Headline */}
            <div
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
                Transforma tus
                <br />
                Ventas con{" "}
                <span className="relative inline-block">
                  <span className="gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                    Agentes de AI
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary-light/20 to-transparent blur-2xl -z-10" />
                </span>
              </h1>
            </div>

            {/* Subtitle with decorative element */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary/40 rounded-full" />
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed pl-4">
                Un CRM impulsado por agentes de IA que venden por ti las{" "}
                <span className="text-foreground font-semibold">
                  24 horas del día
                </span>
                .
              </p>
            </div>

            {/* Enhanced CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                onClick={scrollToClientSection}
                className="group w-full sm:w-auto text-base sm:text-lg lg:text-xl px-6 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 font-bold rounded-2xl bg-primary/90 hover:from-primary-light hover:to-primary shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Empecemos
                {/* <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
            </div>
          </div>

          {/* Right Content - Prominent Logo with Glassmorphism */}
          <div
            className="flex flex-col items-center justify-center lg:justify-end gap-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group">
              {/* Glow effect behind logo */}

              {/* Glassmorphism container */}
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="relative  bg-white/40 dark:bg-background/40 rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl">
                  <img
                    src={failFastLogo}
                    alt="Fail Fast Logo"
                    className="w-full max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg h-auto object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="relative  bg-white/40 dark:bg-background/40 rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl">
                  <img
                    src={esvitalLogo}
                    alt={`${proposalInfo.client_name} Logo`}
                    className="w-full max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;