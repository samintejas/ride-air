import LandingPage from "@/components/sections/animation";
import { FeaturesSection } from "@/components/sections/features";
import { FloatingHeader } from "@/components/sections/floating-header";
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
      <main className="z-30">
        <FloatingHeader />
        <HeroSection />
        <FeaturesSection />
        <RoutesSection />
        <RideStepsSection />
        <ImportantInfoSection />
      </main>
      <LandingPage />
    </>
  );
}
