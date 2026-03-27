"use client";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { YoutubeModal } from "./youtube-modal";

export const bookingLink = "https://grb.to/av-form";

export function HeroSection() {
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
      {/* desktop bg */}
      <Image
        src="/images/hero-bg-new.jpg"
        alt="Ai.R autonomous shuttle on Singapore streets"
        fill
        className="object-cover object-center lg:block hidden"
        priority
      />
      {/* mobile-bg */}
      <Image
        src="/images/hero-mobile.jpg"
        alt="Ai.R autonomous shuttle on Singapore streets"
        fill
        className="object-cover object-center lg:hidden block"
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
      \{/* Content overlay at bottom */}
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
            {/* Video */}
            <video
              src="/videos/hero-video.webm"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />

            {/* ✅ Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
        linear-gradient(71.21deg, rgba(0,0,0,0) 55.8%, rgba(0,0,0,0.76) 100.91%),
        linear-gradient(208.23deg, rgba(0,0,0,0) 42.57%, rgba(0,0,0,0.83) 74.87%)
      `,
              }}
            />

            {/* Content */}
            <div
              onClick={openYoutubeModal}
              className="absolute inset-0 flex items-end justify-between p-[13px] cursor-pointer z-10"
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
