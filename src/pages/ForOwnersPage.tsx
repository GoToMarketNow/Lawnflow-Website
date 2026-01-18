import { ForOwnersHero } from "@/components/for-owners/for-owners-hero"
import { OwnerDashboardShowcase } from "@/components/for-owners/owner-dashboard-showcase"
import { BeforeAfterSection } from "@/components/for-owners/before-after-section"

export default function ForOwnersPage() {
  return (
    <>
      <ForOwnersHero />
      <OwnerDashboardShowcase />
      <BeforeAfterSection />
    </>
  )
}
