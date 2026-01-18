import { Button } from "@/app/components/ui/button";

interface CTABandProps {
  title: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "primary" | "secondary";
  className?: string;
}

export function CTABand({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "primary",
  className = "",
}: CTABandProps) {
  const bgColor =
    variant === "primary" ? "var(--primary-green)" : "var(--cream)";
  const textColor = variant === "primary" ? "white" : "var(--text-primary)";

  return (
    <div
      className={`w-full py-12 md:py-16 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: textColor,
            }}
          >
            {title}
          </h2>
          {description && (
            <p
              className="mb-8"
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: variant === "primary" ? "rgba(255,255,255,0.9)" : "var(--text-muted)",
              }}
            >
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button
                asChild
                size="lg"
                className={
                  variant === "primary"
                    ? "bg-white hover:bg-[var(--cream)] text-[var(--primary-green)]"
                    : "bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white"
                }
              >
                <a href={primaryCTA.href}>{primaryCTA.text}</a>
              </Button>
            )}
            {secondaryCTA && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className={
                  variant === "primary"
                    ? "border-white text-white hover:bg-white/10"
                    : "border-[var(--primary-green)] text-[var(--primary-green)] hover:bg-[var(--primary-green)]/10"
                }
              >
                <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
