import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { bookingLink } from "./hero";

export function CtaBannerSection() {
  return (
    <section className="relative h-[376px] lg:h-[820px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/cta-bg.jpg"
        alt="Ai.R autonomous shuttle fleet"
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(178deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      {/* Content - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center px-6 pb-[46px] lg:pb-[96px] gap-6">
        <h2 className="text-[32px] lg:text-[48px] font-medium text-white tracking-[-0.48px] leading-[1.4] text-center max-w-[681px]">
          Be first in line to experience the future of transport
        </h2>

        <Link href={bookingLink}>
          <Button variant="primary" icon={<ArrowIcon />}>
            Reserve your slot
          </Button>
        </Link>
      </div>
    </section>
  );
}
