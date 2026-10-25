import { Phone, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Quick Contact Helplines"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3"
    >
      {/* 24/7 Phone Call Button */}
      <div className="group relative flex items-center">
        <div className="pointer-events-none absolute right-16 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-lg border border-gold/40 bg-background/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-primary shadow-lg animate-in fade-in slide-in-from-right-2 duration-150">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Call Nikah Registrar: {SITE_CONFIG.phoneFormatted}
          </span>
        </div>
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label={`Call Nikah Registrar at ${SITE_CONFIG.phoneFormatted}`}
          className="relative grid h-13 w-13 sm:h-14 sm:w-14 place-items-center rounded-full border-2 border-gold bg-gradient-to-tr from-primary via-[#550c82] to-[#7b1fa2] text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold" />
          </span>
          <Phone className="h-6 w-6 text-champagne transition-transform group-hover:rotate-12" />
        </a>
      </div>

      {/* 24/7 WhatsApp Button */}
      <div className="group relative flex items-center">
        <div className="pointer-events-none absolute right-16 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-lg border border-gold/40 bg-background/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-primary shadow-lg animate-in fade-in slide-in-from-right-2 duration-150">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Chat on WhatsApp 24/7
          </span>
        </div>
        <a
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Nikah Registrar on WhatsApp"
          className="relative grid h-14 w-14 sm:h-15 sm:w-15 place-items-center rounded-full border-2 border-gold bg-gradient-to-tr from-primary to-[#500c7e] text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
          </span>
          <MessageCircle className="h-7 w-7 text-champagne" />
        </a>
      </div>
    </aside>
  );
}
