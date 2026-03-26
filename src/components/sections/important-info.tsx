import Image from "next/image";

const infoCards = [
  {
    image: "/images/info-arrive-new.jpg",
    title: "Arrive Early",
    description:
      "We recommend reaching your pickup point 10 minutes before your scheduled slot. Please note that we may not be able to accommodate late arrivals, to ensure fairness and a smooth experience for all passengers.",
  },
  {
    image: "/images/info-children-new.jpeg",
    title: "Keep Children Safe",
    description:
      "All children under 1.35m in height are required by law to have the proper restraints to board the AV. Please bring your own child booster seat, should you require one. For safety & legal reasons, we cannot allow children to board without the proper restraint.",
  },
  {
    image: "/images/info-travel-new.jpg",
    title: "Travel Light",
    description:
      "To ensure the comfort of all passengers, kindly limit your belongings to one (1) small bag.",
  },
] as const;

export function ImportantInfoSection() {
  return (
    <section className="bg-[#f8fafc]">
      <div className="max-w-[1440px] mx-auto px-4 py-12 lg:px-[94px] lg:py-[96px] flex flex-col gap-12 lg:gap-[65px]">
        <h2 className="text-[32px] lg:text-[48px] font-medium text-black tracking-[-0.48px] leading-[1.4]">
          Important information
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-8">
          {infoCards.map((card) => (
            <div key={card.title} className="flex flex-col gap-5 lg:gap-7">
              <div className="relative h-[193px] lg:h-[230px] rounded-[14px] overflow-hidden bg-[#d9d9d9]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium text-content-primary leading-[1.3]">
                  {card.title}
                </h3>
                <p className="text-base text-content-secondary leading-[1.3]">
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
