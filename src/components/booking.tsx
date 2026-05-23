import { ScrollReveal } from "./ui/scroll-reveal";

export function Booking() {
  return (
    <section id="book" className="py-24 md:py-36 bg-[#0c130f] relative flex items-center justify-center">
      {/* Background cinematic blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-raaga-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-raaga-dark/80 backdrop-blur-xl border border-raaga-light/10 p-8 md:p-16 rounded-sm shadow-2xl">
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <ScrollReveal>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-raaga-gold mb-4 block">
                Reservations
              </span>
              <h2 className="font-serif text-4xl xl:text-5xl text-raaga-light mb-6">
                Save Your <br /> Spot Under <br /> The Sky.
              </h2>
              <p className="font-sans font-light text-raaga-light/60 text-sm md:text-base leading-relaxed mb-8">
                Whether it's an intimate date night or a vibrant gathering with friends, secure your table to experience the magic of RAAGA.
              </p>
              <div className="space-y-4 font-sans font-light text-sm text-raaga-light/80">
                <p><strong className="text-raaga-gold font-normal">Call Us:</strong> +880 1234-567890</p>
                <p><strong className="text-raaga-gold font-normal">Location:</strong> Sector 11, Uttara, Dhaka</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-3">
            <ScrollReveal delay={0.2} direction="up">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Name</label>
                    <input type="text" className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Phone</label>
                    <input type="tel" className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light" placeholder="01XXX-XXXXXX" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Date</label>
                    <input type="date" className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Time</label>
                    <select className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light appearance-none">
                      <option>18:00 PM</option>
                      <option>19:00 PM</option>
                      <option>20:00 PM</option>
                      <option>21:00 PM</option>
                      <option>22:00 PM</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Guests</label>
                    <select className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light appearance-none">
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                   <label className="font-sans text-xs uppercase tracking-widest text-raaga-light/50 pl-1">Special Occasion (Optional)</label>
                   <input type="text" className="w-full bg-raaga-black/50 border border-raaga-light/20 p-4 text-raaga-light focus:outline-none focus:border-raaga-gold transition-colors font-sans font-light" placeholder="Birthday, Anniversary..." />
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full bg-raaga-gold text-raaga-dark font-sans text-sm font-medium uppercase tracking-widest py-5 hover:bg-raaga-light transition-colors duration-500">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
