import { CheckCircle2, Clock } from "lucide-react";

/**
 * StatusPill — one implementation for every project state.
 * Colours are verified ≥4.5:1 on their own tint.
 */
export default function StatusPill({ tone = "neutral", children }) {
  const Icon = tone === "live" ? CheckCircle2 : tone === "dev" ? Clock : null;

  const styles = {
    live:    "badge-live",
    dev:     "badge-dev",
    neutral: "badge-neutral",
  }[tone];

  return (
    <span className={styles}>
      {Icon && <Icon size={12} aria-hidden="true" />}
      {children}
    </span>
  );
}
