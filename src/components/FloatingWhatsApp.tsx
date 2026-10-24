import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40 group">
      <div className="absolute -top-10 right-0 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-lg border border-gold/40 bg-background px-3 py-1 text-xs font-semibold text-primary shadow-soft animate-in fade-in duration-200">
        Chat with Nikah Registrar 24/7
      </div>
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Nikah Registrar on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full border-2 border-gold bg-gradient-to-tr from-primary to-[#500c7e] text-primary-foreground shadow-2xl transition hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
        </span>
        <MessageCircle className="h-7 w-7 text-champagne" />
      </a>
    </aside>
  );
}
