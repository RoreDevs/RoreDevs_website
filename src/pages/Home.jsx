import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Github, BookOpen, Users, ExternalLink } from "lucide-react";
import StatusPill from "../components/StatusPill";
import CtaPanel from "../components/CtaPanel";

// ── Community values ───────────────────────────────────────────────────────
const VALUES = [
  {
    icon: Hammer,
    title: "Learn by building",
    body: "We learn by shipping real projects, not just watching tutorials. Every feature we build is a lesson.",
  },
  {
    icon: Github,
    title: "Build in the open",
    body: "Our projects are open source. Anyone can read the code, use it, or contribute.",
  },
  {
    icon: BookOpen,
    title: "Share what we know",
    body: "We document our process and share ideas, so others can learn alongside us.",
  },
  {
    icon: Users,
    title: "Grow together",
    body: "We collaborate, review each other's work, and level up as a community.",
  },
];

// ── Project teaser data ────────────────────────────────────────────────────
// Seemul Website is the only collaborative RoreDevs project.
const PROJECTS = [
  {
    name: "Seemul Website",
    kind: "Web",
    blurb: "The web version of Seemul, a peer-to-peer learning platform.",
    status: "Live",
    tone: "live",
    liveUrl: "https://seemul-website.vercel.app/",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "RoreDevs | Student Developers Building in the Open";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "RoreDevs is a community of student developers who learn by building, share ideas, and open-source real projects together. Explore the Seemul Website, our live peer-to-peer learning platform.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/");
  }, []);

  return (
    <div>
      {/* ════════════════════════════════════════════════════════════════
          1. HERO — asymmetric: statement left, current work right
      ════════════════════════════════════════════════════════════════ */}
      <section className="border-b border-border bg-surface-bone">
        <div className="container-page grid grid-cols-1 gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-14 lg:pb-24 lg:pt-20">
          {/* Statement */}
          <div className="min-w-0 lg:col-span-7">
            <p className="eyebrow flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Student developers · Open source
            </p>

            <h1 className="mt-6 text-display-2xl text-ink">
              Learning by building.{" "}
              <span className="text-primary">Shipping in the open.</span>{" "}
              Growing together.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary">
              RoreDevs is a community of student developers who learn by
              building, share ideas, and open-source real projects together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/projects" className="btn-primary btn-lg">
                View Projects
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn-ghost btn-lg">
                About the Community
              </Link>
            </div>
          </div>

          {/* Current work index — evidence rather than decoration */}
          <aside className="min-w-0 lg:col-span-5 lg:self-center">
            <div className="overflow-hidden rounded-xl border border-border bg-surface-white">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="eyebrow">Current work</span>
                <span className="font-mono text-[11px] text-ink-muted">
                  01 project
                </span>
              </div>

              <ul>
                {PROJECTS.map((project) => (
                  <li
                    key={project.name}
                    className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 last:border-0"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-ink">
                        {project.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] text-ink-muted">
                        {project.kind}
                      </p>
                    </div>
                    <StatusPill tone={project.tone}>{project.status}</StatusPill>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border bg-surface-bone px-5 py-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-800"
                >
                  All projects
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. WHAT WE'RE ABOUT
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <p className="eyebrow">01 — The community</p>
            <h2 className="mt-4 text-display-md text-ink">What we're about</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary">
              RoreDevs is a place for student developers to learn by building
              real projects, explore technology together, and contribute to
              open source.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:col-span-8">
            {VALUES.map(({ icon: Icon, title, body }, index) => (
              <li key={title} className="bg-surface-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-primary">
                    0{index + 1}
                  </span>
                  <Icon size={16} className="text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. PROJECTS TEASER
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-bone">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <p className="eyebrow">02 — Selected work</p>
            <h2 className="mt-4 text-display-md text-ink">
              Real projects, built in public
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-secondary">
              We work on real projects as a community. Here's what we're
              building right now.
            </p>
            <Link
              to="/projects"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-800"
            >
              View all projects
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="min-w-0 lg:col-span-8">
            {PROJECTS.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-border bg-surface-white p-6 shadow-soft sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                    {project.kind}
                  </span>
                  <StatusPill tone={project.tone}>{project.status}</StatusPill>
                </div>

                <h3 className="mt-6 text-display-sm text-ink">{project.name}</h3>
                <p className="mt-3 max-w-xl flex-1 text-base leading-relaxed text-ink-secondary">
                  {project.blurb}
                </p>

                <div className="mt-7">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full active:bg-primary-900 sm:w-auto"
                  >
                    Visit Website
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. CLOSING CTA
      ════════════════════════════════════════════════════════════════ */}
      <CtaPanel
        eyebrow="Collaborate"
        title="Want to support what we're building?"
        description="We're a community of students building in the open. If you want to collaborate, support us, or just follow along, we'd love to hear from you."
        action={
          <Link to="/contact" className="btn-inverse btn-lg">
            Work with us
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        }
      />
    </div>
  );
}
