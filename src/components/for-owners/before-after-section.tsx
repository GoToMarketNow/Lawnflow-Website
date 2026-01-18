import { X, ArrowRight } from "lucide-react";

export function BeforeAfterSection() {
  const beforeItems = [
    {
      problem: "Chasing leads",
      description: "Manually following up on every inquiry, nights and weekends",
    },
    {
      problem: "Pricing anxiety",
      description: "Guessing quotes, leaving money on the table or losing bids",
    },
    {
      problem: "Schedule chaos",
      description: "Constant calls to juggle crews, weather, and cancellations",
    },
    {
      problem: "Payment delays",
      description: "Chasing invoices, manual reminders, slow collections",
    },
    {
      problem: "Scattered systems",
      description: "Spreadsheets, texts, Post-its—nothing talks to each other",
    },
    {
      problem: "Admin overload",
      description: "You're working IN the business, not ON it",
    },
  ];

  const afterItems = [
    {
      solution: "Instant response",
      description: "Quote Agent captures and converts leads 24/7",
    },
    {
      solution: "Smart pricing",
      description: "AI analyzes margins and market data for every estimate",
    },
    {
      solution: "Optimized routing",
      description: "Schedule Agent balances crew capacity and drive time",
    },
    {
      solution: "Auto collections",
      description: "Invoices sent, reminders automated, payments tracked",
    },
    {
      solution: "One platform",
      description: "All data, workflows, and agents in a single command center",
    },
    {
      solution: "Strategic focus",
      description: "You set the vision, agents execute the operations",
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
            Before vs After
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            From manual chaos to automated operations
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Before Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Before LawnFlow
              </h3>
            </div>

            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <div
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.problem}
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-green)]/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[var(--primary-green)]" />
              </div>
              <h3
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                With LawnFlow
              </h3>
            </div>

            <div className="space-y-4">
              {afterItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--primary-green)]/5 border border-[var(--primary-green)]/20 rounded-xl"
                >
                  <div
                    className="mb-1"
                    style={{
                      fontSize: "var(--text-body)",
                      fontWeight: "var(--font-weight-medium)",
                      color: "var(--primary-green)",
                    }}
                  >
                    {item.solution}
                  </div>
                  <p
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-[var(--primary-green)]/5 to-[var(--accent-blue)]/5 border border-[var(--primary-green)]/20 rounded-xl text-center">
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
              The result?
            </span>{" "}
            Owners report{" "}
            <span
              className="text-[var(--primary-green)]"
              style={{ fontWeight: "var(--font-weight-medium)" }}
            >
              60% less admin time
            </span>
            , faster growth, and{" "}
            <span
              className="text-[var(--primary-green)]"
              style={{ fontWeight: "var(--font-weight-medium)" }}
            >
              better profit margins
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
