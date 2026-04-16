"use client";
import React from "react";
import { motion,  useSpring, useTransform } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function HeroSection() {
 

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950 p-6 flex flex-col items-center justify-center">
      {/* Background Hero Image with 3D Tilt */}
      <motion.div
        className="absolute inset-0 z-0"
     
      
      >
        <div 
          className="w-full h-full bg-cover bg-center brightness-[0.6]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop')" }}
        />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-serif text-white tracking-tighter"
        >
          Explore Beyond
        </motion.h1>

        {/* Glassmorphic Search Bar */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="backdrop-blur-2xl bg-white/10 border border-white/20 p-4 rounded-3xl flex flex-wrap gap-4 items-center shadow-2xl"
        >
          <div className="flex items-center gap-3 px-4 text-white/80">
            <MapPin size={20} />
            <input type="text" placeholder="Destination" className="bg-transparent border-none outline-none placeholder-white/50" />
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="flex items-center gap-3 px-4 text-white/80">
            <Calendar size={20} />
            <input type="text" placeholder="Dates" className="bg-transparent border-none outline-none placeholder-white/50" />
          </div>
          <button className="bg-white text-zinc-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors">
            Search Now
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}