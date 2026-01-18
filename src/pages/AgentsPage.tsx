import { AgentsHero } from "@/components/agents/agents-hero"
import { AgentsGridSectionUpdated } from "@/components/agents/agents-grid-section-updated"
import { CollaborationDiagram } from "@/components/agents/collaboration-diagram"
import { HumanInLoopSection } from "@/components/agents/human-in-loop-section"
import { AgentsPageFooter } from "@/components/agents/agents-page-footer"

export default function AgentsPage() {
  return (
    <>
      <AgentsHero />
      <AgentsGridSectionUpdated />
      <CollaborationDiagram />
      <HumanInLoopSection />
      <AgentsPageFooter />
    </>
  )
}
