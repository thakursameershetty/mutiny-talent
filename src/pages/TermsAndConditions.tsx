import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ContactSection';
import SEO from '@/components/SEO';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const TermsAndConditions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Terms and Conditions | Mutiny Talent"
        description="Terms and Conditions for using Mutiny Talent's website and services."
        keywords="Terms and Conditions, Terms of Service, Mutiny Talent"
        canonical="https://www.mutinytalent.com/terms-and-conditions"
      />
      
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the www.mutinytalent.com website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Mutiny Talent's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Modifying or copying the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Using the materials for any commercial purpose or for any public display (commercial or non-commercial)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Attempting to decompile or reverse engineer any software contained on the Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Removing any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Transferring the materials to another person or "mirroring" the materials on any other server</span>
                </li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Mutiny Talent's website are provided on an 'as is' basis. Mutiny Talent makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Mutiny Talent or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mutiny Talent's website, even if Mutiny Talent or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Mutiny Talent's website could include technical, typographical, or photographic errors. Mutiny Talent does not warrant that any of the materials on the website are accurate, complete, or current. Mutiny Talent may make changes to the materials contained on the website at any time without notice.
              </p>
            </section>

            {/* Materials and Content */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">6. Materials and Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Mutiny Talent's website are protected by copyright and trademark laws. You may not reproduce, distribute, or republish any content displayed on the website without prior written consent from Mutiny Talent.
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">7. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mutiny Talent has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Mutiny Talent of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">8. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mutiny Talent may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* User Responsibility */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">10. User Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users agree that they shall not:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Use the Service for any illegal or unauthorized purpose</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Harass, threaten, defame, or abuse any party through the Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Transmit any form of malware, virus, or harmful code</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Attempt to gain unauthorized access to any portion of the Service</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-secondary/20 border border-border/50 rounded-lg p-6 mt-4 space-y-2">
                <p className="text-foreground"><strong>Email:</strong> <a href="mailto:connect@mutinytalent.com" className="text-black hover:underline">connect@mutinytalent.com</a></p>
                <p className="text-foreground"><strong>Phone:</strong> <a href="tel:+919391869151" className="text-black hover:underline">+91 9391869151</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default TermsAndConditions;
