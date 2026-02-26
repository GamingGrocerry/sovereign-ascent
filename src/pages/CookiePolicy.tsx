import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";

export default function CookiePolicy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-narrow relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Legal
          </p>
          <h1 className="mb-6 gold-accent pb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">
            Effective date: February 13, 2026 · Last updated: February 13, 2026
          </p>
        </div>
      </section>

      {/* Plain Language Summary */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-narrow relative z-10">
          <div className="text-primary-foreground">
            <h3 className="text-lg font-serif mb-3">In Plain Language</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              We use cookies to make our website work properly, keep it secure, and 
              understand how visitors use it. You can manage your cookie preferences 
              at any time using the consent button below or through your browser settings.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none space-y-12">

            <div>
              <h2 className="text-2xl mb-4">What are cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them, the types 
                of cookies we use (i.e., the information we collect using cookies and how 
                that information is used), and how to manage your cookie settings.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cookies are small text files used to store small pieces of information. 
                They are stored on your device when a website loads in your browser. These 
                cookies help ensure that the website functions properly, enhance security, 
                provide a better user experience, and analyse performance to identify what 
                works and where improvements are needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">How do we use cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Like most online services, our website uses both first-party and third-party 
                cookies for various purposes. First-party cookies are primarily necessary for 
                the website to function properly and do not collect any personally identifiable data.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The third-party cookies used on our website primarily help us understand how the 
                website performs, track how you interact with it, keep our services secure, deliver 
                relevant advertisements, and enhance your overall user experience while improving the 
                speed of your future interactions with our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Types of cookies we use</h2>
              <div className="cky-audit-table-element"></div>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Manage cookie preferences</h2>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className="cky-banner-element inline-block px-8 py-3 bg-secondary text-muted-foreground border border-border rounded-sm cursor-pointer hover:bg-secondary/80 transition-colors text-sm"
              >
                Consent Preferences
              </a>
              <p className="text-muted-foreground leading-relaxed mt-6">
                You can modify your cookie settings anytime by clicking the "Consent 
                Preferences" button above. This will allow you to revisit the cookie consent 
                banner and update your preferences or withdraw your consent immediately.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Additionally, different browsers offer various methods to block and delete 
                cookies used by websites. You can adjust your browser settings to block or 
                delete cookies. Below are links to support documents on how to manage and 
                delete cookies in major web browsers.
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Chrome:</strong>{" "}
                    <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors break-all">
                      support.google.com/accounts/answer/32050
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Safari:</strong>{" "}
                    <a href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors break-all">
                      support.apple.com/en-in/guide/safari/sfri11471/mac
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Firefox:</strong>{" "}
                    <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors break-all">
                      support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-foreground">Internet Explorer:</strong>{" "}
                    <a href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors break-all">
                      support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer
                    </a>
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If you are using a different web browser, please refer to its official support documentation.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground/60 text-xs">
                Cookie Policy generated by{" "}
                <a href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent/80 transition-colors">
                  CookieYes - Cookie Policy Generator
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
