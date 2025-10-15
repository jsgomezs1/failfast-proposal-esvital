import { Zap, TrendingUp, Sparkles, Heart, Sailboat, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import cursorLogo from "@/assets/cursor.webp";
import elevenLabsLogo from "@/assets/ElevenLabs.png";
import lovableLogo from "@/assets/lovable.png";
import midjourneyLogo from "@/assets/Midjourney.svg";
import mercorLogo from "@/assets/mercor-logo.png";
import aragonLogo from "@/assets/Aragon.png";
import boltLogo from "@/assets/bolt.png";
import gammaLogo from "@/assets/gamma.png";
import tallyLogo from "@/assets/tally.avif";
import feedhiveLogo from "@/assets/feedhive.webp";

interface SmallTeamsSectionProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
  index: number;
}

const SmallTeamsSection = ({ sectionsRef, index }: SmallTeamsSectionProps) => {
  const companies = [
    {
      name: "CURSOR",
      achievement: "0 → $100M ARR en 21 meses",
      team: "20 personas",
      logo: (
        <img
          src={cursorLogo}
          alt="Cursor"
          className="w-20 h-20 object-contain"
        />
      ),
      bgColor: "bg-black dark:bg-white/10",
    },
    {
      name: "Lovable",
      achievement: "0 → $10M ARR en 2 meses",
      team: "15 personas",
      logo: (
        <img
          src={lovableLogo}
          alt="Lovable"
          className="w-20 h-20 object-contain"
        />
      ),
      bgColor: "bg-black dark:bg-white/10",
    },
    {
      name: "Midjourney",
      achievement: "0 → $200M ARR en 2 años",
      team: "10 personas",
      logo: (
        <img
          src={midjourneyLogo}
          alt="Midjourney"
          className="w-20 h-20 object-contain"
        />
      ),
      bgColor: "bg-white dark:bg-black border border-foreground/20",
    },
    // {
    //   name: "MERCOR",
    //   achievement: "0 → $50M ARR en 2 años",
    //   team: "30 personas",
    //   logo: (
    //     <img
    //       src={mercorLogo}
    //       alt="Mercor"
    //       className="w-20 h-20 object-contain"
    //     />
    //   ),
    //   bgColor: "bg-black dark:bg-white/10",
    // },
    // {
    //   name: "Eleven Labs",
    //   achievement: "0 → $100M ARR en 2 años",
    //   team: "50 personas",
    //   logo: (
    //     <img
    //       src={elevenLabsLogo}
    //       alt="Eleven Labs"
    //       className="w-20 h-20 object-contain"
    //     />
    //   ),
    //   bgColor: "bg-black dark:bg-white/10",
    // },
    {
      name: "Aragon",
      subtext: ".ai",
      achievement: "0 → $10M ARR en 2 años",
      team: "9 personas",
      logo: (
        <img
          src={aragonLogo}
          alt="Aragon"
          className="w-20 h-20 object-contain"
        />
      ),
      bgColor: "bg-white dark:bg-black border border-foreground/20",
    },
    {
      name: "Bolt",
      subtext: ".new",
      achievement: "0 → $15M ARR en 18 meses",
      team: "12 personas",
      logo: (
        <img src={boltLogo} alt="Bolt" className="w-20 h-20 object-contain" />
      ),
      bgColor: "bg-black dark:bg-white/10",
    },
    {
      name: "Gamma",
      achievement: "0 → $25M ARR en 3 años",
      team: "25 personas",
      logo: (
        <img src={gammaLogo} alt="Gamma" className="w-20 h-20 object-contain" />
      ),
      bgColor: "bg-white dark:bg-black border border-foreground/20",
    },
    // {
    //   name: "Tally",
    //   achievement: "0 → $8M ARR en 2 años",
    //   team: "18 personas",
    //   logo: (
    //     <img src={tallyLogo} alt="Tally" className="w-20 h-20 object-contain" />
    //   ),
    //   bgColor: "bg-black dark:bg-white/10",
    // },
    // {
    //   name: "Feedhive",
    //   achievement: "0 → $5M ARR en 18 meses",
    //   team: "8 personas",
    //   logo: (
    //     <img
    //       src={feedhiveLogo}
    //       alt="Feedhive"
    //       className="w-20 h-20 object-contain"
    //     />
    //   ),
    //   bgColor: "bg-white dark:bg-black border border-foreground/20",
    // },
  ];

  // Function to parse ARR from achievement string
  const parseARR = (achievement: string): number => {
    const match = achievement.match(/\$(\d+)M/);
    return match ? parseInt(match[1]) : 0;
  };

  // Function to parse team size from team string
  const parseTeamSize = (team: string): number => {
    const match = team.match(/(\d+)\s+personas/);
    return match ? parseInt(match[1]) : 1;
  };

  // Company colors mapping
  const companyColors = {
    CURSOR: "#1A1A1A", // dark gray / near black (instead of pure black)
    lovable: "#a26df7", // a bit more vivid pinkish than #FF6B9D
    Midjourney: "#E20304", // Midjourney’s red primary color :contentReference[oaicite:0]{index=0}
    MERCOR: "#6366F1", // keep your original or adjust if you have their brand color
    "Eleven Labs": "#C47DE5", // from ElevenLabs’ purple tint P500 in brand palette :contentReference[oaicite:1]{index=1}
    Aragon: "#FF6829", // adjust your “FF6B35” slightly more orange-red
    Bolt: "#75b9fd", // gold is reasonable for “Bolt” (lightning / gold)
    Gamma: "#8B5CF6", // stays purple (similar to your original)
    Tally: "#725BFF", // official Tally brand purple :contentReference[oaicite:2]{index=2}
    Feedhive: "#5b6cff", // your original is a strong golden yellow — looks okay
  };
  // Data for bar chart - calculated from companies array
  const chartData = companies
    .map((company) => {
      const arr = parseARR(company.achievement);
      const teamSize = parseTeamSize(company.team);
      const revenuePerEmployee = arr / teamSize;
      const color = companyColors[company.name as keyof typeof companyColors];

      return {
        name: company.name,
        value: revenuePerEmployee,
        displayValue: `$${revenuePerEmployee.toFixed(1)}M`,
        logo: company.logo,
        color: color || "#6B7280",
      };
    })
    .filter((item) => item.value > 0) // Filter out companies with no ARR data
    .sort((a, b) => b.value - a.value); // Sort by revenue per employee (highest first)

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-neutral-200 p-3 rounded-lg shadow-lg">
          <p className="font-bold text-foreground">{payload[0].payload.name}</p>
          <p className="text-sm text-muted-foreground">Revenue per Employee:</p>
          <p className="text-lg font-bold text-foreground">
            {payload[0].payload.displayValue}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomXAxisTick = ({ x, y, payload }: any) => {
    const data = chartData.find((d) => d.name === payload.value);
    // Special handling for ElevenLabs logo to ensure visibility
    const isElevenLabs = payload.value === "Eleven Labs";

    return (
      <g transform={`translate(${x},${y})`}>
        <foreignObject x={-35} y={10} width={70} height={70}>
          <div
            className={`flex items-center justify-center w-full h-full rounded-md shadow-sm ${
              isElevenLabs
                ? "bg-white dark:bg-white border border-gray-300"
                : "bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-600/50"
            }`}
          >
            <div className="scale-75 flex items-center justify-center w-full h-full p-1">
              {data?.logo}
            </div>
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <section
      ref={(el) => (sectionsRef.current[index] = el)}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background"
    >
      {/* Floating Purple Gradient Orbs - Subtle like AboutUs section */}
      <div
        className="absolute top-10 left-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-500/15 to-transparent blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-500/15 to-transparent blur-3xl" />
      <div
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(147, 51, 234, 0.4) 2px, transparent 2px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Main Title */}
        <div className="max-w-6xl mx-auto mb-16 lg:mb-20">
          <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-black text-center mb-16 uppercase tracking-tight text-foreground">
            Equipos pequeños - AI First
            {/* Subtle purple glow behind text */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 blur-2xl" />
          </h2>

          {/* Companies List - Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 group hover:scale-[1.02] transition-all duration-300 ease-out p-6 rounded-2xl hover:bg-muted/30"
              >
                {/* Logo - Larger and More Prominent */}
                <div className="flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 bg-background/80 rounded-xl shadow-lg">
                  <div className="scale-110">{company.logo}</div>
                </div>

                {/* Achievement Text */}
                <div className="flex-1 min-w-0">
                  <div className="mb-1">
                    <span className="font-black text-lg lg:text-xl tracking-tight text-foreground block">
                      {company.name}
                      {company.subtext && (
                        <span className="font-light opacity-80">
                          {company.subtext}
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-base lg:text-lg font-medium text-foreground leading-relaxed">
                    {company.achievement}
                  </p>
                  <p className="text-sm lg:text-base text-muted-foreground mt-1">
                    {company.team}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Revolution Section - Minimal Style */}
        <div className="max-w-5xl mx-auto mt-24">
          <Card className="relative overflow-hidden border border-muted bg-muted/20 py-6">
            <CardContent className="relative z-10 ">
              {/* Section Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-foreground" />
                  <span className="font-bold text-foreground text-sm uppercase tracking-wider">
                    La Revolución de la IA
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                  Ingresos por Empleado
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  La métrica que importa hoy:{" "}
                  <span className="font-bold text-foreground">
                    Revenue Per Employee
                  </span>
                </p>
              </div>

              {/* Bar Chart */}
              <div className=" bg-card/30 p-6 rounded-lg border border-muted">
                <ResponsiveContainer width="100%" height={450}>
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--muted))"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="name"
                      tick={<CustomXAxisTick />}
                      height={110}
                      axisLine={{ stroke: "hsl(var(--muted))" }}
                      tickLine={false}
                    />
                    <YAxis
                      label={{
                        value: "Revenue per Employee (Millions USD)",
                        angle: -90,
                        position: "insideLeft",
                        style: {
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        },
                      }}
                      axisLine={{ stroke: "hsl(var(--muted))" }}
                      tickLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "hsl(var(--muted))" }}
                    />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SmallTeamsSection;
