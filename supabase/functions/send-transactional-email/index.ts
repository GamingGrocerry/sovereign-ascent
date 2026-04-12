import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

type EmailType = "resources" | "tools" | "contact" | "rfp";

interface EmailPayload {
  type: EmailType;
  email: string;
  name?: string;
  company?: string;
  industry?: string;
  inquiryType?: string;
  message?: string;
  formData?: Record<string, string>;
}

const SITE_URL = "https://elevateqcs.com";
const FROM_EMAIL = "ElevateQCS <notify@elevateqcs.com>";
const ADMIN_EMAIL = "info@elevateqcs.com";

function buildEmail(payload: EmailPayload): { subject: string; html: string } {
  const { type, name } = payload;
  const greeting = name ? `Dear ${name},` : "Thank you for reaching out.";

  const button = (text: string, href: string) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td style="background-color:#1A1F2B;border-radius:4px;">
                <a href="${href}" target="_blank" style="display:inline-block;padding:14px 36px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.05em;color:#FFFFFF;text-decoration:none;mso-padding-alt:0;">${text}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  const linkRow = (label: string, href: string) =>
    `<tr><td style="padding:4px 0;font-family:Inter,Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;"><a href="${href}" target="_blank" style="color:#C9A96E;text-decoration:none;">${label}</a></td></tr>`;

  const wrapper = (content: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>ElevateQCS</title>
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    td { font-family: Arial, Helvetica, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F4F5F7;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;width:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F4F5F7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:8px;overflow:hidden;">
          <tr>
            <td align="center" style="padding:36px 40px 20px 40px;">
              <img src="${SITE_URL}/logos/email-logo.png" alt="ElevateQCS" width="180" height="auto" style="display:block;border:0;outline:none;max-width:180px;" />
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 40px 28px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="48">
                <tr><td style="height:2px;background:linear-gradient(90deg,#C9A96E,#C9A96E00);font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px 40px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #E5E7EB;">
                <tr>
                  <td style="padding:20px 0 0 0;font-family:Inter,Arial,Helvetica,sans-serif;font-size:10px;color:#9CA3AF;line-height:1.7;">
                    <strong style="color:#6B7280;font-size:10px;letter-spacing:0.05em;">DISCLAIMER</strong><br/>
                    This communication is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, regulatory, or professional advice. Users are solely responsible for ensuring compliance with applicable laws and regulations. Assessment results, frameworks, and diagnostic reports are advisory in nature and should not be relied upon as a substitute for qualified legal or regulatory counsel. For tailored advisory services, contact <a href="mailto:info@elevateqcs.com" style="color:#C9A96E;text-decoration:none;">info@elevateqcs.com</a>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:20px 40px 0 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="48">
                <tr><td style="height:1px;background:linear-gradient(90deg,#C9A96E,#C9A96E00);font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 40px 36px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td align="center" style="font-family:Inter,Arial,Helvetica,sans-serif;font-size:11px;color:#8A8F98;line-height:1.8;">
                    ElevateQCS is an independent advisory firm. All services are advisory in nature
                    and do not constitute legal, certification, or regulatory services.
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:16px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:11px;color:#8A8F98;line-height:1.8;">
                    <a href="${SITE_URL}/privacy" target="_blank" style="color:#C9A96E;text-decoration:none;">Privacy Policy</a>
                    &nbsp;&middot;&nbsp;
                    <a href="${SITE_URL}/terms" target="_blank" style="color:#C9A96E;text-decoration:none;">Terms</a>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top:8px;font-family:Inter,Arial,Helvetica,sans-serif;font-size:11px;color:#8A8F98;">
                    &copy; ${new Date().getFullYear()} ElevateQCS. All rights reserved.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const linksBlock = (title: string, links: { label: string; href: string }[]) => `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0 0 0;background-color:#F8F9FA;border-radius:4px;">
      <tr>
        <td style="padding:20px 24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="font-family:Inter,Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:#1A1F2B;padding-bottom:12px;">${title}</td>
            </tr>
            ${links.map((l) => linkRow(`→ ${l.label}`, l.href)).join("")}
          </table>
        </td>
      </tr>
    </table>
  `;

  const heading = (text: string) =>
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td align="center" style="font-family:Georgia,'Times New Roman',Times,serif;font-size:22px;color:#1A1F2B;font-weight:400;padding-bottom:20px;line-height:1.4;">${text}</td></tr></table>`;

  const para = (text: string) =>
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td style="font-family:Inter,Arial,Helvetica,sans-serif;font-size:14px;color:#55575d;line-height:1.8;padding-bottom:16px;">${text}</td></tr></table>`;

  switch (type) {
    case "resources": {
      return {
        subject: "Your ElevateQCS Professional Frameworks Are Ready",
        html: wrapper(`
          ${heading("Your Professional Frameworks Are Ready")}
          ${para(`${greeting} Thank you for your interest in our compliance and governance frameworks. Your access is now active — you can download any of the frameworks in your selected category at any time.`)}
          ${para("These frameworks are designed to support organizations in building defensible governance structures, audit-ready documentation, and operational controls aligned to regulatory requirements.")}
          ${button("Access Your Frameworks", `${SITE_URL}/resources`)}
          ${linksBlock("Continue exploring:", [
            { label: "Run a Compliance Readiness Assessment", href: `${SITE_URL}/tools` },
            { label: "Request a Confidential Consultation", href: `${SITE_URL}/contact` },
            { label: "Submit a Request for Proposal", href: `${SITE_URL}/rfp` },
          ])}
        `),
      };
    }

    case "tools": {
      return {
        subject: "Your ElevateQCS Diagnostic Assessment Results",
        html: wrapper(`
          ${heading("Your Diagnostic Tools Are Unlocked")}
          ${para(`${greeting} Thank you for registering for our compliance readiness diagnostics. All three assessment tools are now available to you — each produces a downloadable report with your score, classification tier, and recommended compliance roadmap.`)}
          ${para("These diagnostics are designed to identify governance gaps, map regulatory obligations, and evaluate operational maturity in under five minutes.")}
          ${button("Start Your Assessment", `${SITE_URL}/tools`)}
          ${linksBlock("You may also find useful:", [
            { label: "Download Professional Frameworks", href: `${SITE_URL}/resources` },
            { label: "Submit a Request for Proposal", href: `${SITE_URL}/rfp` },
            { label: "View Our Capabilities", href: `${SITE_URL}/capabilities` },
          ])}
        `),
      };
    }

    case "contact": {
      return {
        subject: "ElevateQCS — We've Received Your Inquiry",
        html: wrapper(`
          ${heading("We've Received Your Inquiry")}
          ${para(`${greeting} Thank you for reaching out. A member of our advisory team will review your inquiry and respond within 48 business hours.`)}
          ${para("All consultations are treated with the highest level of confidentiality. We look forward to understanding your organizational context and compliance objectives.")}
          ${button("Learn More About Our Services", `${SITE_URL}/services`)}
          ${linksBlock("While you wait:", [
            { label: "Download Professional Frameworks", href: `${SITE_URL}/resources` },
            { label: "Run a Free Compliance Assessment", href: `${SITE_URL}/tools` },
            { label: "View Our Capabilities Brochure", href: `${SITE_URL}/capabilities` },
          ])}
        `),
      };
    }

    case "rfp": {
      return {
        subject: "ElevateQCS — Your Request for Proposal Has Been Received",
        html: wrapper(`
          ${heading("Your Request for Proposal Has Been Received")}
          ${para(`${greeting} Thank you for submitting your Request for Proposal. Our leadership team will review your submission and respond within 1–2 business days with a tailored approach aligned to your requirements.`)}
          ${para("All submissions are reviewed with discretion and treated under strict confidentiality.")}
          ${button("View Our Capabilities", `${SITE_URL}/capabilities`)}
          ${linksBlock("In the meantime:", [
            { label: "Explore Our Resource Library", href: `${SITE_URL}/resources` },
            { label: "Read Our Latest Insights", href: `${SITE_URL}/insights` },
            { label: "Review Our Methodology", href: `${SITE_URL}/methodology` },
          ])}
        `),
      };
    }

    default:
      throw new Error(`Unknown email type: ${type}`);
  }
}

function buildAdminNotification(payload: EmailPayload): { subject: string; html: string } | null {
  const { type, name, email, company, inquiryType, message, formData } = payload;

  const escapeHtml = (str: string | undefined | null) => {
    if (!str) return "—";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  const row = (label: string, value: string | undefined | null) =>
    `<tr><td style="padding:6px 12px;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 12px;font-family:Inter,Arial,sans-serif;font-size:13px;color:#55575d;line-height:1.6;">${escapeHtml(value)}</td></tr>`;

  const adminWrapper = (title: string, rows: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;background-color:#F4F5F7;font-family:Inter,Arial,sans-serif;">
  <table role="presentation" width="100%" style="background-color:#F4F5F7;">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:8px;overflow:hidden;">
        <tr><td style="background-color:#0a2d5e;padding:24px 32px;">
          <span style="font-family:Georgia,serif;font-size:20px;color:#FFFFFF;font-weight:400;">${title}</span>
        </td></tr>
        <tr><td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E5E7EB;border-radius:4px;">
            ${rows}
          </table>
        </td></tr>
        <tr><td style="padding:0 32px 24px;font-size:11px;color:#9CA3AF;">
          This is an automated notification from elevateqcs.com. Do not reply to this email.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  switch (type) {
    case "contact": {
      return {
        subject: `[Contact Form] New inquiry from ${name || email}`,
        html: adminWrapper("New Contact Form Submission", `
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Organization", company)}
          ${row("Inquiry Type", inquiryType)}
          ${row("Message", message)}
        `),
      };
    }

    case "rfp": {
      const fd = formData || {};
      return {
        subject: `[RFP Submission] New proposal from ${fd["org-name"] || company || email}`,
        html: adminWrapper("New RFP Submission", `
          ${row("Organization", fd["org-name"] || company)}
          ${row("Website", fd["website"])}
          ${row("Industry", fd["industry"])}
          ${row("Org Size", fd["org-size"])}
          ${row("HQ Location", fd["hq-location"])}
          ${row("Operating Regions", fd["regions"])}
          ${row("Contact Name", fd["contact-name"] || name)}
          ${row("Title/Role", fd["title"])}
          ${row("Email", email)}
          ${row("Phone", fd["phone"])}
          ${row("Contact Method", fd["contact-method"])}
          ${row("Engagement Types", fd["engagement-types"])}
          ${row("Regulatory Context", fd["regulatory-context"])}
          ${row("Project Scope", fd["scope"])}
          ${row("Budget Range", fd["budget"])}
          ${row("Timeline", fd["timeline"])}
          ${row("Start Date", fd["start-date"])}
          ${row("Burn Rate", fd["burn-rate"])}
          ${row("Uploaded File", fd["uploaded-file"])}
          ${row("Additional Notes", fd["reg-notes"])}
        `),
      };
    }

    case "resources":
    case "tools": {
      return {
        subject: `[${type === "resources" ? "Resource Access" : "Tool Registration"}] ${email}`,
        html: adminWrapper(`New ${type === "resources" ? "Resource Access" : "Tool Registration"}`, `
          ${row("Email", email)}
          ${row("Name", name)}
          ${row("Company", company)}
          ${row("Industry", industry)}
        `),
      };
    }

    default:
      return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const payload: EmailPayload = await req.json();

    if (!payload.email || !payload.type) {
      return new Response(
        JSON.stringify({ error: "email and type are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { subject, html } = buildEmail(payload);

    // Send confirmation email to the user
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [payload.email],
        subject,
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    // Send admin notification to info@elevateqcs.com
    const adminEmail = buildAdminNotification(payload);
    if (adminEmail) {
      try {
        const adminRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: [ADMIN_EMAIL],
            subject: adminEmail.subject,
            html: adminEmail.html,
          }),
        });
        const adminData = await adminRes.json();
        if (!adminRes.ok) {
          console.error("Admin notification error:", adminData);
        }
      } catch (adminErr) {
        console.error("Failed to send admin notification:", adminErr);
      }
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
