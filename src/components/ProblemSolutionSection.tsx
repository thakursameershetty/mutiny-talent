import { Button } from '@/components/ui/button';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

const problems = [
  'Too generic',
  'Too expensive',
  'Too disconnected from local culture',
];

const solutions = [
  'Tailored storytelling (not copy-paste content)',
  'Result-driven campaigns (metrics > vibes)',
  'Cost-efficient visibility (ROI that makes sense)',
];

export const ProblemSolutionSection = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6 px-2"
            >
              Brands Don't Need <VariableProximity label={"Reach"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              They Need <VariableProximity label={"Relevance"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
            >
              We combine local influence, sharp storytelling, and performance thinking to turn content into conversations — and conversations into conversions.
            </motion.p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Problem */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-border rounded-lg p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
              <h3 className="font-display text-xl sm:text-2xl text-destructive mb-4 sm:mb-6 uppercase tracking-wider">
                Most Campaigns Fail
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground text-sm sm:text-base">{problem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card/50 border border-foreground/30 rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-soft"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-foreground" />
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 uppercase tracking-wider">
                The Mutiny Way
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-background" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              See How We Do It
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};