INSERT INTO storage.buckets (id, name, public)
VALUES ('RFP-Files', 'RFP-Files', false);

CREATE POLICY "Anyone can upload RFP files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'RFP-Files');

CREATE POLICY "No public read on RFP files"
ON storage.objects FOR SELECT
USING (bucket_id = 'RFP-Files' AND false);