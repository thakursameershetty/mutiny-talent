import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { PortfolioGallery } from '@/components/PortfolioGallery';
import { motion } from 'framer-motion';
import VariableProximity from '@/components/VariableProximity';
import React from 'react';
import InfluencerApplicationDialog from '@/components/InfluencerApplicationDialog';

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

const HERO_IMAGES = [
  { src: pushpa2, alt: "Pushpa 2" },
  { src: rrr, alt: "RRR" },
  { src: bhagavanthKesari, alt: "Bhagavanth Kesari" },
  { src: spidermanNwh, alt: "Spider-Man: No Way Home" },
  { src: peddi, alt: "Peddi" },
  { src: gunturKaaram, alt: "Guntur Kaaram" },
  { src: vishwambara, alt: "Vishwambara" },
  { src: hit3, alt: "HIT 3" },
  { src: akhanda2, alt: "Akhanda 2" },
  { src: andhraKing, alt: "Andhra King" },
  { src: court, alt: "Court" },
  { src: kishkindhapuri, alt: "Kishkindhapuri" },
];

export const HeroSection = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-hero">
      {/* Background Elements - Warmer Glass Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Blob - Increased opacity for more color */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/40 rounded-full blur-[100px] mix-blend-multiply" />
        
        {/* Bottom Right Blob */}
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-primary/40 rounded-full blur-[120px] mix-blend-multiply" />
        
        {/* Center Glow - Stronger yellow presence */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-primary/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-12 relative z-10 flex flex-col items-center">
        
        {/* Main Text Content */}
        <div ref={containerRef} className="max-w-5xl mx-auto text-center mb-8">
          {/* Tag - Tinted Yellow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-md mb-6 md:mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-xs sm:text-sm font-medium text-foreground uppercase tracking-wider">
              India's Culture-First Influencer Powerhouse
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.06] sm:leading-[1.03] md:leading-[0.98] lg:leading-[0.92] mb-4 md:mb-6"
          >
            <span className="text-foreground">We Don't Run</span>
            <br />
            <span className="text-foreground">Influencer Campaigns.</span>
            <br />
            {/* Variable proximity interactive headline (Bebas Neue) */}
            <VariableProximity
              label={"We Start Movements."}
              className="font-display mt-2 inline-block font-extrabold text-black"
              fromFontVariationSettings={'"wght" 400, "opsz" 9'}
              toFontVariationSettings={'"wght" 1000, "opsz" 40'}
              containerRef={containerRef}
              radius={300}
              falloff="linear"
              mode="transform"
            />
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 font-body px-4"
          >
            2,000+ creators. 300+ campaigns. Real ROI. Zero noise.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            {/* PRIMARY: Brands (Hero Variant) */}
            <InfluencerApplicationDialog
              mode="brand"
              trigger={
                <Button 
                  variant="hero" 
                  size="hero" 
                  className="w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/50 transition-shadow"
                >
                  Brands, Let's Go Viral
                </Button>
              }
            />

            {/* SECONDARY: Creators (HeroOutline Variant) */}
            <InfluencerApplicationDialog
              mode="creator"
              trigger={
                <Button 
                  variant="heroOutline" 
                  size="hero" 
                  className="w-full sm:w-auto border-foreground bg-transparent hover:bg-transparent hover:text-foreground hover:shadow-[0_0_30px_hsl(0_0%_0%/0.3)] hover:border-foreground transition-all"
                >
                  Creators, Get Noticed
                  <Play className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              }
            />
          </motion.div>
        </div>

        {/* GALLERY COMPONENT */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full mt-8"
        >
          <PortfolioGallery 
            title="The Blockbusters We've Powered"
            images={HERO_IMAGES}
            spacing="-space-x-12 md:-space-x-16 lg:-space-x-24"
          />
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full max-w-5xl grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-foreground/10 mt-12"
        >
          <div className="text-center">
            <div className="font-display text-2xl sm:text-4xl md:text-5xl text-foreground">2K+</div>
            <div className="text-xs sm:text-sm text-foreground/70 mt-1 uppercase tracking-wider">Creators</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl sm:text-4xl md:text-5xl text-foreground">300+</div>
            <div className="text-xs sm:text-sm text-foreground/70 mt-1 uppercase tracking-wider">Campaigns</div>
          </div>
          <div className="text-center">
            <div className="font-display text-2xl sm:text-4xl md:text-5xl text-foreground">100+</div>
            <div className="text-xs sm:text-sm text-foreground/70 mt-1 uppercase tracking-wider">Film Promos</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};