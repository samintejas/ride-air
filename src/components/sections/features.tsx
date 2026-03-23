import Image from "next/image";

const features = [
  {
    icon: "/images/icon-travel.svg",
    title: ">30,000 KM of autonomous travel, and counting",
    description:
      "We've put the Ai.R fleet through rigorous on-road testing to make sure they're ready for Singapore's streets. We're constantly refining our tech so you can enjoy a worry-free commute.",
  },
  {
    icon: "/images/icon-sensors.svg",
    title: "360-degree sensors",
    description:
      "We have no blind spots, and can detect moving objects up to 200 metres away, even before you do. You won't notice the technology working – you'll notice how effortless the journey feels.",
  },
  {
    icon: "/images/icon-safety.svg",
    title: "You're never alone on the road",
    description:
      "Your safety is our priority. Every ride is supported remotely. From onboarding to in-car assistance, we're with you at a moment's notice.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-4 md:px-16 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Feature list */}
        <div className="flex flex-col gap-10 flex-1">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-5">
              <div className="w-14 h-14 rounded-[28px] bg-[#faf5ff] flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-[#0a203b] leading-normal">
                  {feature.title}
                </h3>
                <p className="text-base text-[#5c667a] leading-[1.4]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shuttle image */}
        <div className="relative rounded-[14px] overflow-hidden h-48 md:h-auto md:w-[45%] md:min-h-[500px]">
          <Image
            src="/images/shuttle-street.webp"
            alt="Ai.R autonomous shuttle on the street"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
