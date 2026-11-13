/**
 * PageHeader
 *
 * Shared opening block for inner pages. Left-aligned so the site reads as an
 * editorial publication rather than five variations of the same centred hero.
 */
export default function PageHeader({ eyebrow, title, lead, children }) {
  return (
    <section className="border-b border-border bg-surface-bone">
      <div className="container-page pb-12 pt-12 md:pb-16 md:pt-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 text-display-xl text-ink">{title}</h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-secondary">
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
