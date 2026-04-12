
-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  inquiry_type TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- RFP form submissions
CREATE TABLE public.rfp_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  org_name TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  org_size TEXT,
  hq_location TEXT,
  regions TEXT,
  contact_name TEXT NOT NULL,
  title TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  contact_method TEXT,
  engagement_types TEXT,
  regulatory_context TEXT,
  project_scope TEXT,
  budget_range TEXT,
  timeline TEXT,
  burn_rate TEXT,
  uploaded_file TEXT,
  conflict_check BOOLEAN DEFAULT false,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rfp_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RFP form"
  ON public.rfp_submissions FOR INSERT
  WITH CHECK (true);
