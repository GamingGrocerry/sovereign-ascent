import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const messages = [
  {
    text: "ISO 9001:2026 transition window is open — September 2026 publication confirmed.",
    linkText: "Start your gap assessment →",
    href: "/tools/qms-gap-analysis",
  },
  {
    text: "EU AI Act deployer obligations are now enforceable. Is your organization using AI tools in operations?",
    linkText: "Check your obligations →",
    href: "/tools/compliance-framework-builder",
  },
];

interface UrgencyBarProps {
  dismissed: boolean;
  onDismiss: () => void;
}

export function UrgencyBar({ dismissed, onDismiss }: UrgencyBarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed) return null;

  const msg = messages[activeIndex];

  return (
    <div className="relative bg-primary border-b border-accent/20 py-2 px-4">
      <div className="flex items-center justify-center gap-1 text-xs text-primary-foreground/75 text-center pr-8">
        <span>⚡</span>
        <span>{msg.text}</span>
        <Link
          to={msg.href}
          className="text-accent font-medium underline hover:no-underline ml-1 whitespace-nowrap"
        >
          {msg.linkText}
        </Link>
      </div>
      <button
        onClick={onDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
