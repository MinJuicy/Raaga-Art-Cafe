import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Menu", href: "#menu" },
    { name: "Atmosphere", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-raaga-dark/80 backdrop-blur-md border-raaga-light/10 py-3 md:py-4"
            : "bg-transparent border-transparent py-5 md:py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex flex-col items-start px-2">
            <span className="font-serif text-2xl md:text-3xl tracking-widest text-raaga-gold">
              RAAGA
            </span>
            <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.3em] font-light text-raaga-beige uppercase">
              Art Cafe
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-light tracking-wide text-raaga-beige hover:text-raaga-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="px-6 py-2 border border-raaga-gold/50 text-raaga-gold font-sans text-sm uppercase tracking-widest hover:bg-raaga-gold hover:text-raaga-dark transition-all duration-500 rounded-sm"
            >
              Reserve
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-raaga-beige p-2"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-raaga-dark/95 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 text-raaga-beige p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} strokeWidth={1} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="font-serif text-3xl text-raaga-light hover:text-raaga-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#book"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="mt-4 px-8 py-3 border border-raaga-gold text-raaga-gold font-sans text-sm uppercase tracking-widest"
              >
                Reserve a Table
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
