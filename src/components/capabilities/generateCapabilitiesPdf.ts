import jsPDF from "jspdf";

interface LeadInfo {
  name: string;
  email: string;
  company: string;
  industry: string;
}

export function generateCapabilitiesPdf(lead: LeadInfo) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentW = w - margin * 2;
  let y = 0;

  const navy = [10, 25, 47] as const;
  const accent = [0, 122, 255] as const;
  const slate = [71, 85, 105] as const;
  const white = [255, 255, 255] as const;

  // Helper: add horizontal rule
  const hr = (yPos: number) => {
    doc.setDrawColor(...accent);
    doc.setLineWidth(0.4);
    doc.line(margin, yPos, w - margin, yPos);
    return yPos + 6;
  };

  // Helper: wrapped body text
  const bodyText = (text: string, startY: number, fontSize = 10): number => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...slate);
    const lines = doc.splitTextToSize(text, contentW);
    doc.text(lines, margin, startY);
    return startY + lines.length * (fontSize * 0.45) + 4;
  };

  // Helper: section heading
  const sectionHeading = (text: string, startY: number): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(...navy);
    doc.text(text, margin, startY);
    return startY + 8;
  };

  // Helper: check page break
  const checkPage = (currentY: number, needed = 40): number => {
    if (currentY + needed > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      return 25;
    }
    return currentY;
  };

  // ─── PAGE 1: COVER ───
  doc.setFillColor(...navy);
  doc.rect(0, 0, w, doc.internal.pageSize.getHeight(), "F");

  // Accent bar
  doc.setFillColor(...accent);
  doc.rect(0, 0, w, 4, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(32);
  doc.setTextColor(...white);
  doc.text("ElevateQCS", margin, 60);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(200, 210, 225);
  doc.text("Elevate Quality Compliance Solutions LLC", margin, 72);

  doc.setDrawColor(...accent);
  doc.setLineWidth(1);
  doc.line(margin, 82, margin + 50, 82);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...white);
  const coverTitle = doc.splitTextToSize(
    "Capabilities Statement",
    contentW
  );
  doc.text(coverTitle, margin, 100);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(200, 210, 225);
  const coverSub = doc.splitTextToSize(
    "Governance Infrastructure & Compliance Systems for Highly Regulated Industries",
    contentW
  );
  doc.text(coverSub, margin, 116);

  // Contact info at bottom
  doc.setFontSize(10);
  doc.setTextColor(160, 175, 195);
  doc.text("info@elevateqcs.com", margin, 250);
  doc.text("elevateqcs.com", margin, 257);
  doc.text("Delaware, USA | Global Operations", margin, 264);

  // ─── PAGE 2: COMPANY OVERVIEW ───
  doc.addPage();
  y = 25;

  y = sectionHeading("Company Overview", y);
  y = hr(y);

  y = bodyText(
    "ElevateQCS is a specialized compliance and governance advisory firm that helps organizations operating in regulated environments design the internal systems required to meet global regulatory expectations.",
    y
  );
  y = bodyText(
    "We architect governance frameworks, quality management systems, and compliance infrastructures that protect contract value, strengthen internal controls, and align operational workflows with international standards.",
    y
  );
  y = bodyText(
    "Organizations operating in sectors such as defense, advanced manufacturing, medical technology, and federal contracting rely on structured governance to maintain operational stability and regulatory credibility. Our role is to design those systems.",
    y
  );

  y += 6;

  // ─── STRATEGIC ADVISORY DOMAINS ───
  y = sectionHeading("Strategic Advisory Domains", y);
  y = hr(y);

  const domains = [
    {
      title: "Governance & Quality Architecture",
      body: "ElevateQCS designs enterprise-grade governance structures and Quality Management Systems (QMS) that anchor internal operations and enable sustainable compliance. Our advisory supports organizations implementing or strengthening frameworks aligned with ISO 9001, AS9100, ISO 13485, ISO 31000, and enterprise governance environments.",
    },
    {
      title: "Federal & Regulatory Discipline",
      body: "Organizations participating in government supply chains face complex regulatory obligations. ElevateQCS supports organizations navigating FAR and DFARS contractual obligations, CMMC and NIST 800-171 cybersecurity requirements, federal supply chain risk management expectations, and human rights compliance including FAR 52.222-50 and EU CSDDD frameworks.",
    },
    {
      title: "Audit & Compliance Infrastructure",
      body: "Regulatory compliance is not a single event — it is a continuous operational condition. ElevateQCS helps organizations build internal systems that maintain permanent readiness for regulatory inspections, certification audits, contract compliance reviews, and supplier governance evaluations.",
    },
  ];

  domains.forEach((d) => {
    y = checkPage(y, 50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...navy);
    doc.text(d.title, margin, y);
    y += 6;
    y = bodyText(d.body, y, 9.5);
    y += 2;
  });

  // ─── PAGE: REGULATORY EXPERTISE ───
  y = checkPage(y, 60);
  y = sectionHeading("Regulatory Expertise", y);
  y = hr(y);

  const expertise = [
    "ISO 9001:2015 / 2026 Quality Management Systems",
    "AS9100 Rev D Aerospace Quality Standards",
    "ISO 13485 Medical Device QMS",
    "CMMC / NIST 800-171 Cybersecurity Maturity",
    "FAR / DFARS Federal Acquisition Regulations",
    "FAR 52.222-50 Combating Trafficking in Persons",
    "EU Corporate Sustainability Due Diligence (CSDDD / CS3D)",
    "ISO 31000 Risk Management",
    "ITAR Export Control Governance",
  ];

  expertise.forEach((item) => {
    y = checkPage(y, 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...slate);
    doc.text(`•  ${item}`, margin + 4, y);
    y += 5.5;
  });

  y += 4;

  // ─── INDUSTRIES SUPPORTED ───
  y = checkPage(y, 60);
  y = sectionHeading("Industries Supported", y);
  y = hr(y);

  const industryList = [
    "Defense & Aerospace — FAR, DFARS, CMMC, ITAR, AS9100",
    "Federal IT & Systems — Cybersecurity, procurement governance",
    "Advanced Manufacturing — ISO 9001, operational governance",
    "Medical Devices — FDA, EU MDR, ISO 13485",
    "Cybersecurity & Technology — GRC infrastructure",
    "Energy & Climate Infrastructure — ESG, environmental compliance",
  ];

  industryList.forEach((item) => {
    y = checkPage(y, 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...slate);
    doc.text(`•  ${item}`, margin + 4, y);
    y += 5.5;
  });

  y += 4;

  // ─── ENGAGEMENT MODELS ───
  y = checkPage(y, 60);
  y = sectionHeading("Engagement Models", y);
  y = hr(y);

  const models = [
    {
      title: "Governance Architecture Projects",
      body: "Design and implementation of enterprise governance frameworks and quality management systems.",
    },
    {
      title: "Compliance Gap Assessments",
      body: "Structured diagnostic reviews identifying regulatory exposure and operational compliance gaps.",
    },
    {
      title: "Federal Supply Chain Readiness",
      body: "Governance preparation for organizations entering government contracting ecosystems.",
    },
    {
      title: "Audit & Certification Preparation",
      body: "System architecture and documentation design supporting ISO certification and regulatory inspections.",
    },
  ];

  models.forEach((m) => {
    y = checkPage(y, 20);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...navy);
    doc.text(m.title, margin, y);
    y += 5;
    y = bodyText(m.body, y, 9.5);
  });

  // ─── CONTACT ───
  y = checkPage(y, 50);
  y += 6;
  y = sectionHeading("Contact Information", y);
  y = hr(y);

  const contactLines = [
    "Elevate Quality Compliance Solutions LLC",
    "Email: info@elevateqcs.com",
    "Web: elevateqcs.com",
    "Jurisdiction: Delaware, USA",
    "Operations: Global",
  ];

  contactLines.forEach((line) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...slate);
    doc.text(line, margin, y);
    y += 6;
  });

  y += 8;

  // Disclaimer
  y = checkPage(y, 30);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(7.5);
  doc.setTextColor(140, 150, 165);
  const disclaimer = doc.splitTextToSize(
    "DISCLAIMER: The materials provided by ElevateQCS are for informational purposes only. They do not constitute legal advice, financial advice, regulatory certification, or formal compliance advisory. Organizations should conduct independent due diligence and consult appropriate professional advisors before implementing any governance or compliance program. Use of these materials does not establish an advisory relationship with ElevateQCS.",
    contentW
  );
  doc.text(disclaimer, margin, y);

  doc.save(
    "ElevateQCS-Government-Compliance-Advisory-Capabilities-Statement.pdf"
  );
}
