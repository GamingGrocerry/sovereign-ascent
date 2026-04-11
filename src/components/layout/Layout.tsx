import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { UrgencyBar } from "@/components/UrgencyBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [urgencyDismissed, setUrgencyDismissed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar dismissed={urgencyDismissed} onDismiss={() => setUrgencyDismissed(true)} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
}
