import type { Article } from "../insights-data";

const article: Article = {
  slug: "eu-ai-act-deployers",
  category: "Regulatory Landscape",
  title: "The EU AI Act Will Affect Companies That Do Not Even Build AI",
  excerpt:
    "The EU AI Act does not only regulate AI developers. It imposes significant governance obligations on organizations that deploy AI systems in their operations — and most companies deploying AI tools are unaware they qualify as AI system operators under the regulation.",
  readTime: "13 min read",
  date: "March 13, 2026",
  metaDescription:
    "The EU AI Act imposes governance obligations on AI system deployers — not just developers. Learn why companies using AI in operations must build risk classification, algorithmic oversight, and governance structures to comply with EU AI regulation even if they do not build AI.",
  imageAlt:
    "Abstract tiered risk classification pyramid with luminous red amber and blue layers representing EU AI Act risk categories affecting AI system deployers across corporate operations",
  content: `
## The Deployer Obligation

The [EU AI Act](https://artificialintelligence.europa.eu/ai-act/) is widely understood as a regulation targeting companies that build artificial intelligence systems. This understanding is incomplete.

The regulation establishes obligations for three categories of actors:

1. **Providers** — Organizations that develop or place AI systems on the market
2. **Deployers** — Organizations that use AI systems in their operations under their own authority
3. **Importers and Distributors** — Organizations that bring AI systems into the EU market

Category 2 is where most companies will find themselves. Any organization that deploys AI-powered tools in its operations — from automated hiring platforms to AI-driven quality inspection systems to algorithmic decision-making in supply chain management — is classified as a **deployer** under the EU AI Act.

The governance obligations for deployers are substantial. And most companies deploying AI systems today have not built the governance structures to meet them.

![AI system deployer risk classification showing operational nodes being categorized through governance layers](ai-deployer-risk-classification.jpg "Most companies deploying AI systems in their operations qualify as deployers under the EU AI Act — with significant governance obligations")

## Risk Classification: What Deployers Must Understand

### The Four Risk Tiers

The EU AI Act classifies AI systems into four risk categories, each with different governance requirements:

| Risk Tier | Description | Example | Deployer Obligations |
| --- | --- | --- | --- |
| Unacceptable | Banned AI practices | Social scoring systems | Prohibited — must not deploy |
| High-Risk | AI in critical domains | HR screening, credit scoring, safety systems | Full governance framework required |
| Limited | AI with transparency needs | Chatbots, deepfake generators | Transparency and disclosure obligations |
| Minimal | Low-risk AI applications | Spam filters, AI-enhanced search | No specific obligations |

### Why Most Deployed AI Is High-Risk

The high-risk category captures most enterprise AI deployments because it covers AI systems used in:

- **Employment**: Automated CV screening, interview analysis, workforce management algorithms
- **Credit and insurance**: AI-driven underwriting, risk assessment, claims processing
- **Critical infrastructure**: Energy grid management, water treatment control systems
- **Education**: Automated grading, student assessment tools
- **Law enforcement**: Predictive policing, facial recognition (with exceptions)
- **Safety components**: AI-integrated quality inspection, defect detection, process control

Companies that procured AI tools for these functions — often from third-party vendors — now find themselves classified as deployers of high-risk AI systems with governance obligations they did not anticipate.

## The Governance Structures Companies Must Build

### Fundamental Rights Impact Assessment

Deployers of high-risk AI systems must conduct a **fundamental rights impact assessment** before deploying the system. This requires:

- Identifying the specific processes where the AI system will be used
- Assessing the potential impact on individuals' fundamental rights (privacy, non-discrimination, due process)
- Documenting risk mitigation measures
- Establishing monitoring procedures to detect adverse impacts during operation

This is not a one-time exercise. It must be updated when the AI system is modified, when its operational context changes, or when monitoring reveals impacts not identified in the initial assessment.

### Human Oversight Requirements

The EU AI Act requires deployers to implement **meaningful human oversight** of high-risk AI systems. This means:

- Designated individuals who understand the AI system's capabilities and limitations
- Documented procedures for human intervention when the system produces problematic outputs
- Authority for human overseers to override, disregard, or reverse AI system decisions
- Regular monitoring of AI system performance and output quality

This requirement directly connects to the [agentic AI oversight](/insights/agentic-ai-human-oversight) challenge. As AI systems become more autonomous, the governance structures for human oversight must become more sophisticated — not less.

### Transparency and Record-Keeping

Deployers must:

- Inform individuals when they are subject to AI system decisions
- Maintain logs of AI system operations for a defined retention period
- Provide explanations of AI-influenced decisions when requested
- Report serious incidents involving AI system failures to regulatory authorities

### Conformity and Monitoring

Deployers must:

- Verify that AI systems they deploy carry the required CE marking and conformity documentation from the provider
- Monitor AI system performance in their operational context
- Report to providers when AI systems produce unexpected outputs or malfunctions
- Suspend use of AI systems that pose risks to health, safety, or fundamental rights

## Building AI Governance Infrastructure

### The AI Governance Framework for Deployers

Organizations deploying AI systems need a governance framework that covers:

1. **AI System Inventory** — A complete register of all AI systems deployed in the organization, classified by risk tier
2. **Risk Assessment Process** — Documented procedures for assessing the risk classification and fundamental rights impact of each AI system
3. **Human Oversight Structure** — Defined roles, responsibilities, and procedures for human oversight of high-risk AI systems
4. **Monitoring and Reporting** — Continuous monitoring of AI system performance with incident reporting procedures
5. **Vendor Governance** — Due diligence on AI system providers to verify conformity documentation and ongoing compliance

### Integration with Existing Governance

AI governance should not be built as a standalone compliance program. It should be integrated into the organization's existing [quality management](/insights/ai-governance-quality-management) and [operational compliance architecture](/services/quality-operational-infrastructure):

- **Quality management integration** — AI system monitoring as an extension of process control and [CAPA procedures](/insights/capa-loop)
- **Risk management integration** — AI risks assessed within the organization's existing risk management framework
- **Supplier governance integration** — AI vendor due diligence conducted through the organization's [supply chain governance](/insights/supply-chain-governance-risk-management) framework
- **[ISO 42001](https://www.iso.org/standard/81230.html) alignment** — The international standard for AI management systems provides a structured framework that maps to EU AI Act requirements

## The Urgency for Deployers

The EU AI Act's deployer obligations began phasing in during 2025, with full enforcement for high-risk AI systems by August 2026. Companies that have not yet:

- Inventoried their AI system deployments
- Classified those systems by risk tier
- Built governance structures for high-risk systems
- Implemented human oversight procedures
- Established monitoring and incident reporting processes

...are operating in a compliance deficit that grows with every month of delay.

The organizations that recognize their deployer status now — and build [appropriate governance infrastructure](/services/ai-governance) — will continue to leverage AI's operational benefits within a compliant framework. Those that assume the EU AI Act only affects AI developers will discover their obligations through regulatory enforcement.

---

## Frequently Asked Questions

### Who qualifies as an AI system deployer under the EU AI Act?

Any organization that uses AI systems in its operations under its own authority qualifies as a deployer. This includes companies using AI-powered tools for hiring, quality inspection, customer service, supply chain optimization, financial decisions, or any other operational function — regardless of whether they developed the AI system themselves.

### What governance obligations do AI system deployers have under the EU AI Act?

Deployers of high-risk AI systems must conduct fundamental rights impact assessments, implement meaningful human oversight with authority to override AI decisions, maintain operational logs, inform individuals subject to AI decisions, monitor system performance, report serious incidents, and verify provider conformity documentation.

### How do companies determine if their AI systems are classified as high-risk?

The EU AI Act defines specific domains where AI systems are classified as high-risk, including employment and worker management, credit and insurance assessment, critical infrastructure management, education, and safety-critical applications. Companies should inventory all AI systems they deploy and assess each against the regulation's risk classification criteria.

### Can companies rely on their AI vendors to handle EU AI Act compliance?

No. While AI system providers have their own compliance obligations (conformity assessment, CE marking, documentation), deployers have independent governance obligations including fundamental rights impact assessments, human oversight implementation, performance monitoring, and incident reporting. These deployer obligations cannot be delegated to the provider.

### How should AI governance integrate with existing quality management systems?

AI governance should extend existing quality management infrastructure by incorporating AI system monitoring into process control frameworks, applying CAPA procedures to AI system failures, integrating AI vendor due diligence into supplier governance programs, and aligning with ISO 42001 for AI management system certification — rather than building parallel governance structures.
`,
};

export default article;
