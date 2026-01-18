import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  iconColor = "var(--primary-green)",
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-lg bg-white border border-[var(--border-color)] hover:shadow-lg transition-shadow ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {Icon && (
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${iconColor}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
      )}
      <h3
        className="mb-2"
        style={{
          fontSize: "var(--text-h3)",
          lineHeight: "var(--text-h3-line)",
          fontWeight: "var(--font-weight-medium)",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--text-body-line)",
          color: "var(--text-muted)",
        }}
      >
        {description}
      </p>
    </div>
  );
}

interface ContentCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  image?: string;
  imageAlt?: string;
}

export function ContentCard({
  title,
  description,
  children,
  className = "",
  image,
  imageAlt = "",
}: ContentCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-white border border-[var(--border-color)] hover:shadow-lg transition-shadow ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden bg-[var(--cream)]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3
          className="mb-2"
          style={{
            fontSize: "var(--text-h3)",
            lineHeight: "var(--text-h3-line)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--text-body-line)",
              color: "var(--text-muted)",
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
