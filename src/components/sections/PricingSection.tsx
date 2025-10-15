import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  Briefcase,
  Zap,
  Check,
  UserRound,
  Bot,
  Rocket,
  Shield,
  FileText,
  DollarSign,
  Clock,
} from "lucide-react";
import proposalInfo from "@/proposal_info.json";

interface PricingSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

type PricingTier = {
  icon: string;
  title: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
};

type CommercialTerm = {
  icon: string;
  text: string;
};

// Icon mapping to convert string names to React components
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Users,
  Briefcase,
  Zap,
  Check,
  UserRound,
  Bot,
  Rocket,
  Shield,
  FileText,
  DollarSign,
  Clock,
};

const PricingSection: React.FC<PricingSectionProps> = ({
  sectionsRef,
  index,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Get pricing data from proposal info
  const pricingTiers = proposalInfo.pricing_tiers as PricingTier[];
  const commercialTerms = proposalInfo.commercial_terms as CommercialTerm[];
  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="section-padding opacity-0 transition-opacity duration-700 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Esquema de Precios
          </h2>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pricingTiers.map((tier, idx) => {
            const Icon = iconMap[tier.icon] || Bot;
            return (
              <div key={idx} className="relative pt-10">
                {/* Icon Circle - Overlapping the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 ">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-primary/10 ">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Card */}
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-primary/80">
                  <CardHeader className="text-center pt-11 pb-3">
                    <CardTitle className="text-xl font-bold mb-2">
                      {tier.title}
                    </CardTitle>

                    <div className="mt-3">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-foreground">
                          {tier.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5">
                        {tier.period}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Features List */}
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        {/* Commercial Conditions Button */}
        <div className="flex justify-center mt-5">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="default" className="gap-2">
                <FileText className="w-4 h-4" />
                Condiciones Comerciales
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  Condiciones Comerciales
                </DialogTitle>
              </DialogHeader>
              <div className="mt-5">
                <ul className="space-y-5">
                  {commercialTerms.map((term, i) => {
                    const Icon = iconMap[term.icon] || FileText;
                    return (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {term.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

