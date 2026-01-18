import { Bot, User, Zap, ArrowRight } from "lucide-react";

export function UserFlowsSection() {
  const flows = [
    {
      title: "Lead-to-Cash Pipeline",
      description: "From inquiry to booked job and payment",
      color: "blue",
      steps: [
        {
          title: "Lead Captured",
          description: "Missed call, SMS, or web form submission",
          actor: "customer",
          icon: "📝",
        },
        {
          title: "Intake Agent",
          description: "Qualifies lead: service type, urgency, contact info",
          actor: "agent",
          icon: "🤖",
          badge: "Agent",
        },
        {
          title: "Quote Agent",
          description: "Generates price estimate based on lot size & pricing policy",
          actor: "agent",
          icon: "💰",
          badge: "Agent",
        },
        {
          title: "Owner Reviews",
          description: "High-value quotes flagged for approval",
          actor: "human",
          icon: "👤",
          badge: "Human Approval",
        },
        {
          title: "Quote Sent",
          description: "Estimate delivered via email & SMS",
          actor: "agent",
          icon: "📧",
          badge: "Auto-run",
        },
        {
          title: "Schedule Agent",
          description: "Proposes time slots based on crew availability",
          actor: "agent",
          icon: "📅",
          badge: "Agent",
        },
      ],
    },
    {
      title: "Billing & Collections Flow",
      description: "From job completion to payment received",
      color: "green",
      steps: [
        {
          title: "Job Complete",
          description: "Crew marks job done with photos",
          actor: "crew",
          icon: "✓",
        },
        {
          title: "Invoice Build Agent",
          description: "Generates invoice draft from completed job data",
          actor: "agent",
          icon: "📄",
          badge: "Agent",
        },
        {
          title: "Variance Check",
          description: "Flags if >15% different from quote",
          actor: "human",
          icon: "🔍",
          badge: "Human Approval",
        },
        {
          title: "Invoice Sync Agent",
          description: "Syncs approved invoice to QuickBooks",
          actor: "agent",
          icon: "⚡",
          badge: "Auto-run",
        },
        {
          title: "Payment Received",
          description: "Customer pays via autopay or manual",
          actor: "customer",
          icon: "💳",
        },
        {
          title: "Payment Sync Agent",
          description: "Syncs payment from QuickBooks (hourly)",
          actor: "agent",
          icon: "⚡",
          badge: "Auto-run",
        },
      ],
    },
    {
      title: "Dispute & Remediation Flow",
      description: "Handling customer disputes and resolution",
      color: "amber",
      steps: [
        {
          title: "Overdue Invoice",
          description: "Payment past due date",
          actor: "customer",
          icon: "⏰",
        },
        {
          title: "Billing Agent",
          description: "Sends AI-generated reminder with tone control",
          actor: "agent",
          icon: "📧",
          badge: "Agent",
        },
        {
          title: "Customer Dispute",
          description: "Customer responds with complaint",
          actor: "customer",
          icon: "❗",
        },
        {
          title: "Remediation Agent",
          description: "Analyzes root cause & recommends resolution",
          actor: "agent",
          icon: "🔧",
          badge: "Agent",
        },
        {
          title: "Credit Approval",
          description: "Credits >$50 require owner approval",
          actor: "human",
          icon: "👤",
          badge: "Human Approval",
        },
        {
          title: "Resolution Applied",
          description: "Credit issued, re-visit scheduled, or invoice adjusted",
          actor: "agent",
          icon: "✅",
          badge: "Auto-run within thresholds",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
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
            Complete User Flows
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            See how agents and humans collaborate across the business lifecycle
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--border-color)] rounded-full">
            <Bot className="w-4 h-4 text-[var(--primary-green)]" />
            <span
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-primary)",
              }}
            >
              Agent Action
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--border-color)] rounded-full">
            <User className="w-4 h-4 text-blue-600" />
            <span
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-primary)",
              }}
            >
              Human Approval
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[var(--border-color)] rounded-full">
            <Zap className="w-4 h-4 text-purple-600" />
            <span
              style={{
                fontSize: "var(--text-small)",
                color: "var(--text-primary)",
              }}
            >
              Auto-run
            </span>
          </div>
        </div>

        {/* Flows */}
        <div className="space-y-12">
          {flows.map((flow, flowIndex) => (
            <div key={flowIndex}>
              {/* Flow Header */}
              <div className="mb-6">
                <h3
                  className="mb-1"
                  style={{
                    fontSize: "var(--text-h3)",
                    lineHeight: "var(--text-h3-line)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {flow.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    color: "var(--text-muted)",
                  }}
                >
                  {flow.description}
                </p>
              </div>

              {/* Desktop: Horizontal Flow */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />

                  {/* Steps */}
                  <div className="grid grid-cols-6 gap-2 relative">
                    {flow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="relative">
                        {/* Card */}
                        <div
                          className={`bg-white rounded-xl border-2 ${
                            step.actor === "agent"
                              ? "border-[var(--primary-green)]"
                              : step.actor === "human"
                              ? "border-blue-500"
                              : "border-[var(--border-color)]"
                          } p-4 shadow-lg hover:shadow-xl transition-shadow relative z-10`}
                        >
                          {/* Icon */}
                          <div className="text-3xl mb-3 text-center">
                            {step.icon}
                          </div>

                          {/* Title */}
                          <h4
                            className="mb-1 text-center"
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {step.title}
                          </h4>

                          {/* Description */}
                          <p
                            className="text-center mb-3"
                            style={{
                              fontSize: "11px",
                              lineHeight: "1.4",
                              color: "var(--text-muted)",
                            }}
                          >
                            {step.description}
                          </p>

                          {/* Badge */}
                          {step.badge && (
                            <div className="text-center">
                              <span
                                className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                                  step.badge === "Agent"
                                    ? "bg-[var(--primary-green)]/10 text-[var(--primary-green)]"
                                    : step.badge === "Human Approval"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-purple-100 text-purple-700"
                                }`}
                              >
                                {step.badge}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Arrow */}
                        {stepIndex < flow.steps.length - 1 && (
                          <div className="absolute -right-1 top-16 transform -translate-y-1/2 z-20">
                            <ArrowRight className="w-5 h-5 text-slate-400" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet: Vertical Flow */}
              <div className="lg:hidden">
                <div className="relative max-w-md mx-auto">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200" />

                  {/* Steps */}
                  <div className="space-y-4">
                    {flow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex gap-4 items-start">
                        {/* Icon Circle */}
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg relative z-10 ${
                            step.actor === "agent"
                              ? "bg-[var(--primary-green)]"
                              : step.actor === "human"
                              ? "bg-blue-500"
                              : "bg-white border-2 border-slate-300"
                          }`}
                        >
                          {step.icon}
                        </div>

                        {/* Content */}
                        <div
                          className={`flex-1 bg-white rounded-xl border-2 ${
                            step.actor === "agent"
                              ? "border-[var(--primary-green)]"
                              : step.actor === "human"
                              ? "border-blue-500"
                              : "border-[var(--border-color)]"
                          } p-4 shadow-lg`}
                        >
                          <h4
                            className="mb-1"
                            style={{
                              fontSize: "var(--text-small)",
                              fontWeight: "var(--font-weight-medium)",
                              color: "var(--text-primary)",
                            }}
                          >
                            {step.title}
                          </h4>
                          <p
                            className="mb-2"
                            style={{
                              fontSize: "12px",
                              color: "var(--text-muted)",
                            }}
                          >
                            {step.description}
                          </p>
                          {step.badge && (
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                step.badge === "Agent"
                                  ? "bg-[var(--primary-green)]/10 text-[var(--primary-green)]"
                                  : step.badge === "Human Approval"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {step.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 max-w-3xl mx-auto p-8 bg-gradient-to-r from-[var(--primary-green)]/10 to-[var(--accent-blue)]/10 border border-[var(--primary-green)]/20 rounded-2xl text-center">
          <h3
            className="mb-3"
            style={{
              fontSize: "var(--text-h3)",
              lineHeight: "var(--text-h3-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Every flow, optimized by AI
          </h3>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Agents handle the routine. You focus on the exceptions. Together,
            you run a faster, more profitable business.
          </p>
        </div>
      </div>
    </section>
  );
}