import { Check, X, Circle, Zap } from "lucide-react";

export function CompetitiveMatrix() {
  const legend = [
    { icon: X, label: "Not supported", color: "text-red-500", bg: "bg-red-50" },
    { icon: Circle, label: "Basic/manual", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: Check, label: "Human-driven, strong", color: "text-green-500", bg: "bg-green-50" },
    { icon: Zap, label: "Agentic / autonomous", color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const competitors = ["Yardbook", "Jobber", "HCP", "SA", "Aspire", "LawnFlow"];

  const categories = [
    {
      title: "1️⃣ Time & Labor Efficiency",
      subtitle: "Owner + Staff productivity gains",
      rows: [
        { label: "Save owner admin time", values: ["🟡", "🟢", "🟢", "🟡", "🟢", "🟣"] },
        { label: "Reduce decision fatigue", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Scale w/o admin hires", values: ["❌", "🟡", "🟡", "🟡", "🟡", "🟣"] },
        { label: "Revenue per employee ↑", values: ["❌", "🟡", "🟡", "🟡", "🟡", "🟣"] },
        { label: "Operate outside hours", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
      insight: "LawnFlow replaces human coordination with agents.",
    },
    {
      title: "2️⃣ Lead → Customer → Growth",
      subtitle: "Conversion and sales automation",
      rows: [
        { label: "Capture inbound leads", values: ["🟡", "🟡", "🟡", "🟡", "🟡", "🟣"] },
        { label: "Autonomous follow-up", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Profit-aware qualification", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Instant AI quoting", values: ["🟡", "🟡", "🟡", "🟡", "🟢", "🟣"] },
        { label: "Lead → booked, no human", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
    },
    {
      title: "3️⃣ Crew, Capacity & Quality",
      subtitle: "Operations and workforce management",
      rows: [
        { label: "Dynamic crew assignment", values: ["❌", "❌", "❌", "🟡", "🟡", "🟣"] },
        { label: "Skill-aware matching", values: ["❌", "❌", "❌", "❌", "🟡", "🟣"] },
        { label: "Capacity-aware scheduling", values: ["❌", "❌", "❌", "🟡", "🟡", "🟣"] },
        { label: "Job QA enforcement", values: ["🟡", "🟡", "🟡", "🟡", "🟢", "🟣"] },
        { label: "Rapid crew onboarding", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
    },
    {
      title: "4️⃣ Profitability & Margin Protection",
      subtitle: "Financial intelligence and leakage prevention",
      rows: [
        { label: "Job-level margin", values: ["🟡", "❌", "❌", "🟡", "🟢", "🟣"] },
        { label: "Crew-level profit", values: ["❌", "❌", "❌", "❌", "🟢", "🟣"] },
        { label: "Route economics", values: ["❌", "❌", "❌", "🟡", "🟡", "🟣"] },
        { label: "Early leakage detection", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Predictive protection", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
    },
    {
      title: "⭐ 5️⃣ Agentic Payments & Collections",
      subtitle: "Cash flow acceleration",
      rows: [
        { label: "Invoice creation", values: ["🟢", "🟢", "🟢", "🟢", "🟢", "🟣"] },
        { label: "Payment acceptance", values: ["🟢", "🟢", "🟢", "🟢", "🟢", "🟣"] },
        { label: "Stored methods / autopay", values: ["🟡", "🟢", "🟢", "🟡", "🟢", "🟣"] },
        { label: "Job-state-triggered pay", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Text-to-pay & smart retries", values: ["❌", "🟡", "🟡", "❌", "❌", "🟣"] },
        { label: "Collections automation", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "AR aging reduction", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
      insight: "Faster cash, near-zero collections labor.",
    },
    {
      title: "⭐⭐ 6️⃣ Customer Mobile App & Agentic CX",
      subtitle: "Loyalty, reviews, and referrals engine",
      rows: [
        { label: "Customer mobile app", values: ["🟡", "🟢", "🟢", "❌", "🟡", "🟣"] },
        { label: "Request jobs / services", values: ["🟡", "🟢", "🟢", "🟡", "🟢", "🟣"] },
        { label: "Modify / reschedule jobs", values: ["❌", "🟡", "🟡", "🟡", "🟢", "🟣"] },
        { label: "View service history", values: ["🟡", "🟢", "🟢", "🟡", "🟢", "🟣"] },
        { label: "Unified comms (SMS/app)", values: ["❌", "🟡", "🟡", "❌", "🟡", "🟣"] },
        { label: "Real-time agent updates", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
        { label: "Pay bills in-app", values: ["🟡", "🟢", "🟢", "🟡", "🟢", "🟣"] },
        { label: "Configure autopay", values: ["❌", "🟡", "🟡", "❌", "🟡", "🟣"] },
        { label: "Job QA visibility", values: ["❌", "🟡", "🟡", "❌", "🟢", "🟣"] },
        { label: "Proactive notifications", values: ["❌", "🟡", "🟡", "❌", "🟡", "🟣"] },
        { label: "Review request automation", values: ["❌", "❌", "❌", "❌", "🟡", "🟣"] },
        { label: "Referral prompts & tracking", values: ["❌", "❌", "❌", "❌", "❌", "🟣"] },
      ],
      insight: "Self-serve jobs + unified comms + QA trust loop + frictionless pay + review engine = brand flywheel",
    },
  ];

  const getIconForStatus = (status: string) => {
    switch (status) {
      case "❌":
        return { icon: X, color: "text-red-500", bg: "bg-red-50" };
      case "🟡":
        return { icon: Circle, color: "text-yellow-500", bg: "bg-yellow-50" };
      case "🟢":
        return { icon: Check, color: "text-green-500", bg: "bg-green-50" };
      case "🟣":
        return { icon: Zap, color: "text-purple-500", bg: "bg-purple-50" };
      default:
        return { icon: Circle, color: "text-gray-400", bg: "bg-gray-50" };
    }
  };

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl">
        <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {legend.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-sm text-[var(--text-muted)]">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-12">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden">
            {/* Category Header */}
            <div className="bg-gradient-to-r from-[var(--primary-green)]/5 to-[var(--primary-green)]/10 p-6 border-b border-[var(--border-color)]">
              <h3
                className="mb-2"
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {category.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{category.subtitle}</p>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">
                      Capability
                    </th>
                    {competitors.map((comp, idx) => (
                      <th
                        key={idx}
                        className={`px-4 py-3 text-center text-xs font-medium uppercase tracking-wider ${
                          comp === "LawnFlow"
                            ? "bg-purple-50 text-purple-700"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        {comp}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-[var(--text-primary)]">{row.label}</td>
                      {row.values.map((value, valIdx) => {
                        const { icon: Icon, color, bg } = getIconForStatus(value);
                        const isLawnFlow = valIdx === row.values.length - 1;
                        return (
                          <td
                            key={valIdx}
                            className={`px-4 py-4 text-center ${isLawnFlow ? "bg-purple-50/50" : ""}`}
                          >
                            <div className="flex justify-center">
                              <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center`}>
                                <Icon className={`w-4 h-4 ${color}`} />
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden p-4 space-y-4">
              {category.rows.map((row, rowIdx) => (
                <div key={rowIdx} className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-sm text-[var(--text-primary)] mb-3">{row.label}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {competitors.map((comp, compIdx) => {
                      const { icon: Icon, color, bg } = getIconForStatus(row.values[compIdx]);
                      const isLawnFlow = comp === "LawnFlow";
                      return (
                        <div key={compIdx} className="text-center">
                          <div className="text-xs text-[var(--text-muted)] mb-1">{comp}</div>
                          <div className="flex justify-center">
                            <div
                              className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center ${
                                isLawnFlow ? "ring-2 ring-purple-300" : ""
                              }`}
                            >
                              <Icon className={`w-4 h-4 ${color}`} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Insight */}
            {category.insight && (
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-t border-[var(--border-color)] p-4">
                <p className="text-sm text-[var(--text-primary)] font-medium">💡 {category.insight}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
