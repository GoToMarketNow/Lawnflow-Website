import { NewHeroSection } from "@/components/home/new-hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { SolutionSection } from "@/components/home/solution-section"
import { ThreeAudiencesSection } from "@/components/home/three-audiences-section"
import { CapabilitiesSection } from "@/components/home/capabilities-section"
import { MobileExperienceShowcase } from "@/components/home/mobile-experience-showcase"
import { OutcomesSection } from "@/components/home/outcomes-section"
import { CompetitiveCallout } from "@/components/home/competitive-callout"
import { FinalCTASection } from "@/components/home/final-cta-section"

export default function HomePage() {
  return (
    <>
      <NewHeroSection />
      <ProblemSection />
      <SolutionSection />
      <ThreeAudiencesSection />
      <CapabilitiesSection />
      <MobileExperienceShowcase />
      <OutcomesSection />
      <CompetitiveCallout />
      <FinalCTASection />
    </>
  )
}
