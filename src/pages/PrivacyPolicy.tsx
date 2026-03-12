import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ContactSection';
import SEO from '@/components/SEO';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
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
        title="Privacy Policy | Mutiny Talent"
        description="Privacy Policy for Mutiny Talent - Learn how we collect, use, and protect your data."
        keywords="Privacy Policy, Data Protection, Mutiny Talent"
        canonical="https://www.mutinytalent.com/privacy-policy"
      />
      
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mutiny Talent ("we," "our," or "us") operates the www.mutinytalent.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
            </section>

            {/* Information Collection */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Information Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-3">Types of Data Collected:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>• Email address</li>
                      <li>• First name and last name</li>
                      <li>• Phone number</li>
                      <li>• Address, State, Province, ZIP/Postal code, City</li>
                      <li>• Cookies and Usage Data</li>
                    </ul>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.</span>
                </li>
              </ul>
            </section>

            {/* Use of Data */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Use of Data</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mutiny Talent uses the collected data for various purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To provide and maintain our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To notify you about changes to our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To allow you to participate in interactive features of our Service when you choose to do so</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To provide customer support</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To gather analysis or valuable information so that we can improve our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To monitor the usage of our Service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>To detect, prevent and address technical issues</span>
                </li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Security of Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service may contain links to third-party websites and services that are not operated by Mutiny Talent. This Privacy Policy does not apply to third-party websites or services and we are not responsible for their practices. We encourage you to review the privacy policies of these third parties before providing any personal information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
