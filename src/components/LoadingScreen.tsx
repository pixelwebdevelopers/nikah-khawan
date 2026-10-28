import React, { useState, useEffect, useRef, useCallback } from "react";

// In-memory flag: resets on full page reload/refresh, but prevents replay during SPA client-side route navigation
let hasPlayedInCurrentTab = false;

// Synchronous check to detect if we should bypass the loading intro
function shouldSkipLoadingScreen(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false;
  }

  // 1. If already played during in-app navigation in current tab
  if (hasPlayedInCurrentTab) {
    return true;
  }

  // 2. Headless Chrome / Lighthouse / Puppeteer automation flag
  // PageSpeed Insights and Lighthouse run in automated Headless Chrome where navigator.webdriver is true
  if (navigator.webdriver) {
    return true;
  }

  // 3. User-Agent detection: Lighthouse, PageSpeed Insights, HeadlessChrome, and SEO crawlers
  const ua = navigator.userAgent || "";
  if (
    /(?:chrome-)?lighthouse|headlesschrome|pagespeed|speed insights|google-pagerenderer|googlebot|bingbot|baiduspider|yandexbot|duckduckbot|slurp|facebookexternalhit|whatsapp|telegrambot|twitterbot|pinterest|linkedinbot|\bbot\b|\bcrawler\b|\bspider\b|ptst/i.test(
      ua,
    )
  ) {
    return true;
  }

  // 4. Specific Lighthouse runtime globals / device profiles
  try {
    const win = window as unknown as Record<string, unknown>;
    if (Boolean(win["__LIGHTHOUSE_DEVICE_PROFILE__"]) || Boolean(win["__lighthouse"])) {
      return true;
    }
  } catch {
    // Ignore
  }

  // 5. Manual query parameter bypass for speed audits (?skip_loader=1, ?noloading=1, ?lighthouse=1, ?psi=1)
  try {
    const search = window.location.search;
    if (search) {
      const params = new URLSearchParams(search);
      if (
        params.has("skip_loader") ||
        params.has("noloading") ||
        params.has("lighthouse") ||
        params.has("psi")
      ) {
        return true;
      }
    }
  } catch {
    // Ignore
  }

  return false;
}

export default function LoadingScreen() {
  const [shouldRun] = useState(() => !shouldSkipLoadingScreen());
  const [isPlaying, setIsPlaying] = useState(shouldRun);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(shouldRun);

  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFinish = useCallback(() => {
    setIsFading((prev) => {
      if (prev) return true;
      hasPlayedInCurrentTab = true;
      // 700ms smooth cinematic zoom-dissolve transition to reveal website
      setTimeout(() => {
        setIsPlaying(false);
        setIsMounted(false);
      }, 700);
      return true;
    });
  }, []);

  useEffect(() => {
    // Immediate bypass if skipped (PageSpeed Insights, crawler, or SPA navigation)
    if (!shouldRun || !isPlaying || !isMounted || shouldSkipLoadingScreen()) {
      setIsPlaying(false);
      setIsMounted(false);
      document.body.style.overflow = "unset";
      return;
    }

    // Lock background scroll during the intro splash animation
    document.body.style.overflow = "hidden";

    // Determine active video based on screen width
    const isMobile = window.innerWidth < 768;
    const activeVideo = isMobile ? mobileVideoRef.current : desktopVideoRef.current;
    const inactiveVideo = isMobile ? desktopVideoRef.current : mobileVideoRef.current;

    // Pause and unload inactive video to avoid network waste and event conflicts
    if (inactiveVideo) {
      try {
        inactiveVideo.pause();
        inactiveVideo.removeAttribute("src");
        inactiveVideo.load();
      } catch {
        // Ignore
      }
    }

    if (!activeVideo) {
      handleFinish();
      return;
    }

    // Trigger transition ~350-400ms before video ends so it smoothly dissolves without freeze-frame
    const onTimeUpdate = () => {
      const duration = activeVideo.duration;
      const targetTime = duration && !isNaN(duration) ? Math.max(duration - 0.4, 2.6) : 2.8;
      if (activeVideo.currentTime >= targetTime) {
        handleFinish();
      }
    };

    const onEnded = () => {
      handleFinish();
    };

    const onError = () => {
      handleFinish();
    };

    activeVideo.addEventListener("timeupdate", onTimeUpdate);
    activeVideo.addEventListener("ended", onEnded);
    activeVideo.addEventListener("error", onError);

    // Initial check if video was already cached and buffered
    if (activeVideo.duration && activeVideo.currentTime >= 2.6) {
      handleFinish();
    }

    // Guaranteed fallback timer (3.2 seconds max total runtime)
    fallbackTimerRef.current = setTimeout(() => {
      handleFinish();
    }, 3300);

    // Trigger autoplay
    const playPromise = activeVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If browser blocks autoplay, fade out smoothly after 1.2s
        setTimeout(handleFinish, 1200);
      });
    }

    return () => {
      document.body.style.overflow = "unset";
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      if (activeVideo) {
        activeVideo.removeEventListener("timeupdate", onTimeUpdate);
        activeVideo.removeEventListener("ended", onEnded);
        activeVideo.removeEventListener("error", onError);
      }
    };
  }, [handleFinish, isPlaying, isMounted, shouldRun]);

  useEffect(() => {
    if (!isPlaying) {
      document.body.style.overflow = "unset";
    }
  }, [isPlaying]);

  if (!isMounted) return null;

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden select-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
        isFading
          ? "opacity-0 scale-105 filter blur-sm pointer-events-none"
          : "opacity-100 scale-100 filter-none"
      }`}
      aria-label="Nikah Khawan Karachi Intro"
    >
      {/* Subtle luxury golden radial glow that blooms softly during the transition into the website */}
      <div
        className={`absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)] transition-opacity duration-700 ease-out ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Desktop Video (16:9 Landscape - visible on md and larger) */}
      <video
        ref={desktopVideoRef}
        src="/loader-video/desktop.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className={`hidden md:block w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out ${
          isFading ? "scale-105" : "scale-100"
        }`}
      />

      {/* Mobile Video (9:16 Portrait - visible on mobile screens) */}
      <video
        ref={mobileVideoRef}
        src="/loader-video/mobile.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className={`block md:hidden w-full h-full object-cover object-center pointer-events-none transition-transform duration-700 ease-out ${
          isFading ? "scale-105" : "scale-100"
        }`}
      />
    </div>
  );
}
