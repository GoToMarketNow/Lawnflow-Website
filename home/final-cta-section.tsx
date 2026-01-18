import { Button } from "@/app/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          <h2
            className="mb-4 text-white"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              lineHeight: "1.2",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            Ready to run a smarter lawn care business?
          </h2>
          <p
            className="mb-8 max-w-2xl mx-auto text-white/90"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
            }}
          >
            Join the waitlist and be among the first to experience AI-powered
            lawn care operations.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Early access pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Personal onboarding</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-[var(--cream)] text-[var(--primary-green)] text-base h-12 px-8 shadow-xl"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-base h-12 px-8"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Social Proof */}
          <p
            className="mt-8 text-white/80"
            style={{
              fontSize: "var(--text-small)",
            }}
          >
            Join 500+ lawn care pros already on the waitlist
          </p>
        </div>
      </div>
    </section>
  );
}
