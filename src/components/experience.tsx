import { ScrollReveal } from "./ui/scroll-reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36 bg-raaga-black relative">
      {/* Decorative botanical element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop')] bg-cover bg-left opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-raaga-gold mb-4 block">
            The Atmosphere
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-raaga-light leading-tight">
            A Rooftop Experience <br />
            <span className="italic text-raaga-beige">Designed to Slow Time.</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image composition */}
          <div className="relative">
            <ScrollReveal direction="right" className="relative z-10 pr-8 pb-8 md:pr-12 md:pb-12">
              <div className="aspect-[4/5] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                  alt="Cozy Rooftop Setup"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal
              direction="up"
              delay={0.3}
              className="absolute bottom-0 right-0 w-2/3 md:w-3/5 z-20"
            >
              <div className="aspect-square overflow-hidden border-8 border-raaga-black relative group">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                  alt="Warm Ambience"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle dark overlay for contrast */}
                <div className="absolute inset-0 bg-raaga-dark/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <ScrollReveal direction="left" delay={0.2} className="mb-12">
              <h3 className="font-serif text-3xl md:text-4xl text-raaga-beige mb-6">
                More Than a Cafe.
              </h3>
              <p className="font-sans font-light text-raaga-light/70 text-lg leading-relaxed mb-6">
                Hidden away from the bustling streets of Uttara, RAAGA is an urban zen escape.
                We envisioned a space where lush botanical corners meet the open sky—a sanctuary 
                crafted for meaningful conversations, shared laughter, and quiet reflection.
              </p>
              <p className="font-sans font-light text-raaga-light/70 text-lg leading-relaxed">
                Whether you're seated by our signature waterfall corner or looking out over the skyline 
                from the terrace, the ambiance is elevated by soft melodies and warm, cinematic lighting.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="grid grid-cols-2 gap-8 border-t border-raaga-light/10 pt-8">
                <div>
                  <h4 className="font-serif text-xl text-raaga-gold mb-2">Botanical Oasis</h4>
                  <p className="font-sans text-sm font-light text-raaga-light/60">
                    Lush greenery wrapping around cozy seating areas.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-raaga-gold mb-2">Open Air Terrace</h4>
                  <p className="font-sans text-sm font-light text-raaga-light/60">
                    Breathtaking city views under the open sky.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
