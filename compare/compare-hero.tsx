import { Badge } from "@/app/components/ui/badge";

export function CompareHero() {
  const legendItems = [
    { emoji: "❌", label: "Not supported", color: "bg-red-100 text-red-700 border-red-300" },
    { emoji: "🟡", label: "Basic/manual", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
    { emoji: "🟢", label: "Human-driven", color: "bg-green-100 text-green-700 border-green-300" },
    { emoji: "🟣", label: "Agentic / autonomous", color: "bg-purple-100 text-purple-700 border-purple-300" },
  ];

  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-5xl mx-auto">
          {/* Title */}
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Competitive{" "}
            <span className="text-[var(--primary-green)]">Value Matrix</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-8 max-w-3xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Comparing Agentic Operations & Customer Experience across leading platforms.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {legendItems.map((item, idx) => (
              <Badge
                key={idx}
                className={`${item.color} text-sm px-3 py-1.5`}
              >
                <span className="mr-1.5">{item.emoji}</span>
                {item.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
