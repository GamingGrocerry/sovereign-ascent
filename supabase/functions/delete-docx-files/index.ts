import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const govconFiles = [
    "EFC-DLV-001-FAR-Compliance-Matrix-Framework.docx",
    "EFC-DLV-002-Proposal-Compliance-Checklist-Framework.docx",
    "EFC-DLV-006-CMMC-2.0-Gap-Assessment-Checklist-Framework.docx",
    "EFC-DLV-009-CTIP-2026-Audit-Readiness-Checklist-Framework.docx",
  ];

  const startupFiles = [
    "RMO-DLV-001-Startup-SOP-Framework.docx",
    "RMO-DLV-004-Startup-Risk-Register-Framework.docx",
    "RMO-DLV-005-Startup-Compliance-Roadmap-Framework.docx",
    "RMO-DLV-006-Pre-ISO-Self-Assessment-Checklist-Framework.docx",
    "RMO-DLV-007-Investor-Compliance-Summary-Pack-Framework.docx",
  ];

  const r1 = await supabase.storage.from("elevateqcs-resourcesdocs-govcon").remove(govconFiles);
  const r2 = await supabase.storage.from("elevateqcs-resourcesdocs-startups").remove(startupFiles);

  return new Response(JSON.stringify({
    govcon: r1.error ? r1.error.message : `Deleted ${r1.data?.length} files`,
    startups: r2.error ? r2.error.message : `Deleted ${r2.data?.length} files`,
  }), { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
});
