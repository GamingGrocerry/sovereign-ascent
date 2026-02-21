
-- Create resource_leads table for email capture with type tagging
CREATE TABLE public.resource_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('govcon', 'startup')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.resource_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (no auth required for lead capture)
CREATE POLICY "Anyone can insert resource leads"
  ON public.resource_leads
  FOR INSERT
  WITH CHECK (true);

-- No select/update/delete for anonymous users
CREATE POLICY "No public read access"
  ON public.resource_leads
  FOR SELECT
  USING (false);
