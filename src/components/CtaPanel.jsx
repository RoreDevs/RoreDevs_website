/**
 * CtaPanel — the closing call to action, shared by Home, About and Projects.
 * The dot grid is a deliberate technical texture, kept at very low contrast.
 */
export default function CtaPanel({ eyebrow, title, description, action, surface = "white" }) {
  return (
    <section
      className={`section ${surface === "bone" ? "bg-surface-bone" : "bg-surface-white"}`}
    >
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 sm:px-10 md:px-14 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]
                       [background-image:radial-gradient(#fff_1px,transparent_1px)]
                       [background-size:22px_22px]"
          />
          <div className="relative max-w-2xl">
            {eyebrow && (
              <p className="eyebrow text-primary-200">{eyebrow}</p>
            )}
            <h2 className="mt-3 text-display-md text-white">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-100">
              {description}
            </p>
            <div className="mt-8">{action}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
