import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { ComparisonTable } from "./comparison-table";

export function CompareAccordion() {
  const categories = [
    {
      id: "time-efficiency",
      title: "Time & Labor Efficiency (Owner + Staff)",
      description:
        "How well does each platform reduce administrative burden, decision fatigue, and enable owners to scale without adding headcount?",
      rows: [
        {
          driver: "Save owner admin time",
          yardbook: "🟡",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Reduce decision fatigue",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟡",
          lawnflow: "🟣",
        },
        {
          driver: "Scale without admin hires",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Increase revenue per employee",
          yardbook: "🟡",
          jobber: "🟡",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Operate outside hours",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "lead-growth",
      title: "Lead → Customer → Growth",
      description:
        "How effectively does each platform capture, qualify, quote, and convert leads into booked customers—without human intervention?",
      rows: [
        {
          driver: "Capture inbound leads",
          yardbook: "🟢",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Autonomous follow‑up",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟡",
          lawnflow: "🟣",
        },
        {
          driver: "Profit‑aware qualification",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
        {
          driver: "Instant AI quoting",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
        {
          driver: "Lead→booked, no human",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "crew-capacity",
      title: "Crew, Capacity & Quality",
      description:
        "How intelligently does each platform assign work, match skills, manage capacity, enforce quality standards, and accelerate crew onboarding?",
      rows: [
        {
          driver: "Dynamic crew assignment",
          yardbook: "🟡",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Skill‑aware matching",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Capacity‑aware scheduling",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Job QA enforcement",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Rapid crew onboarding",
          yardbook: "🟡",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "profitability",
      title: "Profitability & Margin Protection",
      description:
        "Does each platform track job and crew-level margins, route economics, detect margin leakage early, and protect profitability proactively?",
      rows: [
        {
          driver: "Job‑level margin",
          yardbook: "🟡",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Crew‑level profit",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Route economics",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Early leakage detection",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟡",
          lawnflow: "🟣",
        },
        {
          driver: "Predictive protection",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "payments",
      title: "Agentic Payments, Invoicing & Collections",
      description:
        "How automated and intelligent are invoice creation, payment acceptance, autopay, collections workflows, and AR aging reduction?",
      rows: [
        {
          driver: "Invoice creation",
          yardbook: "🟢",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Payment acceptance",
          yardbook: "🟢",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Stored methods / autopay",
          yardbook: "🟡",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Job‑state‑triggered pay",
          yardbook: "❌",
          jobber: "❌",
          housecallPro: "❌",
          serviceAutopilot: "❌",
          aspire: "❌",
          lawnflow: "🟣",
        },
        {
          driver: "Text‑to‑pay & smart retries",
          yardbook: "🟡",
          jobber: "🟡",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Collections automation",
          yardbook: "🟡",
          jobber: "🟡",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "AR aging reduction",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "customer-app",
      title: "Customer Mobile App & Agentic CX",
      description:
        "Does each platform offer a customer-facing mobile app with self-service, real-time updates, payment options, and automated engagement?",
      rows: [
        {
          driver: "Customer mobile app",
          yardbook: "❌",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Request jobs / services",
          yardbook: "❌",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Modify / reschedule jobs",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "View service history",
          yardbook: "❌",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Unified comms (SMS/app)",
          yardbook: "🟡",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Real‑time agent updates",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟡",
          lawnflow: "🟣",
        },
        {
          driver: "Pay bills in-app",
          yardbook: "❌",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Configure autopay",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Job QA visibility",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Proactive notifications",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Review request automation",
          yardbook: "🟡",
          jobber: "🟢",
          housecallPro: "🟢",
          serviceAutopilot: "🟢",
          aspire: "🟢",
          lawnflow: "🟣",
        },
        {
          driver: "Referral prompts & tracking",
          yardbook: "❌",
          jobber: "🟡",
          housecallPro: "🟡",
          serviceAutopilot: "🟡",
          aspire: "🟡",
          lawnflow: "🟣",
        },
      ],
    },
    {
      id: "customer-outcomes",
      title: "Customer Outcomes & Pricing",
      description:
        "What level of transparency, payment friction, trust, review rate, referral rate, customer effort, and pricing alignment does each platform deliver?",
      rows: [
        {
          driver: "Transparency",
          yardbook: "Low",
          jobber: "Medium",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Medium",
          lawnflow: "High",
        },
        {
          driver: "Payment friction",
          yardbook: "High",
          jobber: "Medium",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Low",
          lawnflow: "Low",
        },
        {
          driver: "Trust & confidence",
          yardbook: "Low",
          jobber: "Medium",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Medium",
          lawnflow: "High",
        },
        {
          driver: "Reviews per job",
          yardbook: "Low",
          jobber: "Medium",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Medium",
          lawnflow: "High",
        },
        {
          driver: "Referral rate",
          yardbook: "Low",
          jobber: "Low",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Medium",
          lawnflow: "High",
        },
        {
          driver: "Customer effort",
          yardbook: "High",
          jobber: "Medium",
          housecallPro: "Medium",
          serviceAutopilot: "Medium",
          aspire: "Low",
          lawnflow: "Low",
        },
        {
          driver: "Pricing alignment tiers",
          yardbook: "Starter",
          jobber: "Growth",
          housecallPro: "Growth",
          serviceAutopilot: "Scale",
          aspire: "Scale",
          lawnflow: "Elite",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Accordion type="single" collapsible className="w-full">
          {categories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <AccordionTrigger>
                <span
                  style={{
                    fontSize: "var(--text-h4)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {category.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6">
                  {/* Description */}
                  <p
                    style={{
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--text-body-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {category.description}
                  </p>

                  {/* Table */}
                  <ComparisonTable rows={category.rows} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
