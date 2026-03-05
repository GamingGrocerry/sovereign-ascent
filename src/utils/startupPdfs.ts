import { BrandedPdf } from "./pdfBranding";

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-001 — Startup SOP Framework
// ═══════════════════════════════════════════════════════════════
export function generateStartupSop(): Blob {
  const pdf = new BrandedPdf({
    docCode: "RMO-DLV-001",
    title: "Standard Operating Procedure Framework",
    subtitle: "A governance-grade SOP shell for documenting operational procedures. Designed to demonstrate operational maturity to investors, auditors, and quality certification bodies.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  How to Use This Framework", y);
  y = pdf.bodyText(
    "This Standard Operating Procedure Framework provides a governance-grade shell for documenting any business process. Duplicate this document for each procedure your organization needs to define. Complete every shaded field and delete instructional text before publishing. Consistent SOPs demonstrate operational maturity to investors, auditors, and quality certification bodies.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Fill in every grey/italic field. Delete this instruction box before distributing. Each SOP should describe ONE process only. Link related SOPs in the References section.",
    y
  );

  y = pdf.sectionHeading("2  Document Control Information", y);
  y = pdf.formFields([
    { label: "Document Title" },
    { label: "Document Code (e.g. SOP-OPS-001)" },
    { label: "Version" },
    { label: "Effective Date" },
    { label: "Process Owner (Role)" },
    { label: "Department / Function" },
    { label: "Approved By" },
    { label: "Next Review Date" },
    { label: "Applicable Standards / Regulations" },
    { label: "Classification (Internal / Confidential)" },
  ], y);

  y = pdf.sectionHeading("3  Purpose", y);
  y = pdf.bodyText(
    "Describe why this procedure exists and what problem it solves. Keep to 2–3 sentences that articulate the governance rationale.",
    y
  );
  y = pdf.formFields([{ label: "Purpose Statement", width: pdf.cw }], y);

  y = pdf.sectionHeading("4  Scope", y);
  y = pdf.bodyText(
    "Define what this SOP covers and — equally important — what it does NOT cover. Identify teams, products, services, or geographies in scope.",
    y
  );
  const scopeHeaders = ["In Scope", "Out of Scope"];
  y = pdf.table(scopeHeaders, [
    ["", ""],
    ["", ""],
    ["", ""],
  ], y, [pdf.cw / 2, pdf.cw / 2]);

  y = pdf.sectionHeading("5  Definitions & Abbreviations", y);
  y = pdf.table(["Term", "Definition"], [
    ["", ""],
    ["", ""],
    ["", ""],
  ], y, [40, pdf.cw - 40]);

  y = pdf.sectionHeading("6  Roles & Responsibilities", y);
  y = pdf.table(["Role / Title", "Responsibility in This Procedure"], [
    ["Process Owner", ""],
    ["Executor", ""],
    ["Reviewer / Approver", ""],
    ["Quality / Compliance", ""],
  ], y, [45, pdf.cw - 45]);

  y = pdf.sectionHeading("7  Procedure Steps", y);
  y = pdf.bodyText(
    "Document each step sequentially. Use clear, imperative language. Include decision points, handoffs, and quality checkpoints.",
    y
  );
  y = pdf.table(["Step", "Action", "Responsible", "Output / Record", "Notes"], [
    ["1", "", "", "", ""],
    ["2", "", "", "", ""],
    ["3", "", "", "", ""],
    ["4", "", "", "", ""],
    ["5", "", "", "", ""],
    ["6", "", "", "", ""],
  ], y, [10, 55, 25, 40, 44]);

  y = pdf.sectionHeading("8  Records & Evidence", y);
  y = pdf.table(["Record / Document", "Storage Location", "Retention Period", "Owner"], [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ], y, [48, 48, 35, 43]);

  y = pdf.sectionHeading("9  Related Documents", y);
  y = pdf.table(["Document Code", "Document Title", "Relationship"], [
    ["", "", ""],
    ["", "", ""],
  ], y, [40, 80, 54]);

  y = pdf.sectionHeading("10  Revision History", y);
  y = pdf.table(["Version", "Date", "Author", "Change Description"], [
    ["1.0", "", "", "Initial release"],
    ["", "", "", ""],
  ], y, [18, 30, 40, 86]);

  y = pdf.signOff(["Process Owner", "Quality / Compliance", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-004 — Operational Risk Register Framework
// ═══════════════════════════════════════════════════════════════
export function generateRiskRegister(): Blob {
  const pdf = new BrandedPdf({
    docCode: "RMO-DLV-004",
    title: "Operational Risk Register Framework",
    subtitle: "A living risk management instrument for identifying, assessing, tracking, and mitigating risks across organizational functions — aligned with ISO 31000 principles.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Risk Management Framework", y);
  y = pdf.bodyText(
    "This Operational Risk Register is a living document for identifying, assessing, tracking, and managing risks across your organization. Update it at least quarterly — or whenever a significant change occurs in your business environment, team, product, or market. Aligned with ISO 31000 risk management principles.",
    y
  );
  y = pdf.instructionBox(
    "SCORING: Likelihood (1=Rare, 2=Unlikely, 3=Possible, 4=Likely, 5=Almost Certain) × Impact (1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Critical). Score 15–25 = HIGH (red), 8–14 = MEDIUM (amber), 1–7 = LOW (green).",
    y
  );

  y = pdf.sectionHeading("2  Organization & Register Details", y);
  y = pdf.formFields([
    { label: "Organization Name" },
    { label: "Register Owner" },
    { label: "Last Review Date" },
    { label: "Next Review Date" },
  ], y);

  y = pdf.sectionHeading("3  Risk Scoring Matrix", y);
  const matrixHeaders = ["L \\ I →", "1 Negligible", "2 Minor", "3 Moderate", "4 Major", "5 Critical"];
  y = pdf.table(matrixHeaders, [
    ["5 Almost Certain", "5", "10", "15", "20", "25"],
    ["4 Likely", "4", "8", "12", "16", "20"],
    ["3 Possible", "3", "6", "9", "12", "15"],
    ["2 Unlikely", "2", "4", "6", "8", "10"],
    ["1 Rare", "1", "2", "3", "4", "5"],
  ], y, [28, 28, 28, 28, 30, 32]);

  y = pdf.sectionHeading("4  Risk Register", y);
  const riskHeaders = ["ID", "Risk Title", "Category", "L", "I", "Score", "Controls / Mitigations", "Owner", "Status"];
  const riskWidths = [12, 30, 18, 8, 8, 12, 44, 20, 22];

  y = pdf.table(riskHeaders, [
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
  ], y, riskWidths);

  y = pdf.sectionHeading("5  Risk Response Actions", y);
  y = pdf.table(["Risk ID", "Remediation Action", "Owner", "Target Date", "Status"], [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ], y, [18, 60, 26, 30, 40]);

  y = pdf.signOff(["Risk Owner", "Operations Lead", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-005 — Compliance Roadmap Framework
// ═══════════════════════════════════════════════════════════════
export function generateComplianceRoadmap(): Blob {
  const pdf = new BrandedPdf({
    docCode: "RMO-DLV-005",
    title: "Compliance Roadmap Framework",
    subtitle: "A phased compliance action plan for building a legally sound, operationally mature, and investor-ready governance function — from formation through Series A and beyond.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & How to Use", y);
  y = pdf.bodyText(
    "This Compliance Roadmap provides a phased action plan for building a legally sound, operationally mature, and investor-ready compliance function. Activities are grouped into four phases aligned with typical growth milestones. Update status as each item progresses.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Customize timeline columns to match your funding stage. Update STATUS for each item. Items marked CRITICAL should be addressed before customer contracts are signed or funding is closed. Share with your board and investors as evidence of compliance maturity.",
    y
  );

  y = pdf.sectionHeading("2  Organization Details", y);
  y = pdf.formFields([
    { label: "Organization Name" },
    { label: "Current Funding Stage" },
    { label: "Roadmap Owner" },
    { label: "Last Updated" },
  ], y);

  y = pdf.sectionHeading("3  Compliance Roadmap Activities", y);

  const headers = ["Phase", "Compliance Activity", "Priority", "Owner", "Status", "Notes / Target"];
  const widths = [14, 56, 18, 18, 22, 46];

  y = pdf.subHeading("Legal & Corporate Governance", y);
  y = pdf.table(headers, [
    ["Phase 1", "Incorporate company and establish registered agent", "CRITICAL", "CEO/Legal", "NOT STARTED", ""],
    ["Phase 1", "Draft and sign founder agreements and IP assignment", "CRITICAL", "Legal", "NOT STARTED", ""],
    ["Phase 1", "Establish terms of service and privacy policy", "CRITICAL", "Legal/CTO", "NOT STARTED", ""],
    ["Phase 2", "Implement formal board governance structure", "HIGH", "CEO", "NOT STARTED", ""],
    ["Phase 2", "Establish conflict of interest disclosure process", "HIGH", "Legal", "NOT STARTED", ""],
    ["Phase 3", "Retain external legal counsel for regulatory review", "HIGH", "CEO/Legal", "PLANNED", ""],
  ], y, widths);

  y = pdf.subHeading("Operational & Quality Systems", y);
  y = pdf.table(headers, [
    ["Phase 1", "Document top 5 core business processes as SOPs", "CRITICAL", "COO", "NOT STARTED", "Use RMO-DLV-001"],
    ["Phase 1", "Establish document control and version management", "HIGH", "COO", "NOT STARTED", ""],
    ["Phase 2", "Implement quality management system framework", "HIGH", "COO/QA", "NOT STARTED", ""],
    ["Phase 2", "Establish corrective action (CAPA) process", "HIGH", "QA", "NOT STARTED", ""],
    ["Phase 3", "Conduct internal quality audit", "HIGH", "QA", "PLANNED", ""],
    ["Phase 4", "Pursue ISO 9001 certification (if applicable)", "HIGH", "QA", "PLANNED", "Use RMO-DLV-006"],
  ], y, widths);

  y = pdf.subHeading("Data Privacy & Security", y);
  y = pdf.table(headers, [
    ["Phase 1", "Implement basic access controls and password policies", "CRITICAL", "CTO", "NOT STARTED", ""],
    ["Phase 1", "Establish data classification policy", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 2", "Implement incident response procedures", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 2", "Conduct vulnerability assessment", "HIGH", "CTO", "NOT STARTED", ""],
    ["Phase 3", "Pursue SOC 2 readiness assessment", "MEDIUM", "CTO/QA", "PLANNED", ""],
  ], y, widths);

  y = pdf.subHeading("Financial Controls & Compliance", y);
  y = pdf.table(headers, [
    ["Phase 1", "Establish separate business bank accounts", "CRITICAL", "CFO", "NOT STARTED", ""],
    ["Phase 2", "Implement expense approval and procurement controls", "HIGH", "CFO", "NOT STARTED", ""],
    ["Phase 3", "Establish AR/AP procedures and financial reporting", "HIGH", "CFO", "NOT STARTED", ""],
    ["Phase 3", "Conduct first financial audit or reviewed financials", "HIGH", "CFO", "PLANNED", ""],
  ], y, widths);

  y = pdf.subHeading("Investor Readiness", y);
  y = pdf.table(headers, [
    ["Phase 1", "Maintain a current, clean capitalization table", "CRITICAL", "CEO/Legal", "NOT STARTED", ""],
    ["Phase 2", "Compile investor compliance summary pack", "HIGH", "CEO/COO", "PLANNED", "Use RMO-DLV-007"],
    ["Phase 3", "Establish board reporting cadence with compliance metrics", "HIGH", "CEO", "PLANNED", ""],
  ], y, widths);

  y = pdf.signOff(["Roadmap Owner", "Operations Lead", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-006 — Pre-ISO Self-Assessment Checklist Framework
// ═══════════════════════════════════════════════════════════════
export function generatePreIsoAssessment(): Blob {
  const pdf = new BrandedPdf({
    docCode: "RMO-DLV-006",
    title: "Pre-ISO 9001 Self-Assessment Checklist Framework",
    subtitle: "A structured self-assessment instrument measuring current operational practices against ISO 9001:2015 requirements — identifying gaps, prioritizing remediation, and preparing for formal certification.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This Pre-ISO Self-Assessment Checklist enables organizations to measure their current operational practices against the requirements of ISO 9001:2015 — the world's leading quality management standard. Completing this assessment identifies gaps, prioritizes remediation, and prepares your organization for a formal gap assessment or certification audit.",
    y
  );
  y = pdf.bodyText(
    "Note: With ISO 9001:2026 DIS approved and final publication expected September 2026, organizations should begin tracking transition requirements alongside current compliance.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: For each clause — (1) review the requirement, (2) set STATUS, (3) describe your gap or evidence, (4) rate priority. This is a self-assessment tool — scores are for internal improvement, not external audit submission.",
    y
  );

  y = pdf.sectionHeading("2  Organization Details", y);
  y = pdf.formFields([
    { label: "Organization Name" },
    { label: "Industry / Sector" },
    { label: "Assessment Date" },
    { label: "Assessment Lead" },
    { label: "Certification Target Date" },
    { label: "No. of Employees in Scope" },
  ], y);

  y = pdf.sectionHeading("3  Compliance Status Key", y);
  y = pdf.statusKey(y);

  y = pdf.sectionHeading("4  ISO 9001:2015 Self-Assessment", y);

  const headers = ["Clause", "Requirement", "Status", "Gap / Evidence", "Priority"];
  const widths = [26, 48, 22, 44, 34];

  const clauses = [
    {
      name: "CLAUSE 4 — CONTEXT OF THE ORGANIZATION",
      items: [
        ["4.1", "Understanding the organization and its context", "NOT ASSESSED", "", "High / Med / Low"],
        ["4.2", "Understanding needs of interested parties", "NOT ASSESSED", "", "High / Med / Low"],
        ["4.3", "Determining the scope of the QMS", "NOT ASSESSED", "", "High / Med / Low"],
        ["4.4", "QMS and its processes", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 5 — LEADERSHIP",
      items: [
        ["5.1", "Leadership and commitment", "NOT ASSESSED", "", "High / Med / Low"],
        ["5.2", "Quality policy", "NOT ASSESSED", "", "High / Med / Low"],
        ["5.3", "Organizational roles, responsibilities, authorities", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 6 — PLANNING",
      items: [
        ["6.1", "Actions to address risks and opportunities", "NOT ASSESSED", "", "High / Med / Low"],
        ["6.2", "Quality objectives and planning to achieve them", "NOT ASSESSED", "", "High / Med / Low"],
        ["6.3", "Planning of changes", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 7 — SUPPORT",
      items: [
        ["7.1", "Resources (people, infrastructure, environment, monitoring)", "NOT ASSESSED", "", "High / Med / Low"],
        ["7.2", "Competence", "NOT ASSESSED", "", "High / Med / Low"],
        ["7.3", "Awareness", "NOT ASSESSED", "", "High / Med / Low"],
        ["7.4", "Communication", "NOT ASSESSED", "", "High / Med / Low"],
        ["7.5", "Documented information", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 8 — OPERATION",
      items: [
        ["8.1", "Operational planning and control", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.2", "Requirements for products and services", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.3", "Design and development", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.4", "Control of externally provided processes", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.5", "Production and service provision", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.6", "Release of products and services", "NOT ASSESSED", "", "High / Med / Low"],
        ["8.7", "Control of nonconforming outputs", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 9 — PERFORMANCE EVALUATION",
      items: [
        ["9.1", "Monitoring, measurement, analysis, evaluation", "NOT ASSESSED", "", "High / Med / Low"],
        ["9.2", "Internal audit", "NOT ASSESSED", "", "High / Med / Low"],
        ["9.3", "Management review", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
    {
      name: "CLAUSE 10 — IMPROVEMENT",
      items: [
        ["10.1", "General improvement", "NOT ASSESSED", "", "High / Med / Low"],
        ["10.2", "Nonconformity and corrective action", "NOT ASSESSED", "", "High / Med / Low"],
        ["10.3", "Continual improvement", "NOT ASSESSED", "", "High / Med / Low"],
      ],
    },
  ];

  clauses.forEach((clause) => {
    y = pdf.subHeading(clause.name, y);
    y = pdf.table(headers, clause.items, y, widths);
  });

  y = pdf.sectionHeading("5  Assessment Summary", y);
  y = pdf.formFields([
    { label: "Total Compliant" },
    { label: "Total Partial" },
    { label: "Total Non-Compliant" },
    { label: "Total Not Assessed" },
    { label: "Overall Readiness Estimate (%)" },
    { label: "Top 3 Priority Gaps" },
  ], y);

  y = pdf.signOff(["Assessment Lead", "Quality Manager", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// RMO-DLV-007 — Investor Compliance Summary Pack Framework
// ═══════════════════════════════════════════════════════════════
export function generateInvestorCompliancePack(): Blob {
  const pdf = new BrandedPdf({
    docCode: "RMO-DLV-007",
    title: "Investor Compliance Summary Pack Framework",
    subtitle: "A structured due diligence document consolidating legal, operational, financial, security, and quality compliance status — demonstrating governance maturity and readiness to scale.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Intended Audience", y);
  y = pdf.bodyText(
    "This Investor Compliance Summary Pack provides investors, due diligence teams, board members, and prospective partners a structured overview of your organization's compliance posture. It consolidates key legal, operational, financial, security, and quality compliance status into a single document — demonstrating maturity, trustworthiness, and readiness to scale.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Complete every section honestly. Update before each funding round, board meeting, or due diligence process. Where status is IN PROGRESS or NOT YET, include a target date and responsible owner. Mark this document CONFIDENTIAL.",
    y
  );

  y = pdf.sectionHeading("2  Company Overview", y);
  y = pdf.formFields([
    { label: "Company Legal Name" },
    { label: "Incorporation State / Country" },
    { label: "Founded" },
    { label: "Current Funding Stage" },
    { label: "CEO / Founder" },
    { label: "Industry / NAICS / SIC" },
    { label: "Number of Employees / Contractors" },
    { label: "Pack Prepared By / Date" },
  ], y);

  y = pdf.sectionHeading("3  Legal & Corporate Governance", y);
  const statusHeaders = ["Item", "Status", "Details / Evidence", "Owner"];
  const statusWidths = [52, 22, 60, 40];

  y = pdf.table(statusHeaders, [
    ["Company incorporation documents on file", "✓ / In Progress / ✗", "", ""],
    ["Founder agreements and IP assignment executed", "✓ / In Progress / ✗", "", ""],
    ["Operating agreement / bylaws current", "✓ / In Progress / ✗", "", ""],
    ["Board of directors established", "✓ / In Progress / ✗", "", ""],
    ["Capitalization table current and clean", "✓ / In Progress / ✗", "", ""],
    ["Outstanding litigation or disputes", "None / Pending / Active", "", ""],
    ["Conflict of interest disclosures current", "✓ / In Progress / ✗", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("4  Intellectual Property", y);
  y = pdf.table(statusHeaders, [
    ["All IP assigned to company (not individuals)", "✓ / In Progress / ✗", "", ""],
    ["Patents filed / granted", "✓ / N/A", "", ""],
    ["Trademarks registered / filed", "✓ / In Progress / ✗", "", ""],
    ["Trade secrets and NDA framework in place", "✓ / In Progress / ✗", "", ""],
    ["Open source license compliance reviewed", "✓ / In Progress / ✗", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("5  Data Privacy & Security", y);
  y = pdf.table(statusHeaders, [
    ["Privacy policy published and current", "✓ / In Progress / ✗", "", ""],
    ["Data processing agreements (DPAs) in place", "✓ / In Progress / ✗", "", ""],
    ["GDPR / CCPA compliance assessment completed", "✓ / N/A", "", ""],
    ["Incident response plan documented", "✓ / In Progress / ✗", "", ""],
    ["Access control and authentication policies", "✓ / In Progress / ✗", "", ""],
    ["Data encryption (at rest and in transit)", "✓ / In Progress / ✗", "", ""],
    ["SOC 2 / ISO 27001 certification or roadmap", "✓ / Planned / N/A", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("6  Operational & Quality Systems", y);
  y = pdf.table(statusHeaders, [
    ["Core business processes documented as SOPs", "✓ / In Progress / ✗", "", ""],
    ["Quality management system in place", "✓ / In Progress / ✗", "", ""],
    ["Corrective action process established", "✓ / In Progress / ✗", "", ""],
    ["Vendor/supplier qualification process", "✓ / In Progress / ✗", "", ""],
    ["ISO 9001 certification status", "Certified / In Progress / Planned", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("7  Financial Controls", y);
  y = pdf.table(statusHeaders, [
    ["Separate business bank accounts", "✓ / ✗", "", ""],
    ["Expense approval and procurement controls", "✓ / In Progress / ✗", "", ""],
    ["Financial statements audited / reviewed", "Audited / Reviewed / Neither", "", ""],
    ["Tax filings current", "✓ / ✗", "", ""],
    ["Revenue recognition policy documented", "✓ / In Progress / ✗", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("8  Employment & HR Compliance", y);
  y = pdf.table(statusHeaders, [
    ["Employee handbook published", "✓ / In Progress / ✗", "", ""],
    ["Employment contracts / offer letters standardized", "✓ / In Progress / ✗", "", ""],
    ["Equal opportunity and anti-harassment policies", "✓ / In Progress / ✗", "", ""],
    ["Worker classification (employee vs. contractor) reviewed", "✓ / ✗", "", ""],
    ["Benefits and payroll compliance", "✓ / In Progress / ✗", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("9  Insurance Coverage", y);
  y = pdf.table(["Coverage Type", "Insurer", "Status", "Coverage Amount"], [
    ["General Liability", "", "Active / Pending", ""],
    ["Professional Liability (E&O)", "", "Active / Pending", ""],
    ["Directors & Officers (D&O)", "", "Active / Pending", ""],
    ["Cyber Liability", "", "Active / Pending", ""],
    ["Workers' Compensation", "", "Active / Pending / N/A", ""],
  ], y, [42, 42, 36, 54]);

  y = pdf.sectionHeading("10  Regulatory & Industry Compliance", y);
  y = pdf.table(statusHeaders, [
    ["Industry-specific regulatory requirements identified", "✓ / In Progress / ✗", "", ""],
    ["Regulatory filing obligations current", "✓ / In Progress / ✗", "", ""],
    ["Export control requirements assessed (if applicable)", "✓ / N/A", "", ""],
    ["Environmental / safety compliance (if applicable)", "✓ / N/A", "", ""],
  ], y, statusWidths);

  y = pdf.sectionHeading("11  Sign-Off & Confidentiality", y);
  y = pdf.bodyText(
    "This document is prepared in good faith and represents the current compliance posture of the organization as of the date stated. It is CONFIDENTIAL and intended solely for the recipient named below. Do not distribute without authorization from the CEO.",
    y
  );

  y = pdf.signOff(["CEO / Founder", "CFO / COO", "Board Representative"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}
