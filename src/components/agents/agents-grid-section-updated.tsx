import {
  FileText,
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  UserCheck,
  Shield,
  Receipt,
  Repeat,
  Zap,
} from "lucide-react";

export function AgentsGridSectionUpdated() {
  const coreAgents = [
    {
      name: "Intake Agent",
      icon: MessageSquare,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description:
        "Qualifies inbound leads from missed calls, SMS, and web forms 24/7.",
      capabilities: [
        "Captures lead contact info",
        "Identifies service type & urgency",
        "Qualifies lead automatically",
        "Routes to Quote Agent",
      ],
    },
    {
      name: "Quote Agent",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description:
        "Generates price estimates based on lot size, service type, and your pricing policy.",
      capabilities: [
        "Analyzes property data",
        "Applies your pricing rules",
        "Generates quote with T&C",
        "Sends via email/SMS",
      ],
    },
    {
      name: "Schedule Agent",
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      description:
        "Proposes appointment times based on crew availability and optimized routing.",
      capabilities: [
        "Checks crew availability",
        "Optimizes route efficiency",
        "Suggests best time slots",
        "Books approved appointments",
      ],
    },
  ];

  const billingAgents = [
    {
      name: "Invoice Build Agent",
      icon: Receipt,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      description:
        "Generates invoice drafts from completed jobs with configurable pricing rules.",
      capabilities: [
        "Auto-builds from job data",
        "Applies line item overrides",
        "Flags >15% variances",
        "Requires approval on exceptions",
      ],
      escalation: "Variance >15% from quote",
    },
    {
      name: "Billing Agent (Collections)",
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      description:
        "AI-driven reminder generation with tone control for overdue invoices.",
      capabilities: [
        "Sends payment reminders",
        "Adjusts tone based on context",
        "Suggests best channel (SMS/email)",
        "Escalates disputes",
      ],
      escalation: "Escalates to Remediation Agent",
    },
    {
      name: "Remediation Agent",
      icon: AlertTriangle,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      description:
        "Dispute resolution with root cause analysis and resolution recommendations.",
      capabilities: [
        "Analyzes root cause",
        "Recommends resolution",
        "Credits <$50 auto-approved",
        "Credits >$50 need approval",
      ],
      escalation: "Credits above $50",
    },
    {
      name: "Reconciliation Worker",
      icon: Repeat,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      description:
        "Validates invoice/payment integrity daily, detects mismatches.",
      capabilities: [
        "Runs daily reconciliation",
        "Detects payment mismatches",
        "Flags high-severity issues",
        "Creates billing issues",
      ],
      escalation: "HIGH severity problems",
    },
  ];

  const syncAgents = [
    {
      name: "Invoice Sync Agent",
      icon: Zap,
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      description:
        "Syncs local invoices to QuickBooks on send or manual trigger.",
      capabilities: [
        "Syncs to QuickBooks",
        "Skips already-synced",
        "Creates issue on failure",
        "Returns external ID",
      ],
    },
    {
      name: "Payment Sync Agent",
      icon: Zap,
      color: "from-purple-400 to-purple-500",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      description:
        "Syncs payments from QuickBooks to local storage (hourly scheduled).",
      capabilities: [
        "Hourly automated sync",
        "O(1) Map lookups",
        "Updates local storage",
        "Reports errors",
      ],
    },
  ];

  const accretiveAgents = [
    {
      name: "Pricing Optimization Agent",
      icon: TrendingUp,
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-500/10",
      borderColor: "border-rose-500/20",
      description:
        "Analyzes quote acceptance rates and recommends pricing adjustments weekly.",
      capabilities: [
        "Analyzes acceptance rates",
        "Recommends price changes",
        "Requires owner approval",
        "Provides rollout plan",
      ],
      phase: "Phase B1",
      escalation: "All pricing changes",
    },
    {
      name: "Capacity Forecasting Agent",
      icon: BarChart3,
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      description:
        "Forecasts crew capacity and provides scheduling recommendations daily.",
      capabilities: [
        "Daily capacity forecast",
        "Zone-based recommendations",
        "Identifies overbooked days",
        "Suggests intake pausing",
      ],
      phase: "Phase B2",
    },
    {
      name: "Crew Performance Agent",
      icon: Users,
      color: "from-fuchsia-500 to-fuchsia-600",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/20",
      description:
        "Analyzes crew metrics and generates coaching insights after jobs or weekly.",
      capabilities: [
        "Tracks on-time rate",
        "Measures completion rate",
        "Identifies rework issues",
        "Generates coaching tips",
      ],
      phase: "Phase B3",
    },
    {
      name: "Retention Agent",
      icon: UserCheck,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
      description:
        "Customer churn risk scoring and retention outreach campaigns monthly.",
      capabilities: [
        "Risk scores: LOW to CRITICAL",
        "Identifies at-risk customers",
        "Suggests retention campaigns",
        "Post-service follow-up",
      ],
      phase: "Phase B4",
    },
    {
      name: "Compliance Risk Agent",
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      description:
        "License/insurance expiration monitoring (monthly scheduled, reminder-only MVP).",
      capabilities: [
        "Monitors license expiration",
        "Tracks insurance status",
        "Sends deadline reminders",
        "Status: COMPLIANT/NON_COMPLIANT",
      ],
      phase: "Phase B5",
    },
  ];

  const AgentCard = ({ agent, category }: any) => {
    const Icon = agent.icon;
    return (
      <div
        className={`bg-white rounded-xl border ${agent.borderColor} p-6 hover:shadow-lg transition-shadow`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3
              className="mb-1"
              style={{
                fontSize: "var(--text-body)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              {agent.name}
            </h3>
            {agent.phase && (
              <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded font-medium">
                {agent.phase}
              </span>
            )}
          </div>
        </div>

        <p
          className="mb-4"
          style={{
            fontSize: "var(--text-small)",
            color: "var(--text-muted)",
            lineHeight: "1.6",
          }}
        >
          {agent.description}
        </p>

        <ul className="space-y-2 mb-4">
          {agent.capabilities.map((capability: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span className="text-[var(--primary-green)] mt-0.5">✓</span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>

        {agent.escalation && (
          <div className={`p-3 ${agent.bgColor} rounded-lg border ${agent.borderColor}`}>
            <p
              className="text-xs"
              style={{ fontWeight: "var(--font-weight-medium)" }}
            >
              🚨 Human approval: {agent.escalation}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Core Agents */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
              Core Orchestration
            </span>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Lead-to-Booking Agents
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--text-muted)",
              }}
            >
              Intake, Quote, and Schedule agents handle the entire sales pipeline
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreAgents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} category="core" />
            ))}
          </div>
        </div>

        {/* Billing & Collections Agents */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-3">
              Billing & Collections
            </span>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Invoice & Payment Agents
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--text-muted)",
              }}
            >
              Automate invoicing, collections, reconciliation, and dispute resolution
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {billingAgents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} category="billing" />
            ))}
          </div>
        </div>

        {/* Sync Agents */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-3">
              QuickBooks Integration
            </span>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Accounting Sync Agents
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--text-muted)",
              }}
            >
              Seamless two-way sync with QuickBooks Online
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {syncAgents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} category="sync" />
            ))}
          </div>
        </div>

        {/* Accretive Agents */}
        <div>
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
              Phase B – Accretive Intelligence
            </span>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Growth & Optimization Agents
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--text-muted)",
              }}
            >
              Advanced analytics and recommendations to maximize profitability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accretiveAgents.map((agent) => (
              <AgentCard key={agent.name} agent={agent} category="accretive" />
            ))}
          </div>
        </div>

        {/* Safety Rules */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl">
          <h3
            className="mb-4"
            style={{
              fontSize: "var(--text-h3)",
              lineHeight: "var(--text-h3-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            🛡️ Safety Rules
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-medium text-sm mb-1">No hallucinated amounts</p>
                <p className="text-xs text-[var(--text-muted)]">
                  Agents never invent money amounts beyond policy bounds
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-medium text-sm mb-1">Escalation on uncertainty</p>
                <p className="text-xs text-[var(--text-muted)]">
                  When confidence is low, escalate to human
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-medium text-sm mb-1">Audit trail</p>
                <p className="text-xs text-[var(--text-muted)]">
                  All decisions logged with reasoning
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-medium text-sm mb-1">Policy bounds</p>
                <p className="text-xs text-[var(--text-muted)]">
                  All actions constrained by business policy settings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-medium text-sm mb-1">Human-in-the-loop</p>
                <p className="text-xs text-[var(--text-muted)]">
                  High-value decisions require approval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
