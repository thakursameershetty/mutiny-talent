import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/ContactSection';
import SEO from '@/components/SEO';
import { ChevronUp, EyeOff, Database, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const DeleteAccountPolicy = () => {
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
        title="Delete Account Policy | Mutiny Talent"
        description="Learn how account deletion works on Mutiny Talent - what data is removed, what is retained, and how to request deletion."
        keywords="Delete Account, Account Deletion Policy, Data Removal, Mutiny Talent"
        canonical="https://www.mutinytalent.com/delete-account-policy"
      />

      <Navbar />

      <main className="min-h-screen pt-32 pb-20 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Delete Account Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 flex flex-col gap-3">
              <Trash2 className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground text-sm uppercase tracking-wide">Immediate Deactivation</p>
              <p className="text-muted-foreground text-sm">Your account is deactivated instantly when you confirm deletion.</p>
            </div>
            <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 flex flex-col gap-3">
              <EyeOff className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground text-sm uppercase tracking-wide">PII Anonymized</p>
              <p className="text-muted-foreground text-sm">Your email and phone number are scrambled so they can be reused on a new account.</p>
            </div>
            <div className="bg-secondary/30 border border-border/50 rounded-xl p-5 flex flex-col gap-3">
              <Database className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground text-sm uppercase tracking-wide">Historical Records</p>
              <p className="text-muted-foreground text-sm">Campaign and transaction history is kept in anonymized form to protect platform integrity.</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you choose to delete your account on Mutiny Talent, your account is deactivated immediately. This page explains exactly what happens to your data, why certain records are retained, and how to contact us if you need assistance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">What Happens When You Delete Your Account</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Deleting your account triggers the following actions immediately and permanently:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-5 bg-secondary/20 border border-border/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-sm font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Account deactivated</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Your account is flagged as inactive. You will no longer be able to log in or access any part of the platform.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-secondary/20 border border-border/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Personal identifiers anonymized</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Your email address and phone number are scrambled with a deletion timestamp (for example, user@email.com becomes user@email.com_deleted_[timestamp]). This frees up your contact details so you can register a new account in the future if you wish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-secondary/20 border border-border/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-background text-sm font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">All sessions terminated</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Every active session across all of your devices is immediately invalidated. Any device you are currently logged in on will be signed out and cannot reconnect using saved credentials.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Active Campaign Restriction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Account deletion is <strong className="text-foreground">blocked</strong> if you are currently involved in any active campaigns. Active campaign statuses include: Applied, Negotiating, Accepted, and Work Pending.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This restriction protects brand partners who depend on your campaign commitments being fulfilled. You must complete or withdraw from all active campaigns before your deletion request can be processed. The app will clearly indicate which campaigns need to be resolved before you can proceed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Why We Use Soft Delete</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Account deletion on Mutiny Talent is a <strong className="text-foreground">soft delete</strong>. This means your account record is marked as inactive rather than being permanently erased from our database.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This approach is standard practice on marketplace platforms and is necessary to preserve the integrity of historical campaign data, financial records, and any brand-side records that reference your past activity. While your account is completely inaccessible and your personal identifiers are anonymized, the underlying record must be retained to prevent broken references across the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Data That Is Retained</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following data is retained after deletion to maintain platform integrity and comply with legal obligations. All retained data is linked to an anonymized identifier and cannot be used to identify you personally.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Campaign history</strong> - records of campaigns you participated in, needed by brand partners for reporting and accountability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Transaction records</strong> - financial records required for accounting and legal compliance purposes.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Anonymized account record</strong> - a deactivated, non-identifiable record that preserves relational database integrity.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Re-registering After Deletion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Because your email address and phone number are anonymized upon deletion, you are free to register a completely new account using the same contact details at any time. Your new account will have no connection to your previous account's history or data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">How to Delete Your Account</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can delete your account directly from within the app:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Open the app and navigate to <strong className="text-foreground">Settings</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Tap <strong className="text-foreground">Delete Account</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Read the confirmation screen and confirm your decision.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Your account will be deactivated immediately.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If you are unable to access the in-app deletion option, please contact us directly using the details below and we will process your request manually.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this policy or need help with account deletion, please reach out:
              </p>
              <div className="bg-secondary/20 border border-border/50 rounded-lg p-6 mt-4 space-y-2">
                <p className="text-foreground"><strong>Email:</strong> <a href="mailto:connect@mutinytalent.com" className="text-black hover:underline">connect@mutinytalent.com</a></p>
                <p className="text-foreground"><strong>Phone:</strong> <a href="tel:+919391869151" className="text-black hover:underline">+91 9391869151</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of the platform after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />

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

export default DeleteAccountPolicy;