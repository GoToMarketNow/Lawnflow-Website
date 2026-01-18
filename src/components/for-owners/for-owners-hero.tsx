import { CheckCircle } from "lucide-react";

export function ForOwnersHero() {
  const benefits = [
    "Faster close rates",
    "Smoother scheduling",
    "Profit protection",
    "Faster collections",
  ];

  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full mb-6">
            <span
              className="text-[var(--primary-green)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              For Business Owners
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Run the business.{" "}
            <span className="text-[var(--primary-green)]">
              Stop chasing the business.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="mb-8"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            LawnFlow handles the admin that keeps you stuck in the office—so you
            can focus on growth, strategy, and building the business you
            actually want.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-green)] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--text-body-line)",
                    color: "var(--text-primary)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
