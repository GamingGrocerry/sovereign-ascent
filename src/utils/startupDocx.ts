import { BrandedDocx } from "./docxBranding";

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-001 — Startup SOP Framework (DOCX)
// ═══════════════════════════════════════════════════════════════
export async function generateStartupSopDocx(): Promise<Blob> {
  const d = new BrandedDocx({
    docCode: "RMO-DLV-001", title: "Standard Operating Procedure Framework",
    subtitle: "A governance-grade SOP shell for documenting operational procedures. Designed to demonstrate operational maturity to investors, auditors, and quality certification bodies.",
    version: "2.0", date: "March 2026",
  });
  d.coverPage(); d.pageBreak();

  d.sectionHeading("1  How to Use This Framework");
  d.bodyText("This Standard Operating Procedure Framework provides a governance-grade shell for documenting any business process. Duplicate this document for each procedure your organization needs to define. Complete every shaded field and delete instructional text before publishing. Consistent SOPs demonstrate operational maturity to investors, auditors, and quality certification bodies.");
  d.instructionBox("HOW TO USE: Fill in every grey/italic field. Delete this instruction box before distributing. Each SOP should describe ONE process only. Link related SOPs in the References section.");

  d.sectionHeading("2  Document Control Information");
  d.formFields([
    { label: "Document Title" }, { label: "Document Code (e.g. SOP-OPS-001)" },
    { label: "Version" }, { label: "Effective Date" },
    { label: "Process Owner (Role)" }, { label: "Department / Function" },
    { label: "Approved By" }, { label: "Next Review Date" },
    { label: "Applicable Standards / Regulations" }, { label: "Classification (Internal / Confidential)" },
  ]);

  d.sectionHeading("3  Purpose");
  d.bodyText("Describe why this procedure exists and what problem it solves. Keep to 2–3 sentences that articulate the governance rationale.");
  d.formFields([{ label: "Purpose Statement" }]);

  d.sectionHeading("4  Scope");
  d.bodyText("Define what this SOP covers and — equally important — what it does NOT cover. Identify teams, products, services, or geographies in scope.");
  d.table(["In Scope", "Out of Scope"], [["", ""], ["", ""], ["", ""]], [50, 50]);

  d.sectionHeading("5  Definitions & Abbreviations");
  d.table(["Term", "Definition"], [["", ""], ["", ""], ["", ""]], [25, 75]);

  d.sectionHeading("6  Roles & Responsibilities");
  d.table(["Role / Title", "Responsibility in This Procedure"], [
    ["Process Owner", ""], ["Executor", ""], ["Reviewer / Approver", ""], ["Quality / Compliance", ""],
  ], [28, 72]);

  d.sectionHeading("7  Procedure Steps");
  d.bodyText("Document each step sequentially. Use clear, imperative language. Include decision points, handoffs, and quality checkpoints.");
  d.table(["Step", "Action", "Responsible", "Output / Record", "Notes"], [
    ["1", "", "", "", ""], ["2", "", "", "", ""], ["3", "", "", "", ""],
    ["4", "", "", "", ""], ["5", "", "", "", ""], ["6", "", "", "", ""],
  ], [6, 32, 14, 24, 24]);

  d.sectionHeading("8  Records & Evidence");
  d.table(["Record / Document", "Storage Location", "Retention Period", "Owner"], [
    ["", "", "", ""], ["", "", "", ""], ["", "", "", ""],
  ], [28, 28, 20, 24]);

  d.sectionHeading("9  Related Documents");
  d.table(["Document Code", "Document Title", "Relationship"], [["", "", ""], ["", "", ""]], [22, 46, 32]);

  d.sectionHeading("10  Revision History");
  d.table(["Version", "Date", "Author", "Change Description"], [
    ["1.0", "", "", "Initial release"], ["", "", "", ""],
  ], [10, 16, 22, 52]);

  d.signOff(["Process Owner", "Quality / Compliance", "Senior Management"]);
  d.disclaimer();
  return d.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-004 — Operational Risk Register Framework (DOCX)
// ═══════════════════════════════════════════════════════════════
export async function generateRiskRegisterDocx(): Promise<Blob> {
  const d = new BrandedDocx({
    docCode: "RMO-DLV-004", title: "Operational Risk Register Framework",
    subtitle: "A living risk management instrument for identifying, assessing, tracking, and mitigating risks across organizational functions — aligned with ISO 31000 principles.",
    version: "2.0", date: "March 2026",
  });
  d.coverPage(); d.pageBreak();

  d.sectionHeading("1  Purpose & Risk Management Framework");
  d.bodyText("This Operational Risk Register is a living document for identifying, assessing, tracking, and managing risks across your organization. Update it at least quarterly — or whenever a significant change occurs in your business environment, team, product, or market. Aligned with ISO 31000 risk management principles.");
  d.instructionBox("SCORING: Likelihood (1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain) × Impact (1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Critical). Score 15–25 = HIGH (red), 8–14 = MEDIUM (amber), 1–7 = LOW (green).");

  d.sectionHeading("2  Organization & Register Details");
  d.formFields([
    { label: "Organization Name" }, { label: "Register Owner" },
    { label: "Last Review Date" }, { label: "Next Review Date" },
  ]);

  d.sectionHeading("3  Risk Scoring Matrix");
  d.table(["L \\ I →", "1 Negligible", "2 Minor", "3 Moderate", "4 Major", "5 Critical"], [
    ["5 Almost Certain", "5", "10", "15", "20", "25"],
    ["4 Likely", "4", "8", "12", "16", "20"],
    ["3 Possible", "3", "6", "9", "12", "15"],
    ["2 Unlikely", "2", "4", "6", "8", "10"],
    ["1 Rare", "1", "2", "3", "4", "5"],
  ], [18, 16, 16, 18, 16, 16]);

  d.sectionHeading("4  Risk Register");
  d.table(["ID", "Risk Title", "Category", "L", "I", "Score", "Controls / Mitigations", "Owner", "Status"], [
    ["SR-001", "Failure to achieve product-market fit", "Strategic", "4", "5", "20 HIGH", "Rapid MVP iteration; monthly pivot reviews", "CEO", "OPEN"],
    ["SR-002", "Key founder or CTO departure", "Strategic", "3", "5", "15 HIGH", "Vesting schedules; succession plan; documented IP", "CEO", "MONITORING"],
    ["OR-001", "No documented SOPs for core processes", "Operational", "4", "4", "16 HIGH", "SOP development program; use RMO-DLV-001", "COO", "OPEN"],
    ["OR-002", "Single point of failure in technical stack", "Operational", "3", "4", "12 MED", "Architecture review; redundancy planning", "CTO", "OPEN"],
    ["FR-001", "Cash runway below 6 months", "Financial", "3", "5", "15 HIGH", "Monthly burn tracking; bridge financing options", "CFO", "MONITORING"],
    ["CR-001", "Non-compliance with data privacy regulations", "Compliance", "3", "4", "12 MED", "Privacy policy; DPA templates; consent management", "Legal", "OPEN"],
    ["CR-002", "Failure to pass regulatory audit", "Compliance", "2", "5", "10 MED", "Pre-audit checklist; governance documentation", "QA", "PLANNED"],
    ["HR-001", "Inability to attract qualified talent", "People", "3", "3", "9 MED", "Competitive offers; culture investment; referrals", "HR", "MONITORING"],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ], [7, 18, 10, 5, 5, 8, 24, 10, 13]);

  d.sectionHeading("5  Risk Response Actions");
  d.table(["Risk ID", "Remediation Action", "Owner", "Target Date", "Status"], [
    ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""],
  ], [10, 36, 16, 18, 20]);

  d.signOff(["Risk Owner", "Operations Lead", "Senior Management"]);
  d.disclaimer();
  return d.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-005 — Compliance Roadmap Framework (DOCX)
// ═══════════════════════════════════════════════════════════════
export async function generateComplianceRoadmapDocx(): Promise<Blob> {
  const d = new BrandedDocx({
    docCode: "RMO-DLV-005", title: "Compliance Roadmap Framework",
    subtitle: "A phased compliance action plan for building a legally sound, operationally mature, and investor-ready governance function — from formation through Series A and beyond.",
    version: "2.0", date: "March 2026",
  });
  d.coverPage(); d.pageBreak();

  d.sectionHeading("1  Purpose & How to Use");
  d.bodyText("This Compliance Roadmap provides a phased action plan for building a legally sound, operationally mature, and investor-ready compliance function. Activities are grouped into four phases aligned with typical growth milestones. Update status as each item progresses.");
  d.instructionBox("HOW TO USE: Customize timeline columns to match your funding stage. Update STATUS for each item. Items marked CRITICAL should be addressed before customer contracts are signed or funding is closed. Share with your board and investors as evidence of compliance maturity.");

  d.sectionHeading("2  Organization Details");
  d.formFields([
    { label: "Organization Name" }, { label: "Current Funding Stage" },
    { label: "Roadmap Owner" }, { label: "Last Updated" },
  ]);

  const h = ["Phase", "Compliance Activity", "Priority", "Owner", "Status", "Notes / Target"];
  const w = [8, 32, 10, 10, 14, 26];

  d.sectionHeading("3  Compliance Roadmap Activities");

  d.subHeading("Legal & Corporate Governance");
  d.table(h, [
    ["Phase 1", "Incorporate company and establish registered agent", "CRITICAL", "CEO/Legal", "NOT STARTED", ""],
    ["Phase 1", "Draft and sign founder agreements and IP assignment", "CRITICAL", "Legal", "NOT STARTED", ""],
    ["Phase 1", "Establish terms of service and privacy policy", "CRITICAL", "Legal/CTO", "NOT STARTED", ""],
    ["Phase 2", "Implement formal board governance structure", "HIGH", "CEO", "NOT STARTED", ""],
    ["Phase 2", "Establish conflict of interest disclosure process", "HIGH", "Legal", "NOT STARTED", ""],
    ["Phase 3", "Retain external legal counsel for regulatory review", "HIGH", "CEO/Legal", "PLANNED", ""],
  ], w);

  d.subHeading("Operational & Quality Systems");
  d.table(h, [
    ["Phase 1", "Document top 5 core business processes as SOPs", "CRITICAL", "COO", "NOT STARTED", "Use RMO-DLV-001"],
    ["Phase 1", "Establish document control and version management", "HIGH", "COO", "NOT STARTED", ""],
    ["Phase 2", "Implement quality management system framework", "HIGH", "COO/QA", "NOT STARTED", ""],
    ["Phase 2", "Establish corrective action (CAPA) process", "HIGH", "QA", "NOT STARTED", ""],
    ["Phase 3", "Conduct internal quality audit", "HIGH", "QA", "PLANNED", ""],
    ["Phase 4", "Pursue ISO 9001 certification (if applicable)", "HIGH", "QA", "PLANNED", "Use RMO-DLV-006"],
  ], w);

  d.subHeading("Data Privacy & Security");
  d.table(h, [
    ["Phase 1", "Implement basic access controls and password policies", "CRITICAL", "CTO", "NOT STARTED", ""],
    ["Phase 1", "Establish data classification policy", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 2", "Implement incident response procedures", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 2", "Conduct vulnerability assessment", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 3", "Pursue SOC 2 readiness assessment", "MEDIUM", "CTO/QA", "PLANNED", ""],
  ], w);

  d.subHeading("Financial Controls & Compliance");
  d.table(h, [
    ["Phase 1", "Establish separate business bank accounts", "CRITICAL", "CFO", "NOT STARTED", ""],
    ["Phase 2", "Implement expense approval and procurement controls", "HIGH", "CFO", "NOT STARTED", ""],
    ["Phase 3", "Establish AR/AP procedures and financial reporting", "HIGH", "CFO", "NOT STARTED", ""],
    ["Phase 3", "Conduct first financial audit or reviewed financials", "HIGH", "CFO", "PLANNED", ""],
  ], w);

  d.subHeading("Investor Readiness");
  d.table(h, [
    ["Phase 1", "Maintain a current, clean capitalization table", "CRITICAL", "CEO/Legal", "NOT STARTED", ""],
    ["Phase 2", "Compile investor compliance summary pack", "HIGH", "CEO/COO", "PLANNED", "Use RMO-DLV-007"],
    ["Phase 3", "Establish board reporting cadence with compliance metrics", "HIGH", "CEO", "PLANNED", ""],
  ], w);

  d.signOff(["Roadmap Owner", "Operations Lead", "Senior Management"]);
  d.disclaimer();
  return d.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-006 — Pre-ISO 9001 Self-Assessment Checklist Framework (DOCX)
// ═══════════════════════════════════════════════════════════════
export async function generatePreIsoAssessmentDocx(): Promise<Blob> {
  const d = new BrandedDocx({
    docCode: "RMO-DLV-006", title: "Pre-ISO 9001 Self-Assessment Checklist Framework",
    subtitle: "A structured self-assessment instrument measuring current operational practices against ISO 9001:2015 requirements — identifying gaps, prioritizing remediation, and preparing for formal certification.",
    version: "2.0", date: "March 2026",
  });
  d.coverPage(); d.pageBreak();

  d.sectionHeading("1  Purpose & Scope");
  d.bodyText("This Pre-ISO Self-Assessment Checklist enables organizations to measure their current operational practices against the requirements of ISO 9001:2015 — the world's leading quality management standard. Completing this assessment identifies gaps, prioritizes remediation, and prepares your organization for a formal gap assessment or certification audit.");
  d.bodyText("Note: With ISO 9001:2026 DIS approved and final publication expected September 2026, organizations should begin tracking transition requirements alongside current compliance.");
  d.instructionBox("HOW TO USE: For each clause — (1) review the requirement, (2) set STATUS, (3) describe your gap or evidence, (4) rate priority. This is a self-assessment tool — scores are for internal improvement, not external audit submission.");

  d.sectionHeading("2  Organization Details");
  d.formFields([
    { label: "Organization Name" }, { label: "Industry / Sector" },
    { label: "Assessment Date" }, { label: "Assessment Lead" },
    { label: "Certification Target Date" }, { label: "No. of Employees in Scope" },
  ]);

  d.sectionHeading("3  Compliance Status Key");
  d.statusKey();

  d.sectionHeading("4  ISO 9001:2015 Self-Assessment");
  const h = ["Clause", "Requirement", "Status", "Gap / Evidence", "Priority"];
  const w = [14, 28, 14, 26, 18];

  const clauses = [
    { name: "CLAUSE 4 — CONTEXT OF THE ORGANIZATION", items: [
      ["4.1", "Understanding the organization and its context", "NOT ASSESSED", "", "High / Med / Low"],
      ["4.2", "Understanding needs of interested parties", "NOT ASSESSED", "", "High / Med / Low"],
      ["4.3", "Determining the scope of the QMS", "NOT ASSESSED", "", "High / Med / Low"],
      ["4.4", "QMS and its processes", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 5 — LEADERSHIP", items: [
      ["5.1", "Leadership and commitment", "NOT ASSESSED", "", "High / Med / Low"],
      ["5.2", "Quality policy", "NOT ASSESSED", "", "High / Med / Low"],
      ["5.3", "Organizational roles, responsibilities, authorities", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 6 — PLANNING", items: [
      ["6.1", "Actions to address risks and opportunities", "NOT ASSESSED", "", "High / Med / Low"],
      ["6.2", "Quality objectives and planning to achieve them", "NOT ASSESSED", "", "High / Med / Low"],
      ["6.3", "Planning of changes", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 7 — SUPPORT", items: [
      ["7.1", "Resources (people, infrastructure, environment, monitoring)", "NOT ASSESSED", "", "High / Med / Low"],
      ["7.2", "Competence", "NOT ASSESSED", "", "High / Med / Low"],
      ["7.3", "Awareness", "NOT ASSESSED", "", "High / Med / Low"],
      ["7.4", "Communication", "NOT ASSESSED", "", "High / Med / Low"],
      ["7.5", "Documented information", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 8 — OPERATION", items: [
      ["8.1", "Operational planning and control", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.2", "Requirements for products and services", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.3", "Design and development", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.4", "Control of externally provided processes", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.5", "Production and service provision", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.6", "Release of products and services", "NOT ASSESSED", "", "High / Med / Low"],
      ["8.7", "Control of nonconforming outputs", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 9 — PERFORMANCE EVALUATION", items: [
      ["9.1", "Monitoring, measurement, analysis, evaluation", "NOT ASSESSED", "", "High / Med / Low"],
      ["9.2", "Internal audit", "NOT ASSESSED", "", "High / Med / Low"],
      ["9.3", "Management review", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
    { name: "CLAUSE 10 — IMPROVEMENT", items: [
      ["10.1", "General improvement", "NOT ASSESSED", "", "High / Med / Low"],
      ["10.2", "Nonconformity and corrective action", "NOT ASSESSED", "", "High / Med / Low"],
      ["10.3", "Continual improvement", "NOT ASSESSED", "", "High / Med / Low"],
    ]},
  ];

  clauses.forEach((clause) => { d.subHeading(clause.name); d.table(h, clause.items, w); });

  d.sectionHeading("5  Assessment Summary");
  d.formFields([
    { label: "Total Compliant" }, { label: "Total Partial" },
    { label: "Total Non-Compliant" }, { label: "Total Not Assessed" },
    { label: "Overall Readiness Estimate (%)" }, { label: "Top 3 Priority Gaps" },
  ]);
  d.signOff(["Assessment Lead", "Quality Manager", "Senior Management"]);
  d.disclaimer();
  return d.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-007 — Investor Compliance Summary Pack Framework (DOCX)
// ═══════════════════════════════════════════════════════════════
export async function generateInvestorCompliancePackDocx(): Promise<Blob> {
  const d = new BrandedDocx({
    docCode: "RMO-DLV-007", title: "Investor Compliance Summary Pack Framework",
    subtitle: "A structured due diligence document consolidating legal, operational, financial, security, and quality compliance status — demonstrating governance maturity and readiness to scale.",
    version: "2.0", date: "March 2026",
  });
  d.coverPage(); d.pageBreak();

  d.sectionHeading("1  Purpose & Intended Audience");
  d.bodyText("This Investor Compliance Summary Pack provides investors, due diligence teams, board members, and prospective partners a structured overview of your organization's compliance posture. It consolidates key legal, operational, financial, security, and quality compliance status into a single document — demonstrating maturity, trustworthiness, and readiness to scale.");
  d.instructionBox("HOW TO USE: Complete every section honestly. Update before each funding round, board meeting, or due diligence process. Where status is IN PROGRESS or NOT YET, include a target date and responsible owner. Mark this document CONFIDENTIAL.");

  d.sectionHeading("2  Company Overview");
  d.formFields([
    { label: "Company Legal Name" }, { label: "Incorporation State / Country" },
    { label: "Founded" }, { label: "Current Funding Stage" },
    { label: "CEO / Founder" }, { label: "Industry / NAICS / SIC" },
    { label: "Number of Employees / Contractors" }, { label: "Pack Prepared By / Date" },
  ]);

  const sh = ["Item", "Status", "Details / Evidence", "Owner"];
  const sw = [30, 14, 34, 22];

  d.sectionHeading("3  Legal & Corporate Governance");
  d.table(sh, [
    ["Company incorporation documents on file", "✓ / In Progress / ✗", "", ""],
    ["Founder agreements and IP assignment executed", "✓ / In Progress / ✗", "", ""],
    ["Operating agreement / bylaws current", "✓ / In Progress / ✗", "", ""],
    ["Board of directors established", "✓ / In Progress / ✗", "", ""],
    ["Capitalization table current and clean", "✓ / In Progress / ✗", "", ""],
    ["Outstanding litigation or disputes", "None / Pending / Active", "", ""],
    ["Conflict of interest disclosures current", "✓ / In Progress / ✗", "", ""],
  ], sw);

  d.sectionHeading("4  Intellectual Property");
  d.table(sh, [
    ["All IP assigned to company (not individuals)", "✓ / In Progress / ✗", "", ""],
    ["Patents filed / granted", "✓ / N/A", "", ""],
    ["Trademarks registered / filed", "✓ / In Progress / ✗", "", ""],
    ["Trade secrets and NDA framework in place", "✓ / In Progress / ✗", "", ""],
    ["Open source license compliance reviewed", "✓ / In Progress / ✗", "", ""],
  ], sw);

  d.sectionHeading("5  Data Privacy & Security");
  d.table(sh, [
    ["Privacy policy published and current", "✓ / In Progress / ✗", "", ""],
    ["Data processing agreements (DPAs) in place", "✓ / In Progress / ✗", "", ""],
    ["GDPR / CCPA compliance assessment completed", "✓ / N/A", "", ""],
    ["Incident response plan documented", "✓ / In Progress / ✗", "", ""],
    ["Access control and authentication policies", "✓ / In Progress / ✗", "", ""],
    ["Data encryption (at rest and in transit)", "✓ / In Progress / ✗", "", ""],
    ["SOC 2 / ISO 27001 certification or roadmap", "✓ / Planned / N/A", "", ""],
  ], sw);

  d.sectionHeading("6  Operational & Quality Systems");
  d.table(sh, [
    ["Core business processes documented as SOPs", "✓ / In Progress / ✗", "", ""],
    ["Quality management system in place", "✓ / In Progress / ✗", "", ""],
    ["Corrective action process established", "✓ / In Progress / ✗", "", ""],
    ["Vendor/supplier qualification process", "✓ / In Progress / ✗", "", ""],
    ["ISO 9001 certification status", "Certified / In Progress / Planned", "", ""],
  ], sw);

  d.sectionHeading("7  Financial Controls");
  d.table(sh, [
    ["Separate business bank accounts", "✓ / ✗", "", ""],
    ["Expense approval and procurement controls", "✓ / In Progress / ✗", "", ""],
    ["Financial statements audited / reviewed", "Audited / Reviewed / Neither", "", ""],
    ["Tax filings current", "✓ / ✗", "", ""],
    ["Revenue recognition policy documented", "✓ / In Progress / ✗", "", ""],
  ], sw);

  d.sectionHeading("8  Employment & HR Compliance");
  d.table(sh, [
    ["Employee handbook published", "✓ / In Progress / ✗", "", ""],
    ["Employment contracts / offer letters standardized", "✓ / In Progress / ✗", "", ""],
    ["Equal opportunity and anti-harassment policies", "✓ / In Progress / ✗", "", ""],
    ["Worker classification (employee vs. contractor) reviewed", "✓ / ✗", "", ""],
    ["Benefits and payroll compliance", "✓ / In Progress / ✗", "", ""],
  ], sw);

  d.sectionHeading("9  Insurance Coverage");
  d.table(["Coverage Type", "Insurer", "Status", "Coverage Amount"], [
    ["General Liability", "", "Active / Pending", ""],
    ["Professional Liability (E&O)", "", "Active / Pending", ""],
    ["Directors & Officers (D&O)", "", "Active / Pending", ""],
    ["Cyber Liability", "", "Active / Pending", ""],
    ["Workers' Compensation", "", "Active / Pending / N/A", ""],
  ], [24, 24, 22, 30]);

  d.sectionHeading("10  Regulatory & Industry Compliance");
  d.table(sh, [
    ["Industry-specific regulatory requirements identified", "✓ / In Progress / ✗", "", ""],
    ["Regulatory filing obligations current", "✓ / In Progress / ✗", "", ""],
    ["Export control requirements assessed (if applicable)", "✓ / N/A", "", ""],
    ["Environmental / safety compliance (if applicable)", "✓ / N/A", "", ""],
  ], sw);

  d.sectionHeading("11  Sign-Off & Confidentiality");
  d.bodyText("This document is prepared in good faith and represents the current compliance posture of the organization as of the date stated. It is CONFIDENTIAL and intended solely for the recipient named below. Do not distribute without authorization from the CEO.");
  d.signOff(["CEO / Founder", "CFO / COO", "Board Representative"]);
  d.disclaimer();
  return d.getBlob();
}
