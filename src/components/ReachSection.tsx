import { MapPin } from 'lucide-react';
import SphereImageGrid, { ImageData } from '@/components/ui/SphereImageGrid';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

// Import creator/influencer images for the sphere
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

const regions = [
  { name: 'Andhra Pradesh', highlight: true },
  { name: 'Telangana', highlight: true },
  { name: 'Karnataka', highlight: false },
  { name: 'Tamil Nadu', highlight: false },
  { name: 'Kerala', highlight: false },
];

// Generate images for sphere
const SPHERE_IMAGES: ImageData[] = [
  { id: '1', src: pushpa2, alt: 'Pushpa 2', title: 'Pushpa 2' },
  { id: '2', src: rrr, alt: 'RRR', title: 'RRR' },
  { id: '3', src: spidermanNwh, alt: 'Spider-Man: No Way Home', title: 'Spider-Man: No Way Home' },
  { id: '4', src: peddi, alt: 'Peddi', title: 'Peddi' },
  { id: '5', src: gunturKaaram, alt: 'Guntur Kaaram', title: 'Guntur Kaaram' },
  { id: '6', src: bhagavanthKesari, alt: 'Bhagavanth Kesari', title: 'Bhagavanth Kesari' },
  { id: '7', src: vishwambara, alt: 'Vishwambara', title: 'Vishwambara' },
  { id: '8', src: hit3, alt: 'HIT 3', title: 'HIT 3' },
  { id: '9', src: akhanda2, alt: 'Akhanda 2', title: 'Akhanda 2' },
  { id: '10', src: andhraKing, alt: 'Andhra King', title: 'Andhra King' },
  { id: '11', src: court, alt: 'Court', title: 'Court' },
  { id: '12', src: kishkindhapuri, alt: 'Kishkindhapuri', title: 'Kishkindhapuri' },
  // Duplicate for better sphere coverage
  { id: '13', src: pushpa2, alt: 'Pushpa 2', title: 'Pushpa 2' },
  { id: '14', src: rrr, alt: 'RRR', title: 'RRR' },
  { id: '15', src: spidermanNwh, alt: 'Spider-Man: No Way Home', title: 'Spider-Man: No Way Home' },
  { id: '16', src: peddi, alt: 'Peddi', title: 'Peddi' },
  { id: '17', src: gunturKaaram, alt: 'Guntur Kaaram', title: 'Guntur Kaaram' },
  { id: '18', src: bhagavanthKesari, alt: 'Bhagavanth Kesari', title: 'Bhagavanth Kesari' },
  { id: '19', src: vishwambara, alt: 'Vishwambara', title: 'Vishwambara' },
  { id: '20', src: hit3, alt: 'HIT 3', title: 'HIT 3' },
];

export const ReachSection = () => {
  const isMobile = useIsMobile();
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm text-muted-foreground uppercase tracking-widest mb-4"
            >
              South India Coverage
            </motion.span>
            <div ref={headerRef}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6"
            >
              Reach That <VariableProximity label={"Actually Matters"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />
            </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4"
            >
              Hyperlocal when needed. Scalable when required. Always authentic.
            </motion.p>

            {/* Region Tags */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-full border transition-all duration-300 text-sm sm:text-base ${
                    region.highlight
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-card text-foreground hover:border-foreground/50'
                  }`}
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium">{region.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <SphereImageGrid
              images={SPHERE_IMAGES}
              containerSize={isMobile ? 320 : 500}
              sphereRadius={isMobile ? 120 : 180}
              dragSensitivity={0.6}
              momentumDecay={0.96}
              maxRotationSpeed={6}
              baseImageScale={isMobile ? 0.16 : 0.14}
              hoverScale={1.3}
              autoRotate={true}
              autoRotateSpeed={0.25}
            />
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-6 md:mt-8"
          >
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-card border border-border">
              <span className="font-display text-xl sm:text-2xl text-foreground">200+</span>
              <span className="text-muted-foreground ml-2 text-sm sm:text-base">Creators per campaign</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};