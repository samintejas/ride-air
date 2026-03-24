import { Footer } from "@/components/footer";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { ImportantInfoSection } from "@/components/sections/important-info";
import { RideStepsSection } from "@/components/sections/ride-steps";
import { RoutesSection } from "@/components/sections/routes";

export const metadata = {
  title: "RideAir Ai",
  description: "A new way to ride, powered by Ai.R",
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RoutesSection />
      <RideStepsSection />
      <ImportantInfoSection />
      <CtaBannerSection />
      <Footer />
    </>
  );
}
