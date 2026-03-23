"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/arrow-icon";

interface RouteStop {
  name: string;
  detail: string;
  type: "stop" | "pickup";
}

interface RouteData {
  id: string;
  name: string;
  duration: string;
  stops: readonly RouteStop[];
}

const routes: RouteData[] = [
  {
    id: "route-1",
    name: "Route 1",
    duration: "50 mins",
    stops: [
      { name: "Oasis Terrace", detail: "Shopping centre", type: "stop" },
      { name: "Matilda Court", detail: "231 Sumang Lane", type: "pickup" },
      { name: "Punggol Plaza", detail: "Shopping mall", type: "stop" },
      { name: "Punggol Clover", detail: "BLK 204A", type: "stop" },
    ],
  },
  {
    id: "route-3",
    name: "Route 3",
    duration: "50 mins",
    stops: [
      { name: "Punggol Northshore", detail: "BLK 420A", type: "stop" },
      { name: "Punggol Coast Mall", detail: "Tower 82 Lobby", type: "pickup" },
      { name: "One Punggol", detail: "Sam Kee LRT", type: "stop" },
      { name: "Matilda Court", detail: "BLK 231", type: "stop" },
      { name: "Punggol Clover", detail: "BLK 204A", type: "stop" },
    ],
  },
];

const miniRoute: RouteData = {
  id: "route-3-mini",
  name: "Route 3 Mini",
  duration: "20 mins",
  stops: [
    { name: "Punggol Northshore", detail: "Blk 410A", type: "stop" },
    { name: "Punggol Coast Mall", detail: "Tower 82 Lobby", type: "pickup" },
    { name: "One Punggol", detail: "Sam Kee LRT", type: "stop" },
  ],
};

function RouteLoop({ route, dark = false }: { route: RouteData; dark?: boolean }) {
  const borderColor = dark ? "border-white/25" : "border-[#d4d4d4]";
  const textColor = dark ? "text-white" : "text-content-primary";
  const subColor = dark ? "text-white/60" : "text-content-secondary";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-40 h-64 mx-auto">
        <div className={`absolute inset-0 border-[3px] ${borderColor} rounded-full`} />
        {/* Shuttle dots */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-b border-2 border-white shadow" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-b border-2 border-white shadow" />
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-a border-2 border-white shadow" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-a border-2 border-white shadow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className={`text-xl font-semibold ${textColor}`}>{route.duration}</p>
            <p className={`text-xs ${subColor}`}>Ride</p>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-3">
        {route.stops.map((stop) => (
          <div key={stop.name} className="flex items-start gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${stop.type === "pickup" ? "bg-primary-a" : "bg-primary-b"}`} />
            <div>
              <p className={`font-medium ${textColor}`}>{stop.name}</p>
              <p className={`text-xs ${subColor}`}>{stop.detail}</p>
              {stop.type === "pickup" && (
                <span className="text-[10px] font-semibold uppercase text-primary-a">Pick-up / Drop-off</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button type="button" className={`flex items-center gap-2 text-sm font-medium ${subColor}`}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        View pick-up and drop-off locations
      </button>
    </div>
  );
}

export function RoutesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="routes" className="bg-white px-4 md:px-16 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight leading-[1.3]">
            We&apos;re currently{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
              operate 2 out of 3 looped
            </span>{" "}
            shuttle service routes.
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-6 gap-1 text-sm text-content-secondary">
            <p>
              Monday to Friday{" "}
              <span className="font-semibold text-content-primary">9:30AM to 5:30PM</span>
            </p>
            <p>
              Last ride departs at{" "}
              <span className="font-semibold text-content-primary">4:30 PM</span>
            </p>
          </div>
        </div>

        <Button variant="primary" icon={<ArrowIcon />}>
          Reserve your slot
        </Button>

        {/* Mobile: tabs */}
        <div className="w-full md:hidden">
          <div className="flex rounded-full border border-stroke-secondary overflow-hidden">
            {routes.map((route, i) => (
              <button
                key={route.id}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-3 text-base font-medium transition-colors ${
                  activeTab === i ? "bg-content-primary text-white" : "bg-white text-content-primary"
                }`}
              >
                {route.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single route */}
        <div className="w-full md:hidden bg-surface-primary rounded-2xl p-6">
          <div className="text-center mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-a bg-[#faf5ff] px-3 py-1 rounded-full">
              {routes[activeTab].name}
            </span>
          </div>
          <RouteLoop route={routes[activeTab]} />
        </div>

        {/* Desktop: side-by-side routes */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 w-full">
          {routes.map((route) => (
            <div key={route.id} className="bg-surface-primary rounded-2xl p-8">
              <div className="text-center mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-content-primary">
                  {route.name}
                </span>
              </div>
              <RouteLoop route={route} />
            </div>
          ))}
        </div>

        {/* Mini Route */}
        <div className="w-full bg-surface-primary rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left: text */}
            <div className="p-6 md:p-10 flex-1">
              <h3 className="text-2xl md:text-[32px] font-medium tracking-tight leading-[1.3] mb-4">
                Want a faster AV experience? Hop on our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                  20-minutes Mini
                </span>{" "}
                loop for a quick trial!
              </h3>
              <div className="flex flex-col md:flex-row md:gap-8 gap-1 text-sm text-content-secondary mt-4">
                <p>
                  Monday to Friday{" "}
                  <span className="font-semibold text-content-primary">9:30AM to 5:30PM</span>
                </p>
                <p>
                  Last ride departs at{" "}
                  <span className="font-semibold text-content-primary">5:00 PM</span>
                </p>
              </div>
              <button type="button" className="flex items-center gap-2 text-sm font-medium text-content-secondary mt-6">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                View pick-up and drop-off locations
              </button>
            </div>
            {/* Right: mini route visualization */}
            <div className="p-6 md:p-10 flex items-center justify-center">
              <div className="text-center mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white bg-primary-a px-3 py-1 rounded-full">
                  {miniRoute.name}
                </span>
              </div>
              <div className="relative w-48 h-32 mx-auto mt-4">
                <div className="absolute inset-0 border-[3px] border-[#d4d4d4] rounded-full" />
                <div className="absolute -top-1.5 left-1/4 w-3 h-3 rounded-full bg-primary-b border-2 border-white shadow" />
                <div className="absolute -top-1.5 right-1/4 w-3 h-3 rounded-full bg-primary-a border-2 border-white shadow" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-b border-2 border-white shadow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg font-semibold text-content-primary">{miniRoute.duration}</p>
                    <p className="text-xs text-content-secondary">Ride</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {miniRoute.stops.map((stop) => (
                  <div key={stop.name} className="flex items-start gap-2 text-sm">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${stop.type === "pickup" ? "bg-primary-a" : "bg-primary-b"}`} />
                    <div>
                      <p className="font-medium text-content-primary">{stop.name}</p>
                      <p className="text-xs text-content-secondary">{stop.detail}</p>
                      {stop.type === "pickup" && (
                        <span className="text-[10px] font-semibold uppercase text-primary-a">Pick-up / Drop-off</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-content-secondary text-center leading-relaxed">
          During this free trial, all rides form a loop, starting and ending at
          the same point. You can board and alight only at the pickup points
          located at Matilda Court and Punggol Coast Mall.
        </p>
      </div>
    </section>
  );
}
