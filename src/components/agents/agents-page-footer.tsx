import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function AgentsPageFooter() {
  const benefits = [
    "Always learning, always improving",
    "No sick days, no vacations",
    "Scale without hiring overhead",
    "Consistent quality, every time",
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--cream)] border-t border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2
              className="mb-4"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Your agents are{" "}
              <span className="text-[var(--primary-green)]">ready to work</span>
            </h2>
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              Stop managing software. Start managing results. Your AI team is standing by.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-[var(--border-color)]">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--primary-green)]" />
                <span
                  style={{
                    fontSize: "var(--text-body)",
                    color: "var(--text-primary)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/waitlist">
              <Button
                size="lg"
                className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white text-base h-12 px-8"
              >
                Get Early Access
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--primary-green)]/5 text-base h-12 px-8"
              >
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Bottom Note */}
          <p
            className="text-center mt-8 text-sm"
            style={{
              color: "var(--text-muted)",
            }}
          >
            Join lawn care operators who are already building their AI teams
          </p>
        </div>
      </div>
    </section>
  );
}
