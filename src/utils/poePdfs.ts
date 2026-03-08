import { BrandedPdf } from "./pdfBranding";

// ═══════════════════════════════════════════════════════════════
// POE-DLV-001 — Corrective Action Plan (CAPA) Submission Framework
// ═══════════════════════════════════════════════════════════════
export function generateCapaSubmission(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-001",
    title: "Corrective Action Plan (CAPA) Submission Framework",
    subtitle: "A strategic response template for Level II/III Corrective Action Requests (CARs) from Prime Contractors. Designed for rapid, defensible submissions that demonstrate root cause analysis, containment, and systemic prevention.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This Corrective Action Plan (CAPA) Submission Framework provides a structured response template for Level II and Level III Corrective Action Requests issued by Prime Contractors or Government surveillance teams. The framework ensures submissions demonstrate root cause identification, immediate containment, long-term corrective actions, and verification of effectiveness — the four elements auditors evaluate when determining adequacy of response.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Complete this framework within the Prime's required response window (typically 14–30 days for Level II, 7–14 days for Level III). Ensure every section addresses the SPECIFIC finding — generic responses result in rejection. Attach supporting evidence as referenced in Section 9.",
    y
  );

  y = pdf.sectionHeading("2  CAR Reference Information", y);
  y = pdf.formFields([
    { label: "CAR Number / Reference ID" },
    { label: "CAR Level (II / III)" },
    { label: "Issuing Authority (Prime / DCMA / COR)" },
    { label: "Date Received" },
    { label: "Response Deadline" },
    { label: "Contract Number" },
    { label: "Task Order Number" },
    { label: "Site / Location" },
    { label: "Finding Category (Quality / Safety / CTIP / Documentation)" },
    { label: "CAPA Response Owner" },
  ], y);

  y = pdf.sectionHeading("3  Finding Description", y);
  y = pdf.bodyText(
    "Restate the finding in your own words to confirm understanding. Reference the specific clause, specification, or contract requirement cited in the CAR.",
    y
  );
  y = pdf.formFields([
    { label: "Original Finding Statement (from CAR)", width: pdf.cw },
    { label: "Restated Finding (your understanding)", width: pdf.cw },
    { label: "Contract / Regulatory Reference Cited", width: pdf.cw },
  ], y);

  y = pdf.sectionHeading("4  Immediate Containment Actions", y);
  y = pdf.bodyText(
    "Document all immediate actions taken to contain the nonconformity and prevent recurrence during the investigation period. These must be implemented BEFORE submitting the full CAPA response.",
    y
  );
  y = pdf.table(
    ["#", "Containment Action", "Responsible", "Date Implemented", "Evidence Reference"],
    [
      ["1", "", "", "", ""],
      ["2", "", "", "", ""],
      ["3", "", "", "", ""],
      ["4", "", "", "", ""],
    ],
    y,
    [8, 64, 24, 30, 48]
  );

  y = pdf.sectionHeading("5  Root Cause Analysis", y);
  y = pdf.bodyText(
    "Identify the root cause(s) using a structured methodology. The 5-Why analysis is the minimum expectation. For Level III CARs, Fishbone (Ishikawa) or Fault Tree Analysis may be required.",
    y
  );
  y = pdf.subHeading("5.1  5-Why Analysis", y);
  y = pdf.table(
    ["Level", "Question", "Answer"],
    [
      ["Why 1", "Why did this nonconformity occur?", ""],
      ["Why 2", "Why did the condition in Why 1 exist?", ""],
      ["Why 3", "Why did the condition in Why 2 exist?", ""],
      ["Why 4", "Why did the condition in Why 3 exist?", ""],
      ["Why 5", "What is the systemic root cause?", ""],
    ],
    y,
    [16, 60, 98]
  );
  y = pdf.formFields([
    { label: "Root Cause Statement (summary)", width: pdf.cw },
    { label: "Contributing Factors", width: pdf.cw },
  ], y);

  y = pdf.sectionHeading("6  Corrective Actions", y);
  y = pdf.bodyText(
    "Define specific, measurable corrective actions that address the root cause — not just the symptoms. Each action must have an owner, target date, and verification method.",
    y
  );
  y = pdf.table(
    ["#", "Corrective Action", "Root Cause Addressed", "Owner", "Target Date", "Verification Method"],
    [
      ["CA-1", "", "", "", "", ""],
      ["CA-2", "", "", "", "", ""],
      ["CA-3", "", "", "", "", ""],
      ["CA-4", "", "", "", "", ""],
      ["CA-5", "", "", "", "", ""],
    ],
    y,
    [10, 44, 30, 20, 24, 46]
  );

  y = pdf.sectionHeading("7  Preventive Actions", y);
  y = pdf.bodyText(
    "Document actions to prevent recurrence across the broader organization — not just the specific site or process where the finding occurred.",
    y
  );
  y = pdf.table(
    ["#", "Preventive Action", "Scope of Application", "Owner", "Implementation Date"],
    [
      ["PA-1", "", "", "", ""],
      ["PA-2", "", "", "", ""],
      ["PA-3", "", "", "", ""],
    ],
    y,
    [10, 54, 40, 24, 46]
  );

  y = pdf.sectionHeading("8  Effectiveness Verification Plan", y);
  y = pdf.bodyText(
    "Define how you will verify that corrective and preventive actions have been effective. Include timeline, metrics, and responsible verifier (must be different from the action owner).",
    y
  );
  y = pdf.formFields([
    { label: "Verification Method" },
    { label: "Verification Date" },
    { label: "Verified By (independent from action owner)" },
    { label: "Metrics / Success Criteria" },
    { label: "Verification Status (Pending / Complete / Extended)" },
    { label: "Evidence Reference" },
  ], y);

  y = pdf.sectionHeading("9  Supporting Evidence Index", y);
  y = pdf.table(
    ["Ref #", "Document / Evidence Title", "Type", "Attached?"],
    [
      ["E-1", "", "Photo / Document / Record / Training Log", "☐"],
      ["E-2", "", "", "☐"],
      ["E-3", "", "", "☐"],
      ["E-4", "", "", "☐"],
      ["E-5", "", "", "☐"],
    ],
    y,
    [14, 70, 56, 34]
  );

  y = pdf.signOff(["CAPA Owner", "Quality Manager", "Site / Program Manager"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// POE-DLV-002 — LOGCAP VI Mobilization & 96-Hour Sprint Readiness Plan
// ═══════════════════════════════════════════════════════════════
export function generateMobilizationPlan(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-002",
    title: "LOGCAP VI Mobilization & 96-Hour Sprint Readiness Plan",
    subtitle: "A comprehensive mobilization planning framework for documenting surge capacity, rapid personnel staging, equipment pre-positioning, and quality infrastructure deployment within the mandatory 96-hour LOGCAP deployment window.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This Mobilization & 96-Hour Sprint Readiness Plan documents your organization's capability to achieve full operational readiness within the deployment windows mandated by LOGCAP V/VI task orders. It serves as both an internal readiness validation tool and an evidence package for Prime contractor mobilization reviews.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Complete all sections with current data. Review and update quarterly. Use this plan as the basis for tabletop mobilization exercises. Present to Prime Contractors during pre-award mobilization capability briefings.",
    y
  );

  y = pdf.sectionHeading("2  Organization & Contract Details", y);
  y = pdf.formFields([
    { label: "Organization Name" },
    { label: "LOGCAP Contract Vehicle" },
    { label: "Primary Functional Area (DFAC / MWR / Base Ops / Maintenance)" },
    { label: "OCONUS Regions of Capability" },
    { label: "Mobilization Plan Owner" },
    { label: "Last Mobilization Exercise Date" },
    { label: "Plan Version / Last Updated" },
    { label: "Current Warm-Status Classification" },
  ], y);

  y = pdf.sectionHeading("3  Personnel Surge Capacity", y);
  y = pdf.table(
    ["Category", "Standby Count", "Clearance Status", "Medical Status", "Deploy-Ready?", "Bottleneck"],
    [
      ["Program Manager / Site Lead", "", "", "", "☐", ""],
      ["Quality Manager / QC Inspector", "", "", "", "☐", ""],
      ["Safety Officer (SSHO)", "", "", "", "☐", ""],
      ["Technical / Trades Personnel", "", "", "", "☐", ""],
      ["Administrative / HR Support", "", "", "", "☐", ""],
      ["Third Country Nationals (TCNs)", "", "", "", "☐", ""],
      ["Local National Hires", "", "", "", "☐", ""],
    ],
    y,
    [36, 22, 24, 22, 22, 48]
  );

  y = pdf.sectionHeading("4  TCN Visa & Immigration Pipeline", y);
  y = pdf.table(
    ["Region / Country", "Visa Type", "Processing Time", "Embassy Contact?", "Pre-Approved Pipeline?"],
    [
      ["", "", "", "☐", "☐"],
      ["", "", "", "☐", "☐"],
      ["", "", "", "☐", "☐"],
      ["", "", "", "☐", "☐"],
    ],
    y,
    [34, 28, 30, 32, 50]
  );
  y = pdf.formFields([
    { label: "Visa Processing Bottleneck Mitigation Strategy", width: pdf.cw },
  ], y);

  y = pdf.sectionHeading("5  Equipment & Logistics Pre-Positioning", y);
  y = pdf.table(
    ["Equipment Category", "Pre-Positioned Location", "Quantity", "Maintenance Current?", "Ship Time to AOR"],
    [
      ["Vehicles / Fleet", "", "", "☐", ""],
      ["Generators / Power", "", "", "☐", ""],
      ["IT / Communications", "", "", "☐", ""],
      ["Safety Equipment / PPE", "", "", "☐", ""],
      ["Specialty Tools / Trade Equipment", "", "", "☐", ""],
    ],
    y,
    [38, 38, 20, 28, 50]
  );

  y = pdf.sectionHeading("6  Logistics Partner Network", y);
  y = pdf.table(
    ["Partner Name", "Service", "LOA Status", "Theater Access?", "Response Time SLA"],
    [
      ["", "", "", "☐", ""],
      ["", "", "", "☐", ""],
      ["", "", "", "☐", ""],
    ],
    y,
    [34, 34, 24, 24, 58]
  );

  y = pdf.sectionHeading("7  Quality Infrastructure Deployment Package", y);
  y = pdf.bodyText(
    "Document your deployable QMS package — the documentation and systems that can be activated at a new site within 96 hours.",
    y
  );
  y = pdf.table(
    ["QMS Component", "Template Ready?", "Digital System?", "Deploy Time", "Owner"],
    [
      ["Quality Management Plan (QMP)", "☐", "☐", "", ""],
      ["Inspection & Test Plans (ITPs)", "☐", "☐", "", ""],
      ["NCR / CAPA Procedures", "☐", "☐", "", ""],
      ["Document Control System", "☐", "☐", "", ""],
      ["Training Records System", "☐", "☐", "", ""],
      ["Supplier Qualification Files", "☐", "☐", "", ""],
    ],
    y,
    [40, 24, 24, 24, 62]
  );

  y = pdf.sectionHeading("8  Safety & Medical Deployment", y);
  y = pdf.table(
    ["Safety Component", "Ready?", "Status", "Owner"],
    [
      ["Site Safety & Health Plan (SSHP)", "☐", "", ""],
      ["MEDEVAC Agreement / Protocol", "☐", "", ""],
      ["PPE Inventory (pre-positioned)", "☐", "", ""],
      ["SSHO Trained & Certified", "☐", "", ""],
      ["Emergency Response Plan", "☐", "", ""],
      ["Environmental Management Plan", "☐", "", ""],
    ],
    y,
    [44, 14, 58, 58]
  );

  y = pdf.sectionHeading("9  96-Hour Sprint Timeline", y);
  y = pdf.table(
    ["Hour", "Milestone", "Responsible", "Dependencies", "Status"],
    [
      ["H+0", "Task Order Award — Mobilization order issued", "", "", ""],
      ["H+4", "Key personnel notified, travel authorized", "", "", ""],
      ["H+12", "Advance party deploys with comms equipment", "", "", ""],
      ["H+24", "QMS documentation package activated at site", "", "", ""],
      ["H+48", "Main body personnel arrive; equipment staged", "", "", ""],
      ["H+72", "Safety systems operational; training commenced", "", "", ""],
      ["H+96", "Full Operational Capability (FOC) declared", "", "", ""],
    ],
    y,
    [16, 52, 26, 40, 40]
  );

  y = pdf.sectionHeading("10  Risk Register & Bottleneck Analysis", y);
  y = pdf.table(
    ["Risk / Bottleneck", "Likelihood", "Impact", "Mitigation", "Owner"],
    [
      ["TCN visa processing delay", "", "", "", ""],
      ["Equipment shipping delay", "", "", "", ""],
      ["Personnel medical clearance gap", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    y,
    [38, 20, 18, 56, 42]
  );

  y = pdf.signOff(["Mobilization Lead", "Operations Director", "Program Manager"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// POE-DLV-003 — Non-Conformance Report (NCR) Field Log & Resolution Tracker
// ═══════════════════════════════════════════════════════════════
export function generateNcrFieldLog(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-003",
    title: "Non-Conformance Report (NCR) Field Log & Resolution Tracker",
    subtitle: "An operational field tool for site managers to self-identify, log, track, and close non-conformances before formal audits. Designed for daily site operations in austere and OCONUS environments.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This NCR Field Log enables site managers and quality personnel to proactively identify, document, and resolve non-conformances in real-time — before they become formal audit findings. Regular use of this log demonstrates a culture of self-assessment and continuous improvement that auditors specifically evaluate during surveillance visits.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Log every identified non-conformance immediately. Assign severity using the classification guide. Track resolution through to closure and verification. Review this log weekly with site leadership. Present during Prime/DCMA surveillance as evidence of proactive quality management.",
    y
  );

  y = pdf.sectionHeading("2  Site & Period Information", y);
  y = pdf.formFields([
    { label: "Site Name / Location" },
    { label: "Contract / Task Order Number" },
    { label: "Reporting Period (From – To)" },
    { label: "NCR Log Owner / Quality Manager" },
    { label: "Total NCRs This Period" },
    { label: "Open NCRs Carried Forward" },
  ], y);

  y = pdf.sectionHeading("3  NCR Severity Classification Guide", y);
  y = pdf.table(
    ["Severity", "Definition", "Response Time", "Escalation"],
    [
      ["CRITICAL", "Immediate risk to safety, regulatory compliance, or contract performance", "24 hours", "Program Manager + Prime QA"],
      ["MAJOR", "Significant departure from specification, procedure, or contract requirement", "5 business days", "Site Quality Manager"],
      ["MINOR", "Observation or minor departure that does not affect product/service conformity", "30 days", "Site Supervisor"],
      ["OBSERVATION", "Opportunity for improvement — no current non-conformity", "Next review cycle", "Log only"],
    ],
    y,
    [22, 58, 28, 66]
  );

  y = pdf.sectionHeading("4  NCR Field Log", y);
  y = pdf.table(
    ["NCR #", "Date", "Area / Process", "Description", "Severity", "Assigned To", "Target Date", "Status"],
    [
      ["NCR-001", "", "", "", "", "", "", "OPEN"],
      ["NCR-002", "", "", "", "", "", "", "OPEN"],
      ["NCR-003", "", "", "", "", "", "", "OPEN"],
      ["NCR-004", "", "", "", "", "", "", "OPEN"],
      ["NCR-005", "", "", "", "", "", "", "OPEN"],
      ["NCR-006", "", "", "", "", "", "", "OPEN"],
      ["NCR-007", "", "", "", "", "", "", "OPEN"],
      ["NCR-008", "", "", "", "", "", "", "OPEN"],
      ["NCR-009", "", "", "", "", "", "", "OPEN"],
      ["NCR-010", "", "", "", "", "", "", "OPEN"],
    ],
    y,
    [16, 16, 22, 38, 16, 20, 20, 26]
  );

  y = pdf.sectionHeading("5  NCR Resolution Record", y);
  y = pdf.bodyText(
    "For each NCR, document the resolution details below. This section serves as the evidence trail for closure.",
    y
  );
  y = pdf.table(
    ["NCR #", "Root Cause", "Corrective Action Taken", "Evidence / Photos", "Closed By", "Closure Date", "Verified By"],
    [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ],
    y,
    [14, 28, 38, 24, 20, 22, 28]
  );

  y = pdf.sectionHeading("6  Weekly Summary Metrics", y);
  y = pdf.table(
    ["Metric", "This Week", "Last Week", "Trend"],
    [
      ["New NCRs Opened", "", "", "↑ / ↓ / →"],
      ["NCRs Closed", "", "", "↑ / ↓ / →"],
      ["NCRs Open (Total)", "", "", "↑ / ↓ / →"],
      ["Average Days to Close", "", "", "↑ / ↓ / →"],
      ["Overdue NCRs (past target)", "", "", "↑ / ↓ / →"],
      ["Critical / Major NCRs Open", "", "", "↑ / ↓ / →"],
    ],
    y,
    [44, 34, 34, 62]
  );

  y = pdf.signOff(["Site Quality Manager", "Site Manager", "Program Manager"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// POE-DLV-004 — OCONUS Site Safety (OSHA 2026) Manual Template
// ═══════════════════════════════════════════════════════════════
export function generateOconusSafetyManual(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-004",
    title: "OCONUS Site Safety (OSHA 2026) Manual Template",
    subtitle: "A hybrid safety plan framework for austere environments under U.S. federal oversight. Integrates OSHA 29 CFR 1926 standards with theater-specific hazards, MEDEVAC protocols, and site-specific risk assessments for OCONUS operations.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Applicability", y);
  y = pdf.bodyText(
    "This OCONUS Site Safety Manual template provides a hybrid safety framework that merges OSHA 29 CFR 1926 construction/general industry standards with the unique hazards of austere-environment operations. It serves as the foundation for the Site Safety and Health Plan (SSHP) required by most LOGCAP and OCONUS defense contracts.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Customize each section for your specific site conditions. Delete sections that do not apply. Add site-specific hazards in Section 7. This template should be reviewed by your Site Safety and Health Officer (SSHO) before deployment and updated whenever site conditions change.",
    y
  );

  y = pdf.sectionHeading("2  Site & Project Information", y);
  y = pdf.formFields([
    { label: "Site Name / Installation" },
    { label: "Country / Region" },
    { label: "Contract / Task Order Number" },
    { label: "Prime Contractor" },
    { label: "SSHO Name & Certification" },
    { label: "Plan Effective Date" },
    { label: "Plan Review Date" },
    { label: "Emergency Contact Number (On-Site)" },
  ], y);

  y = pdf.sectionHeading("3  Safety Organization & Responsibilities", y);
  y = pdf.table(
    ["Role", "Name", "Responsibilities", "Contact"],
    [
      ["Site Safety & Health Officer (SSHO)", "", "Overall safety program management, inspections, incident investigation", ""],
      ["Program / Site Manager", "", "Resource allocation, safety program authority, management review", ""],
      ["Quality Manager", "", "Safety documentation integration, audit support", ""],
      ["Medical Officer / EMT", "", "First aid, medical screening, MEDEVAC coordination", ""],
      ["Supervisor / Foreman", "", "Daily safety briefings, hazard identification, PPE enforcement", ""],
    ],
    y,
    [38, 26, 68, 42]
  );

  y = pdf.sectionHeading("4  Applicable Standards & References", y);
  y = pdf.bulletList([
    "OSHA 29 CFR 1926 — Construction Industry Standards",
    "OSHA 29 CFR 1910 — General Industry Standards",
    "EM 385-1-1 — U.S. Army Corps of Engineers Safety & Health Requirements Manual",
    "NFPA 10, 30, 70E — Fire protection and electrical safety",
    "ACGIH TLVs — Heat stress and chemical exposure guidelines",
    "Theater-specific Force Protection and Environmental standards",
    "Prime Contractor site-specific safety requirements",
  ], y);

  y = pdf.sectionHeading("5  Emergency Action Plan", y);
  y = pdf.subHeading("5.1  MEDEVAC Protocol", y);
  y = pdf.formFields([
    { label: "Nearest Military Medical Facility" },
    { label: "Nearest Civilian Hospital" },
    { label: "MEDEVAC Provider / Agreement Number" },
    { label: "Estimated Response Time" },
    { label: "MEDEVAC Frequency / Call Sign" },
    { label: "Alternate Evacuation Route" },
  ], y);

  y = pdf.subHeading("5.2  Emergency Response Contacts", y);
  y = pdf.table(
    ["Emergency Type", "Primary Contact", "Secondary Contact", "Procedure Reference"],
    [
      ["Medical Emergency", "", "", ""],
      ["Fire / Explosion", "", "", ""],
      ["Chemical Spill / HAZMAT", "", "", ""],
      ["Unexploded Ordnance (UXO)", "", "", ""],
      ["Security Incident / Attack", "", "", ""],
      ["Natural Disaster", "", "", ""],
    ],
    y,
    [36, 38, 38, 62]
  );

  y = pdf.sectionHeading("6  PPE Requirements Matrix", y);
  y = pdf.table(
    ["Work Area / Activity", "Hard Hat", "Eye Pro", "Hearing Pro", "Gloves", "Hi-Vis", "Respiratory", "Fall Pro"],
    [
      ["General Site Access", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Construction / Demolition", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Electrical Work", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Confined Space Entry", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Hot Work / Welding", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
      ["Vehicle Operations", "☐", "☐", "☐", "☐", "☐", "☐", "☐"],
    ],
    y,
    [36, 16, 16, 18, 16, 14, 20, 38]
  );

  y = pdf.sectionHeading("7  Site-Specific Hazard Assessment", y);
  y = pdf.table(
    ["Hazard", "Location / Activity", "Risk Level", "Controls", "Responsible"],
    [
      ["Heat Stress / Dehydration", "", "HIGH / MED / LOW", "", ""],
      ["Dust / Particulate Exposure", "", "HIGH / MED / LOW", "", ""],
      ["Unexploded Ordnance (UXO)", "", "HIGH / MED / LOW", "", ""],
      ["Electrical Hazards", "", "HIGH / MED / LOW", "", ""],
      ["Fall Hazards (>6 ft)", "", "HIGH / MED / LOW", "", ""],
      ["Vehicle / Equipment Strike", "", "HIGH / MED / LOW", "", ""],
      ["", "", "HIGH / MED / LOW", "", ""],
      ["", "", "HIGH / MED / LOW", "", ""],
    ],
    y,
    [36, 30, 26, 42, 40]
  );

  y = pdf.sectionHeading("8  Training Requirements", y);
  y = pdf.table(
    ["Training Topic", "Frequency", "Required For", "Record Location"],
    [
      ["Site Safety Orientation (all personnel)", "On arrival", "All", ""],
      ["Daily Toolbox / Safety Brief", "Daily", "All site workers", ""],
      ["Heat Stress Prevention", "Seasonal / Quarterly", "All", ""],
      ["HAZCOM / GHS", "Annual + new chemicals", "Chemical handlers", ""],
      ["Confined Space Entry", "Annual", "Certified entrants", ""],
      ["Fall Protection", "Annual", "Workers at height", ""],
      ["Fire Extinguisher Use", "Annual", "All", ""],
      ["MEDEVAC / Emergency Drill", "Quarterly", "All", ""],
    ],
    y,
    [44, 30, 38, 62]
  );

  y = pdf.sectionHeading("9  Incident Reporting & Investigation", y);
  y = pdf.formFields([
    { label: "Incident Reporting Procedure Reference" },
    { label: "Prime Contractor Notification Timeline" },
    { label: "OSHA 300 Log Location" },
    { label: "Near-Miss Reporting System" },
  ], y);

  y = pdf.signOff(["SSHO", "Site / Program Manager", "Prime Safety Representative"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// POE-DLV-005 — Sub-tier Supplier CTIP Surveillance & Audit Pack
// ═══════════════════════════════════════════════════════════════
export function generateCtipSurveillancePack(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-005",
    title: "Sub-tier Supplier CTIP Surveillance & Audit Pack",
    subtitle: "Field-ready interview guides, observation checklists, and documentation review protocols for verifying FAR 52.222-50 Combating Trafficking in Persons compliance at sub-tier labor camps and supplier facilities.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Legal Authority", y);
  y = pdf.bodyText(
    "This CTIP Surveillance & Audit Pack provides field-ready tools for conducting anti-trafficking compliance assessments at sub-tier supplier facilities and labor accommodations. It is designed for use by CTIP compliance officers, quality managers, and audit teams operating under FAR 52.222-50 — Combating Trafficking in Persons.",
    y
  );
  y = pdf.bodyText(
    "Under FAR 52.222-50, formal compliance plans are mandatory for contracts exceeding $550,000 where any performance occurs outside the United States. Prime contractors bear responsibility for ensuring CTIP compliance throughout their supply chain, including sub-tier suppliers.",
    y
  );
  y = pdf.instructionBox(
    "FIELD USE: This pack contains three modules — (A) Worker Interview Guide, (B) Facility Observation Checklist, and (C) Documentation Review Protocol. Use all three during each surveillance visit. Interview workers SEPARATELY from management. Document all findings with photos and timestamps.",
    y
  );

  y = pdf.sectionHeading("2  Surveillance Visit Details", y);
  y = pdf.formFields([
    { label: "Facility / Camp Name" },
    { label: "Location (City, Country)" },
    { label: "Sub-tier Supplier Name" },
    { label: "Prime Contract Number" },
    { label: "Surveillance Team Lead" },
    { label: "Visit Date" },
    { label: "Visit Type (Scheduled / Unannounced)" },
    { label: "Interpreter Present? (Y/N)" },
  ], y);

  y = pdf.sectionHeading("3  Module A: Worker Interview Guide", y);
  y = pdf.bodyText(
    "Interview minimum 5 workers selected randomly. Conduct interviews AWAY from management and supervisors. Use an interpreter if workers do not speak the interview language. Record responses but do not share with management.",
    y
  );
  y = pdf.table(
    ["#", "Interview Question", "Expected Compliant Response", "Worker Response", "Flag?"],
    [
      ["1", "How were you recruited for this position?", "Direct hire or through licensed agency", "", "☐"],
      ["2", "Did you pay any fees to get this job?", "No fees paid (by worker)", "", "☐"],
      ["3", "Who holds your passport and travel documents?", "Worker retains own documents at all times", "", "☐"],
      ["4", "Can you leave the facility during non-work hours?", "Yes, freedom of movement confirmed", "", "☐"],
      ["5", "Do you receive your wages on time and in full?", "Yes, regular payment with no unauthorized deductions", "", "☐"],
      ["6", "Are any deductions taken from your wages?", "Only authorized, reasonable deductions", "", "☐"],
      ["7", "Did you sign a contract in a language you understand?", "Yes, contract in worker's language", "", "☐"],
      ["8", "Do you know how to report a complaint?", "Yes, aware of reporting mechanism", "", "☐"],
      ["9", "Have you ever been threatened with deportation or punishment?", "No threats", "", "☐"],
      ["10", "Are your living conditions acceptable?", "Adequate housing, sanitation, and privacy", "", "☐"],
    ],
    y,
    [8, 46, 42, 40, 38]
  );

  y = pdf.sectionHeading("4  Module B: Facility Observation Checklist", y);
  y = pdf.table(
    ["#", "Observation Area", "Compliant?", "Notes / Photos"],
    [
      ["1", "Workers can freely enter and exit accommodations during non-working hours", "☐ Y  ☐ N", ""],
      ["2", "No locked gates preventing worker departure (outside working hours)", "☐ Y  ☐ N", ""],
      ["3", "Living quarters meet minimum space, sanitation, and ventilation standards", "☐ Y  ☐ N", ""],
      ["4", "Separate sleeping quarters for male and female workers", "☐ Y  ☐ N", ""],
      ["5", "Workers have secure personal storage for documents", "☐ Y  ☐ N", ""],
      ["6", "Adequate food, water, and sanitation facilities provided", "☐ Y  ☐ N", ""],
      ["7", "No evidence of document confiscation (passports, IDs, work permits)", "☐ Y  ☐ N", ""],
      ["8", "Complaint / grievance box or mechanism visible and accessible", "☐ Y  ☐ N", ""],
      ["9", "CTIP awareness posters displayed in worker languages", "☐ Y  ☐ N", ""],
      ["10", "Medical / first aid facilities accessible to workers", "☐ Y  ☐ N", ""],
    ],
    y,
    [8, 68, 24, 74]
  );

  y = pdf.sectionHeading("5  Module C: Documentation Review Protocol", y);
  y = pdf.table(
    ["#", "Document to Review", "Available?", "Compliant?", "Notes"],
    [
      ["1", "Employment contracts (in worker language)", "☐", "☐", ""],
      ["2", "Payroll records — wages match contract terms", "☐", "☐", ""],
      ["3", "Deduction records — authorized and reasonable", "☐", "☐", ""],
      ["4", "Recruitment agency agreements — no-fee policy", "☐", "☐", ""],
      ["5", "CTIP training records for all management", "☐", "☐", ""],
      ["6", "Grievance / complaint log with response records", "☐", "☐", ""],
      ["7", "Worker passport/document return receipts", "☐", "☐", ""],
      ["8", "Sub-tier subcontract includes FAR 52.222-50 flow-down", "☐", "☐", ""],
    ],
    y,
    [8, 54, 18, 18, 76]
  );

  y = pdf.sectionHeading("6  Findings Summary & Escalation", y);
  y = pdf.table(
    ["Finding #", "Description", "Severity", "Immediate Action Required?", "CO Notification?"],
    [
      ["F-1", "", "CRITICAL / MAJOR / MINOR", "☐ Y  ☐ N", "☐ Y  ☐ N"],
      ["F-2", "", "CRITICAL / MAJOR / MINOR", "☐ Y  ☐ N", "☐ Y  ☐ N"],
      ["F-3", "", "CRITICAL / MAJOR / MINOR", "☐ Y  ☐ N", "☐ Y  ☐ N"],
      ["F-4", "", "CRITICAL / MAJOR / MINOR", "☐ Y  ☐ N", "☐ Y  ☐ N"],
    ],
    y,
    [16, 48, 32, 36, 42]
  );

  y = pdf.signOff(["Surveillance Lead", "CTIP Compliance Officer", "Program Manager"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}

// ═══════════════════════════════════════════════════════════════
// POE-DLV-006 — Performance Work Statement (PWS) Risk Mapping Matrix
// ═══════════════════════════════════════════════════════════════
export function generatePwsRiskMapping(): Blob {
  const pdf = new BrandedPdf({
    docCode: "POE-DLV-006",
    title: "Performance Work Statement (PWS) Risk Mapping Matrix",
    subtitle: "An analytical framework for identifying unfunded mandates, ambiguous requirements, and hidden contractual risks in Task Order Performance Work Statements before bid submission.",
    version: "2.0",
    date: "March 2026",
  });

  pdf.renderCover();
  let y = pdf.newPage();

  y = pdf.sectionHeading("1  Purpose & Scope", y);
  y = pdf.bodyText(
    "This PWS Risk Mapping Matrix provides a systematic framework for analyzing Performance Work Statements to identify unfunded mandates, ambiguous scope definitions, hidden compliance requirements, and performance metrics that create disproportionate financial risk. Complete this analysis before committing to a bid/no-bid decision on any task order.",
    y
  );
  y = pdf.instructionBox(
    "HOW TO USE: Review each PWS paragraph against this matrix. Flag risk items using the severity classification. Calculate total risk exposure. Use results to inform pricing strategy, exception requests, and bid/no-bid decisions. Attach this analysis to your proposal review package.",
    y
  );

  y = pdf.sectionHeading("2  Task Order & PWS Information", y);
  y = pdf.formFields([
    { label: "Task Order / Solicitation Number" },
    { label: "PWS Title" },
    { label: "Issuing Prime / Agency" },
    { label: "Response Deadline" },
    { label: "Estimated Contract Value" },
    { label: "Contract Type (FFP / CPFF / T&M)" },
    { label: "PWS Analysis Lead" },
    { label: "Analysis Date" },
  ], y);

  y = pdf.sectionHeading("3  Risk Severity Classification", y);
  y = pdf.table(
    ["Severity", "Definition", "Action Required"],
    [
      ["CRITICAL", "Unfunded mandate or requirement that could consume >5% of contract margin", "Price adjustment or formal exception required"],
      ["HIGH", "Ambiguous requirement that creates significant financial or performance risk", "Clarification required before bid submission"],
      ["MEDIUM", "Hidden compliance or reporting requirement that adds cost", "Include in cost estimate; flag in bid review"],
      ["LOW", "Minor scope ambiguity or administrative requirement", "Document assumption; include in pricing"],
    ],
    y,
    [22, 66, 86]
  );

  y = pdf.sectionHeading("4  PWS Risk Mapping Matrix", y);
  y = pdf.table(
    ["PWS Para #", "Requirement Summary", "Risk Type", "Severity", "Financial Impact", "Mitigation / Action"],
    [
      ["", "", "Unfunded Mandate", "", "$", ""],
      ["", "", "Ambiguous Scope", "", "$", ""],
      ["", "", "Hidden Compliance", "", "$", ""],
      ["", "", "Performance Metric Risk", "", "$", ""],
      ["", "", "Staffing Requirement", "", "$", ""],
      ["", "", "Equipment / Capital", "", "$", ""],
      ["", "", "Reporting / Documentation", "", "$", ""],
      ["", "", "", "", "$", ""],
      ["", "", "", "", "$", ""],
      ["", "", "", "", "$", ""],
    ],
    y,
    [18, 36, 30, 18, 24, 48]
  );

  y = pdf.sectionHeading("5  Common PWS Risk Patterns", y);
  y = pdf.bodyText(
    "Use this reference to identify common risk patterns frequently embedded in LOGCAP and federal task order PWS documents:",
    y
  );
  y = pdf.table(
    ["Risk Pattern", "PWS Language Indicator", "Typical Financial Impact"],
    [
      ["Scope Creep Trigger", "\"as directed by the COR\" / \"and other duties as assigned\"", "5–15% margin erosion"],
      ["Unfunded Training Mandate", "\"contractor shall provide all training\" without CLINs", "2–8% of labor cost"],
      ["Implicit 24/7 Coverage", "\"maintain capability to respond\" without defined hours", "30–50% staffing increase"],
      ["Undefined Quality Standards", "\"to the satisfaction of the Government\"", "Unlimited rework exposure"],
      ["Environmental Liability", "\"contractor responsible for environmental compliance\"", "Variable — potentially >$100K"],
      ["Transition-In Costs", "\"contractor shall assume operations within [X] days\"", "3–10% of first-year value"],
    ],
    y,
    [36, 62, 76]
  );

  y = pdf.sectionHeading("6  Risk Exposure Summary", y);
  y = pdf.formFields([
    { label: "Total Identified Risks" },
    { label: "Critical Risks" },
    { label: "Estimated Total Financial Exposure ($)" },
    { label: "Risk-Adjusted Margin Impact (%)" },
    { label: "Bid / No-Bid Recommendation" },
    { label: "Exceptions / Clarifications Required" },
  ], y);

  y = pdf.sectionHeading("7  Bid Review Decision", y);
  y = pdf.table(
    ["Decision Factor", "Assessment", "Notes"],
    [
      ["Technical capability to perform all requirements", "☐ YES  ☐ NO  ☐ PARTIAL", ""],
      ["Financial risk within acceptable margin parameters", "☐ YES  ☐ NO  ☐ CONDITIONAL", ""],
      ["Staffing available for required timeline", "☐ YES  ☐ NO  ☐ PARTIAL", ""],
      ["Compliance requirements fully understood", "☐ YES  ☐ NO  ☐ NEEDS CLARIFICATION", ""],
      ["Past performance supports this scope", "☐ YES  ☐ NO  ☐ PARTIAL", ""],
    ],
    y,
    [52, 40, 82]
  );

  y = pdf.formFields([
    { label: "FINAL BID DECISION: BID / NO-BID / CONDITIONAL BID", width: pdf.cw },
    { label: "Decision Rationale", width: pdf.cw },
  ], y);

  y = pdf.signOff(["PWS Analysis Lead", "Contracts Manager", "Program Director"], y);
  y = pdf.disclaimer(y);

  return pdf.getBlob();
}
