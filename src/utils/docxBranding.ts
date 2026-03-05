import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, HeadingLevel,
  ShadingType, Header, Footer, PageNumber, NumberFormat,
  TableLayoutType,
} from "docx";

const NAVY = "0A192F";
const ACCENT = "007AFF";
const SLATE = "475569";
const LIGHT_BG = "F1F5F9";
const WHITE = "FFFFFF";
const BORDER_COLOR = "CBD5E1";

export interface DocxConfig {
  docCode: string;
  title: string;
  subtitle: string;
  version: string;
  date: string;
}

const noBorder = {
  top: { style: BorderStyle.NONE, size: 0, color: WHITE },
  bottom: { style: BorderStyle.NONE, size: 0, color: WHITE },
  left: { style: BorderStyle.NONE, size: 0, color: WHITE },
  right: { style: BorderStyle.NONE, size: 0, color: WHITE },
};

const thinBorder = {
  top: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
  bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
  left: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
  right: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR },
};

export class BrandedDocx {
  config: DocxConfig;
  children: Paragraph[] | (Paragraph | Table)[] = [];

  constructor(config: DocxConfig) {
    this.config = config;
  }

  coverPage() {
    this.children.push(
      new Paragraph({ spacing: { after: 600 } }),
      new Paragraph({ spacing: { after: 600 } }),
      new Paragraph({
        children: [new TextRun({ text: "ElevateQCS", bold: true, size: 56, color: NAVY, font: "Calibri" })],
      }),
      new Paragraph({
        children: [new TextRun({ text: "Elevate Quality Compliance Solutions LLC", size: 20, color: SLATE, font: "Calibri" })],
        spacing: { after: 400 },
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: ACCENT } },
        spacing: { after: 400 },
      }),
      new Paragraph({
        children: [new TextRun({ text: this.config.docCode, bold: true, size: 22, color: ACCENT, font: "Calibri" })],
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [new TextRun({ text: this.config.title, bold: true, size: 48, color: NAVY, font: "Calibri" })],
        spacing: { after: 200 },
      }),
      new Paragraph({
        children: [new TextRun({ text: this.config.subtitle, size: 22, color: SLATE, font: "Calibri" })],
        spacing: { after: 600 },
      }),
      new Paragraph({
        children: [new TextRun({ text: `Version ${this.config.version}  |  ${this.config.date}  |  elevateqcs.com`, size: 18, color: SLATE, font: "Calibri" })],
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [new TextRun({ text: "Professional Framework — For Informational Purposes Only", size: 16, color: SLATE, italics: true, font: "Calibri" })],
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [new TextRun({ text: "info@elevateqcs.com  |  elevateqcs.com  |  Delaware, USA", size: 16, color: SLATE, font: "Calibri" })],
        pageBreakBefore: false,
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }), // space before page break
    );
  }

  pageBreak() {
    this.children.push(new Paragraph({ pageBreakBefore: true, children: [] }));
  }

  sectionHeading(text: string) {
    this.children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text, bold: true, size: 26, color: NAVY, font: "Calibri" })],
        spacing: { before: 300, after: 100 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: ACCENT } },
      }),
    );
  }

  subHeading(text: string) {
    this.children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun({ text, bold: true, size: 22, color: NAVY, font: "Calibri" })],
        spacing: { before: 200, after: 80 },
      }),
    );
  }

  bodyText(text: string) {
    this.children.push(
      new Paragraph({
        children: [new TextRun({ text, size: 20, color: SLATE, font: "Calibri" })],
        spacing: { after: 120 },
      }),
    );
  }

  instructionBox(text: string) {
    this.children.push(
      new Paragraph({
        children: [new TextRun({ text, size: 18, color: "1E40AF", italics: true, font: "Calibri" })],
        spacing: { before: 100, after: 200 },
        shading: { type: ShadingType.SOLID, color: "EFF6FF" },
        border: {
          top: { style: BorderStyle.SINGLE, size: 1, color: ACCENT },
          bottom: { style: BorderStyle.SINGLE, size: 1, color: ACCENT },
          left: { style: BorderStyle.SINGLE, size: 1, color: ACCENT },
          right: { style: BorderStyle.SINGLE, size: 1, color: ACCENT },
        },
        indent: { left: 200, right: 200 },
      }),
    );
  }

  formFields(fields: { label: string }[]) {
    const rows: TableRow[] = [];
    for (let i = 0; i < fields.length; i += 2) {
      const cells: TableCell[] = [];
      for (let j = 0; j < 2; j++) {
        const f = fields[i + j];
        if (f) {
          cells.push(
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: f.label, bold: true, size: 16, color: NAVY, font: "Calibri" })],
                  spacing: { after: 40 },
                }),
                new Paragraph({
                  children: [new TextRun({ text: " ", size: 18, font: "Calibri" })],
                  spacing: { after: 40 },
                  border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR } },
                }),
              ],
              borders: noBorder,
              width: { size: 50, type: WidthType.PERCENTAGE },
              margins: { top: 60, bottom: 60, left: 80, right: 80 },
            }),
          );
        } else {
          cells.push(new TableCell({ children: [new Paragraph("")], borders: noBorder, width: { size: 50, type: WidthType.PERCENTAGE } }));
        }
      }
      rows.push(new TableRow({ children: cells }));
    }
    this.children.push(
      new Table({
        rows,
        width: { size: 100, type: WidthType.PERCENTAGE },
        layout: TableLayoutType.FIXED,
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }),
    );
  }

  table(headers: string[], rows: string[][], colPercents?: number[]) {
    const percents = colPercents || headers.map(() => Math.floor(100 / headers.length));

    // Header row
    const headerCells = headers.map((h, i) =>
      new TableCell({
        children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 16, color: WHITE, font: "Calibri" })], alignment: AlignmentType.LEFT })],
        shading: { type: ShadingType.SOLID, color: NAVY },
        borders: thinBorder,
        width: { size: percents[i], type: WidthType.PERCENTAGE },
        margins: { top: 40, bottom: 40, left: 60, right: 60 },
      }),
    );
    const headerRow = new TableRow({ children: headerCells, tableHeader: true });

    // Data rows
    const dataRows = rows.map((row, ri) => {
      const isSectionRow = row[0] === "" && row[1] && row[1] === row[1].toUpperCase() && row[1].length > 5 && row.slice(2).every(c => c === "");
      const cells = row.map((cell, ci) =>
        new TableCell({
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: isSectionRow && ci === 1 ? cell : cell,
                  bold: isSectionRow && ci === 1,
                  size: isSectionRow ? 16 : 16,
                  color: isSectionRow && ci === 1 ? NAVY : SLATE,
                  font: "Calibri",
                }),
              ],
            }),
          ],
          shading: isSectionRow
            ? { type: ShadingType.SOLID, color: "E6EDF6" }
            : ri % 2 === 0
              ? { type: ShadingType.SOLID, color: LIGHT_BG }
              : undefined,
          borders: thinBorder,
          width: { size: percents[ci], type: WidthType.PERCENTAGE },
          margins: { top: 30, bottom: 30, left: 60, right: 60 },
          columnSpan: isSectionRow && ci === 1 ? undefined : undefined,
        }),
      );
      return new TableRow({ children: cells });
    });

    this.children.push(
      new Table({
        rows: [headerRow, ...dataRows],
        width: { size: 100, type: WidthType.PERCENTAGE },
        layout: TableLayoutType.FIXED,
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }),
    );
  }

  statusKey() {
    const statuses = ["COMPLIANT ●", "PARTIAL ●", "NON-COMPLIANT ●", "NOT ASSESSED ●"];
    this.children.push(
      new Paragraph({
        children: statuses.map((s, i) => new TextRun({
          text: s + (i < statuses.length - 1 ? "    " : ""),
          size: 16,
          color: i === 0 ? "16A34A" : i === 1 ? "EAB308" : i === 2 ? "DC2626" : "94A3B8",
          bold: true,
          font: "Calibri",
        })),
        spacing: { after: 200 },
      }),
    );
  }

  bulletList(items: string[]) {
    items.forEach((item) => {
      this.children.push(
        new Paragraph({
          children: [new TextRun({ text: item, size: 18, color: SLATE, font: "Calibri" })],
          bullet: { level: 0 },
          spacing: { after: 60 },
        }),
      );
    });
  }

  signOff(roles: string[]) {
    this.sectionHeading("Approvals & Sign-Off");
    const cells = roles.map((role) =>
      new TableCell({
        children: [
          new Paragraph({ children: [new TextRun({ text: role, bold: true, size: 18, color: NAVY, font: "Calibri" })], spacing: { after: 100 } }),
          ...(["Name:", "Signature:", "Date:"].map((label) =>
            new Paragraph({
              children: [new TextRun({ text: label, size: 16, color: SLATE, font: "Calibri" })],
              spacing: { after: 120 },
              border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR } },
            })
          )),
        ],
        borders: noBorder,
        width: { size: Math.floor(100 / roles.length), type: WidthType.PERCENTAGE },
        margins: { top: 60, bottom: 60, left: 80, right: 80 },
      }),
    );
    this.children.push(
      new Table({
        rows: [new TableRow({ children: cells })],
        width: { size: 100, type: WidthType.PERCENTAGE },
        layout: TableLayoutType.FIXED,
      }),
      new Paragraph({ spacing: { after: 200 }, children: [] }),
    );
  }

  disclaimer() {
    this.children.push(
      new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR } },
        spacing: { before: 300, after: 100 },
        children: [],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "DISCLAIMER: This framework is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, regulatory, financial, or professional advice. Organizations should conduct independent due diligence and consult appropriate professional advisors before implementing any governance or compliance program. Use of these materials does not establish an advisory relationship with ElevateQCS. For customized versions or implementation support, contact info@elevateqcs.com.",
            size: 14,
            color: "8C96AA",
            italics: true,
            font: "Calibri",
          }),
        ],
      }),
    );
  }

  async getBlob(): Promise<Blob> {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: { top: 1440, bottom: 1440, left: 1200, right: 1200 },
              size: { width: 12240, height: 15840 },
              pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: "ElevateQCS", bold: true, size: 14, color: NAVY, font: "Calibri" }),
                    new TextRun({ text: `   ${this.config.docCode} — ${this.config.title}`, size: 14, color: SLATE, font: "Calibri" }),
                  ],
                  alignment: AlignmentType.LEFT,
                  border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR } },
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: `${this.config.docCode}  |  `, size: 12, color: SLATE, font: "Calibri" }),
                    new TextRun({ children: [PageNumber.CURRENT], size: 12, color: SLATE, font: "Calibri" }),
                    new TextRun({ text: "  |  elevateqcs.com  |  Professional Framework", size: 12, color: SLATE, font: "Calibri" }),
                  ],
                  alignment: AlignmentType.CENTER,
                  border: { top: { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR } },
                }),
              ],
            }),
          },
          children: this.children as (Paragraph | Table)[],
        },
      ],
    });
    return await Packer.toBlob(doc);
  }
}
