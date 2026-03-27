"use client";

import { ArrowRight, HamBurger } from "@/app/assets/icons";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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

  // Detect scroll (desktop effect)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] lg:w-[720px]">
        <div
          className={`flex items-center ${mobileMenuOpen ? "w-[200px] mx-auto" : ""} md:w-full justify-between rounded-full pl-3.5 lg:pl-5 pr-2 py-2 transition-all duration-300
          ${
            isScrolled
              ? "bg-black/80 backdrop-blur-xl shadow-lg h-[60px] border border-white/10"
              : "bg-[rgba(15,15,15,0.34)] backdrop-blur-[29px] h-[68px]"
          }`}
        >
          {/* MOBILE HEADER */}
          <div
            className={`flex  w-full ${mobileMenuOpen ? "justify-between w-[200px]" : "items-center"} gap-3 lg:hidden`}
          >
            {!mobileMenuOpen && (
              <button
                type="button"
                className="text-white p-1"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Image src={HamBurger} alt="hamburger" height={20} width={20} />
              </button>
            )}

            <Logo className="h-8" color="white" />

            {mobileMenuOpen && (
              <button
                type="button"
                className="text-white h-[48px] px-5 bg-[rgba(15,15,15,0.34) border border-white rounded-3xl min-w-[72px] min-h-[48px]"
                aria-label="Close Menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                X
              </button>
            )}
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden lg:flex items-center">
            <Logo className="h-8 w-[88px]" color="white" />
          </div>

          {/* DESKTOP LINKS */}
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

          {/* DESKTOP CTA */}
          {!mobileMenuOpen && (
            <Link href={bookingLink}>
              <Button
                variant="secondary"
                className="h-12 text-sm lg:text-base whitespace-nowrap px-[18px]"
              >
                Reserve your slot
              </Button>
            </Link>
          )}
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col overflow-scroll pb-10">
          {/* BACKGROUND IMAGE (half screen, padded) */}
          <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
            <div className="w-full h-[300px] md:hidden px-4">
              <div className="relative w-full h-full h-[300px] rounded-b-2xl overflow-hidden">
                <Image
                  src="/images/menu-bg.png"
                  alt="menu bg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* MENU CONTENT */}
          <div className="relative z-10 mt-[45vh] md:mt-0 flex-1 flex flex-col mt-10 items-center justify-center gap-8">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-black/80 hover:text-black transition w-full px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex justify-between w-full">
                  <span>{link.label}</span>

                  <Image src={ArrowRight} alt="" height={26} width={26} />
                </div>
              </Link>
            ))}

            <hr className="text-[#E1E0E0] w-full" />

            {/* CTA */}

            <div className="flex flex-col gap-3.5 text-[18px] text-center">
              <span>
                Be first in line to experience the
                <br />
                future of transport
              </span>

              <Link href={bookingLink} onClick={() => setMobileMenuOpen(false)}>
                <Button className="mt-6">Reserve your slot</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
