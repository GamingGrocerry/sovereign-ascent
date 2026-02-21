import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

// Map of inline image paths to their ES6 imports
const imageImports: Record<string, string> = {};

// Dynamically import all mjc- images and other article inline images
const assetModules = import.meta.glob("@/assets/mjc-*.jpg", { eager: true, import: "default" });
for (const [path, mod] of Object.entries(assetModules)) {
  // Extract the filename part after /assets/
  const filename = path.split("/assets/")[1];
  if (filename) {
    imageImports[`/assets/${filename}`] = mod as string;
  }
}

const parseInline = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g;
  let lastIndex = 0;
  let match;
  let inlineKey = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[1]) parts.push(<strong key={inlineKey++}>{parseInline(match[2])}</strong>);
    else if (match[3]) parts.push(<em key={inlineKey++}>{parseInline(match[4])}</em>);
    else if (match[5]) {
      const href = match[7];
      const isExternal = href.startsWith("http");
      const isMail = href.startsWith("mailto:");
      if (isMail || isExternal) {
        parts.push(
          <a
            key={inlineKey++}
            href={href}
            className="text-link inline-flex items-center gap-1"
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {})}
          >
            {match[6]}
            {isExternal && <ExternalLink className="inline w-3 h-3 shrink-0" />}
          </a>
        );
      } else {
        parts.push(
          <Link key={inlineKey++} to={href} className="text-link">
            {match[6]}
          </Link>
        );
      }
    }
    else if (match[8])
      parts.push(
        <code key={inlineKey++} className="bg-secondary px-1.5 py-0.5 rounded text-sm">
          {match[9]}
        </code>
      );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts.length ? parts : [text];
};

export function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") { i++; continue; }

    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={key++} className="my-10 border-border" />);
      i++; continue;
    }

    // Inline image: ![alt](src "title")
    const imgMatch = line.trim().match(/^!\[(.+?)\]\((.+?)(?:\s+"(.+?)")?\)$/);
    if (imgMatch) {
      const alt = imgMatch[1];
      const rawSrc = imgMatch[2];
      const title = imgMatch[3] || alt;
      // Resolve the src — check if we have an imported version
      const resolvedSrc = imageImports[rawSrc] || rawSrc;
      elements.push(
        <figure key={key++} className="my-10">
          <img
            src={resolvedSrc}
            alt={alt}
            title={title}
            className="w-full rounded-sm shadow-md"
            loading="lazy"
          />
          {title && (
            <figcaption className="mt-3 text-xs text-muted-foreground/70 text-center italic">
              {title}
            </figcaption>
          )}
        </figure>
      );
      i++; continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const className = level === 2 ? "mt-12 mb-6" : level === 3 ? "mt-8 mb-4" : "mt-6 mb-3";
      elements.push(<Tag key={key++} className={className}>{parseInline(headingMatch[2])}</Tag>);
      i++; continue;
    }

    if (line.includes("|") && i + 1 < lines.length && lines[i + 1]?.includes("---")) {
      const headerCells = line.split("|").map((c) => c.trim()).filter(Boolean);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").map((c) => c.trim()).filter(Boolean));
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="text-left py-3 px-4 border-b-2 border-border font-semibold text-foreground">
                    {parseInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3 px-4 border-b border-border text-muted-foreground">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={items.length} className="text-muted-foreground">{parseInline(lines[i].replace(/^\d+\.\s/, ""))}</li>);
        i++;
      }
      elements.push(<ol key={key++} className="list-decimal list-inside space-y-2 my-6 pl-4">{items}</ol>);
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(<li key={items.length} className="text-muted-foreground">{parseInline(lines[i].replace(/^[-*]\s/, ""))}</li>);
        i++;
      }
      elements.push(<ul key={key++} className="list-disc list-inside space-y-2 my-6 pl-4">{items}</ul>);
      continue;
    }

    elements.push(<p key={key++} className="my-4 text-muted-foreground leading-relaxed">{parseInline(line)}</p>);
    i++;
  }

  return <>{elements}</>;
}
