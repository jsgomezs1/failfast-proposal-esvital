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
  Hotel,
  Calendar,
  DollarSign,
  MessageCircle,
  Users,
  Box,
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
  // Define colores personalizados para alternar: Azul Profundo y Azul Cielo
  const primaryColorClass = "text-blue-600"; // Tono azul profundo y sobrio
  const secondaryColorClass = "text-sky-500"; // Tono azul cielo
  
  const primaryBgClass = "from-blue-600/10 to-blue-500/10";
  const primaryHoverBgClass = "group-hover:from-blue-600/20 group-hover:to-blue-500/20";
  const secondaryBgClass = "from-sky-500/10 to-sky-400/10";
  const secondaryHoverBgClass = "group-hover:from-sky-500/20 group-hover:to-sky-400/20";

  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="relative section-padding opacity-0 transition-opacity duration-700 bg-gradient-to-b from-accent/20 via-white to-accent/30 dark:from-accent/10 dark:via-background dark:to-accent/10 overflow-hidden"
    >
      {/* Floating Gradient Orbs (Mantienen el esquema de color general) */}
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

        {/* Enhanced Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-8 max-w-6xl mx-auto mb-16">
          {/* TOP: Card grande de Agentes (ocupa las 3 columnas) - Color Principal (Azul Profundo) */}
          <div
            className="md:col-span-3 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-xl font-black text-blue-700">01</span>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${primaryBgClass} ${primaryHoverBgClass} transition-colors duration-300`}>
                  <Brain className={`w-14 h-14 ${primaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Agente de Ventas IA
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Implementamos un agente de ventas con inteligencia artificial (IA) que potenciará la comercialización del Hotel Casablanca. Este agente conoce el detalle del contexto del hotel:
                  <span className="text-foreground font-semibold">
                    {" "}
                    productos, planes, precios, disponibilidad, base de datos de clientes e historial de compras
                  </span>
                  . Es capaz de realizar cierres de ventas, gestionar reservas y enviar links de pago de forma autónoma.
                </p>
              </div>
            </Card>
          </div>

          {/* Card 2: Productos y Precios (Cátalogo) - Color Secundario (Azul Cielo) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-400/20 flex items-center justify-center">
                <span className="text-xl font-black text-sky-600">02</span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-sky-500/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className={`mb-6`}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${secondaryBgClass} ${secondaryHoverBgClass} transition-colors duration-300`}>
                  <Box className={`w-14 h-14 ${secondaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Productos y Precios
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  El agente conoce todo el
                  <span className="text-foreground font-semibold">
                    {" "}
                    catálogo de servicios, planes, tipos de habitaciones y salones, junto con sus precios actualizados y ofertas vigentes
                  </span>
                  .
                </p>
              </div>
            </Card>
          </div>


          {/* Card 2: Productos y Precios (Cátalogo) - Color Secundario (Azul Cielo) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-400/20 flex items-center justify-center">
                <span className="text-xl font-black text-sky-600">03</span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-sky-500/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className={`mb-6`}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${secondaryBgClass} ${secondaryHoverBgClass} transition-colors duration-300`}>
                  <Box className={`w-14 h-14 ${secondaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Interacción del Agente con el Cliente
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Clasificaión de las interacciones del agente con el cliente y el historial de interacciones.
                  <span className="text-foreground font-semibold">
                    {" "}
                    Activación de seguimiento
                  </span>
                  con base en la clasificación de las interacciones.
                </p>
              </div>
            </Card>
          </div>

          {/* Card 3: Clientes y CRM (Base de Datos) - Color Principal (Azul Profundo) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-xl font-black text-blue-700">04</span>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${primaryBgClass} ${primaryHoverBgClass} transition-colors duration-300`}>
                  <Users className={`w-14 h-14 ${primaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Visualización de Clientes y CRM
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Acceso a la
                  <span className="text-foreground font-semibold">
                    {" "}
                    base de datos de clientes, historial de compras y preferencias
                  </span>
                  . Esto permite una atención personalizada y recomendaciones de venta cruzada. Además, permite hacer 
                  <span className="text-foreground font-semibold">
                    {" "}
                    seguimiento de leads y clientes
                  </span>
                  .
                </p>
              </div>
            </Card>
          </div>

          {/* Card 4: Integración ERP Zeus y Facturación - Color Secundario (Azul Cielo) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-sky-400/20 flex items-center justify-center">
                <span className="text-xl font-black text-sky-600">05</span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-sky-500/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className="mb-6">
                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${secondaryBgClass} ${secondaryHoverBgClass} transition-colors duration-300`}>
                  <Network className={`w-14 h-14 ${secondaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Integración ERP Zeus y Facturación
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Conectividad total con el
                  <span className="text-foreground font-semibold">
                    {" "}
                    sistema Zeus ERP existente
                  </span>
                  . El agente consulta disponibilidad, registra reservas y genera órdenes de facturación en tiempo real.
                </p>
              </div>
            </Card>
          </div>
          
          {/* Card 5: Dashboard Estratégico - Color Principal (Azul Profundo) */}
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Card className="relative p-8 md:p-10 lg:p-8 h-full backdrop-blur-sm bg-white/80 dark:bg-background/80 border border-primary/20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              {/* Badge number */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-xl font-black text-blue-700">06</span>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-transparent group-hover:scale-150 transition-transform duration-700" />

              {/* Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${primaryBgClass} ${primaryHoverBgClass} transition-colors duration-300`}>
                  <BarChart3 className={`w-14 h-14 ${primaryColorClass}`} strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-foreground">
                  Dashboard Estratégico
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Generación de un
                  <span className="text-foreground font-semibold">
                    {" "}
                    Dashboard para la toma de decisiones estratégicas
                  </span>
                  . Analiza datos de ventas, rendimiento del agente y comportamiento del cliente para optimizar la oferta.
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
