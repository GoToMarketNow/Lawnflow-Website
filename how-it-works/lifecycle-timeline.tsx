import {
  Sparkles,
  FileText,
  Calendar,
  Wrench,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export function LifecycleTimeline() {
  const stages = [
    {
      icon: Sparkles,
      title: "Capture",
      description: "Lead comes in via web, phone, or referral",
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      title: "Quote",
      description: "AI analyzes scope, sends instant estimate",
      color: "bg-purple-500",
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Optimizes crew routing and capacity",
      color: "bg-indigo-500",
    },
    {
      icon: Wrench,
      title: "Execute",
      description: "Crews get plans, updates flow to customer",
      color: "bg-green-500",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Invoice sent, payment collected automatically",
      color: "bg-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Retain & Grow",
      description: "Follow-ups, reviews, upsells, referrals",
      color: "bg-teal-500",
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
            The complete lifecycle
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Six stages managed intelligently by AI agents
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-[var(--border-color)]">
              <div
                className="h-full bg-gradient-to-r from-[var(--primary-green)] to-[var(--dark-green)]"
                style={{ width: "100%" }}
              />
            </div>

            {/* Stages */}
            <div className="grid grid-cols-6 gap-4 relative">
              {stages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div
                    className={`w-24 h-24 rounded-full ${stage.color} flex items-center justify-center mb-4 shadow-lg relative z-10`}
                  >
                    <stage.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="mb-2 text-center"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-center"
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--primary-green)] to-[var(--dark-green)]" />

            {/* Stages */}
            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  {/* Icon Circle */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full ${stage.color} flex items-center justify-center shadow-lg relative z-10`}
                  >
                    <stage.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="mb-1"
                      style={{
                        fontSize: "var(--text-body)",
                        fontWeight: "var(--font-weight-medium)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--text-small)",
                        lineHeight: "var(--text-small-line)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
