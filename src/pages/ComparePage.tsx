import { CompareHero } from "@/components/compare/compare-hero"
import { CompareIntro } from "@/components/compare/compare-intro"
import { ComparisonTable } from "@/components/compare/comparison-table"
import { CompareAccordion } from "@/components/compare/compare-accordion"
import { CompareCallout } from "@/components/compare/compare-callout"
import { CompareFinalCTA } from "@/components/compare/compare-final-cta"

export default function ComparePage() {
  return (
    <>
      <CompareHero />
      <CompareIntro />
      <ComparisonTable />
      <CompareAccordion />
      <CompareCallout />
      <CompareFinalCTA />
    </>
  )
}
