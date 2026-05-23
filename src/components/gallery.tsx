import { ScrollReveal } from "./ui/scroll-reveal";

const images = [
  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1000&auto=format&fit=crop",
    className: "col-span-1 row-span-2 aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1502301103665-0b95cc738daf?q=80&w=1000&auto=format&fit=crop",
    className: "col-span-1 row-span-1 aspect-square"
  },
  {
    src: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop",
    className: "col-span-1 row-span-2 aspect-[3/4]"
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop",
    className: "col-span-2 md:col-span-1 row-span-1 aspect-video md:aspect-square"
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-[#0a0e0b]">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
          <div className="max-w-xl">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-raaga-gold mb-4 block">
              Atmosphere
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-raaga-light">
              Instagrammable Moments
            </h2>
          </div>
          <p className="font-sans font-light text-raaga-light/60 mt-6 md:mt-0 text-sm md:text-base max-w-sm">
            Discover the aesthetic corners and cinematic lighting that make every visit memorable.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {images.map((img, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.15}
              className={`relative overflow-hidden group ${img.className}`}
            >
              <img
                src={img.src}
                alt="Cafe Atmosphere"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-raaga-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </ScrollReveal>
          ))}
          
          {/* Large showcase piece */}
          <ScrollReveal
            direction="up"
            delay={0.6}
            className="col-span-2 md:col-span-3 aspect-video md:aspect-[21/9] relative overflow-hidden group mt-2"
          >
            <img
               src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop"
               alt="Rooftop Night"
               className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raaga-dark via-raaga-dark/20 to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="font-serif text-2xl md:text-4xl text-raaga-light mb-2">Cityscape by Night</p>
              <p className="font-sans font-light text-sm tracking-widest uppercase text-raaga-gold">The Executive Lounge</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
