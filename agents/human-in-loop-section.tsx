import { Shield, UserCheck, AlertCircle } from "lucide-react";

export function HumanInLoopSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-white rounded-2xl border border-[var(--primary-green)]/20 p-8 md:p-12 shadow-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--primary-green)]/10 mb-4">
              <Shield className="w-8 h-8 text-[var(--primary-green)]" />
            </div>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Human-in-the-loop safety
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              You're always in control. Agents work autonomously within your
              rules—and escalate when they need you.
            </p>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                You set the rules
              </h3>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                Define margins, service areas, approval thresholds, and
                policies. Agents follow your playbook.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Agents operate safely
              </h3>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                Within your guardrails, agents handle routine tasks
                autonomously—fast and accurate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Escalation when needed
              </h3>
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                Unsure about a decision? Sensitive customer issue? Agents flag
                it for your review.
              </p>
            </div>
          </div>

          {/* Examples */}
          <div className="bg-[var(--cream)] rounded-xl p-6">
            <h4
              className="mb-4"
              style={{
                fontSize: "var(--text-body)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              When agents escalate:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Quote outside your service area",
                "Customer requests refund or dispute",
                "Crew reports equipment failure",
                "Schedule conflict can't be auto-resolved",
                "Payment 30+ days overdue",
                "Negative sentiment or complaint detected",
              ].map((example, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {example}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
