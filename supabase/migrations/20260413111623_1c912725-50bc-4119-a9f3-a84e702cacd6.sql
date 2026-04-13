
-- Add index on email for contact_submissions for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_rfp_submissions_email ON public.rfp_submissions(email);
