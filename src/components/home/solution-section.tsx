import { Crown, Users, Heart } from "lucide-react";

export function SolutionSection() {
  const benefits = [
    {
      icon: Crown,
      title: "Owners",
      subtitle: "Focus on growth",
      points: [
        "Dashboard shows what matters",
        "AI handles the admin chaos",
        "Scale without hiring office staff",
        "Data-driven decisions, not gut feelings",
      ],
    },
    {
      icon: Users,
      title: "Crews",
      subtitle: "Stay in the field",
      points: [
        "Clear daily routes, zero confusion",
        "Customer updates sent automatically",
        "No more 'where's the address?' calls",
        "Clock in/out without paperwork",
      ],
    },
    {
      icon: Heart,
      title: "Customers",
      subtitle: "Love the experience",
      points: [
        "Instant quotes, 24/7 booking",
        "Know exactly when you'll arrive",
        "Pay online in seconds",
        "Feel like a VIP, not a ticket",
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-[var(--cream)] to-white">
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
            LawnFlow runs the admin—
            <br />
            <span className="text-[var(--primary-green)]">
              so you run the business.
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            A win for everyone on your team and every customer you serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[var(--border-color)] p-6 lg:p-8 hover:shadow-xl transition-shadow"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className="mb-1"
                  style={{
                    fontSize: "var(--text-h3)",
                    lineHeight: "var(--text-h3-line)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--text-muted)",
                  }}
                >
                  {benefit.subtitle}
                </p>
              </div>

              <ul className="space-y-3">
                {benefit.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-2 text-left"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--primary-green)]/10 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-[var(--primary-green)]" />
                    </div>
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--text-small-line)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
