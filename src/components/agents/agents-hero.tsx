export function AgentsHero() {
  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-green)]/10 border border-[var(--primary-green)]/20 rounded-full mb-6">
            <span
              className="text-[var(--primary-green)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--font-weight-medium)",
              }}
            >
              AI Agents
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
            Meet your{" "}
            <span className="text-[var(--primary-green)]">
              24/7 revenue + ops team.
            </span>
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
            Five specialized AI agents work together to run your lawn care
            business—capturing leads, optimizing schedules, managing crews,
            collecting payments, and delighting customers.
          </p>
        </div>
      </div>
    </section>
  );
}
