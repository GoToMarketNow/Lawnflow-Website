import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatar,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`p-6 rounded-lg bg-white border border-[var(--border-color)] ${className}`}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[var(--primary-green)] text-[var(--primary-green)]"
          />
        ))}
      </div>

      {/* Quote */}
      <p
        className="mb-6"
        style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--text-body-line)",
          color: "var(--text-primary)",
        }}
      >
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--primary-green)] font-semibold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p
            className="font-medium"
            style={{
              fontSize: "var(--text-body)",
              color: "var(--text-primary)",
            }}
          >
            {author}
          </p>
          <p
            style={{
              fontSize: "var(--text-small)",
              lineHeight: "var(--text-small-line)",
              color: "var(--text-muted)",
            }}
          >
            {role}
            {company && ` • ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
}
