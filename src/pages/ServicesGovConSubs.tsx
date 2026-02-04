import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, FileCheck } from "lucide-react";

export default function ServicesGovConSubs() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              GovCon Subcontractors
            </p>
            <h1 className="mb-6">
              Compliance Solutions for Subcontractors
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Right-sized compliance frameworks that meet prime contractor 
              requirements while remaining practical and sustainable for 
              growing subcontractor organizations.
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
            <h2 className="mb-6">Subcontractor Advisory Services</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We are building targeted advisory services designed specifically for 
              subcontractors navigating prime contractor compliance requirements.
            </p>
            <p className="text-muted-foreground mb-10">
              Our upcoming offerings will focus on flow-down requirement management, 
              CTIP certification preparation, cost-effective QMS implementation, 
              and audit readiness for subcontractor assessments.
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
              <h4 className="font-serif text-lg mb-3">Flow-Down Compliance</h4>
              <p className="text-muted-foreground text-sm">
                Navigate and satisfy prime contractor compliance requirements 
                efficiently and cost-effectively.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg mb-3">Right-Sized QMS</h4>
              <p className="text-muted-foreground text-sm">
                Quality management systems scaled appropriately for 
                subcontractor operations and resources.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-lg mb-3">CTIP Certification</h4>
              <p className="text-muted-foreground text-sm">
                Prepare for and maintain CTIP certifications required 
                by prime contractor agreements.
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
            Subcontractor advisory services launch.
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
