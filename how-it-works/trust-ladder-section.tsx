import { Shield, UserCheck, Settings, TrendingUp, AlertCircle } from "lucide-react";

export function TrustLadderSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Assist",
      icon: UserCheck,
      description: "Agents recommend, you approve.",
      details:
        "AI surfaces options and insights. You make the final call on quotes, scheduling changes, and sensitive customer interactions.",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/20",
      bgColor: "bg-blue-500/5",
    },
    {
      phase: "Phase 2",
      title: "Automate",
      icon: Settings,
      description: "Run within thresholds.",
      details:
        "Set your parameters: margin floors, service area, crew capacity. Agents execute autonomously within your guardrails.",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/20",
      bgColor: "bg-purple-500/5",
    },
    {
      phase: "Phase 3",
      title: "Optimize",
      icon: TrendingUp,
      description: "Learns patterns and improves outcomes.",
      details:
        "AI identifies what wins: pricing sweet spots, optimal routing, high-value customers. Continuously refines based on your business data.",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/20",
      bgColor: "bg-green-500/5",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2
            className="mb-3"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            The Trust Ladder
          </h2>
          <p
            className="max-w-2xl mx-auto mb-6"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            You control how much autonomy the AI has. Start with oversight,
            scale to automation.
          </p>

          {/* Control Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full">
            <Shield className="w-4 h-4 text-[var(--primary-green)]" />
            <span
              className="text-[var(--primary-green)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              You're always in control. Approvals for sensitive actions.
            </span>
          </div>
        </div>

        {/* Phases Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border ${phase.borderColor} p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow`}
            >
              {/* Phase Label */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  background: `linear-gradient(135deg, ${phase.color.split(" ")[1]}, ${phase.color.split(" ")[3]})`,
                  color: "white",
                }}
              >
                {phase.phase}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center mb-4`}
              >
                <phase.icon
                  className="w-7 h-7"
                  style={{
                    color: phase.color.split(" ")[1].replace("from-", ""),
                  }}
                />
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
                {phase.title}
              </h3>

              {/* Description */}
              <p
                className="mb-3"
                style={{
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--text-body-line)",
                  color: "var(--text-primary)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                {phase.description}
              </p>

              {/* Details */}
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                {phase.details}
              </p>

              {/* Progress Indicator */}
              {index < phases.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-[var(--border-color)] flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-green)]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl border border-[var(--border-color)] shadow-sm">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-[var(--accent-blue)] mt-0.5" />
            <div>
              <p
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--text-body-line)",
                  color: "var(--text-primary)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Built for peace of mind
              </p>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                Agents always escalate when unsure. Major decisions—like
                refunds, disputes, or out-of-scope work—require your sign-off.
                You set the rules, AI follows them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
