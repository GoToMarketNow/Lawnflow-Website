interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

export function Pill({ children, variant = "default", className = "" }: PillProps) {
  const variants = {
    default: "bg-[var(--cream)] text-[var(--text-primary)]",
    primary: "bg-[var(--primary-green)] text-white",
    secondary: "bg-[var(--accent-blue)] text-white",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

interface IconTextProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function IconText({ icon, text, className = "" }: IconTextProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex-shrink-0 text-[var(--primary-green)]">{icon}</div>
      <span
        style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--text-body-line)",
          color: "var(--text-primary)",
        }}
      >
        {text}
      </span>
    </div>
  );
}
