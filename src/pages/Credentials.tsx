import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Search,
  Briefcase,
  Zap,
  Cpu,
  Shield,
} from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";

const authorityMetrics = [
  {
    icon: Clock,
    value: "9+",
    headline: "Years of Compliance Advisory Experience",
    description:
      "We bring hands-on experience from defense, aerospace, manufacturing, technology, and healthcare environments. We've helped organizations build quality systems, prepare for audits, recover troubled projects, and navigate complex regulatory requirements.",
    context:
      "We apply what we've learned from years of real-world compliance work.",
  },
];

const frontierMetrics = [
  {
    icon: Zap,
    label: "Rapid Problem Diagnosis",
    description: "Root-cause identification for projects in difficulty — helping you understand what went wrong and what to do next.",
  },
  {
    icon: Cpu,
    label: "AI Governance Frameworks",
    description: "Governance controls for AI systems, automated workflows, and algorithmic decision-making.",
  },
  {
    icon: Shield,
    label: "Efficient Certification Preparation",
    description: "System architecture designed to help you achieve ISO, CMMC, and regulatory certification efficiently.",
  },
];

export default function Credentials() {
  return (
    <Layout>
      <SEOHead
        title="Our Experience — Credentials | ElevateQCS"
        description="9+ years of compliance advisory experience across defense, manufacturing, technology, healthcare, and energy. Practical experience solving real compliance challenges."
        url="https://elevateqcs.com/credentials"
        keywords={[
          "compliance credentials",
          "advisory experience",
          "audit readiness experience",
          "quality system consulting",
          "compliance advisory firm",
        ]}
      />

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
              Our Experience
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Our Experience
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We bring hands-on experience from defense, aerospace, manufacturing, 
              technology, and healthcare environments. We've helped organizations build 
              quality systems, prepare for audits, recover troubled projects, and navigate 
              complex regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Metrics Detail */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-24">
            {authorityMetrics.map((cred, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
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
                      <p className="italic text-foreground/80">{cred.context}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General industry experience */}
          <div className="mt-20 max-w-3xl">
            <h3 className="text-xl mb-6">Industries We've Worked In</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Defense & Aerospace", "Manufacturing", "Technology", "Healthcare", "Energy", "Government Contracting"].map((ind) => (
                <div key={ind} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                  {ind}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              We've built compliance systems across many industries and have developed efficient, 
              reusable frameworks that speed up implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Forward-Looking Capabilities */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Forward-Looking Capabilities
            </p>
            <h2 className="mb-4">What We're Building</h2>
            <p className="text-lg text-muted-foreground">
              New capabilities built on proven foundations — for Project Recovery, 
              AI Governance, and the emerging regulatory landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {frontierMetrics.map((metric, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg mb-3">{metric.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="card-elevated p-10 md:p-14 max-w-4xl mx-auto text-center border-l-4 border-accent">
            <h2 className="text-2xl mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our experience is built on solving real compliance challenges for real organizations. 
              Contact us to discuss how we can help with yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/tools">
                  Try Our Free Assessments
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer in footer area */}
      <section className="py-8 bg-secondary/20">
        <div className="container-wide">
          <p className="text-muted-foreground/60 text-xs text-center leading-relaxed max-w-2xl mx-auto">
            All figures represent cumulative advisory experience and are presented 
            for informational context. Past engagement scope does not constitute a 
            promise of future results.
          </p>
        </div>
      </section>
    </Layout>
  );
}
