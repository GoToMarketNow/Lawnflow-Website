import {
  MapPin,
  Clock,
  ClipboardList,
  Camera,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { MobileAppPreview } from "@/app/components/ui/mobile-app-preview";

export function CrewDayPlanSection() {
  const features = [
    {
      icon: MapPin,
      title: "Optimized routing",
      description: "Jobs organized by location to minimize drive time",
    },
    {
      icon: Clock,
      title: "Time estimates",
      description: "Realistic windows for each job based on scope",
    },
    {
      icon: ClipboardList,
      title: "Job details",
      description: "Service type, customer notes, special instructions",
    },
    {
      icon: Camera,
      title: "Quick photo upload",
      description: "Capture before/after shots and send to office & customer",
    },
    {
      icon: MessageSquare,
      title: "In-app messaging",
      description: "Ask questions without phone tag or texts",
    },
    {
      icon: CheckCircle2,
      title: "One-tap completion",
      description: "Mark jobs done, trigger invoicing automatically",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Preview Mockup */}
          <div>
            <div className="relative max-w-sm mx-auto">
              <MobileAppPreview variant="crew" className="w-full" />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[var(--primary-green)] text-white px-4 py-2 rounded-full shadow-lg">
                <span
                  style={{
                    fontSize: "var(--text-small)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Mobile-First
                </span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h2
              className="mb-3"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: "var(--text-h2-line)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--text-primary)",
              }}
            >
              Everything you need, nothing you don't
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              Built for the field, not the office. Simple, fast, and designed
              for work gloves.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-blue)]/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[var(--accent-blue)]" />
                  </div>
                  <div>
                    <h3
                      className="mb-1"
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
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-8 p-4 bg-[var(--accent-blue)]/5 border border-[var(--accent-blue)]/20 rounded-xl">
              <p
                style={{
                  fontSize: "var(--text-small)",
                  lineHeight: "var(--text-small-line)",
                  color: "var(--text-primary)",
                }}
              >
                <span style={{ fontWeight: "var(--font-weight-medium)" }}>
                  Less friction, more focus.
                </span>{" "}
                Crews spend less time on admin and more time delivering great
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}