interface ReportData {
  toolName: string;
  companyName: string;
  contactName: string;
  score?: number;
  tier: string;
  findings: { area: string; status: string; recommendation: string }[];
  roadmap?: { phase: string; description: string }[];
  date: string;
}

export function generateReport(data: ReportData): void {
  const logoUrl = window.location.origin + '/logos/elevatequcs-report-logo.png';
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${data.toolName} — ${data.companyName}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Inter', sans-serif; color: #1a2332; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
  .header { border-bottom: 2px solid #0078ff; padding-bottom: 24px; margin-bottom: 32px; }
  .logo { display: flex; align-items: center; gap: 16px; }
  .logo img { height: 48px; width: 48px; object-fit: contain; }
  .logo-text { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0c1b2e; }
  .subtitle { font-size: 11px; color: #5a6c82; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 4px; }
  h1 { font-family: 'Playfair Display', serif; font-size: 28px; margin: 24px 0 8px; color: #0c1b2e; }
  h2 { font-family: 'Playfair Display', serif; font-size: 20px; margin: 28px 0 12px; color: #0c1b2e; border-bottom: 1px solid #dce3eb; padding-bottom: 8px; }
  .meta { font-size: 13px; color: #5a6c82; margin-bottom: 24px; }
  .score-box { background: #f0f5fa; border-left: 4px solid #0078ff; padding: 20px; margin: 20px 0; border-radius: 2px; }
  .score-box .score { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: #0078ff; }
  .score-box .tier { font-size: 16px; font-weight: 600; margin-top: 4px; }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
  th { background: #0c1b2e; color: #fff; padding: 10px 12px; text-align: left; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; font-size: 11px; }
  td { padding: 10px 12px; border-bottom: 1px solid #dce3eb; }
  tr:nth-child(even) { background: #f8fafc; }
  .roadmap-phase { background: #f0f5fa; padding: 16px; margin: 8px 0; border-radius: 2px; border-left: 3px solid #0078ff; }
  .roadmap-phase strong { color: #0c1b2e; }
  .cta { background: #0078ff; color: white; padding: 16px 24px; text-align: center; margin: 32px 0; border-radius: 2px; font-weight: 600; }
  .cta a { color: white; text-decoration: none; }
  .disclaimer { font-size: 10px; color: #8899aa; border-top: 1px solid #dce3eb; padding-top: 16px; margin-top: 32px; line-height: 1.5; }
  @media print { body { padding: 20px; } .cta { display: none; } }
</style>
</head>
<body>
<div class="header">
  <div class="logo">ElevateQCS</div>
  <div class="subtitle">Quality & Compliance Advisory</div>
</div>

<h1>${data.toolName}</h1>
<div class="meta">
  Prepared for: <strong>${data.companyName}</strong> | Contact: ${data.contactName} | Date: ${data.date}
</div>

${data.score !== undefined ? `
<div class="score-box">
  <div class="score">${data.score} / 100</div>
  <div class="tier">${data.tier}</div>
</div>
` : `
<div class="score-box">
  <div class="tier">${data.tier}</div>
</div>
`}

<h2>Detailed Findings</h2>
<table>
  <thead><tr><th>Area</th><th>Status</th><th>Recommendation</th></tr></thead>
  <tbody>
    ${data.findings.map((f) => `<tr><td><strong>${f.area}</strong></td><td>${f.status}</td><td>${f.recommendation}</td></tr>`).join("")}
  </tbody>
</table>

${data.roadmap ? `
<h2>Recommended Compliance Roadmap</h2>
${data.roadmap.map((r) => `<div class="roadmap-phase"><strong>${r.phase}</strong><br/>${r.description}</div>`).join("")}
` : ""}

<div class="cta">
  <a href="https://elevateqcs.com/contact">Schedule a Confidential Consultation →</a>
</div>

<div class="disclaimer">
  DISCLAIMER: This report is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, financial, regulatory, or professional advice. ElevateQCS assumes no responsibility for decisions or actions taken based on this report. For full advisory services, please contact ElevateQCS directly at info@elevateqcs.com.
</div>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.toolName.replace(/\s+/g, "-").toLowerCase()}-${data.companyName.replace(/\s+/g, "-").toLowerCase()}-${data.date}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
