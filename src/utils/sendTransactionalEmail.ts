import { supabase } from "@/lib/supabaseClient";

interface SendTransactionalEmailParams {
  templateName: string;
  recipientEmail: string;
  idempotencyKey: string;
  templateData?: Record<string, string>;
}

export async function sendTransactionalEmail(params: SendTransactionalEmailParams): Promise<void> {
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
