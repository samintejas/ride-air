"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { bookingLink } from "./hero";

const desktopNavLinks = [
  { label: "Why us", href: "#features" },
  { label: "Our routes", href: "#routes" },
  { label: "How to reserve", href: "#steps" },
] as const;

export function FloatingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] lg:w-[720px]">
      <div
        className={`flex items-center justify-between rounded-full pl-3.5 lg:pl-5 pr-2 py-2 transition-all duration-300
        ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl shadow-lg h-[60px] border border-white/10"
            : "bg-[rgba(15,15,15,0.34)] backdrop-blur-[29px] h-[68px]"
        }`}
      >
        {/* Mobile: hamburger + logo */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className="text-white p-1"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line
                x1="4"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Logo className="h-8" color="white" />
        </div>

        {/* Desktop: logo */}
        <div className="hidden lg:flex items-center">
          <Logo className="h-8 w-[88px]" color="white" />
        </div>

        {/* Desktop: nav links */}
        <div className="hidden lg:flex items-center gap-3 text-base font-medium text-white">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="opacity-80 hover:opacity-100 transition-opacity text-center"
              style={{
                width:
                  link.label === "Why us"
                    ? 76
                    : link.label === "Our routes" ||
                        link.label === "How to reserve"
                      ? 132
                      : 100,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href={bookingLink}>
          <Button
            variant="secondary"
            className="h-12 text-sm lg:text-base whitespace-nowrap px-[18px]"
          >
            Reserve your slot
          </Button>
        </Link>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-black/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
