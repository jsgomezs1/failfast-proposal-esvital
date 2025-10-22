import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Database, GraduationCap, Rocket, Calendar, BrainCircuit } from "lucide-react";
import proposalInfo from "@/proposal_info.json";

interface ProjectDeliverablesSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

type Phase = {
  step: string;
  title: string;
  intro?: string;
  description: string | string[];
  timeline: string;
  endDate?: string;
  icon: string;
  colorTheme: string;
};

// Icon mapping to convert string names to React components
const iconMap: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  Users,
  Database,
  GraduationCap,
  Rocket,
  Clock,
  Calendar,
  BrainCircuit
};

// Color mapping for phases
const phaseColorMap: Record<
  string,
  { color: string; accentColor: string; borderColor: string }
> = {
  blue: {
    color: "from-blue-500/20 to-blue-600/20",
    accentColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/30",
  },
  orange: {
    color: "from-orange-500/20 to-orange-600/20",
    accentColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-500/30",
  },
  purple: {
    color: "from-purple-500/20 to-purple-600/20",
    accentColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-500/30",
  },
  teal: {
    color: "from-teal-500/20 to-teal-600/20",
    accentColor: "text-teal-600 dark:text-teal-400",
    borderColor: "border-teal-500/30",
  },
  green: {
    color: "from-green-500/20 to-green-600/20",
    accentColor: "text-green-600 dark:text-green-400",
    borderColor: "border-green-500/30",
  },
};

const ProjectDeliverablesSection: React.FC<ProjectDeliverablesSectionProps> = ({
  sectionsRef,
  index,
}) => {
  // Get phases from proposal info and cast to proper type
  const phases = proposalInfo.project_phases as Phase[];

  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="section-padding opacity-0 transition-opacity duration-700 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-16 lg:mb-20">
          {/* Badge/Label with decorative lines */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-black dark:text-white flex items-center gap-2">

              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              Nuestra Metodología
            </span>
          </div>

          {/* Main Title with enhanced visual layers */}
          <div className="relative">
            {/* Background decorative circles for depth */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-primary-light/5 blur-2xl" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-bl from-primary-light/10 to-primary-medium/5 blur-3xl" />

            <h2 className="relative py-6 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              <span className="relative inline-block">
                <span className="gradient-text">Proyecto y Entregables</span>
                {/* Multi-layered glow effects for warmth */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10 animate-pulse" />
                <div
                  className="absolute -inset-6 bg-gradient-to-l from-primary-medium/10 via-transparent to-primary-light/10 blur-3xl -z-20 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </span>
            </h2>
          </div>

          {/* Subtitle with decorative elements */}
          <div className="flex items-start justify-center gap-4 mt-8">
            <p className="text-base md:text-xl lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Una metodología de implementación estructurada en fases, diseñada
              para crear{" "}
              <span className="text-foreground font-semibold relative">
                Equipos de AI First
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
              </span>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Phases */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-neutral-200" />

            {phases.map((phase, idx) => {
              const Icon = iconMap[phase.icon] || Users;
              const colors =
                phaseColorMap[phase.colorTheme] || phaseColorMap.blue;
              return (
                <div
                  key={phase.step}
                  className="relative mb-16 last:mb-8 group"
                  style={{
                    animation: `fade-in 0.6s ease-out ${idx * 0.15}s both`,
                  }}
                >
                  {/* Phase Number Circle */}
                  <div className="absolute left-0 md:left-8 w-16 h-16 flex items-center justify-center z-20">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div
                      className={`relative w-16 h-16 rounded-full bg-background border-2 ${colors.borderColor} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span
                        className={`text-2xl font-bold ${colors.accentColor}`}
                      >
                        {phase.step}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <Card className="ml-24 md:ml-32 p-6 lg:p-8 bg-card/80 backdrop-blur-sm border-neutral-200 shadow-lg hover:border-primary/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                    {/* Duration Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge
                        variant="outline"
                        className={`px-4 py-2 text-sm font-semibold bg-gradient-to-br ${colors.color} border ${colors.borderColor} ${colors.accentColor} gap-2`}
                      >
                        <Clock className="w-4 h-4" />
                        {phase.timeline}
                      </Badge>
                      {phase.endDate && (
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-xs gap-2 border-neutral-300"
                        >
                          <Calendar className="w-3 h-3" />
                          {phase.endDate}
                        </Badge>
                      )}
                    </div>

                    {/* Phase Number - Large Background */}
                    <div className="absolute top-0 right-0 text-[140px] md:text-[180px] lg:text-[140px] font-bold text-primary/[0.03] leading-none select-none pointer-events-none">
                      {phase.step}
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.color} border ${colors.borderColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 ${colors.accentColor}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold mb-4 text-foreground">
                        {phase.title}
                      </h3>

                      {/* Description */}
                      {Array.isArray(phase.description) ? (
                        <>
                          {phase.intro && (
                            <p className="text-base md:text-lg lg:text-base text-secondary-foreground leading-relaxed mb-3">
                              {phase.intro}
                            </p>
                          )}
                          <ul className="list-disc pl-5 space-y-1 text-base md:text-lg lg:text-base text-secondary-foreground">
                            {phase.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <p className="text-base md:text-lg lg:text-base text-secondary-foreground leading-relaxed whitespace-pre-line">
                          {phase.description}
                        </p>
                      )}
                    </div>
                  </Card>

                  {/* Connecting Dot */}
                  {idx < phases.length - 1 && (
                    <div className="absolute left-8 md:left-16 bottom-[-32px] w-0.5 h-8 bg-neutral-200" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDeliverablesSection;
