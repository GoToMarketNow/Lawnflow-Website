import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero"
import { AgentCardsSection } from "@/components/how-it-works/agent-cards-section"
import { LifecycleTimeline } from "@/components/how-it-works/lifecycle-timeline"
import { ScreenPreviewsSection } from "@/components/how-it-works/screen-previews-section"
import { TrustLadderSection } from "@/components/how-it-works/trust-ladder-section"
import { MeetAgentsCTA } from "@/components/how-it-works/meet-agents-cta"

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksHero />
      <AgentCardsSection />
      <LifecycleTimeline />
      <ScreenPreviewsSection />
      <TrustLadderSection />
      <MeetAgentsCTA />
    </>
  )
}
