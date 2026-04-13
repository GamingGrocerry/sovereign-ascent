// Workaround: The auto-generated client.ts tree-shakes @supabase/supabase-js
// when VITE_ env vars are missing at build time. This wrapper always initialises
// the client using the project's public (anon) credentials, which are safe to
// embed in client-side code.

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://jengmprjjwtgettqasuk.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplbmdtcHJqand0Z2V0dHFhc3VrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2NzM3NDYsImV4cCI6MjA4NzI0OTc0Nn0.Uc1YRTFj1PzFPAmtVEeSXiZNkRvLp1-iB7bsHrktMqk';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
