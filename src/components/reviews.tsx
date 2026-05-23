import { ScrollReveal } from "./ui/scroll-reveal";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "A perfect blend of zen and vibrant energy. The botanical setup totally shifts your mood the moment you step in.",
    author: "Zahin T.",
    role: "Local Guide"
  },
  {
    quote: "Easily the best rooftop hangout in Uttara. The soft melody in the background paired with the city lights is unmatched.",
    author: "Nabila H.",
    role: "Content Creator"
  },
  {
    quote: "Very photogenic and welcoming ambience. The Spicy Ramen and the sunset views make for a perfect evening.",
    author: "Farhan M.",
    role: "Food Blogger"
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-36 bg-raaga-green relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[20rem] font-serif text-raaga-lightgreen leading-none pointer-events-none opacity-50">
        "
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <ScrollReveal>
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-raaga-gold mb-4 block">
              Guest Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-raaga-light">
              Echoes of Serenity
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif text-4xl text-raaga-light">4.8</span>
              <div className="flex gap-1 text-raaga-gold">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
            <p className="font-sans font-light text-sm uppercase tracking-widest text-raaga-light/60">
              Based on 900+ reviews
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.2}
              className="bg-raaga-dark/50 p-10 md:p-12 border border-raaga-light/5 hover:bg-raaga-dark/80 transition-colors duration-500 backdrop-blur-md"
            >
              <div className="flex gap-1 text-raaga-gold mb-8 opacity-70">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-raaga-light/90 leading-relaxed mb-10 italic">
                "{review.quote}"
              </p>
              <div>
                <p className="font-sans text-base text-raaga-gold mb-1">{review.author}</p>
                <p className="font-sans font-light text-xs tracking-wider uppercase text-raaga-light/40">
                  {review.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
