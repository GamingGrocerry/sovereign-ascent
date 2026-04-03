import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useArticleViews(slug: string | undefined) {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    if (!slug || !supabase) return;

    // Increment view
    supabase.rpc("increment_article_view", { _slug: slug }).then();

    // Fetch current count
    supabase
      .from("article_views")
      .select("view_count")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        setViewCount(data?.view_count ?? 1);
      });
  }, [slug]);

  return viewCount;
}

export function useAllArticleViews() {
  const [views, setViews] = useState<Record<string, number>>({});

  useEffect(() => {
    supabase
      .from("article_views")
      .select("slug, view_count")
      .then(({ data }) => {
        if (data) {
          const map: Record<string, number> = {};
          for (const row of data) {
            map[row.slug] = row.view_count;
          }
          setViews(map);
        }
      });
  }, []);

  return views;
}
