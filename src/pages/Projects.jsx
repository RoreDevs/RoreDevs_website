import { useEffect } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatusPill from "../components/StatusPill";
import CtaPanel from "../components/CtaPanel";

// ── Project data ───────────────────────────────────────────────────────────
// Seemul Website is the only collaborative RoreDevs project we list.
const PROJECT = {
  name: "Seemul Website",
  kind: "Web",
  status: "Live",
  description:
    "Seemul Website is the web version of Seemul, a peer-to-peer learning platform that connects people who want to learn with those willing to teach. It aims to foster collaboration, mentorship, and knowledge sharing within communities.",
  liveUrl: "https://seemul-website.vercel.app/",
};

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | RoreDevs — Seemul Website";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Explore the Seemul Website, a live peer-to-peer learning platform built by the RoreDevs community.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/projects");
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title="Projects"
        lead="Solutions we've built and are continuing to improve. Here's what the RoreDevs community is working on."
      />

      {/* ════════════════════════════════════════════════════════════════
          1. SEEMUL WEBSITE
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-bone">
        <div className="container-page">
          <p className="eyebrow">01 — Live</p>

          <article className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface-white shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4 sm:px-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                {PROJECT.kind}
              </span>
              <StatusPill tone="live">{PROJECT.status}</StatusPill>
            </div>

            <div className="p-6 sm:p-8 md:p-10 lg:flex lg:items-end lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-2xl">
                <h2 className="text-display-md text-ink">{PROJECT.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary">
                  {PROJECT.description}
                </p>
              </div>

              <div className="mt-8 shrink-0 lg:mt-0">
                <a
                  href={PROJECT.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg w-full active:bg-primary-900 sm:w-auto"
                >
                  Visit Website
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. MORE ON THE WAY
      ════════════════════════════════════════════════════════════════ */}
      <CtaPanel
        eyebrow="Next"
        title="More on the way"
        description="More innovative solutions are currently in development. Stay tuned for upcoming projects."
        action={
          <a
            href="https://github.com/Rosieeee344/RoreDevs_website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inverse btn-lg"
          >
            Follow our progress
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        }
      />
    </div>
  );
}
