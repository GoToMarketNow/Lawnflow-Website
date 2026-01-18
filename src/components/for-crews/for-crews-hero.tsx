import { CheckCircle } from "lucide-react";

export function ForCrewsHero() {
  const benefits = [
    "Clear daily plans",
    "Less phone time",
    "Fewer interruptions",
    "Faster updates",
  ];

  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-full mb-6">
            <span
              className="text-[var(--accent-blue)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              For Crew Members
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
            Clear day plans.{" "}
            <span className="text-[var(--accent-blue)]">
              Fewer calls. More done.
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
            No more constant calls from the office. Get your full day plan in
            one place, update status with a tap, and focus on getting the work
            done right.
          </p>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent-blue)] flex items-center justify-center">
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
