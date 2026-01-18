import {
  Calendar,
  FileText,
  CreditCard,
  Bell,
  MessageCircle,
  Star,
} from "lucide-react";
import { MobileAppPreview } from "@/components/ui/mobile-app-preview";

export function CustomerAppSection() {
  const features = [
    {
      icon: FileText,
      title: "Request new services",
      description:
        "Need aeration, overseeding, or a one-time cleanup? Request it in seconds.",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Approve schedule changes",
      description:
        "Weather delay? Reschedule needed? Approve updates with one tap.",
      color: "bg-purple-500",
    },
    {
      icon: CreditCard,
      title: "Pay or set autopay",
      description:
        "Pay invoices instantly or set up autopay. Never miss a payment.",
      color: "bg-green-500",
    },
    {
      icon: Bell,
      title: "Get real-time updates",
      description:
        "Know when your crew is on the way, when work starts, and when it's done.",
      color: "bg-orange-500",
    },
    {
      icon: MessageCircle,
      title: "Message your crew",
      description:
        "Ask questions, add notes, or give feedback—no phone calls needed.",
      color: "bg-teal-500",
    },
    {
      icon: Star,
      title: "View service history",
      description:
        "See past jobs, before/after photos, and upcoming appointments.",
      color: "bg-indigo-500",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              Your lawn care, at your fingertips
            </h2>
            <p
              className="mb-8"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              Simple, transparent, and always up to date. Everything you need in
              one customer portal.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-3`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
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
              ))}
            </div>
          </div>

          {/* Preview Mockup */}
          <div>
            <div className="relative max-w-sm mx-auto">
              <MobileAppPreview variant="customer" className="w-full" />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg">
                <span
                  style={{
                    fontSize: "var(--text-small)",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-purple-50 border border-purple-200 rounded-xl text-center">
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-primary)",
            }}
          >
            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
              Happy customers, better reviews.
            </span>{" "}
            When your customers can manage everything themselves, they're more
            satisfied—and more likely to refer friends.
          </p>
        </div>
      </div>
    </section>
  );
}