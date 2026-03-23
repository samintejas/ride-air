import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/arrow-icon";

export function CtaBannerSection() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.webp"
        alt="Ai.R autonomous shuttle fleet"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 gap-8">
        <h2 className="text-[32px] md:text-[40px] font-medium text-white tracking-tight leading-[1.3] max-w-md">
          Be first in line to experience the future of transport
        </h2>
        <Button variant="primary" icon={<ArrowIcon />}>
          Reserve your slot
        </Button>
      </div>
    </section>
  );
}
