INSERT INTO storage.buckets (id, name, public) VALUES ('elevateqcs-resourcesdocs-poe', 'elevateqcs-resourcesdocs-poe', true) ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Allow public read on POE resources" ON storage.objects FOR SELECT TO public USING (bucket_id = 'elevateqcs-resourcesdocs-poe');
CREATE POLICY "Allow authenticated upload to POE resources" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'elevateqcs-resourcesdocs-poe');
CREATE POLICY "Allow authenticated update POE resources" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'elevateqcs-resourcesdocs-poe');
CREATE POLICY "Allow authenticated delete POE resources" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'elevateqcs-resourcesdocs-poe');