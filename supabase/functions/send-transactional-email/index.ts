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
}

const SITE_URL = "https://elevateqcs.com";
const FROM_EMAIL = "ElevateQCS <notify@elevateqcs.com>";

function buildEmail(payload: EmailPayload): { subject: string; html: string } {
  const { type, name } = payload;
  const greeting = name ? `Dear ${name}` : "Thank you";

  const header = `
    <div style="text-align:center;padding:32px 0 24px;">
      <img src="${SITE_URL}/logos/email-logo.png" alt="ElevateQCS" width="180" style="display:inline-block;" />
    </div>
    <div style="width:48px;height:2px;background:linear-gradient(90deg,#C9A96E,transparent);margin:0 auto 32px;" />
  `;

  const footer = `
    <div style="width:48px;height:1px;background:linear-gradient(90deg,#C9A96E,transparent);margin:40px auto 24px;" />
    <p style="font-size:11px;color:#8A8F98;text-align:center;line-height:1.8;margin:0;">
      ElevateQCS is an independent advisory firm. All services are advisory in nature<br/>
      and do not constitute legal, certification, or regulatory services.<br/><br/>
      <a href="${SITE_URL}/privacy" style="color:#C9A96E;text-decoration:none;">Privacy Policy</a> · 
      <a href="${SITE_URL}/terms" style="color:#C9A96E;text-decoration:none;">Terms</a><br/>
      © ${new Date().getFullYear()} ElevateQCS. All rights reserved.
    </p>
  `;

  const button = (text: string, href: string) => `
    <div style="text-align:center;margin:28px 0;">
      <a href="${href}" style="display:inline-block;background:#1A1F2B;color:#FFFFFF;font-family:Inter,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.05em;padding:14px 32px;text-decoration:none;border-radius:4px;">${text}</a>
    </div>
  `;

  const linkRow = (label: string, href: string) =>
    `<a href="${href}" style="color:#C9A96E;text-decoration:none;font-size:13px;">${label}</a>`;

  const wrapper = (content: string) => `
    <!DOCTYPE html>
    <html lang="en">
    <head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
    <body style="margin:0;padding:0;background:#FFFFFF;font-family:Georgia,'Times New Roman',serif;">
      <div style="max-width:600px;margin:0 auto;padding:24px 20px;">
        ${header}
        ${content}
        ${footer}
      </div>
    </body>
    </html>
  `;

  switch (type) {
    case "resources": {
      return {
        subject: "Your ElevateQCS Professional Frameworks Are Ready",
        html: wrapper(`
          <h1 style="font-family:Georgia,serif;font-size:22px;color:#1A1F2B;text-align:center;margin:0 0 20px;font-weight:400;">
            Your Professional Frameworks Are Ready
          </h1>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            ${greeting}, thank you for your interest in our compliance and governance frameworks. 
            Your access is now active — you can download any of the frameworks in your selected category at any time.
          </p>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            These frameworks are designed to support organizations in building defensible governance structures, 
            audit-ready documentation, and operational controls aligned to regulatory requirements.
          </p>
          ${button("Access Your Frameworks", `${SITE_URL}/resources`)}
          <div style="background:#F8F9FA;border-radius:4px;padding:20px 24px;margin:24px 0;">
            <p style="font-family:Inter,Arial,sans-serif;font-size:13px;color:#1A1F2B;font-weight:600;margin:0 0 12px;">Continue exploring:</p>
            <p style="margin:6px 0;">${linkRow("→ Run a Compliance Readiness Assessment", `${SITE_URL}/tools`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Request a Confidential Consultation", `${SITE_URL}/contact`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Submit a Request for Proposal", `${SITE_URL}/rfp`)}</p>
          </div>
        `),
      };
    }

    case "tools": {
      return {
        subject: "Your ElevateQCS Diagnostic Assessment Results",
        html: wrapper(`
          <h1 style="font-family:Georgia,serif;font-size:22px;color:#1A1F2B;text-align:center;margin:0 0 20px;font-weight:400;">
            Your Diagnostic Tools Are Unlocked
          </h1>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            ${greeting}, thank you for registering for our compliance readiness diagnostics. 
            All three assessment tools are now available to you — each produces a downloadable report 
            with your score, classification tier, and recommended compliance roadmap.
          </p>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            These diagnostics are designed to identify governance gaps, map regulatory obligations, 
            and evaluate operational maturity in under five minutes.
          </p>
          ${button("Start Your Assessment", `${SITE_URL}/tools`)}
          <div style="background:#F8F9FA;border-radius:4px;padding:20px 24px;margin:24px 0;">
            <p style="font-family:Inter,Arial,sans-serif;font-size:13px;color:#1A1F2B;font-weight:600;margin:0 0 12px;">You may also find useful:</p>
            <p style="margin:6px 0;">${linkRow("→ Download Professional Frameworks", `${SITE_URL}/resources`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Submit a Request for Proposal", `${SITE_URL}/rfp`)}</p>
            <p style="margin:6px 0;">${linkRow("→ View Our Capabilities", `${SITE_URL}/capabilities`)}</p>
          </div>
        `),
      };
    }

    case "contact": {
      return {
        subject: "ElevateQCS — We've Received Your Inquiry",
        html: wrapper(`
          <h1 style="font-family:Georgia,serif;font-size:22px;color:#1A1F2B;text-align:center;margin:0 0 20px;font-weight:400;">
            We've Received Your Inquiry
          </h1>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            ${greeting}, thank you for reaching out. A member of our advisory team will review your inquiry 
            and respond within 48 business hours.
          </p>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            All consultations are treated with the highest level of confidentiality. 
            We look forward to understanding your organizational context and compliance objectives.
          </p>
          ${button("Learn More About Our Services", `${SITE_URL}/services`)}
          <div style="background:#F8F9FA;border-radius:4px;padding:20px 24px;margin:24px 0;">
            <p style="font-family:Inter,Arial,sans-serif;font-size:13px;color:#1A1F2B;font-weight:600;margin:0 0 12px;">While you wait:</p>
            <p style="margin:6px 0;">${linkRow("→ Download Professional Frameworks", `${SITE_URL}/resources`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Run a Free Compliance Assessment", `${SITE_URL}/tools`)}</p>
            <p style="margin:6px 0;">${linkRow("→ View Our Capabilities Brochure", `${SITE_URL}/capabilities`)}</p>
          </div>
        `),
      };
    }

    case "rfp": {
      return {
        subject: "ElevateQCS — Your Request for Proposal Has Been Received",
        html: wrapper(`
          <h1 style="font-family:Georgia,serif;font-size:22px;color:#1A1F2B;text-align:center;margin:0 0 20px;font-weight:400;">
            Your Request for Proposal Has Been Received
          </h1>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            ${greeting}, thank you for submitting your Request for Proposal. Our leadership team will review 
            your submission and respond within 1–2 business days with a tailored approach aligned to your 
            requirements.
          </p>
          <p style="font-family:Inter,Arial,sans-serif;font-size:14px;color:#55575d;line-height:1.8;margin:0 0 16px;">
            All submissions are reviewed with discretion and treated under strict confidentiality.
          </p>
          ${button("View Our Capabilities", `${SITE_URL}/capabilities`)}
          <div style="background:#F8F9FA;border-radius:4px;padding:20px 24px;margin:24px 0;">
            <p style="font-family:Inter,Arial,sans-serif;font-size:13px;color:#1A1F2B;font-weight:600;margin:0 0 12px;">In the meantime:</p>
            <p style="margin:6px 0;">${linkRow("→ Explore Our Resource Library", `${SITE_URL}/resources`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Read Our Latest Insights", `${SITE_URL}/insights`)}</p>
            <p style="margin:6px 0;">${linkRow("→ Review Our Methodology", `${SITE_URL}/methodology`)}</p>
          </div>
        `),
      };
    }

    default:
      throw new Error(`Unknown email type: ${type}`);
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
