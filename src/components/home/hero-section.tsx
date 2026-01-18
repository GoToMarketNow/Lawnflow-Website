import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <h1
              className="mb-6"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                lineHeight: "1.15",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Do More Lawns.{" "}
              <span className="text-[var(--primary-green)]">Less Work.</span>
            </h1>
            <p
              className="mb-8 max-w-xl"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              Hire 24/7 revenue + ops agents that quote, schedule, dispatch,
              invoice, and collect—so your team stays on the work.
            </p>

            {/* Value Props */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--primary-green)]" />
                <span className="text-[var(--text-primary)]">
                  Win more jobs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--primary-green)]" />
                <span className="text-[var(--text-primary)]">
                  Run smoother days
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-[var(--primary-green)]" />
                <span className="text-[var(--text-primary)]">
                  Get paid faster
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white text-base h-12 px-8"
              >
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--primary-green)]/5 text-base h-12 px-8"
              >
                See How It Works
              </Button>
            </div>

            {/* Process Strip */}
            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-[var(--border-color)] shadow-sm">
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Assist
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Automate
              </span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
              <span className="text-sm font-medium text-[var(--primary-green)]">
                Optimize
              </span>
            </div>
          </div>

          {/* Right Column - UI Mock */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl border border-[var(--border-color)] p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-1">
                      Today's Overview
                    </div>
                    <div className="text-2xl font-semibold text-[var(--text-primary)]">
                      Dashboard
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary-green)] flex items-center justify-center">
                    <div className="w-6 h-6 text-white font-bold">AI</div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[var(--primary-green)]/10 to-[var(--primary-green)]/5 rounded-lg p-4">
                    <div className="text-sm text-[var(--text-muted)] mb-1">
                      Jobs Today
                    </div>
                    <div className="text-3xl font-bold text-[var(--primary-green)]">
                      24
                    </div>
                    <div className="text-xs text-[var(--primary-green)] mt-1">
                      ↑ 12% vs last week
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-blue)]/5 rounded-lg p-4">
                    <div className="text-sm text-[var(--text-muted)] mb-1">
                      Revenue
                    </div>
                    <div className="text-3xl font-bold text-[var(--accent-blue)]">
                      $2.4k
                    </div>
                    <div className="text-xs text-[var(--accent-blue)] mt-1">
                      ↑ 28% vs last week
                    </div>
                  </div>
                </div>

                {/* Active Tasks */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-[var(--text-primary)] mb-2">
                    AI Agent Activity
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--cream)] rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-green)] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        Quote sent to Johnson residence
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        2 minutes ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--cream)] rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent-blue)] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        Invoice collected - $450
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        5 minutes ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[var(--cream)] rounded-lg opacity-60">
                    <div className="w-8 h-8 rounded-full bg-[var(--text-muted)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--text-primary)]">
                        Scheduling tomorrow's routes...
                      </div>
                      <div className="text-xs text-[var(--text-muted)]">
                        In progress
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[var(--primary-green)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                24/7 Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
