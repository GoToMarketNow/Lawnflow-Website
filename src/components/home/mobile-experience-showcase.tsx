import { useState } from "react";
import { MobileAppPreview } from "@/components/ui/mobile-app-preview";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function MobileExperienceShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      variant: "owner" as const,
      title: "Owner Command Center",
      subtitle: "Your business at a glance",
      description:
        "Real-time dashboard with AI agent activity, revenue tracking, and complete visibility into operations—all from your phone.",
      features: [
        "Live AI agent updates",
        "Revenue analytics",
        "Smart scheduling",
        "Team management",
      ],
      color: "var(--primary-green)",
    },
    {
      variant: "crew" as const,
      title: "Crew Operations",
      subtitle: "Field-optimized execution",
      description:
        "GPS-optimized routes, job checklists, and instant photo uploads. Everything your crew needs to execute perfectly.",
      features: [
        "Smart route planning",
        "Job checklists",
        "Photo proof of work",
        "Real-time updates",
      ],
      color: "var(--accent-blue)",
    },
    {
      variant: "customer" as const,
      title: "Customer Experience",
      subtitle: "Transparency & convenience",
      description:
        "Customers track service status, view invoices, and manage appointments—all from a beautiful mobile app.",
      features: [
        "Service tracking",
        "Easy payments",
        "Schedule management",
        "Service history",
      ],
      color: "#10b981",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const activeExperience = experiences[activeIndex];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-[var(--cream)] to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--primary-green)]/10 px-4 py-2 rounded-full mb-4">
            <span
              className="text-sm font-medium"
              style={{ color: "var(--primary-green)" }}
            >
              Native Mobile Apps
            </span>
          </div>
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            Built for Every User
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            Beautiful, purpose-built mobile experiences for owners, crews, and
            customers—all working together seamlessly.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - iPhone Preview */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full max-w-[380px]"
              >
                <MobileAppPreview
                  variant={activeExperience.variant}
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows - Mobile */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 lg:hidden">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Title Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                  style={{
                    backgroundColor: `${activeExperience.color}15`,
                    border: `1px solid ${activeExperience.color}30`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: activeExperience.color }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: activeExperience.color }}
                  >
                    {activeExperience.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mb-4"
                  style={{
                    fontSize: "var(--text-h2)",
                    lineHeight: "var(--text-h2-line)",
                    fontWeight: "var(--font-weight-medium)",
                    color: "var(--text-primary)",
                  }}
                >
                  {activeExperience.title}
                </h3>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--text-body-line)",
                    color: "var(--text-muted)",
                  }}
                >
                  {activeExperience.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {activeExperience.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${activeExperience.color}20` }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: activeExperience.color }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: "var(--text-small)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation Dots - Desktop */}
                <div className="flex items-center gap-3">
                  {experiences.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className="group relative"
                    >
                      <div
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === activeIndex ? "w-12 bg-[var(--primary-green)]" : "w-8 bg-slate-300"
                        }`}
                      />
                      {idx === activeIndex && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}

                  {/* Navigation Arrows - Desktop */}
                  <div className="hidden lg:flex items-center gap-2 ml-4">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-700" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/screens"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: "var(--primary-green)" }}
          >
            View all screens & flows
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
