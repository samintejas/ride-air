import Image from "next/image";

const features = [
  {
    icon: "/images/icon-travel-new.svg",
    title: ">30,000 KM of autonomous travel, and counting",
    description:
      "We've put the Ai.R fleet through rigorous on-road testing to make sure they're ready for Singapore's streets. We're constantly refining our tech so you can enjoy a worry-free commute.",
  },
  {
    icon: "/images/icon-sensors-new.svg",
    title: "360-degree sensors",
    description:
      "We have no blind spots, and can detect moving objects up to 200 metres away, even before you do. You won't notice the technology working – you'll notice how effortless the journey feels.",
  },
  {
    icon: "/images/icon-safety-new.svg",
    title: "You're never alone on the road",
    description:
      "Your safety is our priority. Every ride is supported remotely. From onboarding to in-car assistance, we're with you at a moment's notice.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-[145px] px-4 py-12 lg:px-[94px] lg:py-[131px]">
        {/* Feature list */}
        <div className="flex flex-col gap-10 lg:gap-[64px] lg:w-[497px] lg:shrink-0">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-start"
            >
              <div className="w-14 h-14 rounded-[28px] bg-[#faf5ff] flex items-center justify-center shrink-0">
                <Image src={feature.icon} alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl lg:text-2xl font-medium text-content-primary leading-[1.4] tracking-[-1px]">
                  {feature.title}
                </h3>
                <p className="text-base text-content-tertiary leading-[1.3]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shuttle image */}
        <div className="relative rounded-[14px] overflow-hidden h-48 lg:h-[613px] lg:flex-1 lg:min-w-0">
          <Image
            src="/images/shuttle-street-new.png"
            alt="Ai.R autonomous shuttle on the street"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
