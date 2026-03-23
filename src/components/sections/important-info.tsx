import Image from "next/image";

const infoCards = [
  {
    image: "/images/info-arrive.webp",
    title: "Arrive Early",
    description:
      "We recommend reaching your pickup point 10 minutes before your scheduled slot. Please note that we may not be able to accommodate late arrivals, to ensure fairness and a smooth experience for all passengers.",
  },
  {
    image: "/images/info-children.webp",
    title: "Keep Children Safe",
    description:
      "All children under 1.35m in height are required by law to have the proper restraints to board the AV. Please bring your own child booster seat, should you require one. For safety & legal reasons, we cannot allow children to board without the proper restraint.",
  },
  {
    image: "/images/info-travel.webp",
    title: "Travel Light",
    description:
      "To ensure the comfort of all passengers, kindly limit your belongings to one (1) small bag.",
  },
] as const;

export function ImportantInfoSection() {
  return (
    <section className="bg-surface-primary px-4 md:px-16 py-12 md:py-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        <h2 className="text-[32px] font-medium text-content-primary tracking-tight leading-[1.3]">
          Important information
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {infoCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg font-semibold text-black leading-[1.3]">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5c5c5c] leading-[1.3]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
