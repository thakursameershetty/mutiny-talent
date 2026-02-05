import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import mutinyLogo from '@/assets/mutiny-logo.png';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Brands', href: '#brands' },
  { label: 'Creators', href: '#creators' },
  { label: 'Case Studies', href: '#case-studies' },
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

  // Prevent background scroll and close on Escape when mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', onKey);

    // focus the first link for keyboard users
    setTimeout(() => firstLinkRef.current?.focus(), 100);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-full md:container md:mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute top-1/2 -translate-y-1/2 text-foreground z-50"
            style={{ right: 'calc(1rem + env(safe-area-inset-right))' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            id="mobile-menu"
          >
            <motion.div
              initial={{ y: -12, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="absolute inset-0 bg-background/60 backdrop-blur-2xl border-t border-border p-8 flex flex-col items-center justify-center"
            >
              <button
                aria-label="Close menu"
                className="absolute top-6 right-6 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={26} />
              </button>

              <nav className="flex flex-col items-center gap-6 text-center">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    ref={idx === 0 ? firstLinkRef : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.28 }}
                    className="text-2xl font-semibold text-foreground/90 hover:font-black uppercase tracking-wider py-2"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-6">
                  <Button variant="cta" size="default" onClick={() => setIsMobileMenuOpen(false)}>
                    Let's Talk
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
