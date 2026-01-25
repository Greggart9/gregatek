"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  stagger?: number;
  ease?: string;
};

export default function TextReveal({
  children,
  className = "",
  duration = 1.0,
  stagger = 0.1,
  ease = "sine.out",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current.querySelector(".animate-me");

    if (!element) return;

    const split = new SplitText(element, { type: "words", aria: "hidden" });

    gsap.from(split.words, {
      opacity: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    return () => split.revert();
  }, [duration, ease, stagger]);

  return (
    <div className={`container ${className}`} ref={containerRef}>
      <div className="animate-me" aria-hidden="true">
        {children}
      </div>

      <span className="sr-only">{children}</span>
    </div>
  );
}
