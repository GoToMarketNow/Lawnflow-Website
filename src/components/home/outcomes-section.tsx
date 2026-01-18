import { TrendingUp, Zap, DollarSign, Star } from "lucide-react";

export function OutcomesSection() {
  const outcomes = [
    {
      icon: TrendingUp,
      metric: "+35%",
      label: "Quote-to-Close Rate",
      description:
        "Instant quotes and 24/7 availability mean you win more jobs",
      color: "var(--primary-green)",
    },
    {
      icon: Zap,
      metric: "6 Hours",
      label: "Saved Per Week",
      description:
        "Per crew member—time redirected from admin to billable work",
      color: "var(--accent-blue)",
    },
    {
      icon: DollarSign,
      metric: "2.5x Faster",
      label: "Payment Collection",
      description:
        "Automated invoicing and reminders accelerate your cash flow",
      color: "#10B981",
    },
    {
      icon: Star,
      metric: "4.8/5",
      label: "Customer Satisfaction",
      description:
        "Professional experience builds loyalty and drives referrals",
      color: "#F59E0B",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            More business.{" "}
            <span className="text-[var(--primary-green)]">Smarter</span>{" "}
            business.
            <br />
            More <span className="text-[var(--primary-green)]">profitable</span>{" "}
            business.
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Real results from lawn care businesses using LawnFlow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[var(--border-color)] p-6 lg:p-8 text-center hover:shadow-xl transition-shadow"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${outcome.color}15` }}
              >
                <outcome.icon
                  className="w-8 h-8"
                  style={{ color: outcome.color }}
                />
              </div>

              <div
                className="mb-2"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.5rem)",
                  lineHeight: "1.2",
                  fontWeight: "var(--font-weight-medium)",
                  color: outcome.color,
                }}
              >
                {outcome.metric}
              </div>

              <div
                className="mb-3"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {outcome.label}
              </div>

              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Value Props */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] rounded-xl p-6 lg:p-8 text-white">
            <h3
              className="mb-3"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: "var(--text-h3-line)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Scale without the overhead
            </h3>
            <p className="text-white/90" style={{ fontSize: "var(--text-small)" }}>
              Handle 2-3x more customers without hiring additional office staff.
              Your AI agents scale infinitely.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[var(--accent-blue)] to-blue-700 rounded-xl p-6 lg:p-8 text-white">
            <h3
              className="mb-3"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: "var(--text-h3-line)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Never miss a revenue opportunity
            </h3>
            <p className="text-white/90" style={{ fontSize: "var(--text-small)" }}>
              24/7 availability means every lead gets an instant response, even
              at 10 PM on Sunday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
