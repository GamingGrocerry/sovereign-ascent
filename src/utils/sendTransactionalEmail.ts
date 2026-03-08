import { supabase } from "@/integrations/supabase/client";

type EmailType = "resources" | "tools" | "contact" | "rfp";

interface SendEmailParams {
  type: EmailType;
  email: string;
  name?: string;
  company?: string;
  industry?: string;
  inquiryType?: string;
}

export async function sendTransactionalEmail(params: SendEmailParams): Promise<void> {
  try {
    const { error } = await supabase.functions.invoke("send-transactional-email", {
      body: params,
    });
    if (error) {
      console.error("Transactional email error:", error);
    }
  } catch (err) {
    // Fire-and-forget — don't block form submission
    console.error("Failed to send transactional email:", err);
  }
}
