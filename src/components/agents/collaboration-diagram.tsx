import { Eye, Brain, Zap, ArrowRight } from "lucide-react";

export function CollaborationDiagram() {
  const steps = [
    {
      number: "1",
      icon: Eye,
      title: "Detect",
      description: "Agent monitors triggers and incoming data",
      examples: ["New lead form", "Schedule change request", "Job completion"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      number: "2",
      icon: Brain,
      title: "Decide",
      description: "Agent analyzes context and evaluates options",
      examples: ["Check pricing rules", "Optimize routing", "Review policies"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      number: "3",
      icon: Zap,
      title: "Do/Ask",
      description: "Agent acts autonomously or escalates to you",
      examples: [
        "Send quote (Do)",
        "Update schedule (Do)",
        "Flag dispute (Ask)",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
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
            How agents collaborate
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Three steps, repeated continuously across the business lifecycle
          </p>
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />

            {/* Steps */}
            <div className="grid grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-white rounded-2xl border border-[var(--border-color)] p-6 shadow-lg">
                    {/* Number Badge */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.bgColor} mb-4`}
                      style={{
                        background: `linear-gradient(135deg, ${step.color.split(" ")[1]}, ${step.color.split(" ")[3]})`,
                      }}
                    >
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center mb-4`}>
                      <step.icon className="w-7 h-7 text-[var(--primary-green)]" />
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
                      {step.title}
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
                      {step.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      {step.examples.map((example, exIndex) => (
                        <div key={exIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)] mt-1.5 flex-shrink-0" />
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

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-24 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-[var(--text-muted)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Flow */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20" />

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  {/* Number Badge */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative z-10"
                    style={{
                      background: `linear-gradient(135deg, ${step.color.split(" ")[1]}, ${step.color.split(" ")[3]})`,
                    }}
                  >
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl border border-[var(--border-color)] p-6 shadow-lg">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center mb-3`}>
                      <step.icon className="w-6 h-6 text-[var(--primary-green)]" />
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-2"
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="mb-3"
                      style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--text-small-line)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      {step.examples.map((example, exIndex) => (
                        <div key={exIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-green)] mt-1.5 flex-shrink-0" />
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
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-[var(--primary-green)]/5 to-[var(--accent-blue)]/5 border border-[var(--primary-green)]/20 rounded-xl text-center">
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
              Continuous learning.
            </span>{" "}
            Agents improve over time, learning from your decisions, customer
            patterns, and business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
