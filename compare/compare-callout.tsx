import {
  Clipboard,
  CheckCircle,
  CreditCard,
  Bell,
  Star,
  Share2,
  PlusCircle,
  ArrowRight,
} from "lucide-react";

export function CompareCallout() {
  const agenticLoop = [
    { icon: Clipboard, label: "Job" },
    { icon: CheckCircle, label: "QA" },
    { icon: CreditCard, label: "Payment" },
    { icon: Bell, label: "Notification" },
    { icon: Star, label: "Review" },
    { icon: Share2, label: "Referral" },
    { icon: PlusCircle, label: "New Lead" },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl border-2 border-[var(--primary-green)] p-8 md:p-10 shadow-lg">
            {/* Quotes */}
            <div className="space-y-6 mb-8">
              <blockquote
                className="text-center"
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                "Other platforms help you run jobs. LawnFlow{" "}
                <span className="text-[var(--primary-green)]">runs the business</span>
                —and delights the customer."
              </blockquote>

              <p
                className="text-center max-w-4xl mx-auto"
                style={{
                  fontSize: "var(--text-body)",
                  lineHeight: "var(--text-body-line)",
                  color: "var(--text-primary)",
                }}
              >
                LawnFlow is the only lawn & landscaping platform where AI agents manage
                operations, cash flow, and the customer experience end-to-end—driving{" "}
                <strong>faster cash</strong>, <strong>higher CSAT</strong>, and{" "}
                <strong>more referrals</strong> without adding staff.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-[var(--border-color)] my-8" />

            {/* Agentic Loop Section */}
            <div className="space-y-4">
              <p
                className="text-center text-sm"
                style={{
                  color: "var(--text-muted)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Every cycle compounds brand strength and cash velocity
              </p>

              {/* Loop Visualization */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                {agenticLoop.map((step, idx) => {
                  const Icon = step.icon;
                  const isLast = idx === agenticLoop.length - 1;

                  return (
                    <div key={idx} className="flex items-center gap-2 md:gap-3">
                      {/* Step */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] flex items-center justify-center">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        <span
                          className="text-xs md:text-sm text-center"
                          style={{
                            color: "var(--text-muted)",
                            fontWeight: "var(--font-weight-medium)",
                          }}
                        >
                          {step.label}
                        </span>
                      </div>

                      {/* Arrow */}
                      {!isLast && (
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[var(--primary-green)] flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
