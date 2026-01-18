import { Link } from "react-router-dom";
import { Users, HardHat, Smile, ArrowRight } from "lucide-react";

export function ThreeAudiencesSection() {
  const audiences = [
    {
      icon: Users,
      title: "For Owners",
      subtitle: "Scale without the chaos",
      description:
        "AI agents handle lead-to-cash, collections, and ops coordination—so you focus on growth, not admin.",
      benefits: [
        "Save 10+ hours per week",
        "Faster cash collection",
        "Scale without hiring admins",
      ],
      link: "/for-owners",
      color: "blue",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: HardHat,
      title: "For Crews",
      subtitle: "Simple, focused work",
      description:
        "Your route, your checklist, your photos. No guessing. No back-and-forth. Just great work, every job.",
      benefits: [
        "Clear daily routes",
        "Guided QA checklists",
        "Instant job completion",
      ],
      link: "/for-crews",
      color: "green",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Smile,
      title: "For Customers",
      subtitle: "Effortless, delightful service",
      description:
        "Request service, track progress, see QA photos, and pay—all from your phone. Transparency you can trust.",
      benefits: [
        "Self-serve requests",
        "Real-time updates",
        "One-tap payments",
      ],
      link: "/for-customers",
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Built for Everyone in the Business
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            LawnFlow's AI agents orchestrate seamless experiences for owners, crews, and customers—creating
            a virtuous cycle of efficiency, quality, and satisfaction.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, idx) => {
            const Icon = audience.icon;
            return (
              <Link
                key={idx}
                to={audience.link}
                className="group bg-white border border-[var(--border-color)] rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "var(--text-h3)",
                    lineHeight: "var(--text-h3-line)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {audience.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-[var(--primary-green)] mb-3">
                  {audience.subtitle}
                </p>

                {/* Description */}
                <p
                  className="mb-4"
                  style={{
                    fontSize: "var(--text-small)",
                    lineHeight: "var(--text-small-line)",
                    color: "var(--text-muted)",
                  }}
                >
                  {audience.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {audience.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-sm text-[var(--text-primary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center gap-2 text-[var(--primary-green)] font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-muted)] max-w-3xl mx-auto">
            <span className="font-medium text-[var(--text-primary)]">The LawnFlow difference:</span>{" "}
            Traditional software forces you to manage three separate experiences. LawnFlow's agents
            orchestrate all three—automatically creating efficiency for owners, clarity for crews,
            and delight for customers.
          </p>
        </div>
      </div>
    </section>
  );
}
