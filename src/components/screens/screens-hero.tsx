export function ScreensHero() {
  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 rounded-full mb-6">
            <span
              className="text-[var(--accent-blue)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              Platform Preview
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            See the platform in action
          </h1>

          {/* Subhead */}
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            From command center to customer app—explore the interfaces and workflows
            that power your autonomous lawn care business.
          </p>
        </div>
      </div>
    </section>
  );
}
