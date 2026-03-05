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

    doc.setFillColor(...NAVY);
    doc.rect(0, 0, w, h, "F");

    doc.setFillColor(...ACCENT);
    doc.rect(0, 0, w, 3, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(...WHITE);
    doc.text("ElevateQCS", m, 50);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(180, 195, 215);
    doc.text("Elevate Quality Compliance Solutions LLC", m, 60);

    doc.setDrawColor(...ACCENT);
    doc.setLineWidth(0.8);
    doc.line(m, 70, m + 45, 70);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...ACCENT);
    doc.text(config.docCode, m, 88);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(...WHITE);
    const titleLines = doc.splitTextToSize(config.title, this.cw);
    doc.text(titleLines, m, 100);

    const titleBottom = 100 + titleLines.length * 9;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(180, 195, 215);
    const subLines = doc.splitTextToSize(config.subtitle, this.cw * 0.8);
    doc.text(subLines, m, titleBottom + 6);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(140, 155, 175);
    doc.text(`Version ${config.version}  |  ${config.date}  |  elevateqcs.com`, m, h - 55);

    doc.setFontSize(8);
    doc.setTextColor(120, 135, 155);
    doc.text("Professional Framework — For Informational Purposes Only", m, h - 40);
    doc.text("info@elevateqcs.com  |  elevateqcs.com", m, h - 34);
    doc.text("Delaware, USA  |  Global Operations", m, h - 28);

    doc.setFillColor(...ACCENT);
    doc.rect(0, h - 3, w, 3, "F");
  }

  // ─── NEW CONTENT PAGE ───
  newPage(): number {
    this.doc.addPage();
    this.pageNum++;
    this.renderHeader();
    this.renderFooter();
    return 30;
  }

  renderHeader() {
    const { doc, w, m, config } = this;
    doc.setFillColor(...ACCENT);
    doc.rect(0, 0, w, 1.5, "F");

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
    const headerTitle = doc.splitTextToSize(`${config.docCode} — ${config.title}`, 90)[0];
    doc.text(headerTitle, m + 30, 10);

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
    return y + 7;
  }

  // ─── BODY TEXT ───
  bodyText(text: string, y: number, fontSize = 9.5): number {
    y = this.checkPage(y, 12);
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(fontSize);
    this.doc.setTextColor(...SLATE);
    const lineH = fontSize * 0.5;
    const lines = this.doc.splitTextToSize(text, this.cw);
    for (let i = 0; i < lines.length; i++) {
      y = this.checkPage(y, lineH + 1);
      this.doc.text(lines[i], this.m, y);
      y += lineH;
    }
    return y + 4;
  }

  // ─── INSTRUCTION BOX ───
  instructionBox(text: string, y: number): number {
    const fontSize = 8;
    const lineH = 4;
    const pad = 5;
    this.doc.setFont("helvetica", "normal");
    this.doc.setFontSize(fontSize);
    const lines = this.doc.splitTextToSize(text, this.cw - pad * 2);
    const boxH = lines.length * lineH + pad * 2;

    y = this.checkPage(y, boxH + 4);

    this.doc.setFillColor(239, 246, 255);
    this.doc.setDrawColor(...ACCENT);
    this.doc.setLineWidth(0.3);
    this.doc.roundedRect(this.m, y, this.cw, boxH, 1, 1, "FD");

    this.doc.setTextColor(30, 64, 175);
    for (let i = 0; i < lines.length; i++) {
      this.doc.text(lines[i], this.m + pad, y + pad + i * lineH + 3);
    }
    return y + boxH + 5;
  }

  // ─── FORM FIELDS ───
  formFields(fields: { label: string; width?: number }[], y: number): number {
    const defaultW = this.cw / 2 - 2;

    for (let i = 0; i < fields.length; i++) {
      const f = fields[i];
      const fw = f.width || defaultW;
      const col = fw >= this.cw ? 0 : i % 2;
      const x = col === 0 ? this.m : this.m + defaultW + 4;

      if (col === 0) {
        y = this.checkPage(y, 16);
      }

      this.doc.setFont("helvetica", "bold");
      this.doc.setFontSize(7.5);
      this.doc.setTextColor(...NAVY);
      this.doc.text(f.label, x, y);

      this.doc.setFillColor(...LIGHT_GREY);
      this.doc.setDrawColor(...BORDER);
      this.doc.setLineWidth(0.2);
      this.doc.roundedRect(x, y + 1, fw, 8, 0.5, 0.5, "FD");

      if (col === 1 || fw >= this.cw) {
        y += 16;
      }
    }

    if (fields.length % 2 !== 0 && (fields[fields.length - 1].width || defaultW) < this.cw) {
      y += 16;
    }
    return y + 2;
  }

  // ─── DYNAMIC-HEIGHT TABLE ───
  table(headers: string[], rows: string[][], y: number, colWidths?: number[]): number {
    const { doc, m, cw } = this;
    const cols = headers.length;
    const widths = colWidths || headers.map(() => cw / cols);
    const cellPadX = 2;
    const cellPadY = 2.5;
    const fontSize = 7;
    const lineH = 3.2;
    const headerFontSize = 7;
    const headerLineH = 3.4;

    // ─── Measure header row height ───
    doc.setFont("helvetica", "bold");
    doc.setFontSize(headerFontSize);
    let maxHeaderLines = 1;
    headers.forEach((h, i) => {
      const lines = doc.splitTextToSize(h, widths[i] - cellPadX * 2);
      if (lines.length > maxHeaderLines) maxHeaderLines = lines.length;
    });
    const headerH = maxHeaderLines * headerLineH + cellPadY * 2;

    y = this.checkPage(y, headerH + lineH + cellPadY * 2 + 4);

    // ─── Draw header ───
    let x = m;
    doc.setFillColor(...NAVY);
    doc.rect(m, y, cw, headerH, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(headerFontSize);
    doc.setTextColor(...WHITE);
    headers.forEach((h, i) => {
      const lines = doc.splitTextToSize(h, widths[i] - cellPadX * 2);
      for (let li = 0; li < lines.length; li++) {
        doc.text(lines[li], x + cellPadX, y + cellPadY + 2.5 + li * headerLineH);
      }
      x += widths[i];
    });
    y += headerH;

    // ─── Draw data rows ───
    doc.setFontSize(fontSize);
    rows.forEach((row, ri) => {
      // Measure this row's height
      doc.setFont("helvetica", "normal");
      doc.setFontSize(fontSize);
      let maxLines = 1;
      row.forEach((cell, ci) => {
        const lines = doc.splitTextToSize(cell, widths[ci] - cellPadX * 2);
        if (lines.length > maxLines) maxLines = lines.length;
      });
      const rowH = Math.max(maxLines * lineH + cellPadY * 2, 7);

      y = this.checkPage(y, rowH + 2);

      // Check if this is a section header row (first cell empty, second cell is ALL CAPS)
      const isSectionRow = row[0] === "" && row[1] && row[1] === row[1].toUpperCase() && row[1].length > 5 && row.slice(2).every(c => c === "");

      x = m;
      if (isSectionRow) {
        doc.setFillColor(230, 237, 246);
      } else {
        const bg = ri % 2 === 0 ? LIGHT_GREY : WHITE;
        doc.setFillColor(...bg);
      }
      doc.rect(m, y, cw, rowH, "F");
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.1);
      doc.line(m, y + rowH, m + cw, y + rowH);

      // Draw vertical separators
      let sepX = m;
      for (let ci = 0; ci < cols - 1; ci++) {
        sepX += widths[ci];
        doc.setDrawColor(225, 230, 238);
        doc.setLineWidth(0.08);
        doc.line(sepX, y, sepX, y + rowH);
      }

      if (isSectionRow) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        doc.setTextColor(...NAVY);
        doc.text(row[1], m + cellPadX, y + rowH / 2 + 1);
      } else {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(fontSize);
        doc.setTextColor(...SLATE);
        row.forEach((cell, ci) => {
          const lines = doc.splitTextToSize(cell, widths[ci] - cellPadX * 2);
          for (let li = 0; li < lines.length; li++) {
            doc.text(lines[li], x + cellPadX, y + cellPadY + 2.5 + li * lineH);
          }
          x += widths[ci];
        });
      }

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
    y = this.checkPage(y, 30);
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
      y = this.checkPage(y, 10);
      this.doc.setFont("helvetica", "normal");
      this.doc.setFontSize(8.5);
      this.doc.setTextColor(...ACCENT);
      this.doc.text("•", this.m + 2, y);
      this.doc.setTextColor(...SLATE);
      const lines = this.doc.splitTextToSize(item, this.cw - 10);
      for (let i = 0; i < lines.length; i++) {
        this.doc.text(lines[i], this.m + 7, y + i * 4);
      }
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
