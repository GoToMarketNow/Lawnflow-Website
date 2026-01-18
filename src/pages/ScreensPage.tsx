import { ScreensHero } from "@/components/screens/screens-hero"
import { CommandCenterScreen } from "@/components/screens/command-center-screen"
import { QuoteCopilotScreen } from "@/components/screens/quote-copilot-screen"
import { ScheduleOptimizerScreen } from "@/components/screens/schedule-optimizer-screen"
import { CrewMobileScreenUpdated } from "@/components/screens/crew-mobile-screen-updated"
import { CustomerMobileScreenUpdated } from "@/components/screens/customer-mobile-screen-updated"
import { UserFlowsSection } from "@/components/screens/user-flows-section"

export default function ScreensPage() {
  return (
    <>
      <ScreensHero />
      <CommandCenterScreen />
      <QuoteCopilotScreen />
      <ScheduleOptimizerScreen />
      <CrewMobileScreenUpdated />
      <CustomerMobileScreenUpdated />
      <UserFlowsSection />
    </>
  )
}
