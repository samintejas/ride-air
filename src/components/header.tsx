"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { ArrowIcon } from "./ui/arrow-icon";

const navLinks = [
  { label: "Technology", href: "/technology" },
  { label: "Our fleet", href: "/fleet" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform"
    >
      {open ? (
        <>
          <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="2" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl">
      <nav className="flex items-center justify-between bg-black/30 backdrop-blur-xl rounded-full h-[68px] pl-5 pr-2">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo className="h-8" color="white" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="secondary"
            icon={<ArrowIcon />}
            className="h-12 rounded-full"
          >
            See routes
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-[72px] h-12 rounded-full border border-white/20 text-white"
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={mobileMenuOpen} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-black/90 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="secondary"
            icon={<ArrowIcon />}
            className="mt-2 w-full"
          >
            See routes
          </Button>
        </div>
      )}
    </header>
  );
}
