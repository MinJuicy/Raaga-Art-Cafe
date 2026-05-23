import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { ScrollReveal } from "./ui/scroll-reveal";

export function Footer() {
  return (
    <footer className="bg-raaga-dark pt-24 pb-12 border-t border-raaga-light/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <ScrollReveal className="lg:col-span-2">
            <div className="flex flex-col items-start px-2 mb-6">
              <span className="font-serif text-4xl tracking-widest text-raaga-gold">
                RAAGA
              </span>
              <span className="font-sans text-xs tracking-[0.3em] font-light text-raaga-beige uppercase">
                Art Cafe
              </span>
            </div>
            <p className="font-sans font-light text-raaga-light/60 text-sm md:text-base leading-relaxed max-w-md mb-8">
              An urban escape above the city. A peaceful rooftop sanctuary hidden inside busy Dhaka, offering culinary craft and botanical serenity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-raaga-light/20 rounded-full flex items-center justify-center text-raaga-light hover:border-raaga-gold hover:text-raaga-gold transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 border border-raaga-light/20 rounded-full flex items-center justify-center text-raaga-light hover:border-raaga-gold hover:text-raaga-gold transition-colors">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h4 className="font-serif text-xl text-raaga-beige mb-6">Explore</h4>
            <ul className="space-y-4 font-sans font-light text-sm text-raaga-light/60">
              <li><a href="#experience" className="hover:text-raaga-gold transition-colors">The Atmosphere</a></li>
              <li><a href="#menu" className="hover:text-raaga-gold transition-colors">Signature Dishes</a></li>
              <li><a href="#gallery" className="hover:text-raaga-gold transition-colors">Gallery</a></li>
              <li><a href="#book" className="hover:text-raaga-gold transition-colors">Private Events</a></li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <h4 className="font-serif text-xl text-raaga-beige mb-6">Visit</h4>
            <ul className="space-y-5 font-sans font-light text-sm text-raaga-light/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-raaga-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>Sector 11, Uttara<br/>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-raaga-gold shrink-0" strokeWidth={1.5} />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-raaga-gold shrink-0" strokeWidth={1.5} />
                <span>experience@raaga.cafe</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="border-t border-raaga-light/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-light text-xs text-raaga-light/40 uppercase tracking-wider">
            © {new Date().getFullYear()} Raaga Art Cafe. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans font-light text-xs text-raaga-light/40 uppercase tracking-wider">
            <a href="#" className="hover:text-raaga-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-raaga-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
