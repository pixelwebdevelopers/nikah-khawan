import React, { useState, useEffect, useRef, useCallback } from "react";

// In-memory flag: resets on full page reload/refresh, but prevents replay during SPA client-side route navigation
let hasPlayedInCurrentTab = false;

export default function LoadingScreen() {
  const [isPlaying, setIsPlaying] = useState(!hasPlayedInCurrentTab);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(!hasPlayedInCurrentTab);

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
    // 1. Bot check: bypass immediately for SEO crawlers
    if (
      typeof navigator !== "undefined" &&
      /bot|crawler|spider|googlebot|bingbot|lighthouse/i.test(navigator.userAgent)
    ) {
      setIsPlaying(false);
      setIsMounted(false);
      return;
    }

    // 2. If already played during in-app navigation, unmount cleanly
    if (hasPlayedInCurrentTab) {
      setIsPlaying(false);
      setIsMounted(false);
      return;
    }

    // Lock background scroll during the intro splash animation
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

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
    }, 3200);

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
  }, [handleFinish, isPlaying]);

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
