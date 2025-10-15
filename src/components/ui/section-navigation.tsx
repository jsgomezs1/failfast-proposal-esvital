import { useEffect, useState } from 'react';
import {
  Home,
  UserStar,
  Rocket,
  Handshake,
  Bot,
  Layers,
  Star,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import proposalInfo from "@/proposal_info.json";
const navigationData = [
  {
    title: "Inicio",
    icon: <Home className="h-full w-full text-primary dark:text-neutral-300" />,
    sectionId: "hero",
    index: 0,
  },
  {
    title: proposalInfo.client_name,
    icon: (
      <UserStar className="h-full w-full text-primary dark:text-neutral-300" />
    ),
    sectionId: "client-intro",
    index: 1,
  },
  {
    title: "Fail Fast",
    icon: (
      <Rocket className="h-full w-full text-primary dark:text-neutral-300" />
    ),
    sectionId: "about-failfast",
    index: 2,
  },
  {
    title: "Equipos AI First",
    icon: <Bot className="h-full w-full text-primary dark:text-neutral-300" />,
    sectionId: "small-teams",
    index: 3,
  },
  {
    title: "Proyecto",
    icon: (
      <Layers className="h-full w-full text-primary dark:text-neutral-300" />
    ),
    sectionId: "deliverables",
    index: 4,
  },
  {
    title: "Precios",
    icon: (
      <Handshake className="h-full w-full text-primary dark:text-neutral-300" />
    ),
    sectionId: "pricing",
    index: 5,
  },
  {
    title: "Kickoff",
    icon: <Star className="h-full w-full text-primary dark:text-neutral-300" />,
    sectionId: "closing",
    index: 6,
  },
];

interface SectionNavigationProps {
  sectionsRef: React.MutableRefObject<(HTMLElement | null)[]>;
}

export function SectionNavigation({ sectionsRef }: SectionNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const distanceFromLeft = e.clientX;
      const threshold = 150;
      setIsVisible(distanceFromLeft < threshold);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-out overflow-visible"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(-50%) translateX(${isVisible ? "0" : "-100%"})`,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <Dock className="items-center justify-center overflow-visible">
        {navigationData.map((item) => (
          <DockItem
            key={item.index}
            className="aspect-square rounded-full bg-primary/10 dark:bg-neutral-800/80 backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-neutral-700/80 transition-colors"
            onClick={() => scrollToSection(item.index)}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
