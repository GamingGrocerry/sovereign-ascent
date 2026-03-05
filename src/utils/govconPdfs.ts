import { BrandedPdf } from "./pdfBranding";

// ═══════════════════════════════════════════════════════════════
// EFC-DLV-001 — FAR Compliance Matrix Framework
// ═══════════════════════════════════════════════════════════════
export function generateFarComplianceMatrix(): Blob {
  const pdf = new BrandedPdf({
    docCode: "EFC-DLV-001",
    title: "FAR Compliance Matrix Framework",
    subtitle: "A structured compliance matrix for identifying, tracking, and documenting adherence to applicable Federal Acquisition Regulation (FAR) clauses across active federal contracts and solicitations.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This FAR Compliance Matrix Framework supports contractors and subcontractors in systematically identifying, tracking, and documenting compliance with applicable Federal Acquisition Regulation (FAR) clauses. Complete this matrix for each federal contract or solicitation to maintain a defensible compliance posture.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: For each applicable FAR clause — (1) confirm applicability, (2) select compliance status, (3) verify evidence is on file, (4) document the responsible owner and evidence reference.",
    y
  );

  y = pdf.sectionHeading("2  Contract Information", y);
  y = pdf.formFields([
    { label: "Contractor / Company Name" },
    { label: "Contract Number" },
    { label: "Contracting Agency / Office" },
    { label: "Period of Performance" },
    { label: "Contract Type (FFP / CPFF / T&M / IDIQ)" },
    { label: "Compliance Review Date" },
  ], y);

  y = pdf.sectionHeading("3  Compliance Status Key", y);
  y = pdf.statusKey(y);

  y = pdf.sectionHeading("4  FAR Compliance Matrix", y);

  const headers = ["#", "FAR Clause / Title", "Core Requirement", "Status", "Evidence", "Notes / Owner"];
  const widths = [8, 38, 50, 22, 18, 38];

  const rows = [
    ["", "PART 3 — ETHICS & IMPROPER BUSINESS PRACTICES", "", "", "", ""],
    ["3.1", "Code of Business Ethics", "Written code required if contract >$5.5M and >120 days", "NOT ASSESSED", "☐", ""],
    ["3.2", "Mandatory Disclosure", "Disclose credible evidence of fraud, conflict, bribery", "NOT ASSESSED", "☐", ""],
    ["3.3", "Whistleblower Protection", "Inform employees of whistleblower protections", "NOT ASSESSED", "☐", ""],
    ["", "PART 4 — ADMINISTRATIVE MATTERS", "", "", "", ""],
    ["4.1", "SAM Registration", "Active SAM.gov registration required throughout", "NOT ASSESSED", "☐", ""],
    ["4.2", "SAM Maintenance (52.204-13)", "Maintain active registration; update annually", "NOT ASSESSED", "☐", ""],
    ["4.3", "Unique Entity Identifier (52.204-6)", "UEI required on all submissions", "NOT ASSESSED", "☐", ""],
    ["4.4", "Executive Compensation (52.204-10)", "Report top 5 if >$25M federal funding", "NOT ASSESSED", "☐", ""],
    ["", "PART 9 — CONTRACTOR QUALIFICATIONS", "", "", "", ""],
    ["9.1", "Contractor Responsibility (9.104-1)", "Demonstrate financial resources, integrity", "NOT ASSESSED", "☐", ""],
    ["9.2", "Debarment / Suspension (52.209-6)", "Verify no debarment; flow down to subs", "NOT ASSESSED", "☐", ""],
    ["9.3", "Org Conflicts of Interest (52.209-7)", "Disclose and mitigate OCI", "NOT ASSESSED", "☐", ""],
    ["", "PART 19 — SMALL BUSINESS PROGRAMS", "", "", "", ""],
    ["19.1", "SB Subcontracting Plan (52.219-9)", "Required if >$750K (mfg) or $1.5M (constr)", "NOT ASSESSED", "☐", ""],
    ["19.2", "Limitations on Subcontracting (52.219-14)", "Self-performance requirements for SB set-asides", "NOT ASSESSED", "☐", ""],
    ["19.3", "HUBZone/SDVOSB/WOSB (19.13-15)", "Verify socioeconomic certifications", "NOT ASSESSED", "☐", ""],
    ["", "PART 22 — LABOR STANDARDS", "", "", "", ""],
    ["22.1", "Service Contract Labor (52.222-41)", "Pay prevailing wages per DOL determination", "NOT ASSESSED", "☐", ""],
    ["22.2", "Equal Opportunity (52.222-26)", "Non-discrimination in employment practices", "NOT ASSESSED", "☐", ""],
    ["22.3", "Affirmative Action (52.222-36)", "Employ qualified individuals with disabilities", "NOT ASSESSED", "☐", ""],
    ["22.4", "CTIP (52.222-50)", "Anti-trafficking compliance; plan if >$550K overseas", "NOT ASSESSED", "☐", ""],
    ["22.5", "E-Verify (52.222-54)", "E-Verify new hires on federal contract work", "NOT ASSESSED", "☐", ""],
    ["22.6", "Paid Sick Leave (52.222-62)", "1 hour per 30 hours worked on federal contracts", "NOT ASSESSED", "☐", ""],
    ["", "PART 24 — PRIVACY ACT", "", "", "", ""],
    ["24.1", "Privacy Act Notification (52.224-1)", "Notify employees of Privacy Act obligations", "NOT ASSESSED", "☐", ""],
    ["", "PART 25 — FOREIGN ACQUISITION", "", "", "", ""],
    ["25.1", "Buy American Act (52.225-1/3)", "Use domestic end products / materials", "NOT ASSESSED", "☐", ""],
    ["25.2", "Trade Agreements (52.225-5)", "Comply with trade agreement requirements", "NOT ASSESSED", "☐", ""],
    ["", "PART 31 — CONTRACT COST PRINCIPLES", "", "", "", ""],
    ["31.1", "Allowable Cost & Payment (52.216-7)", "Incur only allowable costs per FAR 31.2", "NOT ASSESSED", "☐", ""],
    ["31.2", "Audit & Records Retention (52.215-2)", "Maintain records for 3 years post-contract", "NOT ASSESSED", "☐", ""],
    ["", "PART 32 — CONTRACT FINANCING", "", "", "", ""],
    ["32.1", "Prompt Payment (52.232-25)", "Pay invoices within terms; pass-through to subs", "NOT ASSESSED", "☐", ""],
    ["32.2", "Electronic Funds Transfer (52.232-33)", "Payments via EFT; maintain current SAM banking", "NOT ASSESSED", "☐", ""],
    ["", "PART 33 — DISPUTES", "", "", "", ""],
    ["33.1", "Disputes Clause (52.233-1)", "Follow Contract Disputes Act procedures", "NOT ASSESSED", "☐", ""],
    ["", "PART 52 — OTHER MANDATORY CLAUSES", "", "", "", ""],
    ["52.1", "Gratuities (52.203-3)", "Prohibition on offering gratuities", "NOT ASSESSED", "☐", ""],
    ["52.2", "Anti-Kickback (52.203-7)", "Prohibition on kickbacks from subcontractors", "NOT ASSESSED", "☐", ""],
    ["52.3", "Government Property (52.245-1)", "Manage, protect, report GFP", "NOT ASSESSED", "☐", ""],
  ];

  y = pdf.table(headers, rows, y, widths);

  y = pdf.sectionHeading("5  Summary", y);
  y = pdf.formFields([
    { label: "Total Compliant" },
    { label: "Total Non-Compliant / Gaps" },
  ], y);

  y = pdf.signOff(["Reviewed By", "Contracts Lead", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// EFC-DLV-002 — Proposal Compliance Checklist Framework
// ═══════════════════════════════════════════════════════════════
export function generateProposalChecklist(): Blob {
  const pdf = new BrandedPdf({
    docCode: "EFC-DLV-002",
    title: "Proposal Compliance Checklist Framework",
    subtitle: "A pre-submission governance checklist ensuring federal solicitation response packages are complete, compliant, and audit-ready prior to delivery.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This Proposal Compliance Checklist ensures all federal solicitation response packages — RFP, RFQ, or RFTOP — are complete, compliant, and submission-ready. Apply this checklist to each solicitation response to prevent administrative disqualification and strengthen proposal discipline.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Check each item as completed. Mark N/A in Notes if not applicable. All MANDATORY items must be addressed before submission. Assign a team owner to each section.",
    y
  );

  y = pdf.sectionHeading("2  Solicitation Details", y);
  y = pdf.formFields([
    { label: "Solicitation Number" },
    { label: "Issuing Agency / Office" },
    { label: "Submission Deadline" },
    { label: "Proposal Manager" },
    { label: "Contract Vehicle / NAICS Code" },
    { label: "Set-Aside Type" },
  ], y);

  y = pdf.sectionHeading("3  Pre-Submission Compliance Checklist", y);
  y = pdf.subHeading("Section A — Administrative & Registration", y);

  const headers = ["✓", "Checklist Item", "FAR Reference", "Required?", "Notes / Owner"];
  const widths = [8, 68, 28, 20, 50];

  y = pdf.table(headers, [
    ["☐", "Confirm active SAM.gov registration (not expired)", "FAR 4.1102", "MANDATORY", ""],
    ["☐", "Verify UEI number is current and matches solicitation", "FAR 52.204-6", "MANDATORY", ""],
    ["☐", "Confirm applicable NAICS code matches solicitation", "FAR 19.102", "MANDATORY", ""],
    ["☐", "Verify small business size standard qualification", "FAR 19.301", "MANDATORY", ""],
    ["☐", "Confirm set-aside certifications are active", "FAR 19.13-15", "MANDATORY", ""],
    ["☐", "Verify no debarment, suspension, or ineligibility", "FAR 9.405", "MANDATORY", ""],
  ], y, widths);

  y = pdf.subHeading("Section B — Technical & Management Volume", y);
  y = pdf.table(headers, [
    ["☐", "Technical approach addresses all PWS/SOW requirements", "Section L/M", "MANDATORY", ""],
    ["☐", "Page limits and formatting comply with instructions", "Section L", "MANDATORY", ""],
    ["☐", "Key personnel qualifications meet minimum requirements", "Section M", "MANDATORY", ""],
    ["☐", "Past performance references are relevant and recent (<3 yrs)", "FAR 15.305(a)(2)", "MANDATORY", ""],
    ["☐", "CPARS / PPQ forms completed and submitted", "FAR 42.1502", "MANDATORY", ""],
    ["☐", "Management approach and staffing plan included", "Section L/M", "MANDATORY", ""],
    ["☐", "Subcontracting plan included (if required)", "FAR 52.219-9", "Conditional", ""],
  ], y, widths);

  y = pdf.subHeading("Section C — Price / Cost Volume", y);
  y = pdf.table(headers, [
    ["☐", "Price/cost volume is separate from technical volume", "FAR 15.204-5", "MANDATORY", ""],
    ["☐", "All CLINs are priced per solicitation", "Section B", "MANDATORY", ""],
    ["☐", "Pricing is fully loaded (fringe, overhead, G&A, profit)", "FAR 31.2", "MANDATORY", ""],
    ["☐", "Indirect rates are current and supported", "FAR 42.17", "MANDATORY", ""],
    ["☐", "Travel costs comply with JTR / FTR", "FAR 31.205-46", "MANDATORY", ""],
    ["☐", "Option periods are priced separately", "FAR 17.202", "Conditional", ""],
  ], y, widths);

  y = pdf.subHeading("Section D — Representations & Certifications", y);
  y = pdf.table(headers, [
    ["☐", "Annual Reps & Certs completed in SAM", "FAR 52.204-8", "MANDATORY", ""],
    ["☐", "Cover page signed (SF 1449 / SF 33 / SF 26)", "FAR 53.215-1", "MANDATORY", ""],
    ["☐", "Conflict of Interest disclosure provided", "FAR 9.5", "Conditional", ""],
    ["☐", "All solicitation amendments acknowledged and signed", "FAR 52.215-1(c)(4)", "MANDATORY", ""],
    ["☐", "Buy American / Trade Agreements certificate completed", "FAR 52.225-2/6", "Conditional", ""],
  ], y, widths);

  y = pdf.subHeading("Section E — Administrative & Submission", y);
  y = pdf.table(headers, [
    ["☐", "Proposal submitted via correct portal", "Section L", "MANDATORY", ""],
    ["☐", "File format and naming conventions comply", "Section L", "MANDATORY", ""],
    ["☐", "No proprietary markings on non-proprietary sections", "FAR 52.215-1(e)", "MANDATORY", ""],
    ["☐", "Submission confirmation obtained and recorded", "Section L", "MANDATORY", ""],
    ["☐", "Internal copy archived per records retention policy", "Internal", "MANDATORY", ""],
  ], y, widths);

  y = pdf.signOff(["Proposal Manager", "Contracts / Legal", "Authorizing Official"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// EFC-DLV-006 — CMMC 2.0 Gap Assessment Checklist Framework
// ═══════════════════════════════════════════════════════════════
export function generateCmmcGapAssessment(): Blob {
  const pdf = new BrandedPdf({
    docCode: "EFC-DLV-006",
    title: "CMMC 2.0 Gap Assessment Checklist Framework",
    subtitle: "A structured self-assessment framework aligned with CMMC Level 2 and the 110 practices of NIST SP 800-171 Rev 2 for organizations handling Controlled Unclassified Information (CUI) in DoD supply chains.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This CMMC 2.0 Gap Assessment Checklist supports organizations in evaluating their current cybersecurity posture against the 110 practices required under CMMC Level 2, aligned with NIST SP 800-171 Rev 2. It supports readiness for third-party assessment (C3PAO) and applies to all DoD contractors handling Controlled Unclassified Information (CUI).",
    y
  );
  y = pdf.bodyText(
    "Following the regulatory overhaul effective February 1, 2026, contractors now fulfill assessment obligations exclusively through DFARS 252.204-7021. This framework reflects the current enforcement posture.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: For each practice — (1) assess current status, (2) describe any gap, (3) assign a remediation owner and target date. This is a LIVING document — update continuously until assessment-ready.",
    y
  );

  y = pdf.sectionHeading("2  Organization & Assessment Details", y);
  y = pdf.formFields([
    { label: "Organization Name" },
    { label: "CMMC Level Target" },
    { label: "Assessment Lead" },
    { label: "Assessment Date" },
    { label: "CUI Systems / Enclaves Scope" },
    { label: "Target C3PAO Assessment Date" },
    { label: "SPRS Score Estimate" },
    { label: "C3PAO Firm (if selected)" },
  ], y);

  y = pdf.sectionHeading("3  Compliance Status Key", y);
  y = pdf.statusKey(y);

  y = pdf.sectionHeading("4  CMMC Level 2 Practice Assessment", y);

  const headers = ["ID", "Practice Name", "Core Requirement", "Status", "Gap Description", "Owner / Target"];
  const widths = [14, 30, 48, 22, 30, 30];

  const families = [
    {
      name: "ACCESS CONTROL (AC)",
      practices: [
        ["AC.L2-3.1.1", "Authorized Access", "Limit system access to authorized users", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.2", "Transaction Control", "Limit system access to authorized transactions", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.3", "CUI Flow Control", "Control CUI flow per approved authorizations", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.5", "Least Privilege", "Employ principle of least privilege", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.7", "Privileged Functions", "Prevent non-privileged users from executing", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.8", "Unsuccessful Logon", "Limit unsuccessful logon attempts", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.12", "Remote Access Control", "Monitor and control remote access sessions", "NOT ASSESSED", "", ""],
        ["AC.L2-3.1.22", "Publicly Accessible", "Control information posted to publicly accessible systems", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "AWARENESS & TRAINING (AT)",
      practices: [
        ["AT.L2-3.2.1", "Role-Based Training", "Security awareness training for all users", "NOT ASSESSED", "", ""],
        ["AT.L2-3.2.2", "Advanced Training", "Training for roles with security responsibilities", "NOT ASSESSED", "", ""],
        ["AT.L2-3.2.3", "Insider Threat", "Awareness of insider threat indicators", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "AUDIT & ACCOUNTABILITY (AU)",
      practices: [
        ["AU.L2-3.3.1", "System Auditing", "Create and retain system audit logs", "NOT ASSESSED", "", ""],
        ["AU.L2-3.3.2", "User Accountability", "Ensure actions can be traced to users", "NOT ASSESSED", "", ""],
        ["AU.L2-3.3.5", "Audit Correlation", "Correlate audit review and reporting processes", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "CONFIGURATION MANAGEMENT (CM)",
      practices: [
        ["CM.L2-3.4.1", "Baseline Config", "Establish and maintain baseline configurations", "NOT ASSESSED", "", ""],
        ["CM.L2-3.4.2", "Security Config", "Enforce security configuration settings", "NOT ASSESSED", "", ""],
        ["CM.L2-3.4.6", "Least Functionality", "Employ principle of least functionality", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "IDENTIFICATION & AUTHENTICATION (IA)",
      practices: [
        ["IA.L2-3.5.1", "User Identification", "Identify system users and processes", "NOT ASSESSED", "", ""],
        ["IA.L2-3.5.2", "User Authentication", "Authenticate users and processes", "NOT ASSESSED", "", ""],
        ["IA.L2-3.5.3", "MFA", "Use multi-factor authentication", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "INCIDENT RESPONSE (IR)",
      practices: [
        ["IR.L2-3.6.1", "IR Capability", "Establish operational incident response capability", "NOT ASSESSED", "", ""],
        ["IR.L2-3.6.2", "Incident Reporting", "Track, document, and report incidents", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "MEDIA PROTECTION (MP)",
      practices: [
        ["MP.L2-3.8.1", "Media Protection", "Protect system media containing CUI", "NOT ASSESSED", "", ""],
        ["MP.L2-3.8.3", "Media Disposal", "Sanitize media before disposal or reuse", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "RISK ASSESSMENT (RA)",
      practices: [
        ["RA.L2-3.11.1", "Risk Assessment", "Periodically assess organizational risk", "NOT ASSESSED", "", ""],
        ["RA.L2-3.11.2", "Vulnerability Scan", "Scan for vulnerabilities periodically", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "SYSTEM & COMMUNICATIONS (SC)",
      practices: [
        ["SC.L2-3.13.1", "Boundary Protection", "Monitor and protect communications at boundaries", "NOT ASSESSED", "", ""],
        ["SC.L2-3.13.8", "CUI in Transit", "Implement cryptographic mechanisms for CUI in transit", "NOT ASSESSED", "", ""],
        ["SC.L2-3.13.11", "CUI Encryption", "Employ FIPS-validated cryptography for CUI", "NOT ASSESSED", "", ""],
      ],
    },
    {
      name: "SYSTEM & INFORMATION INTEGRITY (SI)",
      practices: [
        ["SI.L2-3.14.1", "Flaw Remediation", "Identify, report, and correct system flaws", "NOT ASSESSED", "", ""],
        ["SI.L2-3.14.2", "Malicious Code", "Provide protection from malicious code", "NOT ASSESSED", "", ""],
        ["SI.L2-3.14.6", "Security Alerts", "Monitor security alerts and advisories", "NOT ASSESSED", "", ""],
      ],
    },
  ];

  families.forEach((fam) => {
    y = pdf.subHeading(fam.name, y);
    y = pdf.table(headers, fam.practices, y, widths);
  });

  y = pdf.sectionHeading("5  Assessment Summary", y);
  y = pdf.formFields([
    { label: "Total Compliant Practices" },
    { label: "Total Partial" },
    { label: "Total Non-Compliant" },
    { label: "Estimated SPRS Score" },
  ], y);

  y = pdf.signOff(["CISO / IT Security Lead", "Compliance / Contracts", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// EFC-DLV-009 — CTIP 2026 Audit Readiness Checklist Framework
// ═══════════════════════════════════════════════════════════════
export function generateCtipAuditChecklist(): Blob {
  const pdf = new BrandedPdf({
    docCode: "EFC-DLV-009",
    title: "CTIP 2026 Audit Readiness Checklist Framework",
    subtitle: "A comprehensive audit readiness framework aligned with FAR 52.222-50, Executive Order 13627, and 2026 enforcement guidance for Combating Trafficking in Persons (CTIP) compliance.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Regulatory Background", y);
  y = pdf.bodyText(
    "The Combating Trafficking in Persons (CTIP) program is a federal requirement under FAR 52.222-50 and Executive Order 13627. All federal contractors and subcontractors are prohibited from engaging in trafficking-related activities. Contracts exceeding $550,000 with overseas performance require a formal Compliance Plan.",
    y
  );
  y = pdf.bodyText(
    "This checklist prepares organizations for CTIP compliance audits and is aligned with the 2026 enforcement guidance. All items must be addressed and documented prior to audit.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Complete each section before contract performance begins and update annually. Check each box when addressed, assign an evidence reference, and note the responsible owner.",
    y
  );

  y = pdf.sectionHeading("2  Contract & Organization Details", y);
  y = pdf.formFields([
    { label: "Organization / Contractor Name" },
    { label: "Contract Number(s)" },
    { label: "Contracting Agency" },
    { label: "Performance Location(s)" },
    { label: "CTIP Compliance Officer" },
    { label: "Compliance Plan Version & Date" },
  ], y);

  y = pdf.sectionHeading("3  CTIP Audit Readiness Checklist", y);

  const headers = ["✓", "Checklist Item", "Requirement", "Status", "Evidence Ref", "Owner"];
  const widths = [8, 60, 28, 22, 24, 32];

  y = pdf.subHeading("Section A — Policy & Governance", y);
  y = pdf.table(headers, [
    ["☐", "Written CTIP compliance policy approved by senior management", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Policy explicitly prohibits all trafficking-related activities", "FAR 52.222-50(b)", "NOT ASSESSED", "", ""],
    ["☐", "Policy distributed to all employees, subcontractors, and agents", "EO 13627", "NOT ASSESSED", "", ""],
    ["☐", "CTIP compliance officer designated with documented responsibilities", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "CTIP requirements flowed down to all subcontractors", "FAR 52.222-50(h)", "NOT ASSESSED", "", ""],
    ["☐", "Policy available in all languages relevant to workforce", "Best Practice", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.subHeading("Section B — Employee Awareness & Training", y);
  y = pdf.table(headers, [
    ["☐", "Initial CTIP training provided to all employees before deployment", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Annual refresher training conducted and documented", "EO 13627", "NOT ASSESSED", "", ""],
    ["☐", "Training covers all prohibited activities under FAR 52.222-50(b)", "FAR 52.222-50(b)", "NOT ASSESSED", "", ""],
    ["☐", "Training includes reporting mechanisms and whistleblower protections", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Training records maintained with dates, attendees, and content", "Best Practice", "NOT ASSESSED", "", ""],
    ["☐", "Managers receive enhanced training on recognition and response", "Best Practice", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.subHeading("Section C — Recruitment & Employment Practices", y);
  y = pdf.table(headers, [
    ["☐", "No recruitment fees charged to employees", "FAR 52.222-50(b)(4)", "NOT ASSESSED", "", ""],
    ["☐", "Written employment contracts in language understood by employee", "FAR 52.222-50(b)(5)", "NOT ASSESSED", "", ""],
    ["☐", "No denying access to identity or immigration documents", "FAR 52.222-50(b)(2)", "NOT ASSESSED", "", ""],
    ["☐", "No misleading or fraudulent recruitment practices", "FAR 52.222-50(b)(6)", "NOT ASSESSED", "", ""],
    ["☐", "Housing standards meet host-country requirements (if provided)", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Return transportation provided upon end of employment", "FAR 52.222-50", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.subHeading("Section D — Monitoring & Reporting", y);
  y = pdf.table(headers, [
    ["☐", "Internal monitoring program established for compliance oversight", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Confidential reporting mechanism available to all workers", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Reporting mechanism accessible in all relevant languages", "Best Practice", "NOT ASSESSED", "", ""],
    ["☐", "No retaliation policy for good-faith reports documented", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Annual compliance assessment conducted and documented", "EO 13627", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.subHeading("Section E — Subcontractor Oversight", y);
  y = pdf.table(headers, [
    ["☐", "CTIP requirements included in all subcontract agreements", "FAR 52.222-50(h)", "NOT ASSESSED", "", ""],
    ["☐", "Subcontractor compliance plans reviewed and approved", "Best Practice", "NOT ASSESSED", "", ""],
    ["☐", "Periodic audits of subcontractor CTIP compliance conducted", "Best Practice", "NOT ASSESSED", "", ""],
    ["☐", "Subcontractor training records collected and retained", "Best Practice", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.subHeading("Section F — Documentation & Record Retention", y);
  y = pdf.table(headers, [
    ["☐", "All CTIP policies, training records, and reports retained for 3+ years", "FAR 4.703", "NOT ASSESSED", "", ""],
    ["☐", "Compliance plan version history maintained", "Best Practice", "NOT ASSESSED", "", ""],
    ["☐", "All incident reports and investigations documented and retained", "FAR 52.222-50", "NOT ASSESSED", "", ""],
    ["☐", "Annual compliance certification submitted to contracting officer", "FAR 52.222-50", "NOT ASSESSED", "", ""],
  ], y, widths);

  y = pdf.sectionHeading("4  Audit Readiness Summary", y);
  y = pdf.formFields([
    { label: "Items Complete" },
    { label: "Items In Progress" },
    { label: "Items Not Started" },
    { label: "Audit Ready? (YES / NO)" },
  ], y);

  y = pdf.signOff(["CTIP Compliance Officer", "Contracts Lead", "Senior Management"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}
