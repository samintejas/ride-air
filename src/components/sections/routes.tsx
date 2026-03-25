"use client";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { bookingLink } from "./hero";

type LocationButtonProps = {
  src: string;
};

function LocationButton({ src }: LocationButtonProps) {
  return (
    <Link href={src || "#"}>
      <button
        type="button"
        className="inline-flex items-center gap-2 border border-[#464646] rounded-full px-3.5 py-3 text-base font-medium text-[#272727] hover:bg-black/5 transition-colors"
      >
        <Image src="/images/location-icon.svg" alt="" width={20} height={20} />
        View pick-up and drop-off locations
      </button>
    </Link>
  );
}

export const location1 = "https://maps.app.goo.gl/YCvvsAJpqyHHDEP86";
// "https://www.google.com/maps/place/Sheng+Siong+Supermarket/@1.4017201,103.8924234,21z/data=!3m1!5s0x31da15e0116c3cc5:0x23026abb0a7b58e0!4m6!3m5!1s0x31da1522f42940e3:0xe965477e810ce928!8m2!3d1.4019589!4d103.8921939!16s%2Fg%2F11h18ccmw2?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";
export const location2 = "https://maps.app.goo.gl/yAkX2ZWZPbpBQFsRA";
//"https://www.google.com/maps/place/Tower+82+(Punggol+Digital+District)/@1.4151488,103.9087826,17z/data=!3m1!4b1!4m6!3m5!1s0x31da15007233a7c5:0x58842fac3380e6cb!8m2!3d1.4151488!4d103.9087826!16s%2Fg%2F11y6st56mv?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

export function RoutesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const locationUrl = activeTab === 0 ? location1 : location2;

  return (
    <section id="routes" className="bg-[#efe8fa]">
      <div className="max-w-[1440px] mx-auto px-4 py-12 xl:px-[94px] xl:py-[96px] flex flex-col items-center gap-12 xl:gap-[74px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="text-[32px] xl:text-[48px] font-medium tracking-[-0.48px] leading-[1.4] max-w-[712px]">
                We&apos;re currently{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                  operating 2 out of 3 looped
                </span>{" "}
                shuttle service routes.
              </h2>
            </div>

            {/* Schedule info */}
            <div className="bg-[#faf5ff] rounded-xl px-4 py-4 xl:px-[42px] xl:py-[18px] w-full xl:w-[712px]">
              <div className="flex flex-col xl:flex-row xl:items-center xl:gap-8 gap-2 text-center xl:text-right text-base xl:text-lg">
                <div className="flex items-center justify-center gap-2 xl:pr-8 xl:border-r xl:border-stroke-primary">
                  <span className="text-content-secondary">
                    Monday to Friday
                  </span>
                  <span className="text-content-primary">9:30AM to 5:30PM</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-content-secondary">
                    Last ride departs at
                  </span>
                  <span className="text-content-primary">4:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          <Link href={bookingLink}>
            <Button variant="primary" icon={<ArrowIcon />}>
              Reserve your slot
            </Button>
          </Link>
        </div>

        {/* Route cards */}
        <div className="w-full flex flex-col items-center gap-14">
          {/* Mobile: tabs */}
          <div className="w-full xl:hidden">
            <div className="flex rounded-xl bg-[#C6C6C6] overflow-hidden p-1">
              {["Route 1", "Route 3"].map((name, i) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-3 text-base font-medium rounded-xl transition-colors ${
                    activeTab === i ? "bg-white text-black" : "text-[#9A9696]"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: single route */}
          <div className="w-full xl:hidden">
            <div className="relative border border-[#e4e4e4] rounded-[46px] overflow-hidden bg-white">
              {/* Background pattern */}
              <Image
                src="/images/route-card-bg.jpg"
                alt=""
                fill
                className="object-cover opacity-[0.66]"
              />
              {/* Tab label */}
              <div className="relative flex justify-center -mt-px">
                <div className="relative">
                  <Image
                    src="/images/route-tab-label.svg"
                    alt=""
                    width={178}
                    height={40}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-content-primary">
                    {activeTab === 0 ? "ROUTE 1" : "ROUTE 3"}
                  </span>
                </div>
              </div>
              {/* Route image */}
              <div className="relative px-4 py-4">
                <Image
                  src={
                    activeTab === 0
                      ? "/images/route-1.png"
                      : "/images/route-3.png"
                  }
                  alt={activeTab === 0 ? "Route 1 map" : "Route 3 map"}
                  width={506}
                  height={454}
                  className="w-full h-auto"
                />
              </div>
              {/* Location button */}
              <div className="relative flex justify-center pb-8">
                {locationUrl && <LocationButton src={locationUrl} />}
              </div>
            </div>
          </div>

          {/* Desktop: side-by-side routes */}
          <div className="hidden xl:flex xl:gap-14 w-full">
            {[
              {
                name: "ROUTE 1",
                image: "/images/route-1.png",
                imgW: 506,
                imgH: 454,
              },
              {
                name: "ROUTE 3",
                image: "/images/route-3.png",
                imgW: 506,
                imgH: 444,
              },
            ].map((route, idx) => (
              <div
                key={route.name}
                className="flex-1 relative border border-[#e4e4e4] rounded-[46px] overflow-hidden bg-white h-[652px]"
              >
                {/* Background pattern */}
                <Image
                  src="/images/route-card-bg.jpg"
                  alt=""
                  fill
                  className="object-cover opacity-[0.66]"
                />
                {/* Tab label */}
                <div className="relative flex justify-center -mt-px">
                  <div className="relative">
                    <Image
                      src="/images/route-tab-label.svg"
                      alt=""
                      width={327}
                      height={52}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xl font-medium text-content-primary">
                      {route.name}
                    </span>
                  </div>
                </div>
                {/* Route image */}
                <div className="relative flex justify-center px-[57px] pt-4">
                  <Image
                    src={route.image}
                    alt={`${route.name} map`}
                    width={route.imgW}
                    height={route.imgH}
                    className="w-full h-auto"
                  />
                </div>
                {/* Location button */}
                <div className="absolute bottom-[27px] left-1/2 -translate-x-1/2 w-max">
                  {/* {locationUrl && <LocationButton src={locationUrl} />} */}

                  <LocationButton src={idx === 0 ? location1 : location2} />
                </div>
              </div>
            ))}
          </div>

          {/* Mini Route */}
          <div className="w-full relative border border-[#e4e4e4] rounded-[46px] overflow-hidden bg-white">
            {/* Background pattern */}
            <Image
              src="/images/route-card-bg.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.66]"
            />

            {/* Mobile layout */}
            <div className="xl:hidden relative">
              {/* Tab label */}
              <div className="flex justify-center -mt-px">
                <div className="relative">
                  <Image
                    src="/images/route-tab-label-dark.svg"
                    alt=""
                    width={178}
                    height={40}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                    ROUTE 3 MINI
                  </span>
                </div>
              </div>
              <div className="px-[18px] pt-6 pb-4">
                <h3 className="text-2xl font-medium tracking-[-0.5px] leading-[1.3] mb-4">
                  Want a faster AV experience? Hop on our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                    20-minutes Mini
                  </span>{" "}
                  loop for a quick trial!
                </h3>
                <div className="bg-[#faf5ff] rounded-xl px-3 py-4 mb-4">
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-content-secondary">
                        Monday to Friday
                      </span>
                      <span className="text-content-primary font-medium">
                        9:30AM to 5:30PM
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-content-secondary">
                        Last ride departs at
                      </span>
                      <span className="text-content-primary font-medium">
                        5:00 PM
                      </span>
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/route-3-mini.png"
                  alt="Route 3 Mini map"
                  width={306}
                  height={376}
                  className="w-full h-auto"
                />
                <div className="mt-4 mx-auto w-fit">
                  {location2 && <LocationButton src={location2} />}
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden xl:block relative">
              {/* Tab label - positioned top right */}
              <div className="absolute top-0 right-[90px] z-10">
                <div className="relative">
                  <Image
                    src="/images/route-tab-label-dark.svg"
                    alt=""
                    width={327}
                    height={52}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white">
                    ROUTE 3 MINI
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-center gap-[174px] px-[53px] py-[54px]">
                {/* Left: text content */}
                <div className="flex-1 flex flex-col gap-14 items-start">
                  <div className="flex flex-col gap-[52px] items-start">
                    <h3 className="text-[32px] font-medium tracking-[-0.5px] leading-[1.3] max-w-[409px]">
                      Want a faster AV experience? Hop on our{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                        20-minutes Mini
                      </span>{" "}
                      loop for a quick trial!
                    </h3>
                    <div className="bg-surface-primary rounded-xl px-7 py-[18px]">
                      <div className="flex items-center gap-[77px] text-base">
                        <div className="flex flex-col items-center gap-1.5 w-[166px]">
                          <span className="text-content-secondary">
                            Monday to Friday
                          </span>
                          <span className="text-lg text-content-primary text-right w-full">
                            9:30AM to 5:30PM
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 w-[166px]">
                          <span className="text-content-secondary">
                            Last ride departs at
                          </span>
                          <span className="text-lg text-content-primary text-right">
                            5:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <LocationButton src={location2} />
                </div>

                {/* Right: route image + duration */}
                <div className="relative shrink-0">
                  <Image
                    src="/images/route-3-mini.png"
                    alt="Route 3 Mini map"
                    width={476}
                    height={370}
                    className="w-[476px] h-auto"
                  />
                  {/* Duration indicator */}
                  <div className="absolute top-[210px] right-[50px] flex items-center gap-1.5">
                    <div className="w-[26px] h-[26px] rounded-full border border-stroke-primary bg-white flex items-center justify-center">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7"
                          stroke="#0f0f0f"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 4V8L11 10"
                          stroke="#0f0f0f"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col leading-[1.3]">
                      <span className="text-sm font-semibold text-content-primary">
                        20 mins
                      </span>
                      <span className="text-xs text-content-primary">Ride</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex items-start justify-center gap-1.5">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              className="shrink-0 mt-0.5"
            >
              <path
                d="M10.333 2.333a8.333 8.333 0 100 16.667 8.333 8.333 0 000-16.667zm0 4.167v3.333m0 3.334h.008"
                stroke="#4e4e4e"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-base text-content-secondary text-center leading-[1.3] max-w-[1003px]">
              During this free trial, all rides form a loop, starting and ending
              at the same point. You can board and alight only at the pickup
              points located at Matilda Court and Punggol Coast Mall.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
