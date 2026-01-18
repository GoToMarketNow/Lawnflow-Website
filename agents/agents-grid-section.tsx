import {
  FileText,
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
} from "lucide-react";

export function AgentsGridSection() {
  const agents = [
    {
      name: "Quote Agent",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      description:
        "Captures leads 24/7 and delivers instant, accurate estimates based on property analysis and your pricing rules.",
      capabilities: [
        "Analyzes property size and scope",
        "Applies margin and pricing rules",
        "Sends estimates via email/SMS",
        "Follows up on pending quotes",
      ],
    },
    {
      name: "Schedule Agent",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      description:
        "Optimizes crew routing and capacity, minimizing drive time while maximizing jobs per day.",
      capabilities: [
        "Balances crew workloads",
        "Optimizes routes by location",
        "Handles reschedule requests",
        "Accounts for weather and constraints",
      ],
    },
    {
      name: "Crew Ops Agent",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      description:
        "Sends daily plans, tracks job progress, and keeps customers updated in real time.",
      capabilities: [
        "Generates crew day plans",
        "Tracks job status and photos",
        "Updates customers automatically",
        "Flags issues for review",
      ],
    },
    {
      name: "Collections Agent",
      icon: DollarSign,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      description:
        "Sends invoices instantly after job completion and automates payment reminders to accelerate cash flow.",
      capabilities: [
        "Sends invoices immediately",
        "Automates payment reminders",
        "Tracks outstanding balances",
        "Escalates overdue accounts",
      ],
    },
    {
      name: "CX Agent",
      icon: MessageSquare,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
      description:
        "Handles customer questions, schedules follow-ups, and requests reviews to build your reputation.",
      capabilities: [
        "Answers common questions",
        "Schedules follow-up services",
        "Requests reviews at the right time",
        "Detects and escalates complaints",
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
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
            Your AI team
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Each agent specializes in a core business function
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border ${agent.borderColor} p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${agent.bgColor} flex items-center justify-center mb-4`}>
                <agent.icon className="w-7 h-7 text-[var(--primary-green)]" />
              </div>

              {/* Name */}
              <h3
                className="mb-3"
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                {agent.name}
              </h3>

              {/* Description */}
              <p
                className="mb-4"
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-muted)",
                }}
              >
                {agent.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-2">
                {agent.capabilities.map((capability, capIndex) => (
                  <div key={capIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)] mt-1.5 flex-shrink-0" />
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--text-small-line)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl border border-[var(--border-color)] p-6 lg:p-8 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-xl bg-[var(--primary-green)]/10 flex items-center justify-center mb-4">
              <span className="text-2xl text-[var(--primary-green)]">+</span>
            </div>
            <h3
              className="mb-2"
              style={{
                fontSize: "var(--text-body)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              More agents coming
            </h3>
            <p
              style={{
                fontSize: "var(--text-small)",
                lineHeight: "var(--text-small-line)",
                color: "var(--text-muted)",
              }}
            >
              Marketing, Fleet Management, HR, and more—we're building the full
              operating system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
