"use client";

import { Logo } from "@/components/logo";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { YoutubeModal } from "./youtube-modal";

const desktopNavLinks = [
  { label: "Why us", href: "#features" },
  { label: "Our routes", href: "#routes" },
  { label: "How to reserve", href: "#steps" },
] as const;

export const bookingLink = "https://grb.to/av-form"; //"https://form.gov.sg/69c13c7d7c56b5231f73a94d";

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isOpenYoutubeModal, setIsOpenYoutubeModal] = useState(false);

  const openYoutubeModal = () => {
    setIsOpenYoutubeModal(true);
  };

  const closeYoutubeModal = () => {
    setIsOpenYoutubeModal(false);
  };

  useEffect(() => {
    if (isOpenYoutubeModal) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isOpenYoutubeModal]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <Image
        src="/images/hero-bg-new.jpg"
        alt="Ai.R autonomous shuttle on Singapore streets"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay at bottom */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(173deg, rgba(0,0,0,0) 12%, rgba(0,0,0,0.8) 83%)",
        }}
      />

      {/* Navigation bar */}
      <nav className="absolute top-7 lg:top-10 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-2rem)] lg:w-[720px]">
        <div className="flex items-center justify-between backdrop-blur-[29px] bg-[rgba(15,15,15,0.34)] rounded-full h-[68px] pl-3.5 lg:pl-5 pr-2 py-2">
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

          {/* Desktop: logo + nav links */}
          <div className="hidden lg:flex items-center">
            <Logo className="h-8 w-[88px]" color="white" />
          </div>

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
                      : link.label === "Our routes"
                        ? 132
                        : 100,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href={bookingLink}>
            <Button
              variant="secondary"
              className="h-12 text-sm lg:text-base whitespace-nowrap px-[18px]"
            >
              Reserve your slot
            </Button>
          </Link>
        </div>

        {/* Mobile menu dropdown */}
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

      {/* Large Ai.R watermark */}
      {/* <div className="absolute top-16 lg:top-24 left-0 lg:left-[30%] lg:-translate-x-1/2 z-10 opacity-20 pointer-events-none">
        <Logo className="h-[280px] lg:h-[380px]" color="white" />
      </div> */}

      {/* Content overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-0 lg:px-[94px] lg:pb-[61px] lg:pt-12">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-8">
          {/* Left: headline + CTA */}
          <div className="flex flex-col gap-5 lg:gap-[34px] lg:max-w-[769px]">
            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] lg:text-[52px] font-medium lg:font-semibold text-white tracking-[-0.5px] lg:tracking-[1.04px] leading-[1.3] lg:leading-[1.2] lg:max-w-[566px]">
                A new way to ride, Powered by Ai.R
              </h1>
              <p className="text-sm lg:text-xl text-[#afafaf] leading-[1.3] lg:max-w-[769px]">
                Ai.R, powered by Grab, is an autonomous service connecting
                neighbourhoods, transport nodes and key destinations. Its
                state-of-the-art fleet uses advanced sensors and intelligent
                systems to make safe, real-time decisions.
              </p>
            </div>

            {/* CTA bar */}
            <div className="flex items-center bg-[rgba(76,73,73,0.27)] rounded-full pl-6 pr-2 py-2 gap-3 lg:gap-6 lg:w-fit">
              <p className="text-sm lg:text-base text-white leading-[1.3] flex-1 lg:flex-none lg:whitespace-nowrap">
                Be first in line to experience the future of transport
              </p>
              <Link href="#steps">
                <Button
                  variant="primary"
                  icon={<ArrowIcon />}
                  className="shrink-0"
                >
                  Learn more
                </Button>
              </Link>
            </div>

            {/* Mobile: video bar */}
            <div
              onClick={openYoutubeModal}
              className="flex lg:hidden items-center justify-between border-t border-white/40 pt-[18px] pb-[18px]"
            >
              <Link href="#" className="flex items-center gap-4">
                <div className="w-[103px] h-[58px] rounded-md bg-white/10 overflow-hidden">
                  {/* <Image
                    src="/images/hero-bg-new.jpg"
                    alt="Ai.R video thumbnail"
                    width={103}
                    height={58}
                    className="object-cover w-full h-full opacity-70"
                  /> */}

                  <video
                    src="/videos/hero-video.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-full w-full cursor-pointer"
                  />
                </div>
                <span className="text-sm text-white flex items-center gap-1.5">
                  Get to know Ai.R
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 12L12 4M12 4H5M12 4V11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <button
                type="button"
                className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center"
                aria-label="Play video"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#333" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop: video card */}
          <div className="hidden lg:flex shrink-0 w-[315px] h-[177px] rounded-[11px] overflow-hidden relative bg-black/40">
            {/* <Image
              src="/images/hero-bg-new.jpg"
              alt="Grab Ai.R Technology video"
              fill
              className="object-cover opacity-60"
            /> */}

            <video
              src="/videos/hero-video.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full cursor-pointer"
            />

            <div
              onClick={openYoutubeModal}
              className="absolute inset-0 flex items-end justify-between p-[13px] cursor-pointer"
            >
              <div className="flex flex-col gap-[3px] text-white">
                <p className="text-xs leading-[1.3] tracking-wide uppercase">
                  See how it works
                </p>
                <p className="text-lg font-semibold leading-[1.3]">
                  Grab Ai.R Technology
                </p>
              </div>
              <div className="self-start">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                  aria-label="Play video"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="#333" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenYoutubeModal && (
        <YoutubeModal
          videoURL="https://www.youtube.com/embed/EAzMaz5Vpsg"
          onClose={closeYoutubeModal}
        />
      )}
    </section>
  );
}
