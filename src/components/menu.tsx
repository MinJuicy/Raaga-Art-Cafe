import { ScrollReveal } from "./ui/scroll-reveal";
import { useState } from "react";

const menuItems = [
  {
    name: "Chicken Spicy Ramen",
    description: "Rich broth, tender chicken, soft-boiled egg, and nori. A comforting classic.",
    price: "450 ৳",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=800&auto=format&fit=crop",
    category: "Signature",
  },
  {
    name: "Korean Glazed Wings",
    description: "Crispy fried wings tossed in our signature sweet and spicy gochujang glaze.",
    price: "380 ৳",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
  },
  {
    name: "Chicken Katsu Curry",
    description: "Crispy panko chicken breast over steamed rice with rich Japanese curry sauce.",
    price: "520 ৳",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop",
    category: "Signature",
  },
  {
    name: "Oven Baked Pasta",
    description: "Penne baked with creamy garlic sauce, roasted mushrooms, and a mozzarella crust.",
    price: "420 ৳",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    category: "Mains",
  },
  {
    name: "Cashew Nut Salad",
    description: "Fresh greens, roasted cashews, grilled chicken strips with a zesty Thai dressing.",
    price: "350 ৳",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    category: "Appetizers",
  },
  {
    name: "Premium Kebab Platter",
    description: "Assorted tender kebabs, butter naan, mint chutney, and fresh salad.",
    price: "850 ৳",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    category: "Mains",
  },
];

const categories = ["All", "Signature", "Appetizers", "Mains"];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-36 bg-[#0c130f]">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-raaga-gold mb-4 block">
            Culinary Craft
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-raaga-light mb-8">
            Signature Dishes
          </h2>
          
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-6 md:gap-8 pb-4 md:pb-0 w-full snap-x snap-mandatory px-4 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`snap-center shrink-0 font-sans text-sm tracking-widest uppercase transition-colors duration-300 pb-1 border-b ${
                  activeCategory === cat 
                    ? "text-raaga-gold border-raaga-gold" 
                    : "text-raaga-light/50 border-transparent hover:text-raaga-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              delay={index * 0.1}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-raaga-dark">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-raaga-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Most Loved Tag on Signatures */}
                {item.category === "Signature" && (
                  <div className="absolute top-4 right-4 bg-raaga-gold text-raaga-dark text-[0.65rem] uppercase tracking-widest font-bold px-3 py-1">
                    Most Loved
                  </div>
                )}
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-2xl text-raaga-beige group-hover:text-raaga-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="font-serif text-lg text-raaga-gold whitespace-nowrap pl-4">
                  {item.price}
                </span>
              </div>
              <p className="font-sans font-light text-sm text-raaga-light/60 leading-relaxed pr-8">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-20 text-center">
          <a
            href="#"
            className="inline-block px-10 py-4 border border-raaga-gold/40 text-raaga-gold font-sans text-sm uppercase tracking-widest hover:bg-raaga-gold hover:text-raaga-dark transition-colors duration-500"
          >
            View Full Menu
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
