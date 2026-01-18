import { Monitor, Sparkles, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScreenPreviewsSection() {
  const screens = [
    {
      icon: Monitor,
      title: "Command Center",
      description: "Real-time dashboard showing all agent activity, approvals needed, and key metrics",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/5",
      borderColor: "border-blue-500/20",
      image: "Command center with charts and agent status cards",
    },
    {
      icon: Sparkles,
      title: "Quote Copilot",
      description: "AI-powered pricing tool with smart recommendations based on your margins and market data",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/5",
      borderColor: "border-purple-500/20",
      image: "Quote builder interface with AI suggestions",
    },
    {
      icon: ClipboardList,
      title: "Crew Day Plan",
      description: "Mobile-optimized daily schedule with route maps, job details, and customer notes",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/5",
      borderColor: "border-green-500/20",
      image: "Mobile crew schedule with map and job cards",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[var(--cream)] to-white">
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
            See the platform in action
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Explore the interfaces that power your agentic workflow
          </p>
        </div>

        {/* Screen Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {screens.map((screen, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl border ${screen.borderColor} overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer`}
            >
              {/* Preview Image Placeholder */}
              <div
                className={`h-48 ${screen.bgColor} flex items-center justify-center border-b ${screen.borderColor} relative overflow-hidden`}
              >
                {/* Gradient overlay for visual interest */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `linear-gradient(135deg, ${screen.color.split(" ")[1]}, ${screen.color.split(" ")[3]})`,
                  }}
                />

                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <screen.icon className="w-16 h-16 text-[var(--primary-green)] opacity-40" />
                  <span
                    className="text-xs text-[var(--text-muted)] bg-white/80 px-3 py-1 rounded-full"
                  >
                    Preview coming soon
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[var(--primary-green)]/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <p className="text-sm mb-2">Click to explore</p>
                    <ArrowRight className="w-6 h-6 mx-auto" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="mb-2"
                  style={{
                    fontSize: "var(--text-body)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {screen.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-small)",
                    lineHeight: "var(--text-small-line)",
                    color: "var(--text-muted)",
                  }}
                >
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--primary-green)]/5"
            onClick={() => {
              // Navigate to screens page (to be created in future sprint)
              console.log("Navigate to screens page");
            }}
          >
            View All Screens
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
