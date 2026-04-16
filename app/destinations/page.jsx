"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Extended data for functionality
const allDestinations = [
  // Domestic
  { id: 1, title: "Goa Beaches", category: "Domestic", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800" },
  { id: 2, title: "Udaipur Palace", category: "Domestic", img: "https://images.unsplash.com/photo-1590073242678-70d3fc7c3e65?q=80&w=800" },
  { id: 3, title: "Kerala Backwaters", category: "Domestic", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800" },
  { id: 4, title: "Leh Ladakh", category: "Domestic", img: "https://images.unsplash.com/photo-1614597396930-cd6760b99672?q=80&w=800" },
  { id: 5, title: "Manali Peaks", category: "Domestic", img: "https://images.unsplash.com/photo-1589308078059-be1415eab49f?q=80&w=800" },
  { id: 6, title: "Coorg Coffee", category: "Domestic", img: "https://images.unsplash.com/photo-1589411454940-67a01a7358d5?q=80&w=800" },
  { id: 7, title: "Rishikesh Yoga", category: "Domestic", img: "https://images.unsplash.com/photo-1544735716-392524d35165?q=80&w=800" },
  // International
  { id: 8, title: "Santorini, Greece", category: "International", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e8d497?q=80&w=800" },
  { id: 9, title: "Kyoto, Japan", category: "International", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800" },
  { id: 10, title: "Swiss Alps", category: "International", img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800" },
  { id: 11, title: "Amalfi Coast", category: "International", img: "https://images.unsplash.com/photo-1533105079780-92b9be48a004?q=80&w=800" },
  { id: 12, title: "Paris Nights", category: "International", img: "https://images.unsplash.com/photo-1502602898657-3401761a348d?q=80&w=800" },
  { id: 13, title: "Bali Retreat", category: "International", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" },
];

export default function EnhancedDestinations() {
  const [activeCategory, setActiveCategory] = useState("Domestic");
  const [showAll, setShowAll] = useState(false);

  const filtered = allDestinations.filter(d => d.category === activeCategory);
  const displayItems = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#18181b,transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4">Destinations</h2>
            {/* Tabs */}
            <div className="flex gap-6">
              {["Domestic", "International"].map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                  className={`text-lg transition-all ${activeCategory === cat ? "text-white border-b-2 border-white" : "text-zinc-500"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors"
          >
            {showAll ? "Show Less" : "View More"}
          </button>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayItems.map((dest) => (
              <motion.div
                layout
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative overflow-hidden rounded-3xl h-[400px]"
              >
                <img src={dest.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-serif">{dest.title}</h3>
                  <div className="flex items-center gap-2 text-sm mt-2 border-b border-white/30 pb-1 w-max">
                    Explore <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}