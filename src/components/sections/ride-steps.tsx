import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { bookingLink } from "./hero";

interface Step {
  number: number;
  title: string;
  description: string;
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
  },
  {
    number: 3,
    title: "Board",
    description: "Take a seat, fasten your seatbelt, and you're ready to go!",
  },
];

export function RideStepsSection() {
  return (
    <section id="steps" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 py-12 md:px-[94px] md:py-[96px] flex flex-col gap-[34px]">
        {/* Main card: heading + platform image */}
        <div className="bg-surface-primary border border-[#e7e7e7] rounded-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row">
            {/* Left: text content */}
            <div className="p-6 md:pl-[46px] md:pt-[59px] md:pb-[59px] md:pr-0 flex flex-col gap-6 md:gap-[78px] md:w-[616px] md:shrink-0 relative z-10">
              <div className="flex flex-col gap-6 md:gap-[42px]">
                <h2 className="text-[32px] md:text-[48px] font-medium tracking-[-0.48px] leading-[1.4]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-b to-[#43308b]">
                    Ride with us
                  </span>{" "}
                  in 3 easy steps
                </h2>
                <div className="flex flex-col gap-3">
                  <p className="text-lg md:text-2xl font-medium text-content-primary leading-[1.4] tracking-[-1px]">
                    We&apos;re offering free rides through mid-2026!
                  </p>
                  <p className="text-base md:text-xl text-content-secondary leading-[1.3]">
                    Join our early rider community today and help us shape the
                    future of transport in Singapore.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-[18px]">
                <Link href={bookingLink}>
                  <Button
                    variant="primary"
                    icon={<ArrowIcon />}
                    className="w-full md:w-auto"
                  >
                    Reserve your slot
                  </Button>
                </Link>

                <Link href={"#routes"}>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-[#464646]"
                  >
                    See all pick-up &amp; drop-off locations
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: platform integration image */}
            <div className="relative h-[300px] md:h-auto md:flex-1 md:min-w-0">
              <Image
                src="/images/platform-integration.png"
                alt="Ai.R platform integration"
                fill
                className="object-cover md:object-contain md:object-right"
              />
            </div>
          </div>
        </div>

        {/* Step cards — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[22px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#faf5ff] rounded-[14px] p-6 md:p-8 flex flex-col gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-[26px] h-[26px] rounded-[13px] border border-stroke-primary bg-white flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-content-secondary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-content-primary leading-[1.3]">
                  {step.title}
                </h3>
              </div>
              <p className="text-base text-content-tertiary leading-[1.3]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
