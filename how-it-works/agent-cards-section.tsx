import {
  FileText,
  Calendar,
  Users,
  DollarSign,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

export function AgentCardsSection() {
  const agents = [
    {
      name: "Quote Agent",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      trigger: "Lead form submitted or phone inquiry",
      action: "Analyzes property, scope, and pricing rules",
      output: "Instant estimate sent via email/SMS",
      escalation: "Unusual property or out-of-area request",
    },
    {
      name: "Schedule Agent",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/20",
      trigger: "Quote accepted or reschedule request",
      action: "Optimizes crew routes and capacity",
      output: "Appointment booked, crew notified",
      escalation: "Crew at max capacity or weather conflict",
    },
    {
      name: "Crew Ops Agent",
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/5",
      borderColor: "border-indigo-500/20",
      trigger: "Day starts or crew checks in",
      action: "Sends daily plans, tracks progress",
      output: "Customer updates, completion photos",
      escalation: "Equipment breakdown or scope change",
    },
    {
      name: "Collections Agent",
      icon: DollarSign,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/5",
      borderColor: "border-emerald-500/20",
      trigger: "Job completed or invoice overdue",
      action: "Sends invoice, payment reminders",
      output: "Payment collected, books updated",
      escalation: "Disputed charges or 30+ days overdue",
    },
    {
      name: "CX Agent",
      icon: MessageSquare,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500/5",
      borderColor: "border-teal-500/20",
      trigger: "Customer message or review request",
      action: "Answers FAQs, schedules follow-ups",
      output: "Response sent, satisfaction tracked",
      escalation: "Complaint or negative sentiment detected",
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
            Meet your AI agents
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Five specialized agents that handle the full business lifecycle
          </p>
        </div>

        {/* Agent Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {agents.map((agent, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border ${agent.borderColor} p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${agent.bgColor} flex items-center justify-center`}
                >
                  <agent.icon className="w-6 h-6 text-[var(--primary-green)]" />
                </div>
                <h3
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {agent.name}
                </h3>
              </div>

              {/* Workflow */}
              <div className="space-y-4">
                {/* Trigger */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary-green)]" />
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Trigger
                    </span>
                  </div>
                  <p
                    className="pl-4"
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {agent.trigger}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] ml-1" />

                {/* Action */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Action
                    </span>
                  </div>
                  <p
                    className="pl-4"
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {agent.action}
                  </p>
                </div>

                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] ml-1" />

                {/* Output */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Output
                    </span>
                  </div>
                  <p
                    className="pl-4"
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {agent.output}
                  </p>
                </div>
              </div>

              {/* Escalation */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 text-amber-500 mt-0.5" />
                  <div>
                    <span
                      className="block mb-1"
                      style={{
                        fontSize: "var(--text-small)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      Escalates when:
                    </span>
                    <p
                      style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--text-small-line)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {agent.escalation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-[var(--cream)] to-white rounded-2xl border border-[var(--border-color)] p-6 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-green)]/10 flex items-center justify-center mb-4">
              <span
                className="text-2xl"
                style={{ color: "var(--primary-green)" }}
              >
                +
              </span>
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
              Marketing Agent, Fleet Agent, HR Agent—we're building a full
              operating system for lawn care businesses.
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-3xl mx-auto p-6 bg-[var(--primary-green)]/5 border border-[var(--primary-green)]/20 rounded-xl">
          <p
            className="text-center"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
              Agents work together.
            </span>{" "}
            Quote Agent hands off to Schedule Agent. Crew Ops notifies
            Collections. CX escalates to you. It's orchestrated, not siloed.
          </p>
        </div>
      </div>
    </section>
  );
}
