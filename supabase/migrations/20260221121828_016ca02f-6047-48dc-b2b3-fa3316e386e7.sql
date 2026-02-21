-- Allow public read access to files in resource buckets
CREATE POLICY "Public read access for govcon resources"
ON storage.objects FOR SELECT
USING (bucket_id = 'elevateqcs-resourcesdocs-govcon');

CREATE POLICY "Public read access for startup resources"
ON storage.objects FOR SELECT
USING (bucket_id = 'elevateqcs-resourcesdocs-startups');
