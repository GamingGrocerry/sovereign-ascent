-- 1. Add service-role SELECT policy to rfp_submissions
CREATE POLICY "Service role can read RFP submissions"
ON public.rfp_submissions
FOR SELECT
TO public
USING (auth.role() = 'service_role'::text);

-- 2. Add service-role SELECT policy to contact_submissions
CREATE POLICY "Service role can read contact submissions"
ON public.contact_submissions
FOR SELECT
TO public
USING (auth.role() = 'service_role'::text);

-- 3. Drop dangerous storage policies on govcon bucket
DROP POLICY IF EXISTS "Allow public delete govcon resources" ON storage.objects;
DROP POLICY IF EXISTS "Allow public update govcon resources" ON storage.objects;

-- 4. Drop dangerous storage policies on startups bucket
DROP POLICY IF EXISTS "Allow public delete startup resources" ON storage.objects;
DROP POLICY IF EXISTS "Allow public update startup resources" ON storage.objects;

-- 5. Replace with service-role-only policies for govcon bucket modifications
CREATE POLICY "Service role can modify govcon resources"
ON storage.objects
FOR ALL
TO public
USING (bucket_id = 'elevateqcs-resourcesdocs-govcon' AND auth.role() = 'service_role'::text)
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-govcon' AND auth.role() = 'service_role'::text);

-- 6. Replace with service-role-only policies for startups bucket modifications
CREATE POLICY "Service role can modify startup resources"
ON storage.objects
FOR ALL
TO public
USING (bucket_id = 'elevateqcs-resourcesdocs-startups' AND auth.role() = 'service_role'::text)
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-startups' AND auth.role() = 'service_role'::text);

-- 7. Fix function search_path on email queue functions
ALTER FUNCTION public.delete_email(text, bigint) SET search_path = public;
ALTER FUNCTION public.enqueue_email(text, jsonb) SET search_path = public;
ALTER FUNCTION public.move_to_dlq(text, text, bigint, jsonb) SET search_path = public;
ALTER FUNCTION public.read_email_batch(text, integer, integer) SET search_path = public;