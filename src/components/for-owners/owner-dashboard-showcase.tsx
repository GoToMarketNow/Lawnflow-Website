import { MobileAppPreview } from "@/components/ui/mobile-app-preview";
import { Zap, TrendingUp, Clock, DollarSign } from "lucide-react";

export function OwnerDashboardShowcase() {
  const features = [
    {
      icon: Zap,
      title: "AI Agents Working 24/7",
      description:
        "Watch AI handle quotes, scheduling, invoicing, and collections while you sleep.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Revenue Tracking",
      description:
        "See today's revenue, this week's performance, and projected monthly earnings at a glance.",
    },
    {
      icon: Clock,
      title: "Live Operations Dashboard",
      description:
        "Monitor crew progress, job completions, and customer satisfaction in real-time.",
    },
    {
      icon: DollarSign,
      title: "Profit Protection",
      description:
        "AI catches pricing errors, suggests upsells, and ensures you're never leaving money on the table.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[var(--cream)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Command Center in Your Pocket
          </h2>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Everything you need to run your business, accessible from anywhere.
            Real-time insights, AI automation status, and complete operational
            control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: iPhone Preview */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <MobileAppPreview variant="owner" className="w-full" />

              {/* Floating indicator */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-4 border border-[var(--border-color)] hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary-green)] to-[var(--dark-green)] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)]">
                      AI Agents
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      3 Active Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-[var(--border-color)] shadow-sm"
                >
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--primary-green)15" }}
                    >
                      <feature.icon
                        className="w-6 h-6"
                        style={{ color: "var(--primary-green)" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "var(--text-body)",
                          fontWeight: "var(--font-weight-medium)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "var(--text-small)",
                          lineHeight: "var(--text-small-line)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[var(--primary-green)] to-[var(--dark-green)] rounded-xl text-white">
              <h4
                className="mb-2"
                style={{
                  fontSize: "var(--text-body)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Finally, get your evenings back
              </h4>
              <p className="text-white/90 text-sm mb-4">
                Stop working until midnight on invoices, schedules, and
                collections. Let AI handle it.
              </p>
              <button className="px-6 py-3 bg-white rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors" style={{ color: "var(--primary-green)" }}>
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "24/7", label: "AI Automation" },
            { value: "3x", label: "Faster Collections" },
            { value: "40%", label: "Time Saved" },
            { value: "95%", label: "Customer Satisfaction" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[var(--border-color)] text-center"
            >
              <div
                className="mb-1"
                style={{
                  fontSize: "var(--text-h2)",
                  fontWeight: "var(--font-weight-medium)",
                  color: "var(--primary-green)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--text-muted)",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
