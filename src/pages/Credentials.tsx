import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Search, Briefcase, TrendingUp } from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";

const credentials = [
  {
    icon: Clock,
    value: "9+",
    headline: "Years of Regulatory & Operational Advisory Experience",
    description:
      "ElevateQCS brings nearly a decade of hands-on advisory experience across quality management, regulatory compliance, and operational governance — spanning defense, aerospace, and government services environments across the US, EU, and Middle East.",
    context:
      "This depth of exposure informs how we structure systems: not from theory, but from repeated engagement with complex, high-scrutiny programs.",
  },
  {
    icon: Search,
    value: "1,000+",
    headline: "Audit Interactions Observed, Supported & Prepared For",
    description:
      "Across internal assessments, customer audits, and third-party certification reviews, ElevateQCS has supported organizations through thousands of audit interactions — providing direct insight into what auditors look for and where organizations typically fall short.",
    context:
      "This experience shapes our audit readiness advisory: we help organizations prepare for the questions that actually get asked, not just the ones in the standard.",
  },
  {
    icon: Briefcase,
    value: "125+",
    headline: "Compliance & Control Frameworks Delivered",
    description:
      "From quality management system architecture to CTIP program development and corrective action planning, ElevateQCS has delivered over 125 compliance and control frameworks across a range of organizational sizes and regulatory environments.",
    context:
      "Each framework is designed for operational use — built so internal teams can execute, maintain, and defend it under scrutiny.",
  },
  {
    icon: TrendingUp,
    value: "€500K–€25M",
    headline: "Advisory Exposure Across Project Environments",
    description:
      "ElevateQCS has supported compliance and quality functions on programs ranging from focused sub-€1M engagements to complex multi-million-euro contracts — each requiring different levels of control architecture, documentation rigor, and stakeholder coordination.",
    context:
      "This range means we understand how compliance systems must scale — from lean early-stage controls to enterprise-grade governance structures.",
  },
];

export default function Credentials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${aboutPrecision})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Credentials
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Experience Measured in Outcomes, Not Abstractions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These figures represent the operational depth behind every
              engagement. Each metric reflects direct, field-level participation
              in compliance and quality advisory — not theoretical benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Detail */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-24">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Metric highlight */}
                <div
                  className={`lg:col-span-4 ${
                    index % 2 === 1 ? "lg:col-start-9" : ""
                  }`}
                >
                  <div className="card-elevated p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-6">
                      <cred.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="font-serif text-5xl md:text-6xl text-foreground font-semibold mb-4">
                      {cred.value}
                    </div>
                    <div className="text-muted-foreground text-sm leading-tight">
                      {cred.headline}
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-8 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="section-divider mb-8" />
                  <h2 className="text-2xl mb-6">{cred.headline}</h2>
                  <div className="prose prose-lg text-muted-foreground space-y-6">
                    <p>{cred.description}</p>
                    <div className="border-l-2 border-accent/30 pl-6">
                      <p className="italic text-foreground/80">
                        {cred.context}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-3xl mx-auto">
            All figures represent cumulative advisory experience and are
            presented for informational context. ElevateQCS does not guarantee
            specific outcomes. Past engagement scope does not constitute a
            promise of future results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">See How This Experience Applies to You</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
            Every organization's compliance landscape is different. Let's
            discuss how ElevateQCS's operational depth can support your specific
            objectives.
          </p>
          <Button variant="cta" size="xl" asChild className="mx-4 sm:mx-0">
            <Link to="/contact">
              Request a Confidential Consultation
              <ArrowRight className="ml-2 shrink-0" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
