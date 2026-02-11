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
    title: "Designing Compliance Systems That Work in Operations — Not Just on Paper",
    subtitle: "Compliance & Management System Architecture",
    description: "Our work focuses on how systems function within real workflows, aligning requirements to operational reality. We help identify gaps, define controls, and structure documentation so internal teams can use it under scrutiny.",
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
    frameworks: "Systems may be aligned, where applicable, with frameworks such as ISO 9001 (Quality Management Systems) — for process consistency and operational alignment; ISO/IEC 27001 (Information Security Management Systems) — for handling sensitive client data securely; ISO 14001 (Environmental Management Systems) — where sustainability plays a role in client operations; and ISO 45001 (Occupational Health and Safety Management Systems) — for risk controls in operational environments.",
  },
  {
    id: "human-rights",
    icon: Target,
    title: "Embedding Human Rights and Ethical Labor Considerations Into Operations",
    subtitle: "Human Rights & Ethical Labor Compliance",
    description: "We support the design and operational integration of human rights and ethical labor programs. These frameworks help organizations align with global and contractual expectations related to forced labor, supply chain conduct, and human rights risk.",
    approach: "Our support moves beyond policy drafting to focus on how programs are understood, applied, and monitored internally.",
    image: ctipProtection,
    capabilities: [
      "Program and policy framework development",
      "Operational implementation planning",
      "Training for management and workforce awareness",
      "Internal monitoring and review mechanisms",
      "Support in aligning programs with contractual and regulatory expectations",
    ],
    frameworks: "Programs may be aligned, where applicable, with frameworks such as FAR 52.222-50 (CTIP), the UK Modern Slavery Act, EU due-diligence requirements, ILO and OECD guidelines, and international labor standards.",
  },
  {
    id: "audit-readiness",
    icon: FileCheck,
    title: "Preparing Organizations for Scrutiny and Structuring Effective Improvement",
    subtitle: "Audit Readiness & Corrective Action Advisory",
    description: "We help organizations get ready for assessments by organizing evidence, strengthening control narratives, and structuring corrective action so it is understandable and sustainable.",
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
    frameworks: "Corrective action support may be aligned, where applicable, with ISO 9001:2015 (Clause 10.2 — Nonconformity and Corrective Action), ISO 37301:2021 (Compliance Management Systems), and related standards such as ISO/IEC 27001, ISO 14001, and ISO 45001 for sector-specific risk and control integration. To help ensure corrective actions address root causes rather than symptoms, we draw on established methodologies including 5 Whys for rapid iterative cause exploration, Ishikawa (fishbone) diagrams to map contributing factors, Pareto charts to focus effort on vital issues, Six Sigma DMAIC for data-driven problem solving, and Lean tools (e.g., Kaizen, value stream mapping) to eliminate waste and support continuous improvement.",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "Practical Training for Teams Who Must Operate Compliance Systems",
    subtitle: "Education & Capability Development",
    description: "We help internal teams build confidence and capability through role-based and practical training — focused on how the work is done day-to-day.",
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
                Compliance Challenges Are Rarely Abstract
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                They appear when contracts tighten, audits occur, or systems break 
                under pressure.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our services help organizations anticipate, structure, and operate 
                compliance systems that hold up in real environments. All services 
                are advisory in nature and tailored to the client's operational 
                and regulatory context.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={heroArchitecture} 
                  alt="Modern architectural structure representing structured compliance frameworks" 
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
                        alt={service.subtitle}
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
                    {service.applicability && (
                      <div className="bg-secondary/50 p-10 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          Applicability
                        </h4>
                        <p className="text-foreground text-sm leading-relaxed">
                          {service.applicability}
                        </p>
                      </div>
                    )}
                    {service.frameworks && (
                      <div className="bg-secondary/50 p-10 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          Applicable Frameworks
                        </h4>
                        <p className="text-foreground text-sm leading-relaxed">
                          {service.frameworks}
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

      {/* Advisory Approach with Image */}
      <section className="relative h-[450px] overflow-hidden">
        <img 
          src={advisoryApproach} 
          alt="Precision instruments representing methodical advisory approach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
              <h2 className="text-primary-foreground mb-6">Our Advisory Approach</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
                Across all services, ElevateQCS operates as an independent, vendor-neutral advisor. 
                We do not certify, approve, or authorize compliance programs, nor do we replace 
                legal or regulatory counsel.
              </p>
              <p className="text-primary-foreground/70">
                Our role is to support organizations in building internal systems that are 
                operationally effective, auditable, and aligned with applicable requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Interested in how these apply to your organization?
          </p>
          <h2 className="mb-12">Start a Confidential Conversation</h2>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Confidential Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
