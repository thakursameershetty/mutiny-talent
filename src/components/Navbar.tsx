import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, MotionConfig, easeInOut, easeIn, easeOut } from 'framer-motion';
import { Button } from '@/components/ui/button';
import mutinyLogo from '@/assets/mutiny-logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Brands', href: '#brands' },
  { label: 'Creators', href: '#creators' },
  { label: 'Our Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Scroll Locking (Prevent Jitter)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }
    // NOTE: We do NOT unlock scroll here in the cleanup. 
    // We wait for onExitComplete to unlock it to prevent layout shifts/stutter.
    
    // Safety check: Unlock if window is resized to desktop while menu is open
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Handle Escape Key
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    // Focus first link
    setTimeout(() => firstLinkRef.current?.focus(), 100);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobileMenuOpen]);

  // Only show background if scrolled AND menu is closed
  const showNavbarBackground = isScrolled && !isMobileMenuOpen;

  // ANIMATION VARIANTS
  const menuContainerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: easeIn, // Faster exit
        // UPDATED: Removed 'when: afterChildren' to let background fade WITH items
        // This reduces the "heavy" feeling and stutter on exit
      }
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        when: "beforeChildren", // Fade background in THEN show items
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -10, // Reduced movement slightly for snappier exit
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: easeOut }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 10, 
      transition: { duration: 0.2 } 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: easeOut }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        showNavbarBackground 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-full md:container md:mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center relative z-[60]">
            <img src={mutinyLogo} alt="Mutiny Talent" className="h-10 md:h-12" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:font-black transition-all uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="cta" size="default">
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Toggle (Morphing Hamburger) */}
          <motion.button
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
              <motion.span 
                className="w-8 h-0.5 bg-foreground block origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
              />
              <motion.span 
                className="w-8 h-0.5 bg-foreground block"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span 
                className="w-8 h-0.5 bg-foreground block origin-center"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
              />
            </MotionConfig>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence 
        // FIXED: Unlock scroll ONLY after animation completes to prevent stutter/jump
        onExitComplete={() => document.body.style.overflow = ''}
      >
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuContainerVariants}
            className="fixed inset-0 z-50 md:hidden flex flex-col pt-24 pb-8 overflow-y-auto bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
            aria-modal="true"
            role="dialog"
            id="mobile-menu"
          >
            {/* Menu Container */}
            <div className="px-6 flex flex-col w-full h-full">
              <nav className="flex flex-col w-full gap-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    variants={menuItemVariants}
                    className="group flex items-center justify-between w-full py-4 border-b border-border/40 text-xl font-semibold text-foreground/90 active:bg-accent/5"
                  >
                    <span className="uppercase tracking-wider">{item.label}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </nav>

              {/* Full Width CTA Button */}
              <motion.div 
                variants={buttonVariants}
                className="mt-8 w-full"
              >
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="w-full text-lg py-6"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Talk
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};