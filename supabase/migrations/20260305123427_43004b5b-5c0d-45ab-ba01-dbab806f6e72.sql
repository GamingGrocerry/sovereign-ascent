
CREATE TABLE public.assessment_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  industry TEXT NOT NULL DEFAULT '',
  consent BOOLEAN NOT NULL DEFAULT false,
  tool_used TEXT,
  score INTEGER,
  tier TEXT,
  date_completed TIMESTAMP WITH TIME ZONE,
  time_to_complete INTEGER,
  answers_json JSONB
);

ALTER TABLE public.assessment_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert assessment leads"
  ON public.assessment_leads
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "No public read access on assessment leads"
  ON public.assessment_leads
  FOR SELECT
  USING (false);
