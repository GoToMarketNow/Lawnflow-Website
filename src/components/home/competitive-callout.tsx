import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompetitiveCallout() {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-xl">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3
                className="mb-2"
                style={{
                  fontSize: "var(--text-h3)",
                  lineHeight: "var(--text-h3-line)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--text-primary)",
                }}
              >
                Why LawnFlow beats Jobber, Housecall Pro & Service Autopilot
              </h3>
              <p
                className="mb-6"
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--text-muted)",
                }}
              >
                See the detailed competitive matrix comparing agentic operations across 6 critical
                value dimensions: time savings, cash flow, customer experience, and more.
              </p>
              <Link to="/compare">
                <Button className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white">
                  View Competitive Analysis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}