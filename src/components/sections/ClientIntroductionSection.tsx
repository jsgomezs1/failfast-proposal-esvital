import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import casablancaLogo from "@/assets/casablanca.png";
import { Target, MessageCircle, Facebook, Instagram, Database, TrendingUp } from "lucide-react";
import proposalInfo from "@/proposal_info.json";

// Helper function to parse markdown-style bold text
const parseFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldText = part.slice(2, -2);
      return (
        <span key={index} className="text-foreground font-semibold">
          {boldText}
        </span>
      );
    }
    return part;
  });
};

// Icon mapping for platforms
const platformIconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  MessageCircle,
  Facebook,
  Instagram,
};

// Color mapping for platforms
const colorMap: Record<
  string,
  { bg: string; border: string; icon: string; text: string }
> = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-600",
    text: "text-green-700 dark:text-green-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-600",
    text: "text-blue-700 dark:text-blue-400",
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/30",
    icon: "text-pink-600",
    text: "text-pink-700 dark:text-pink-400",
  },
};

interface ClientIntroductionSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const ClientIntroductionSection: React.FC<ClientIntroductionSectionProps> = ({
  sectionsRef,
  index,
}) => {
  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="relative p-20 opacity-0 transition-opacity duration-700 bg-gradient-to-b from-accent/20 via-white to-accent/30 dark:from-accent/10 dark:via-background dark:to-accent/10 overflow-hidden"
    >
      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20">
          {/* Main Title with subtle elegant gradient */}
          <div className="relative">
            <h2 className="relative py-4 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                {/* Background decorative circles spread horizontally across the entire title */}
                <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-80 h-48 rounded-full bg-gradient-to-r from-orange-500/12 via-orange-400/8 to-transparent blur-3xl" />
                <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-48 rounded-full bg-gradient-to-l from-orange-400/10 via-orange-300/6 to-transparent blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-gradient-to-r from-transparent via-orange-400/8 to-transparent blur-2xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 rounded-full bg-gradient-to-r from-orange-500/6 via-orange-400/4 to-orange-300/6 blur-3xl" />

                <h3 className="relative text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none text-foreground text-gray-700">
                  {proposalInfo.client_name}
                </h3>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column - Casablanca Profile Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="relative p-6 md:p-8 lg:p-8 backdrop-blur-sm bg-white/80 dark:bg-background/80 border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full border-neutral-200">
              <div className="relative space-y-6">
                {/* Logo */}
                <div className="pt-6 pb-4">
                  <img
                    src={casablancaLogo}
                    alt={`${proposalInfo.client_name} - Ambientes que inspiran`}
                  />
                </div>

                {/* Description */}
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>{parseFormattedText(proposalInfo.client_description)}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Objetivo Card */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="relative p-6 md:p-8 lg:p-8 backdrop-blur-sm bg-white/80 dark:bg-background/80 border shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full border-neutral-200">
              <div className="relative space-y-3">
                {/* Icon */}
                <span className="w-20 h-20 flex items-center justify-center text-6xl">
                  🎯
                </span>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl lg:text-3xl font-bold text-foreground">
                  Objetivo Principal
                </h3>

                {/* Description with Key Features */}
                <div className="space-y-4">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {parseFormattedText(proposalInfo.objective.description)}
                  </p>

                  {/* Platform Pills */}
                  <div className="flex flex-wrap gap-2 py-2">
                    {proposalInfo.objective.platforms.map((platform, index) => {
                      const Icon =
                        platformIconMap[platform.icon] || MessageCircle;
                      const colors = colorMap[platform.color] || colorMap.green;
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${colors.bg} border ${colors.border}`}
                        >
                          <Icon className={`w-4 h-4 ${colors.icon}`} />
                          <span
                            className={`text-sm font-semibold ${colors.text}`}
                          >
                            {platform.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-3 pt-2">
                    {proposalInfo.objective.key_capabilities.map(
                      (capability, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2" />
                          <p className="text-muted-foreground">
                            {parseFormattedText(capability)}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientIntroductionSection;