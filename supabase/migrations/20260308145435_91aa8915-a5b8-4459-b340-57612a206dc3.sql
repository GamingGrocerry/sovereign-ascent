
CREATE POLICY "Allow public upload to POE bucket"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-poe');

CREATE POLICY "Allow public update to POE bucket"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'elevateqcs-resourcesdocs-poe');
