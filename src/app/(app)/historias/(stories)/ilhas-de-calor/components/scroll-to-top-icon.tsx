"use client";

import { useEffect, useState } from "react";
import { ScrollToTopButton } from "./scroll-to-top-button";

export function ScrollToTopIcon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.querySelector("section.h-screen");
      const footerSection = document.querySelector("footer");

      if (!introSection || !footerSection) {
        setIsVisible(window.scrollY > 100);
        return;
      }

      const introRect = introSection.getBoundingClientRect();
      const footerRect = footerSection.getBoundingClientRect();

      const pastIntro = introRect.bottom < 0;
      const beforeFooter = footerRect.top > window.innerHeight;
      const notAtTop = window.scrollY > 100;

      setIsVisible(pastIntro && beforeFooter && notAtTop);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <ScrollToTopButton onClick={scrollToTop} />
    </div>
  );
}
