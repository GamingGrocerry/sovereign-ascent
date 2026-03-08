CREATE OR REPLACE FUNCTION public.check_assessment_email(_email text)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.assessment_leads WHERE email = _email
  )
$$;