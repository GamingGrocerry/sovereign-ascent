
CREATE OR REPLACE FUNCTION public.check_resource_email(_email text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.resource_leads WHERE email = _email
  )
$$;
