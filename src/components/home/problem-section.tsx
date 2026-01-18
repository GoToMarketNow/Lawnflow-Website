import { AlertCircle, Calendar, DollarSign, MessageSquare } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: MessageSquare,
      quote: "I spend more time on the phone than on the mower",
      description: "Missed calls mean missed revenue",
    },
    {
      icon: Calendar,
      quote: "My schedule is a mess by Tuesday",
      description: "Juggling changes, cancellations, and emergencies",
    },
    {
      icon: DollarSign,
      quote: "I'm still chasing invoices from last month",
      description: "Late payments killing your cash flow",
    },
    {
      icon: AlertCircle,
      quote: "Where are you? texts all day long",
      description: "Customers left in the dark about arrival times",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Get your{" "}
            <span className="text-[var(--primary-green)]">nights</span> back.
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            You got into lawn care to work outdoors, not to answer emails at
            dinner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[var(--cream)] to-white p-6 lg:p-8 rounded-xl border border-[var(--border-color)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-[var(--border-color)] flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-[var(--primary-green)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="mb-2 italic"
                    style={{
                      fontSize: "var(--text-body)",
                      lineHeight: "var(--text-body-line)",
                      color: "var(--text-primary)",
                      fontWeight: "500",
                    }}
                  >
                    "{problem.quote}"
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-small)",
                      lineHeight: "var(--text-small-line)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}