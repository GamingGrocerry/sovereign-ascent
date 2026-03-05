-- Allow public uploads to resource doc buckets
CREATE POLICY "Allow public upload to govcon resources"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-govcon');

CREATE POLICY "Allow public upload to startup resources"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-startups');

CREATE POLICY "Allow public update govcon resources"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'elevateqcs-resourcesdocs-govcon')
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-govcon');

CREATE POLICY "Allow public update startup resources"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'elevateqcs-resourcesdocs-startups')
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-startups');

CREATE POLICY "Allow public delete govcon resources"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'elevateqcs-resourcesdocs-govcon');

CREATE POLICY "Allow public delete startup resources"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'elevateqcs-resourcesdocs-startups');