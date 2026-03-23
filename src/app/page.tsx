import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { RoutesSection } from "@/components/sections/routes";
import { RideStepsSection } from "@/components/sections/ride-steps";
import { ImportantInfoSection } from "@/components/sections/important-info";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { Footer } from "@/components/footer";

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
