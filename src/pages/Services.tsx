import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, FileCheck, BookOpen, CheckCircle2 } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import qmsStructure from "@/assets/qms-structure.jpg";
import ctipProtection from "@/assets/ctip-protection.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";
import insightsLibrary from "@/assets/insights-library.jpg";
import advisoryApproach from "@/assets/advisory-approach.jpg";
const services = [
  {
    id: "compliance-architecture",
    icon: Shield,
    title: "Compliance & Management System Architecture",
    subtitle: "Practical Systems for Real Operations",
    description: "We support organizations in designing and structuring internal management and compliance systems that are understandable, maintainable, and aligned with regulatory, contractual, and customer expectations.",
    approach: "Our approach focuses on how compliance systems function in real operations — not on producing standalone documentation.",
    image: qmsStructure,
    capabilities: [
      "Structuring internal Quality Management and compliance frameworks",
      "Defining governance, roles, and internal controls",
      "Mapping processes and evidence flows",
      "Aligning compliance requirements with day-to-day operations",
      "Supporting management system scalability as the organization grows",
    ],
    applicability: "This service is applicable to organizations preparing for audits, entering regulated markets, or formalizing internal controls for the first time.",
  },
  {
    id: "human-rights",
    icon: Target,
    title: "Human Rights & Ethical Labor Compliance Programs",
    subtitle: "Beyond Policy to Operational Implementation",
    description: "We advise on the development and operational implementation of human rights and ethical labor compliance programs, with a focus on preventing forced labor, trafficking in persons, and related risks across operations and supply chains.",
    approach: "Our support moves beyond policy drafting to focus on how programs are understood, applied, and monitored internally.",
    image: ctipProtection,
    capabilities: [
      "Program and policy framework development",
      "Operational implementation planning",
      "Training for management and workforce awareness",
      "Internal monitoring and review mechanisms",
      "Support in aligning programs with contractual and regulatory expectations",
    ],
    frameworks: "Programs may be aligned, where applicable, with frameworks such as FAR 52.222-50 (CTIP), the UK Modern Slavery Act, EU due-diligence requirements, and international labor standards.",
  },
  {
    id: "audit-readiness",
    icon: FileCheck,
    title: "Audit Readiness & Corrective Action Advisory",
    subtitle: "Strengthening Controls & Organizing Evidence",
    description: "We support organizations in preparing for external assessments by strengthening internal controls, organizing evidence, and structuring corrective actions in a controlled and practical manner.",
    approach: "We do not act as an audit or certification body. Our role is to help organizations understand expectations and respond effectively.",
    image: auditPrecision,
    capabilities: [
      "Pre-assessment readiness reviews",
      "Evidence and documentation organization",
      "Gap identification and risk prioritization",
      "Corrective Action Plan (CAPA) structuring",
      "Support during and after assessments to stabilize operations",
    ],
    applicability: "This service is commonly used by organizations facing government assessments, customer audits, or third-party certification reviews.",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Education & Capability Development",
    subtitle: "Building Internal Ownership",
    description: "We provide practical training and advisory support to help organizations build internal understanding and ownership of their compliance systems.",
    approach: "The objective is to reduce long-term dependency by enabling teams to operate, maintain, and improve systems internally.",
    image: insightsLibrary,
    capabilities: [
      "Executive and leadership briefings",
      "Role-based training for managers and staff",
      "Practical workshops focused on real operational scenarios",
      "Ongoing advisory support during system adoption",
    ],
    applicability: "Training is designed to be accessible, practical, and directly connected to the organization's internal processes.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${servicesHero})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Our Services
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Independent, Vendor-Neutral Advisory
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Elevate Quality Compliance Solutions (ElevateQCS) provides independent, 
                vendor-neutral advisory services to organizations operating in regulated 
                and high-scrutiny environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our work focuses on building practical, auditable internal systems that 
                support compliance, operational stability, and long-term scalability. 
                All services are advisory in nature and tailored to the client's 
                operational and regulatory context.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={heroArchitecture} 
                  alt="Modern architectural structure" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Doctrine */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground">
              <h3 className="text-xl font-serif mb-2">Vendor-Neutral Advisory</h3>
              <p className="text-primary-foreground/70 text-sm">
                We do not certify, approve, or authorize compliance programs, nor do we 
                replace legal or regulatory counsel. Our role is to support organizations 
                in building internal systems that are operationally effective, auditable, 
                and aligned with applicable requirements.
              </p>
            </div>
            <Link 
              to="/about" 
              className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center whitespace-nowrap"
            >
              Learn about our approach
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    {/* Service Image */}
                    <div className="image-frame rounded-sm overflow-hidden mb-10">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="mb-2 gold-accent pb-4">{service.title}</h2>
                    <p className="text-accent text-sm uppercase tracking-wide mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <p className="text-muted-foreground mb-10 italic border-l-2 border-accent/30 pl-4">
                      {service.approach}
                    </p>
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/contact">
                        Discuss Your Requirements
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-8">
                    <div className="card-elevated p-10">
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
                        Typical Support Includes
                      </h4>
                      <ul className="space-y-4">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-4 text-foreground">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {(service.applicability || service.frameworks) && (
                      <div className="bg-secondary/50 p-10 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          {service.frameworks ? "Applicable Frameworks" : "Applicability"}
                        </h4>
                        <p className="text-foreground text-sm leading-relaxed">
                          {service.frameworks || service.applicability}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-border/50 mt-32" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Approach */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">Our Advisory Approach</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Across all services, ElevateQCS operates as an independent, vendor-neutral advisor. 
              We do not certify, approve, or authorize compliance programs, nor do we replace 
              legal or regulatory counsel.
            </p>
            <p className="text-muted-foreground">
              Our role is to support organizations in building internal systems that are 
              operationally effective, auditable, and aligned with applicable requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Start a Confidential Conversation</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Every engagement begins with a comprehensive understanding of your 
            organizational context, compliance objectives, and operational requirements.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
