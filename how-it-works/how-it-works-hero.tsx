export function HowItWorksHero() {
  return (
    <section className="w-full pt-20 pb-8 md:pt-24 md:pb-12 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="mb-4"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              lineHeight: "1.15",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            The{" "}
            <span className="text-[var(--primary-green)]">
              agentic workflow,
            </span>{" "}
            end-to-end.
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            From lead to payment to referrals—AI agents orchestrate seamless experiences for owners, crews, and customers at every step.
          </p>
        </div>
      </div>
    </section>
  );
}