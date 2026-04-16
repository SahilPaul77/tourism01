"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const destinations = [
  { title: "Santorini, Greece", category: "Luxury Escape", img: "https://images.unsplash.com/photo-1613395877344-13d4a8e8d497?q=80&w=800" },
  { title: "Kyoto, Japan", category: "Cultural", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800" },
  { title: "Swiss Alps", category: "Adventure", img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=800" },
  { title: "Amalfi Coast", category: "Coastal", img: "https://images.unsplash.com/photo-1533105079780-92b9be48a004?q=80&w=800" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DestinationGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Curated Escapes</h2>
          <p className="text-zinc-400 text-lg">Hand-picked destinations for the discerning traveler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          {destinations.map((dest, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative overflow-hidden rounded-3xl ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"}`}
            >
              {/* Image with Zoom Effect */}
              <motion.img
                src={dest.img}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">{dest.category}</p>
                <h3 className="text-2xl font-serif mb-4">{dest.title}</h3>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-2 text-sm font-medium border-b border-white/30 pb-1"
                >
                  Explore. <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}