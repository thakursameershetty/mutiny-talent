import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight, Zap } from 'lucide-react';
import mutinyLogo from '@/assets/mutiny-logo.png';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-background/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm text-foreground uppercase tracking-widest mb-4 font-semibold">
            Let's Talk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
            Ready to Start a <span className="text-black px-2 md:px-3">Movement</span>?
          </h2>
          
          {/* Assurance text */}
          <div className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 space-y-1 px-4">
            <p>Big brand. Small brand. Local story. National launch.</p>
            <p className="text-foreground">Doesn't matter. We've got your back.</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 md:mb-10 px-4">
            <a
              href="tel:+919391869151"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 bg-background/90 border border-foreground/20 rounded-lg hover:border-foreground/50 transition-all group"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              <span className="text-foreground text-sm sm:text-base">
                +91 9391869151
              </span>
            </a>
            <a
              href="mailto:connect@mutinytalent.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 bg-background/90 border border-foreground/20 rounded-lg hover:border-foreground/50 transition-all group"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              <span className="text-foreground text-sm sm:text-base">
                connect@mutinytalent.com
              </span>
            </a>
          </div>

          {/* Main CTA */}
          <Button variant="hero" size="hero" className="mb-4 sm:mb-6 w-full sm:w-auto">
            <Zap className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
            Let's Do This
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </Button>

          <p className="text-sm text-muted-foreground">
            Or drop your details — we'll take it from there.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-8 md:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={mutinyLogo} alt="Mutiny Talent" className="h-7 sm:h-8" />

          {/* Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#brands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Brands
            </a>
            <a href="#creators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              For Creators
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            A <span className="text-foreground font-semibold">Chai Bisket</span> company
          </p>
        </div>
      </div>
    </footer>
  );
};
