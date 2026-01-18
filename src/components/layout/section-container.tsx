import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface SectionContainerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  children?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary";
  className?: string;
  centered?: boolean;
}

export function SectionContainer({
  eyebrow,
  title,
  subtitle,
  body,
  children,
  ctaText,
  ctaHref = "#",
  ctaVariant = "primary",
  className = "",
  centered = true,
}: SectionContainerProps) {
  return (
    <section className={`w-full py-12 md:py-16 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
          {eyebrow && (
            <div className="inline-block px-4 py-1 rounded-full bg-[var(--cream)] text-[var(--primary-green)] text-sm font-medium mb-4">
              {eyebrow}
            </div>
          )}
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: "var(--text-h2-line)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <h3
              className="mb-6"
              style={{
                fontSize: "var(--text-h3)",
                lineHeight: "var(--text-h3-line)",
                color: "var(--text-muted)",
              }}
            >
              {subtitle}
            </h3>
          )}
          {body && (
            <p
              style={{
                fontSize: "var(--text-body)",
                lineHeight: "var(--text-body-line)",
                color: "var(--text-muted)",
              }}
            >
              {body}
            </p>
          )}
          {ctaText && (
            <div className="mt-6">
              <Button
                asChild
                className={
                  ctaVariant === "primary"
                    ? "bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white"
                    : "bg-[var(--cream)] hover:bg-[var(--border-color)] text-[var(--text-primary)]"
                }
              >
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
