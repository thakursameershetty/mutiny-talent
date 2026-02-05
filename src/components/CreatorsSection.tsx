import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Trophy, Users } from 'lucide-react';
import React from 'react';
import VariableProximity from '@/components/VariableProximity';

const perks = [
  'Part of 50+ exclusive star creators',
  'Collaborations across 100+ film promotions',
  'Access to premium brand & studio campaigns',
];

export const CreatorsSection = () => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <section id="creators" className="py-16 md:py-24 bg-gradient-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-sm text-muted-foreground uppercase tracking-widest mb-4">
                Talent HQ
              </span>
              <div ref={headerRef}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
                You Create.
                <br />
                <VariableProximity label={"We Handle The Rest."} className="text-primary font-display inline-block" fromFontVariationSettings={'"wght" 300, "opsz" 9'} toFontVariationSettings={'"wght" 900, "opsz" 40'} containerRef={headerRef} radius={220} falloff="linear" mode="transform" />
              </h2>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Turn passion into paid work. Get real brand exposure. Grow with professional campaign management.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-card/50 border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    <span className="font-display text-xl sm:text-2xl text-foreground">4,000+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Creators in 10K-100K range</p>
                </div>
                <div className="bg-card/50 border border-border rounded-lg p-3 sm:p-4">
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-2">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                    <span className="font-display text-xl sm:text-2xl text-foreground">25+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Creators with 1M+ followers</p>
                </div>
              </div>

              <Button variant="hero" size="hero" className="w-full sm:w-auto">
                I Want to Join Mutiny
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            </div>

            {/* Right Content - Perks Card */}
            <div className="bg-card border border-primary/20 rounded-lg p-6 sm:p-8 relative glow-yellow mt-8 lg:mt-0">
              <div className="absolute -top-4 left-6 sm:left-8">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <VariableProximity
                    label={"Exclusive Perks"}
                    className="font-display text-primary-foreground inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider"
                    fromFontVariationSettings={'"wght" 400, "opsz" 9'}
                    toFontVariationSettings={'"wght" 900, "opsz" 40'}
                    containerRef={headerRef}
                    radius={120}
                    falloff="linear"
                    mode="transform"
                  />
                </div>
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  This isn't just a network. It's an inner circle.
                </p>

                <ul className="space-y-3 sm:space-y-4">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-background text-xs sm:text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-foreground text-sm sm:text-base">{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                  <Button variant="ctaOutline" className="w-full">
                    View Creator Benefits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
