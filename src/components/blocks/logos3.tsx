import React from "react";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  url?: string;
}

interface Logos3Props {
  heading: string;
  logos: Logo[];
}

export function Logos3({ heading, logos }: Logos3Props) {
  // Duplicate logos to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full py-10 md:py-12 lg:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-400 text-xl lg:text-lg font-medium tracking-wider ">
          {heading}
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Scrolling container */}
          <div className="flex animate-logo-scroll hover:animate-logo-scroll-paused">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-[6rem] md:h-[10rem] lg:h-[10rem] w-80 md:w-[28rem] lg:w-[24rem] group"
              >
                {logo.url ? (
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${logo.description}`}
                    // className="inline-flex items-center justify-center h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-md"
                  >
                    <img
                      src={logo.image}
                      alt={`${logo.description} logo`}
                      className={`${
                        logo.className || "h-32 md:h-40 lg:h-36 w-auto"
                      } max-h-full max-w-full object-contain transition-all duration-300 ease-out will-change-transform group-hover:scale-110 focus-visible:scale-110 group-hover:drop-shadow-2xl focus-visible:drop-shadow-2xl cursor-pointer`}
                    />
                  </a>
                ) : (
                  <img
                    src={logo.image}
                    alt={`${logo.description} logo`}
                    className={`${
                      logo.className || "h-32 md:h-40 lg:h-36 w-auto"
                    } max-h-full max-w-full object-contain transition-all duration-300 ease-out will-change-transform group-hover:scale-110 group-hover:drop-shadow-2xl`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
