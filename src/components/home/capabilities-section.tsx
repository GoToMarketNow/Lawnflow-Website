import {
  MessageSquareQuote,
  CalendarClock,
  Route,
  CreditCard,
  Sparkles,
} from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: MessageSquareQuote,
      title: "Lead-to-Quote",
      description:
        "AI answers inquiries 24/7, qualifies leads, and sends instant quotes. Every lead captured, every opportunity maximized.",
      features: [
        "Instant quote generation",
        "24/7 lead response",
        "Smart qualification",
      ],
      color: "var(--primary-green)",
    },
    {
      icon: CalendarClock,
      title: "Schedule & Capacity",
      description:
        "Smart scheduling that fills your calendar efficiently while managing crew capacity, weather delays, and customer preferences.",
      features: [
        "Intelligent routing",
        "Capacity optimization",
        "Auto-rescheduling",
      ],
      color: "var(--accent-blue)",
    },
    {
      icon: Route,
      title: "Crew Operations",
      description:
        "Your crews get clear daily routes, customer notes, and job details. No confusion, no wasted time, just smooth execution.",
      features: [
        "Turn-by-turn routing",
        "Job site details",
        "Time tracking",
      ],
      color: "#10B981",
    },
    {
      icon: CreditCard,
      title: "Payments & Collections",
      description:
        "Automated invoicing and payment collection. Get paid faster with zero manual follow-up. Your cash flow stays healthy.",
      features: [
        "Auto invoicing",
        "Payment reminders",
        "Multiple payment options",
      ],
      color: "#F59E0B",
    },
    {
      icon: Sparkles,
      title: "Customer Experience",
      description:
        "Customers get real-time updates, easy communication, and a professional experience that builds loyalty and referrals.",
      features: [
        "Arrival notifications",
        "Service confirmations",
        "Easy rebooking",
      ],
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[var(--cream)] text-[var(--primary-green)] text-sm font-medium mb-4">
            Full-Stack Platform
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Every capability your business needs
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            From first contact to final payment, LawnFlow handles it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-[var(--border-color)] p-6 lg:p-8 hover:shadow-xl transition-all hover:scale-[1.02] ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${capability.color}15` }}
              >
                <capability.icon
                  className="w-7 h-7"
                  style={{ color: capability.color }}
                />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {capability.title}
              </h3>

              <p
                className="mb-4"
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                {capability.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {capability.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--cream)] text-[var(--text-primary)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
