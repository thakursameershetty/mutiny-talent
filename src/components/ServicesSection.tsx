import { Button } from '@/components/ui/button';
import { Users, Star, Megaphone, Film, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

const services = [
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Nano to Mega, all genres. We match the right creator to your brand story.',
  },
  {
    icon: Star,
    title: 'Celebrity Endorsements',
    description: 'Films, launches, brand moments. Access to South India\'s biggest stars.',
  },
  {
    icon: Megaphone,
    title: 'Meme Marketing',
    description: 'Culture-speed content that spreads. We speak the internet\'s language.',
  },
  {
    icon: Film,
    title: 'Film Promotions',
    description: '100+ film collaborations including Pushpa, Spider-Man & SLB projects.',
  },
];

export const ServicesSection = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section id="brands" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm text-muted-foreground uppercase tracking-widest mb-4"
            >
              Our Superpowers
            </motion.span>
            <div ref={headerRef}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6"
            >
              We Don't Play In <VariableProximity label={"One Lane"} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />
            </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4"
            >
              One strategy. One execution team. Zero chaos.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-lg p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 card-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Button variant="cta" size="lg" className="w-full sm:w-auto">
              Book a Free Vibe Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};