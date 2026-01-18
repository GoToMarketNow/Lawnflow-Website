import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";

export function MeetAgentsCTA() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] mb-6">
            <Bot className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Meet your{" "}
            <span className="text-[var(--primary-green)]">AI agents</span>
          </h2>

          {/* Description */}
          <p
            className="mb-8 max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            From lead qualification to collections, each specialized agent handles a critical
            piece of your business—automatically. See how they work together to run your
            operation 24/7.
          </p>

          {/* CTA Button */}
          <Link to="/agents">
            <Button
              size="lg"
              className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white text-base h-12 px-8 group"
            >
              Meet Your Agents
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Bottom note */}
          <p
            className="mt-6 text-sm"
            style={{
              color: "var(--text-muted)",
            }}
          >
            7+ specialized agents ready to work for you
          </p>
        </div>
      </div>
    </section>
  );
}
