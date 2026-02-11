import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight, Zap, Instagram, MapPin, Linkedin, Twitter } from 'lucide-react';
import BrandOrInfluencerDialog from './BrandOrInfluencerDialog';
import mutinyLogo from '@/assets/mutiny-logo.png';
import chaiBisketLogo from '@/assets/chai-bisket-logo.png';

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
          <BrandOrInfluencerDialog
            trigger={
              <Button variant="hero" size="hero" className="mb-4 sm:mb-6 w-full sm:w-auto">
                <Zap className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Let's Do This
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Button>
            }
          />

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
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <img src={mutinyLogo} alt="Mutiny Talent" className="h-8" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              We connect top-tier creators with visionary brands. Creating movements, not just campaigns.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mutinytalent" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-[#E1306C] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-black hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#brands" className="text-muted-foreground hover:text-primary transition-colors">For Brands</a></li>
              <li><a href="#creators" className="text-muted-foreground hover:text-primary transition-colors">For Creators</a></li>
              <li><a href="#works" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="mailto:connect@mutinytalent.com" className="hover:text-primary transition-colors">connect@mutinytalent.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <a href="tel:+919391869151" className="hover:text-primary transition-colors">+91 9391869151</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>Visakhapatnam, Andhra Pradesh,<br />India.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Backed By (Prominent) */}
          <div className="lg:text-right flex flex-col items-start lg:items-end">
             <h3 className="font-display font-bold text-lg mb-6">Strategic Partner</h3>
             <div className="bg-secondary/30 p-6 rounded-2xl inline-block hover:bg-secondary/50 transition-colors duration-300 border border-border/50">
                <p className="text-xs text-muted-foreground mb-3 font-semibold tracking-wider uppercase">
                  Backed by Powerhouse
                </p>
                {/* UPDATED: Larger Size (h-16 on mobile, h-20 on desktop) */}
                <img 
                  src={chaiBisketLogo} 
                  alt="Chai Bisket" 
                  className="h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition-opacity" 
                />
             </div>
          </div>
        </div>

        <div className="h-px w-full bg-border my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mutiny Talent. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};