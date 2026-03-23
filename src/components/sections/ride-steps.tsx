import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/arrow-icon";

interface Step {
  number: number;
  title: string;
  description: string;
  link?: { label: string; href: string };
}

const steps: Step[] = [
  {
    number: 1,
    title: "Pre-book Your Slot",
    description:
      "You will receive a confirmation email detailing your chosen timeslot and other information.",
  },
  {
    number: 2,
    title: "Arrive Early",
    description:
      "Arrive at the pickup point at least 10 minutes ahead of your scheduled time. Look for the Ai.R signage at the pickup point.",
    link: { label: "View pickup points", href: "#" },
  },
  {
    number: 3,
    title: "Board",
    description:
      "Take a seat, fasten your seatbelt, and you're ready to go!",
  },
];

function PhoneMockup() {
  return (
    <div className="relative w-[240px]">
      <div className="bg-black rounded-[40px] p-[8px] shadow-2xl">
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-10" />
        <div className="bg-[#4a25aa] rounded-[32px] overflow-hidden aspect-[9/19.5] relative flex flex-col items-center">
          <div className="h-12 w-full" />
          <div className="flex items-center justify-center gap-2 px-4 mb-2">
            <span className="text-[10px] text-white/60">English</span>
          </div>
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg mb-1">
            <span className="text-primary-a font-bold text-[10px]">Qi.R</span>
          </div>
          <span className="text-[7px] text-white/60 mb-3">Powered by Grab</span>
          <div className="flex items-center gap-2 mb-3 px-4 w-full">
            <div className="w-5 h-5 rounded-full bg-primary-a text-white text-[8px] flex items-center justify-center font-bold">1</div>
            <div className="flex-1 h-0.5 bg-white/20 rounded" />
            <div className="w-5 h-5 rounded-full bg-white/20 text-white/40 text-[8px] flex items-center justify-center">2</div>
            <div className="flex-1 h-0.5 bg-white/20 rounded" />
            <div className="w-5 h-5 rounded-full bg-white/20 text-white/40 text-[8px] flex items-center justify-center">3</div>
          </div>
          <div className="w-full px-4 space-y-1.5">
            {[
              { icon: "📍", label: "select location" },
              { icon: "👤", label: "2 Adults" },
              { icon: "👶", label: "0 Children" },
              { icon: "📅", label: "20 Mar 2026" },
              { icon: "🕐", label: "5:45 pm" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-lg px-3 py-2 text-[9px] text-gray-600 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px]">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <span className="text-gray-300 text-[10px]">&#8964;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function RideStepsSection() {
  return (
    <section id="steps" className="bg-white px-4 md:px-16 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Main card: heading + phone */}
        <div className="bg-surface-primary border border-[#e7e7e7] rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left: text content */}
            <div className="p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left gap-6 flex-1">
              <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight leading-[1.3]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                  Ride with us
                </span>
                <br />
                in 3 easy steps
              </h2>
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold text-[#282828] leading-[1.3]">
                  We&apos;re offering free rides through mid-2026!
                </p>
                <p className="text-base text-[#282828] leading-[1.3]">
                  Join our early rider community today and help us shape the
                  future of transport in Singapore.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Button
                  variant="primary"
                  icon={<ArrowIcon />}
                  className="w-full md:w-auto"
                >
                  Reserve your slot
                </Button>
                <Button variant="outline" className="w-full md:w-auto border-[#464646]">
                  See all pick-up &amp; drop-off locations
                </Button>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="relative flex justify-center md:justify-end items-end mt-4 md:mt-0 md:pr-10 md:pt-10">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Step cards — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#faf5ff] rounded-[14px] p-6 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-[26px] h-[26px] rounded-[13px] border border-[#d9d9d9] bg-white flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-[#424242]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-black leading-[1.3]">
                  {step.title}
                </h3>
              </div>
              <p className="text-base text-[#575757] leading-[1.3]">
                {step.description}
              </p>
              {step.link && (
                <a
                  href={step.link.href}
                  className="flex items-center gap-2 text-base font-medium text-content-secondary"
                >
                  {step.link.label}
                  <ArrowIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
