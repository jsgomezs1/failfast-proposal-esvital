import { Logos3 } from "@/components/blocks/logos3";
import okendoImg from "@/assets/okendo.png";
import ermermedicaImg from "@/assets/emermedica.png";
import cineColombiaImg from "@/assets/cine-colombia.png";
import satImg from "@/assets/SAT.png";
import telasRealImg from "@/assets/telas-real.png";
import alivalImg from "@/assets/alival.png";

const demoData = {
  heading: "Equipos que confian en Nosotros",
  logos: [
    {
      id: "Okendo",
      description: "Okendo",
      image: okendoImg,
      url: "https://www.okendo.com.co/",
      className: "h-28 md:h-36 lg:h-32 w-auto",
    },
    {
      id: "Emermedica",
      description: "Emermedica",
      image: ermermedicaImg,
      url: "https://www.medicinadomiciliaria.co/",
      className: "h-28 md:h-36 lg:h-32 w-auto",
    },
    {
      id: "CineColombia",
      description: "CineColombia",
      image: cineColombiaImg,
      url: "https://www.cinecolombia.com/",
      className: "h-28 md:h-36 lg:h-32 w-auto",
    },
    {
      id: "SAT",
      description: "SAT",
      image: satImg,
      url: "https://satstore.com.co/",
      className: "h-28 md:h-36 lg:h-32 w-auto",
    },

    {
      id: "TelasReal",
      description: "Telas Real",
      image: telasRealImg,
      url: "https://www.telasreal.com/",
      className: "h-20 md:h-28 lg:h-24 w-auto",
    },
    {
      id: "Alival",
      description: "Alival",
      image: alivalImg,
      url: "https://www.alival.com.co/",
      className: "h-28 md:h-36 lg:h-32 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };
