-- Create email-assets bucket for logo
INSERT INTO storage.buckets (id, name, public) VALUES ('email-assets', 'email-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
CREATE POLICY "Public read access for email assets"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'email-assets');