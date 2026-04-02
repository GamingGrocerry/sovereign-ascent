
-- Create article_views table
CREATE TABLE public.article_views (
  slug TEXT PRIMARY KEY,
  view_count INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.article_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read view counts
CREATE POLICY "Anyone can view article view counts"
ON public.article_views
FOR SELECT
USING (true);

-- Function to increment view count (upsert)
CREATE OR REPLACE FUNCTION public.increment_article_view(_slug TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.article_views (slug, view_count, updated_at)
  VALUES (_slug, 1, now())
  ON CONFLICT (slug)
  DO UPDATE SET view_count = article_views.view_count + 1, updated_at = now();
END;
$$;
