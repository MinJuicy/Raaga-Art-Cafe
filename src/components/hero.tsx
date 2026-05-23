import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2674&auto=format&fit=crop"
            alt="Raaga Art Cafe Atmosphere"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Gradient Overlay for Cinematic Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-raaga-black via-raaga-dark/70 to-raaga-dark/40" />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Subtle radial glow effect simulating ambient rooftop lights */}
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-raaga-gold/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="font-sans text-sm md:text-base font-light tracking-[0.4em] uppercase text-raaga-gold mb-6 block">
            Dhaka's most artistic rooftop escape
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-raaga-light leading-tight mb-8 drop-shadow-lg max-w-4xl">
            Where Art, Food & <span className="text-raaga-beige italic">Atmosphere</span> Meet.
          </h1>
          <p className="font-sans text-lg md:text-xl font-light text-raaga-beige max-w-2xl leading-relaxed mb-12 opacity-90">
            Good food. Soft melodies. Skyline serenity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-raaga-gold text-raaga-dark font-sans text-sm md:text-base uppercase tracking-widest hover:bg-raaga-light transition-colors duration-500 text-center w-full sm:w-auto"
          >
            Explore Menu
          </a>
          <a
            href="#book"
            className="px-8 py-4 border border-raaga-light/30 text-raaga-light font-sans text-sm md:text-base uppercase tracking-widest hover:bg-raaga-light/10 backdrop-blur-sm transition-all duration-500 text-center w-full sm:w-auto"
          >
            Reserve Table
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-sans text-[0.65rem] tracking-[0.2em] uppercase font-light text-raaga-beige/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-raaga-gold/80" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}
