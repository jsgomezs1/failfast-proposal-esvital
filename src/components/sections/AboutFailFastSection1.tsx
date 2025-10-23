import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  BarChart3,
  Wallet,
  User,
  Brain,
  Network,
  Sparkles,
  Smile,
  Stethoscope,
} from "lucide-react";
import Facebook from "@/assets/Facebook.webp";
import Instagram from "@/assets/Instagram.png";
import Whatsapp from "@/assets/whatsapp.webp";

interface AboutFailFastSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const AboutFailFastSection: React.FC<AboutFailFastSectionProps> = ({
  sectionsRef,
  index,
}) => {
  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="relative section-padding opacity-0 transition-opacity duration-700 bg-gradient-to-b from-accent/20 via-white to-accent/30 dark:from-accent/10 dark:via-background dark:to-accent/10 overflow-hidden"
    >
      {/* Floating Gradient Orbs */}
      <div
        className="absolute top-10 left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary-light/15 to-transparent blur-3xl" />
      <div
        className="absolute top-[50%] right-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />

      {/* Neural Network Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold tracking-wider text-foreground uppercase">
            ¿Qué hace Fail Fast?
          </h2>
        </div>

        {/* Massive Hero Headline */}
        <div
          className="max-w-5xl mx-auto text-center mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-foreground mb-6">
            Agentes que tienen{" "}
            <span className="relative inline-block">
              <span className="gradient-text">El contexto</span>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary-light/20 to-primary/20 blur-2xl -z-10 animate-pulse" />
            </span>
            <br />
            <span className="gradient-text">de tu empresa.</span>
          </h1>
        </div>

        {/* CRITICAL: Differentiator Callout Banner (opcional, vacío para mantener diseño) */}
        <div
          className="max-w-4xl mx-auto mb-16 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative group">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            {/* Main callout card (puedes añadir contenido si quieres) */}
          </div>
        </div>

        {/* Enhanced Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto mb-16">
          {/* TOP: Card grande de Agentes (ocupa las 3 columnas) */}
          <div
            className="md:col-span-3 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                <span className="text-xl font-black text-primary">00</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                  <User className="w-14 h-14 text-primary" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Agentes de AI
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nuestros agentes conocen el detalle del contexto de tu
                  empresa y de tus pacientes:
                  <span className="text-foreground font-semibold">
                    {" "}
                    historia clínica, catálogo de tratamientos, citas y registro
                    gráfico
                  </span>
                  . Responden con precisión y pueden accionar flujos (agendar,
                  consultar stock, facturar).
                </p>
              </div>
            </Card>
          </div>

          {/* Card 2: Inventario */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                <span className="text-xl font-black text-primary">02</span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary-light/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                  <BarChart3
                    className="w-14 h-14 text-primary"
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Inventario
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Control de inventario en tiempo real:
                  <span className="text-foreground font-semibold">
                    {" "}
                    stock disponible, entradas y salidas
                  </span>
                  . Integra lotes y vencimientos para uso clínico seguro.
                </p>
              </div>
            </Card>
          </div>

          {/* Card 3: Facturación */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                <span className="text-xl font-black text-primary">03</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                  <Wallet className="w-14 h-14 text-primary" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Facturación
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Cumplimiento normativo colombiano:
                  <span className="text-foreground font-semibold">
                    {" "}
                    Facturación electrónica y RIPS
                  </span>
                  . Alimenta dashboards de{" "}
                  <span className="text-foreground font-semibold">CRM</span> para
                  análisis de comportamiento y recaudo.
                </p>
              </div>
            </Card>
          </div>

          {/* Fila 2: CRM (ocupa 3 columnas) */}
          
            <div className="grid md:grid gap-8 lg:gap-8 max-w-6xl mx-auto mb-16" >
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                <span className="text-xl font-black text-primary">04</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-light/10 group-hover:from-primary/20 group-hover:to-primary-light/20 transition-colors duration-300">
                  <Smile className="w-14 h-14 text-primary" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  CRM
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Gestión de clientes completa:
                  <span className="text-foreground font-semibold">
                    {" "}
                    base de datos, fuentes de origen, dashboards, agendas y
                    citas
                  </span>
                  . Conecta con agentes para orquestar seguimiento y conversión.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFailFastSection;
