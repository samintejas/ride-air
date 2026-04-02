"use client";

import { CtaBannerSection } from "./cta-banner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function LandingPage() {
  const footerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;
    const { height } = footerRef.current.getBoundingClientRect();
    setFooterHeight(height);
  }, []);

  useGSAP(
    () => {
      if (!bannerRef.current || !footerRef.current) return;

      gsap.set(bannerRef.current, {
        scale: 1,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      });
      const bannerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom 70%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      });
      bannerTimeline
        .to(
          bannerRef.current,
          {
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            ease: "power2.out",
          },
          0,
        )
        .to(bannerRef.current, { scale: 0.985, ease: "power3.in" }, 0);
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ height: `calc(100svh + ${footerHeight}px)` }}
    >
      <div ref={bannerRef} className="relative z-30 overflow-hidden">
        <CtaBannerSection />
      </div>
      <Footer ref={footerRef} isFixed={true} />
    </section>
  );
}
