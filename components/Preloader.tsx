"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds regardless of load event
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Also try to listen for load event as backup
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] bg-cyber-black flex items-center justify-center transition-opacity duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cyber-primary/30 border-t-cyber-primary rounded-full animate-spin mx-auto mb-4" />
        <p className="font-mono text-cyber-primary text-sm animate-pulse">
          INITIALIZING SYSTEM...
        </p>
      </div>
    </div>
  );
}
