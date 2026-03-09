import {
  Shield,
  Scale,
  ClipboardCheck,
  Building2,
  Cpu,
  Factory,
  Stethoscope,
  Lock,
  Leaf,
  Target,
  Eye,
  Handshake,
  FileCheck,
  Search,
  Briefcase,
  BarChart3,
  Wrench,
  Brain,
  Server,
  Battery,
  Rocket,
  Bot,
  Globe,
  Users,
  type LucideIcon,
} from "lucide-react";

export type SectorMode = "federal" | "commercial";

export interface AdvisoryDomain {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  footer: string;
  federalPitch?: string;
  commercialPitch?: string;
  keyCompetency?: string;
}

export const advisoryDomains: AdvisoryDomain[] = [
  {
    icon: Shield,
    title: "Governance & Quality Architecture",
    description:
      "ElevateQCS designs enterprise-grade governance structures and Quality Management Systems (QMS) that anchor internal operations and enable sustainable compliance.",
    items: [
      "ISO 9001 Quality Management Systems",
      "AS9100 Aerospace Quality Systems",
      "ISO 13485 Medical Device Quality Systems",
      "ISO 31000 Risk Management",
      "Enterprise governance and internal control environments",
    ],
    footer:
      "By integrating governance strategy with operational execution, we create systems designed for longevity, auditability, and internal ownership.",
  },
  {
    icon: Scale,
    title: "Federal & Regulatory Discipline",
    description:
      "Organizations participating in government supply chains face complex regulatory obligations that require structured compliance infrastructure.",
    items: [
      "FAR and DFARS contractual obligations",
      "CMMC and NIST 800-171 cybersecurity requirements",
      "Federal supply chain risk management expectations",
      "Human rights compliance including FAR 52.222-50 and EU CSDDD frameworks",
    ],
    footer:
      "Our advisory translates regulatory exposure into structured governance systems that reduce operational risk while strengthening procurement readiness.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance Infrastructure",
    description:
      "Regulatory compliance is not a single event — it is a continuous operational condition.",
    items: [
      "Regulatory inspections",
      "Certification audits",
      "Contract compliance reviews",
      "Supplier governance evaluations",
    ],
    footer:
      "Our advisory includes regulatory documentation architecture, internal compliance workflows, and operational controls designed to produce verifiable evidence under scrutiny.",
  },
  {
    icon: Wrench,
    title: "Infrastructure Recovery & Forensic Stabilization",
    description:
      "Distressed infrastructure projects — data centers, renewable energy builds, and large-scale federal sustainment — require rapid stabilization before margin leakage becomes irreversible.",
    items: [
      "PWS/SOW forensic scrub and contractual friction analysis",
      "Chain-of-command restoration for sub-tier chaos",
      "96-hour rapid stabilization protocols",
      "Cure notice and Level III CAR mitigation",
      "Margin leakage identification and recovery planning",
    ],
    footer:
      "We stabilize distressed assets by restoring governance discipline to the operational chain of command — converting chaos into auditable, recoverable infrastructure.",
    federalPitch:
      "Mitigating Level III CARs and Cure Notices through rapid 96-hour stabilization and forensic documentation recovery.",
    commercialPitch:
      "Rescuing $100M+ assets — data centers, renewable energy, and critical infrastructure — from sub-tier chaos and margin leakage.",
    keyCompetency:
      "PWS/SOW Forensic Scrub and Chain-of-Command Restoration",
  },
  {
    icon: Brain,
    title: "AI Governance & Algorithmic Trust",
    description:
      "The 2026 EU AI Act enforcement timeline and Federal agentic AI modernization demand governance systems that most organizations have not yet built.",
    items: [
      "EU AI Act compliance architecture and risk classification",
      "ISO/IEC 42001 AI Management System implementation",
      "NIST AI Risk Management Framework alignment",
      "Data lineage tracking and algorithmic audit trails",
      "Human-in-the-loop oversight architecture for agentic systems",
    ],
    footer:
      "We design the governance infrastructure required to deploy AI systems that are auditable, explainable, and compliant — before regulators mandate it.",
    federalPitch:
      "Building the audit trail required for Federal agentic AI modernization and NIST RMF compliance.",
    commercialPitch:
      "Navigating the 2026 EU AI Act and ISO/IEC 42001 to prevent product bans and €35M fines.",
    keyCompetency:
      "Data Lineage Tracking and Human-in-the-Loop Oversight Architecture",
  },
];

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const industries: IndustryItem[] = [
  {
    icon: Shield,
    title: "Defense & Aerospace",
    description:
      "FAR, DFARS, CMMC, ITAR, AS9100 governance structures for organizations participating in federal and defense supply chains.",
  },
  {
    icon: Building2,
    title: "Federal IT & Systems",
    description:
      "Compliance advisory for contractors supporting federal agencies, including cybersecurity frameworks, procurement governance, and regulatory alignment.",
  },
  {
    icon: Server,
    title: "AI Infrastructure & Hyperscale",
    description:
      "Governance systems for the 100+ GW of data centers being built through 2030 — addressing power compliance, site safety, and sub-tier contractor oversight.",
  },
  {
    icon: Battery,
    title: "Renewable Energy Supply Chain",
    description:
      "EU Battery Passport readiness, CS3D ethical labor compliance, and supply chain transparency for renewable energy manufacturers and developers.",
  },
  {
    icon: Rocket,
    title: "Digital Defense Tech",
    description:
      "Compliance architecture for commercial startups entering the DIU ecosystem — bridging commercial agility with federal governance requirements.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "Scalable ISO 9001 systems and operational governance for manufacturers entering international regulated supply chains.",
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    description:
      "Quality and regulatory alignment with FDA, EU MDR, and ISO 13485 requirements for medical device manufacturers and suppliers.",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Technology",
    description:
      "Governance and compliance infrastructure for cybersecurity firms, software providers, and emerging technology companies in regulated markets.",
  },
];

export interface DifferentiatorItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentiators: DifferentiatorItem[] = [
  {
    icon: Target,
    title: "Strategic Integration",
    description:
      "We bridge the gap between regulatory interpretation and operational implementation — translating frameworks into governance systems that function within real organizational workflows.",
  },
  {
    icon: Bot,
    title: "Agentic Oversight",
    description:
      "We don't just audit humans. We design the governance architecture for your AI agents — ensuring algorithmic decisions are auditable, explainable, and compliant with emerging regulatory mandates.",
  },
  {
    icon: Globe,
    title: "Remote-First Security",
    description:
      "Leveraging GCC High and ISO 27001 workflows for global, secure delivery. Our Remote by Design model ensures classified-grade advisory without geographic constraints.",
  },
  {
    icon: Users,
    title: "Capability Transfer",
    description:
      "We don't create dependency. Every engagement concludes with an Internal Governance Manual and a trained team — ensuring your organization owns its compliance posture permanently.",
  },
  {
    icon: Handshake,
    title: "Vendor-Neutral Advisory",
    description:
      "ElevateQCS does not certify, accredit, or authorize compliance. Our independence ensures advisory that is objective, technically grounded, and aligned with long-term operational stability.",
  },
];

export interface EngagementModel {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const engagementModels: EngagementModel[] = [
  {
    icon: Briefcase,
    title: "Governance Architecture Projects",
    description:
      "Design and implementation of enterprise governance frameworks and quality management systems.",
  },
  {
    icon: Search,
    title: "Compliance Gap Assessments",
    description:
      "Structured diagnostic reviews identifying regulatory exposure and operational compliance gaps.",
  },
  {
    icon: BarChart3,
    title: "Federal Supply Chain Readiness",
    description:
      "Governance preparation for organizations entering government contracting ecosystems.",
  },
  {
    icon: FileCheck,
    title: "Audit & Certification Preparation",
    description:
      "System architecture and documentation design supporting ISO certification and regulatory inspections.",
  },
];

export const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ElevateQCS",
  description:
    "Compliance advisory firm specializing in governance systems, ISO frameworks, federal contracting compliance, AI governance, infrastructure recovery, and supply chain regulatory oversight.",
  areaServed: "Global",
  serviceType: [
    "ISO 9001 Consulting",
    "CMMC Readiness Advisory",
    "Government Contract Compliance",
    "Supply Chain Compliance",
    "AI Governance Advisory",
    "Infrastructure Recovery",
    "Regulatory Governance Systems",
  ],
  url: "https://elevateqcs.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiries",
    email: "info@elevateqcs.com",
  },
};
