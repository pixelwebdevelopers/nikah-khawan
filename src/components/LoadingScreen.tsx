import React, { useState, useEffect, useRef, useCallback } from "react";

export default function LoadingScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        // If already seen in this session, don't mount
        return sessionStorage.getItem("nikah_intro_seen") !== "1";
      } catch {
        return true;
      }
    }
    return true;
  });

  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleFinish = useCallback(() => {
    if (isFading || !isPlaying) return;
    setIsFading(true);
    // Smooth 500ms cinematic crossfade to hero section
    setTimeout(() => {
      setIsPlaying(false);
      setIsMounted(false);
    }, 500);
  }, [isFading, isPlaying]);

  // Adjust safety fallback timer dynamically when video metadata loads (calibrated for 3-3.5s video)
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    if (duration && !isNaN(duration) && duration > 0) {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      // Add a slim 250ms buffer past video duration so full clip plays cleanly
      const safeDurationMs = Math.round(duration * 1000) - 550;
      fallbackTimerRef.current = setTimeout(() => {
        handleFinish();
      }, safeDurationMs);
    }
  };

  // Near-end trigger for instant, seamless transition without end-of-buffer stall
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    if (video.duration && video.currentTime >= video.duration - 0.12) {
      handleFinish();
    }
  };

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

    // 2. Session check: only play once per browser session
    try {
      if (sessionStorage.getItem("nikah_intro_seen") === "1") {
        setIsPlaying(false);
        setIsMounted(false);
        return;
      }
      sessionStorage.setItem("nikah_intro_seen", "1");
    } catch {
      // Ignore if sessionStorage is disabled
    }

    // Lock background scroll during the intro splash animation
    if (isPlaying) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Initial safety fallback: calibrated for ~3-3.5s video (times out at 3.9s if metadata is delayed)
    fallbackTimerRef.current = setTimeout(() => {
      handleFinish();
    }, 3200);

    // Attempt autoplay immediately
    const playDesktop = desktopVideoRef.current?.play();
    if (playDesktop !== undefined) {
      playDesktop.catch(() => {
        // Handled via user tap or fallback timer
      });
    }

    const playMobile = mobileVideoRef.current?.play();
    if (playMobile !== undefined) {
      playMobile.catch(() => {
        // Handled via user tap or fallback timer
      });
    }

    return () => {
      document.body.style.overflow = "unset";
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
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
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden select-none transition-opacity duration-500 ease-out cursor-pointer ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Nikah Khawan Karachi Intro"
    >
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
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        onError={handleFinish}
        className="hidden md:block w-full h-full object-cover object-center pointer-events-none"
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
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleFinish}
        onError={handleFinish}
        className="block md:hidden w-full h-full object-cover object-center pointer-events-none"
      />
    </div>
  );
}
