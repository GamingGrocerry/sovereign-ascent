import jsPDF from "jspdf";

// Brand colors
const NAVY: [number, number, number] = [10, 25, 47];
const ACCENT: [number, number, number] = [0, 122, 255];
const SLATE: [number, number, number] = [71, 85, 105];
const WHITE: [number, number, number] = [255, 255, 255];
const LIGHT_GREY: [number, number, number] = [241, 245, 249];
const BORDER: [number, number, number] = [203, 213, 225];

export interface PdfConfig {
  docCode: string;
  title: string;
  subtitle: string;
  version: string;
  date: string;
}

export class BrandedPdf {
  doc: jsPDF;
  w: number;
  h: number;
  m = 18; // margin
  cw: number; // content width
  y = 0;
  config: PdfConfig;
  pageNum = 0;

  constructor(config: PdfConfig) {
    this.doc = new jsPDF({ unit: "mm", format: "a4" });
    this.w = this.doc.internal.pageSize.getWidth();
    this.h = this.doc.internal.pageSize.getHeight();
    this.cw = this.w - this.m * 2;
    this.config = config;
    this.pageNum = 1;
  }

  // ─── COVER PAGE ───
  renderCover() {
    const { doc, w, h, m, config } = this;

    // Navy background
    doc.setFillColor(...NAVY);
    doc.rect(0, 0, w, h, "F");

    // Top accent bar
    doc.setFillColor(...ACCENT);
    doc.rect(0, 0, w, 3, "F");

    // Brand name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(...WHITE);
    doc.text("ElevateQCS", m, 50);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(180, 195, 215);
    doc.text("Elevate Quality Compliance Solutions LLC", m, 60);

    // Accent divider
    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.8);
    doc.line(m, 70, m + 45, 70);

    // Doc code
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...ACCENT);
    doc.text(config.docCode, m, 88);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(...WHITE);
    const titleLines = doc.splitTextToSize(config.title, this.cw);
    doc.text(titleLines, m, 100);

    // Subtitle
    const titleBottom = 100 + titleLines.length * 9;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(180, 195, 215);
    const subLines = doc.splitTextToSize(config.subtitle, this.cw * 0.8);
    doc.text(subLines, m, titleBottom + 6);

    // Version block
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(140, 155, 175);
    doc.text(`Version ${config.version}  |  ${config.date}  |  elevateqcs.com`, m, h - 55);

    // Bottom info
    doc.setFontSize(8);
    doc.setTextColor(120, 135, 155);
    doc.text("Professional Framework — For Informational Purposes Only", m, h - 40);
    doc.text("info@elevateqcs.com  |  elevateqcs.com", m, h - 34);
    doc.text("Delaware, USA  |  Global Operations", m, h - 28);

    // Bottom accent bar
    doc.setFillColor(...ACCENT);
    doc.rect(0, h - 3, w, 3, "F");
  }

  // ─── NEW CONTENT PAGE ───
  newPage(): number {
    this.doc.addPage();
    this.pageNum++;
    this.renderHeader();
    this.renderFooter();
    return 30; // starting Y after header
  }

  renderHeader() {
    const { doc, w, m, config } = this;
    // Thin accent line
    doc.setFillColor(...ACCENT);
    doc.rect(0, 0, w, 1.5, "F");

    // Header bar
    doc.setFillColor(248, 250, 252);
    doc.rect(0, 1.5, w, 14, "F");
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.2);
    doc.line(0, 15.5, w, 15.5);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(...NAVY);
    doc.text("ElevateQCS", m, 10);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...SLATE);
    doc.text(`${config.docCode} — ${config.title}`, m + 30, 10);

    doc.text(`v${config.version} | ${config.date}`, w - m, 10, { align: "right" });
  }

  renderFooter() {
    const { doc, w, h, m, config } = this;
    const fy = h - 12;

    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.2);
    doc.line(m, fy, w - m, fy);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.setTextColor(140, 150, 170);
    doc.text(`${config.docCode}  |  Page ${this.pageNum}`, m, fy + 5);
    doc.text("elevateqcs.com  |  info@elevateqcs.com", w / 2, fy + 5, { align: "center" });
    doc.text("Professional Framework", w - m, fy + 5, { align: "right" });
  }

  // ─── SECTION HEADING ───
  sectionHeading(text: string, y: number): number {
    y = this.checkPage(y, 20);
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(13);
    this.doc.setTextColor(...NAVY);
    this.doc.text(text, this.m, y);

    // Accent underline
    this.doc.setDrawColor(...ACCENT);
    this.doc.setLineWidth(0.5);
    this.doc.line(this.m, y + 2, this.m + 40, y + 2);

    return y + 9;
  }

  // ─── SUB-HEADING ───
  subHeading(text: string, y: number): number {
    y = this.checkPage(y, 14);
    this.doc.setFont("helvetica", "bold");
    this.doc.setFontSize(10.5);
    this.doc.setTextColor(...NAVY);
    this.doc.text(text, this.m, y);
    return y + 6;
  }

  // ─── BODY TEXT ───
  bodyText(text: string, y: number, fontSize = 9.5): number {
    y = this.checkPage(y, 10);
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(...SLATE);
    const lines = this.doc.splitTextToSize(text, this.cw);
    this.doc.text(lines, this.m, y);
    return y + lines.length * (fontSize * 0.42) + 3;
  }

  // ─── INSTRUCTION BOX ───
  instructionBox(text: string, y: number): number {
    y = this.checkPage(y, 20);
    const boxH = 16;
    this.doc.setFillColor(239, 246, 255); // light blue
    this.doc.setDrawColor(...ACCENT);
    this.doc.setLineWidth(0.3);
    this.doc.roundedRect(this.m, y, this.cw, boxH, 1, 1, "FD");

    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(8);
    this.doc.setTextColor(30, 64, 175);
    const lines = this.doc.splitTextToSize(text, this.cw - 8);
    this.doc.text(lines, this.m + 4, y + 5);
    return y + boxH + 5;
  }

  // ─── FORM FIELDS (labeled input boxes) ───
  formFields(fields: { label: string; width?: number }[], y: number): number {
    y = this.checkPage(y, 18);
    let x = this.m;
    const defaultW = this.cw / 2 - 2;

    fields.forEach((f, i) => {
      const fw = f.width || defaultW;
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(7.5);
      this.doc.setTextColor(...NAVY);
      this.doc.text(f.label, x, y);

      this.doc.setFillColor(...LIGHT_GREY);
      this.doc.setDrawColor(...BORDER);
      this.doc.setLineWidth(0.2);
      this.doc.roundedRect(x, y + 1, fw, 8, 0.5, 0.5, "FD");

      x += fw + 4;
      if ((i + 1) % 2 === 0) {
        x = this.m;
        y += 16;
      }
    });

    if (fields.length % 2 !== 0) y += 16;
    return y + 2;
  }

  // ─── TABLE ───
  table(headers: string[], rows: string[][], y: number, colWidths?: number[]): number {
    const { doc, m, cw } = this;
    const cols = headers.length;
    const widths = colWidths || headers.map(() => cw / cols);
    const rowH = 8;
    const headerH = 9;

    y = this.checkPage(y, headerH + rowH * 2);

    // Header row
    let x = m;
    doc.setFillColor(...NAVY);
    doc.rect(m, y, cw, headerH, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...WHITE);
    headers.forEach((h, i) => {
      doc.text(h, x + 2, y + 6, { maxWidth: widths[i] - 4 });
      x += widths[i];
    });
    y += headerH;

    // Data rows
    rows.forEach((row, ri) => {
      y = this.checkPage(y, rowH + 2);
      x = m;
      const bg = ri % 2 === 0 ? LIGHT_GREY : WHITE;
      doc.setFillColor(...bg);
      doc.rect(m, y, cw, rowH, "F");
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.1);
      doc.line(m, y + rowH, m + cw, y + rowH);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(...SLATE);
      row.forEach((cell, ci) => {
        doc.text(cell, x + 2, y + 5.5, { maxWidth: widths[ci] - 4 });
        x += widths[ci];
      });
      y += rowH;
    });

    return y + 4;
  }

  // ─── CHECKLIST TABLE ───
  checklistTable(headers: string[], rows: string[][], y: number, colWidths?: number[]): number {
    return this.table(headers, rows, y, colWidths);
  }

  // ─── STATUS KEY ───
  statusKey(y: number): number {
    y = this.checkPage(y, 12);
    const statuses = [
      { label: "COMPLIANT", color: [22, 163, 74] as [number, number, number] },
      { label: "PARTIAL", color: [234, 179, 8] as [number, number, number] },
      { label: "NON-COMPLIANT", color: [220, 38, 38] as [number, number, number] },
      { label: "NOT ASSESSED", color: [148, 163, 184] as [number, number, number] },
    ];
    let x = this.m;
    statuses.forEach((s) => {
      this.doc.setFillColor(...s.color);
      this.doc.roundedRect(x, y, 3, 3, 0.5, 0.5, "F");
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(7);
      this.doc.setTextColor(...SLATE);
      this.doc.text(s.label, x + 5, y + 2.5);
      x += 42;
    });
    return y + 8;
  }

  // ─── SIGN-OFF BLOCK ───
  signOff(roles: string[], y: number): number {
    y = this.checkPage(y, 35);
    y = this.sectionHeading("Approvals & Sign-Off", y);

    const colW = this.cw / roles.length;
    let x = this.m;
    roles.forEach((role) => {
      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(8);
      this.doc.setTextColor(...NAVY);
      this.doc.text(role, x, y);

      ["Name:", "Signature:", "Date:"].forEach((label, li) => {
        const ly = y + 6 + li * 8;
        this.doc.setFont("helvetica", "normal");
        this.doc.setFontSize(7.5);
        this.doc.setTextColor(...SLATE);
        this.doc.text(label, x, ly);
        this.doc.setDrawColor(...BORDER);
        this.doc.setLineWidth(0.2);
        this.doc.line(x + 18, ly, x + colW - 6, ly);
      });

      x += colW;
    });

    return y + 32;
  }

  // ─── DISCLAIMER ───
  disclaimer(y: number): number {
    y = this.checkPage(y, 25);
    this.doc.setDrawColor(...BORDER);
    this.doc.setLineWidth(0.2);
    this.doc.line(this.m, y, this.w - this.m, y);
    y += 5;

    this.doc.setFont("helvetica", "italic");
    this.doc.setFontSize(7);
    this.doc.setTextColor(140, 150, 170);
    const text = "DISCLAIMER: This framework is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, regulatory, financial, or professional advice. Organizations should conduct independent due diligence and consult appropriate professional advisors before implementing any governance or compliance program. Use of these materials does not establish an advisory relationship with ElevateQCS. For customized versions or implementation support, contact info@elevateqcs.com.";
    const lines = this.doc.splitTextToSize(text, this.cw);
    this.doc.text(lines, this.m, y);
    return y + lines.length * 3.5 + 4;
  }

  // ─── PAGE CHECK ───
  checkPage(currentY: number, needed = 30): number {
    if (currentY + needed > this.h - 18) {
      return this.newPage();
    }
    return currentY;
  }

  // ─── BULLET LIST ───
  bulletList(items: string[], y: number): number {
    items.forEach((item) => {
      y = this.checkPage(y, 8);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8.5);
      this.doc.setTextColor(...SLATE);
      this.doc.setTextColor(...ACCENT);
      this.doc.text("•", this.m + 2, y);
      this.doc.setTextColor(...SLATE);
      const lines = this.doc.splitTextToSize(item, this.cw - 10);
      this.doc.text(lines, this.m + 7, y);
      y += lines.length * 4 + 2;
    });
    return y;
  }

  // ─── GET BLOB ───
  getBlob(): Blob {
    return this.doc.output("blob");
  }

  // ─── SAVE ───
  save(filename: string) {
    this.doc.save(filename);
  }
}
