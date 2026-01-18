import { TrendingUp, Shield, Zap } from "lucide-react";

export function PositioningSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Market Positioning */}
        <div className="text-center mb-12">
          <h2
            className="mb-6"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Clear Market Positioning
          </h2>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-2xl md:text-3xl font-semibold mb-4 text-[var(--primary-green)]"
              style={{ lineHeight: 1.4 }}
            >
              "Other platforms help you run jobs.<br />
              LawnFlow runs the business—and delights the customer."
            </p>
            <p
              className="text-lg text-[var(--text-muted)] leading-relaxed"
              style={{ lineHeight: 1.6 }}
            >
              LawnFlow is the only lawn & landscaping platform where AI agents manage operations,
              cash flow, and the customer experience end-to-end—driving faster cash, higher CSAT,
              and more referrals without adding staff.
            </p>
          </div>
        </div>

        {/* Customer Outcomes */}
        <div className="bg-white border border-[var(--border-color)] rounded-2xl p-8 mb-12">
          <h3
            className="mb-6 text-center"
            style={{
              fontSize: "var(--text-h3)",
              lineHeight: "var(--text-h3-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            7️⃣ Customer Outcomes Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-[var(--text-muted)]">
                    Outcome
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-[var(--text-muted)]">
                    Yardbook
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-[var(--text-muted)]">
                    FSMs
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-purple-700 bg-purple-50">
                    LawnFlow
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { label: "Transparency", values: ["Low", "Medium", "High"] },
                  { label: "Payment friction", values: ["Medium", "Low", "Very Low"] },
                  { label: "Trust & confidence", values: ["Low", "Medium", "High"] },
                  { label: "Reviews per job", values: ["Low", "Medium", "High"] },
                  { label: "Referral rate", values: ["Low", "Low", "High"] },
                  { label: "Customer effort", values: ["High", "Medium", "Low"] },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    {row.values.map((val, valIdx) => (
                      <td
                        key={valIdx}
                        className={`px-4 py-3 text-center text-sm ${
                          valIdx === 2 ? "bg-purple-50/50 font-semibold text-purple-700" : "text-[var(--text-muted)]"
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Competitive Moat */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
              Competitive Moat
            </h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Incumbents have fragmented CX: SMS here, invoice there. LawnFlow creates a single
              agentic loop that compounds brand strength with every cycle.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
              The Agentic Loop
            </h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Job → QA → Payment → Notification → Review → Referral → New Lead. Every cycle
              accelerates cash velocity and customer loyalty.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
            <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
              Compounding Returns
            </h4>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Happy customers drive more demand, lower CAC, and higher lifetime value. The flywheel
              effect creates sustainable competitive advantage.
            </p>
          </div>
        </div>

        {/* Pricing Alignment */}
        <div className="mt-12 bg-white border border-[var(--border-color)] rounded-2xl p-8">
          <h3
            className="mb-6 text-center"
            style={{
              fontSize: "var(--text-h3)",
              lineHeight: "var(--text-h3-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            8️⃣ Pricing Alignment with Customer App Value
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tier: "Starter",
                features: ["In-app pay", "Notifications", "Service history"],
                color: "blue",
              },
              {
                tier: "Growth",
                features: ["Self-serve requests", "Agent updates", "Review automation"],
                color: "purple",
              },
              {
                tier: "Scale",
                features: ["Autopay optimization", "QA trust loop", "Referrals"],
                color: "green",
              },
              {
                tier: "Elite",
                features: ["Brand CX orchestration", "Portfolio insights", "Priority support"],
                color: "amber",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-${plan.color}-50 to-${plan.color}-100 border border-${plan.color}-200 rounded-xl p-6`}
              >
                <h4 className="text-lg font-semibold mb-3 text-[var(--text-primary)]">
                  {plan.tier}
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--primary-green)] mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
