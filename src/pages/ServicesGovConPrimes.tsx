import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, FileCheck } from "lucide-react";

export default function ServicesGovConPrimes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              GovCon Prime Contractors
            </p>
            <h1 className="mb-6">
              Enterprise Compliance for Prime Contractors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive compliance architecture and advisory services designed 
              for prime contractors managing complex government programs with 
              multi-tiered supply chain responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-6 mb-12">
              <div className="w-16 h-16 rounded-sm bg-secondary flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="w-16 h-16 rounded-sm bg-secondary flex items-center justify-center">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <div className="w-16 h-16 rounded-sm bg-secondary flex items-center justify-center">
                <FileCheck className="w-8 h-8 text-accent" />
              </div>
            </div>
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Coming Soon
            </p>
            <h2 className="mb-6">Prime Contractor Advisory Services</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We are developing specialized advisory services tailored to the unique 
              compliance challenges faced by prime contractors in government contracting.
            </p>
            <p className="text-muted-foreground mb-10">
              Our upcoming services will address FAR/DFARS compliance, supply chain 
              risk management, CTIP program oversight, and enterprise QMS architecture 
              for multi-contract environments.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Express Interest
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-serif text-lg mb-3">Supply Chain Compliance</h4>
              <p className="text-muted-foreground text-sm">
                End-to-end visibility and compliance monitoring across your 
                subcontractor network.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg mb-3">Program-Level QMS</h4>
              <p className="text-muted-foreground text-sm">
                Scalable quality management systems designed for major 
                government program requirements.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg mb-3">CTIP Oversight</h4>
              <p className="text-muted-foreground text-sm">
                Comprehensive trafficking prevention programs with 
                subcontractor certification management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Be Among the First to Know</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Register your interest to receive priority access when our 
            Prime Contractor advisory services launch.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
