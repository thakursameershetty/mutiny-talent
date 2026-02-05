"use client";

import { motion } from "framer-motion";
import InfiniteGallery from "@/components/ui/3DGallery";
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

// Import movie posters
import peddi from "@/assets/posters/peddi.jpg";
import rrr from "@/assets/posters/rrr.jpg";
import pushpa2 from "@/assets/posters/pushpa2.jpg";
import gunturKaaram from "@/assets/posters/guntur-kaaram.jpg";
import court from "@/assets/posters/court.jpg";
import hit3 from "@/assets/posters/hit3.jpg";
import vishwambara from "@/assets/posters/vishwambara.jpg";
import andhraKing from "@/assets/posters/andhra-king.jpg";
import akhanda2 from "@/assets/posters/akhanda2.jpg";
import kishkindhapuri from "@/assets/posters/kishkindhapuri.jpg";
import bhagavanthKesari from "@/assets/posters/bhagavanth-kesari.jpg";
import spidermanNwh from "@/assets/posters/spiderman-nwh.jpg";

// Movie poster data with titles for labels
const MOVIE_POSTERS = [
  { src: pushpa2, alt: "Pushpa 2", title: "Pushpa 2" },
  { src: rrr, alt: "RRR", title: "RRR" },
  { src: bhagavanthKesari, alt: "Bhagavanth Kesari", title: "Bhagavanth Kesari" },
  { src: spidermanNwh, alt: "Spider-Man: No Way Home", title: "Spider-Man NWH" },
  { src: peddi, alt: "Peddi", title: "Peddi" },
  { src: gunturKaaram, alt: "Guntur Kaaram", title: "Guntur Kaaram" },
  { src: vishwambara, alt: "Vishwambara", title: "Vishwambara" },
  { src: hit3, alt: "HIT 3", title: "HIT 3" },
  { src: akhanda2, alt: "Akhanda 2", title: "Akhanda 2" },
  { src: andhraKing, alt: "Andhra King", title: "Andhra King" },
  { src: court, alt: "Court", title: "Court" },
  { src: kishkindhapuri, alt: "Kishkindhapuri", title: "Kishkindhapuri" },
];

export default function MoviePostersAnimation() {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section id="campaigns" className="py-16 md:py-24 bg-gradient-white-yellow relative">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div ref={headerRef}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
              100+ <VariableProximity label={"Film Campaigns"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={240} falloff="linear" mode="transform" />
            </h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
              From blockbusters to indie gems, we've powered the digital buzz for South India's biggest releases.
            </p>
          </motion.div>

          {/* 3D Movie Posters Gallery - Bigger posters */}
          <div className="relative">
            <InfiniteGallery
              images={MOVIE_POSTERS}
              className="h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] w-full"
              speed={1.2}
              visibleCount={6}
              showLabels={true}
              imageScale={1.8}
              fadeSettings={{
                fadeIn: { start: 0.05, end: 0.15 },
                fadeOut: { start: 0.6, end: 0.75 },
              }}
              blurSettings={{
                blurIn: { start: 0.0, end: 0.08 },
                blurOut: { start: 0.6, end: 0.75 },
                maxBlur: 5.0,
              }}
            />
          </div>

          {/* Interaction hint */}
          <motion.div
            className="text-center mt-6 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">
              <span className="hidden sm:inline">Use mouse wheel or arrow keys to navigate</span>
              <span className="sm:hidden">Swipe to navigate</span>
            </p>
            <p className="text-muted-foreground text-base md:text-lg mt-2">
              <span className="text-foreground font-semibold">Pushpa, RRR, Spider-Man</span> and counting...
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
