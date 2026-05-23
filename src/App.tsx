import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Experience } from "./components/experience";
import { Menu } from "./components/menu";
import { Gallery } from "./components/gallery";
import { Reviews } from "./components/reviews";
import { Booking } from "./components/booking";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <main className="min-h-screen bg-raaga-dark text-raaga-light selection:bg-raaga-gold selection:text-raaga-dark">
      <Navbar />
      <Hero />
      <Experience />
      <Menu />
      <Gallery />
      <Reviews />
      <Booking />
      <Footer />
    </main>
  );
}
