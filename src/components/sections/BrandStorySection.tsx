import { Card } from "@/components/ui/card";
import { Sparkles, Network, TrendingUp, Rocket } from "lucide-react";

interface BrandStorySectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const BrandStorySection: React.FC<BrandStorySectionProps> = ({
  sectionsRef,
  index,
}) => {
  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="relative section-padding opacity-0 transition-opacity duration-700 bg-gradient-to-b from-accent/30 via-white to-accent/20 dark:from-accent/10 dark:via-background dark:to-accent/5 overflow-hidden"
    >
      {/* Floating Gradient Orbs */}
      <div
        className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <div className="absolute bottom-10 left-[5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-primary-light/10 to-transparent blur-2xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <Rocket className="w-8 h-8 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-foreground uppercase">
            Nuestro Origen
          </h2>
          <Rocket className="w-8 h-8 text-primary" />
        </div>

        {/* Main Hero Title */}
        <div
          className="max-w-6xl mx-auto text-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground mb-4">
            ¿Por qué nace{" "}
            <span className="relative inline-block">
              <span className="gradient-text">Fail Fast</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10 animate-pulse" />
            </span>
            ?
          </h1>
        </div>

        {/* Two Column Layout */}
        <div
          className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto mb-16 items-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Left Column - Narrative */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Fail Fast nace de más de{" "}
              <span className="text-foreground font-bold">
                30 años de experiencia
              </span>{" "}
              desarrollando e implementando soluciones ERP y CRM empresariales a
              través de{" "}
              <span className="text-foreground font-bold">STONE</span> (
              <a
                href="https://www.stone.com.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.stone.com.co
              </a>
              ), un ERP robusto que ha acompañado la transformación digital de
              cientos de empresas en Colombia y LATAM.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              También surge del conocimiento acumulado de{" "}
              <span className="text-foreground font-bold">SIMBA</span> (
              <a
                href="https://www.simba.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.simba.co
              </a>
              ), empresa certificada por la DIAN con más de 8 años de
              experiencia en facturación electrónica.
            </p>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-light/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Nuestro Objetivo
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Crear una nueva generación de ERP + CRM con{" "}
                    <span className="text-foreground font-semibold">
                      Agentes de Inteligencia Artificial
                    </span>{" "}
                    que realicen de forma automática y continua las tareas
                    operativas y repetitivas que consumen tiempo de los equipos
                    humanos.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary-light/10">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Agentes que trabajan por ti
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Los agentes Fail Fast están{" "}
                    <span className="text-foreground font-semibold">
                      disponibles 7x24x365
                    </span>
                    , listos para ejecutar procesos sin pausas ni fricciones.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <Card className="relative p-8 backdrop-blur-sm bg-white/60 dark:bg-background/60 border border-primary/30 shadow-2xl overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5" />

              {/* Evolution Flow */}
              <div className="relative space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20 mb-4">
                    <span className="text-3xl font-black text-primary">S</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">STONE</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    30+ años • ERP Empresarial
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary-light" />
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-light/20 mb-4">
                    <span className="text-3xl font-black text-primary">S</span>
                  </div>
                  <h4 className="text-xl font-bold text-foreground">SIMBA</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    8+ años • Facturación Electrónica
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary-light to-accent" />
                </div>

                <div className="text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl blur-xl opacity-40 animate-pulse" />
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-light mb-4">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-black gradient-text">
                    FAIL FAST
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">
                    Nueva generación • AI Agents
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer with Logos */}
        <div
          className="max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <p className="text-sm text-muted-foreground font-medium">
                Construido sobre la experiencia de:
              </p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                    <span className="text-lg font-black text-primary">S</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    STONE
                  </span>
                </div>
                <div className="w-1 h-8 bg-primary/20" />
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                    <span className="text-lg font-black text-primary">S</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    SIMBA
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
