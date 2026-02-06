import vikranthImage from '@/assets/founder-vikranth.jpeg';
import pragnatejImage from '@/assets/founder-pragnatej.jpeg';
import { motion } from 'framer-motion';
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

const founders = [
  {
    name: 'D Vikranth Shetty',
    role: 'Founder & CEO',
    image: vikranthImage,
    description: '',
  },
  {
    name: 'Pragnatej Kondala',
    role: 'Co-founder & MD',
    image: pragnatejImage,
    description: '',
  },
];

export const FoundersSection = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section id="founders" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-sm text-muted-foreground uppercase tracking-widest mb-4 font-semibold"
            >
              The Visionaries
            </motion.span>
            <div ref={headerRef}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6"
            >
              Meet The <VariableProximity label={"Founders"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />
            </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
            >
              The passionate leaders behind India's most dynamic influencer marketing powerhouse.
            </motion.p>
          </div>

          {/* Founders Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-lg"
              >
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full border-2 border-primary/30 scale-110 group-hover:scale-125 transition-transform duration-500" />
                </div>

                <div className="text-center">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-2 uppercase tracking-wide">
                    {founder.name}
                  </h3>
                  <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                    <VariableProximity
                      label={founder.role}
                      className="!font-body text-primary-foreground inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider"
                      fromFontVariationSettings={'"wght" 400, "opsz" 9'}
                      toFontVariationSettings={'"wght" 900, "opsz" 40'}
                      containerRef={headerRef}
                      radius={200}
                      falloff="linear"
                      mode="transform"
                      transformIntensity={1.2}
                    />
                  </div>
                  {founder.description && (
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {founder.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};