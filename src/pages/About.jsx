import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, BookOpen, Rocket, Heart } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CtaPanel from "../components/CtaPanel";

// ── How We Work ────────────────────────────────────────────────────────────
const APPROACH = [
  {
    icon: Hammer,
    title: "Build in phases",
    body: "We break every project into deliberate phases..... plan, build, review, ship. No cowboy deploys, no all-in-one mega-PRs. Incremental progress keeps us sane and our codebases readable.",
  },
  {
    icon: BookOpen,
    title: "Document everything",
    body: "If it isn't written down, it didn't happen. We keep notes, write READMEs, and document decisions as we go, so future-us (and anyone who joins later) isn't left guessing.",
  },
  {
    icon: Rocket,
    title: "Ship real products",
    body: "Demos stay in the drawer. We build things meant to be used, live URLs, real users, actual feedback. The discomfort of shipping is the best teacher we've found.",
  },
  {
    icon: Heart,
    title: "Learn as we go",
    body: "None of us had all the answers when we started. We still don't. We embrace not knowing, look things up shamelessly, and make sure every bug we fix teaches us something.",
  },
];

const PILLARS = [
  { value: "Learn", sub: "by building real projects" },
  { value: "Build", sub: "in the open, together" },
  { value: "Share", sub: "ideas and knowledge" },
  { value: "Grow",  sub: "as a community" },
];

export default function About() {
  useEffect(() => {
    document.title = "About RoreDevs | Student Software Development Community";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Meet RoreDevs, a student developer community building practical web applications and open-source projects in the open. Learn about our story, mission, and how we work.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/about");
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="About"
        title={
          <>
            About <span className="text-primary">RoreDevs</span>
          </>
        }
        lead="A community of student developers learning, building, and open-sourcing real projects together."
      />

      {/* ════════════════════════════════════════════════════════════════
          1. OUR STORY
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-white">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <p className="eyebrow">01 — Origin</p>
            <h2 className="mt-4 text-display-md text-ink">How it started</h2>

            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              <p>
                RoreDevs started with a simple frustration. We were students
                learning to code in classrooms, but most of what we built
                existed only to be graded, then forgotten. Theory without
                practice felt hollow.
              </p>
              <p>
                So a small group of us decided to stop waiting until we felt
                "ready" and start building instead. What began as a few students
                shipping side projects is growing into a community of developers
                who learn by building in the open.
              </p>
              <p>
                Our early projects came straight from problems we lived.{" "}
                <strong className="font-semibold text-ink">Seemul</strong> grew
                out of wanting a better way to learn from peers, and{" "}
                <strong className="font-semibold text-ink">Acadex</strong> became
                the academic toolkit we wished existed when deadlines piled up.
              </p>
              <p>
                None of them shipped perfectly. Some are still under construction.
                That's the point — we're learning as we build.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <div className="min-w-0 lg:col-span-5">
            <figure className="rounded-xl bg-primary p-8 md:p-10 lg:sticky lg:top-24">
              <span
                aria-hidden="true"
                className="block select-none font-mono text-4xl leading-none text-primary-300"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 text-lg font-medium leading-relaxed text-white md:text-xl">
                We didn't know what we were doing. We built it anyway. That's
                still our strategy.
              </blockquote>
              <figcaption className="mt-6 border-t border-white/20 pt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-primary-200">
                RoreDevs
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. OUR MISSION
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-bone">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">02 — Mission</p>
            <h2 className="mt-4 text-display-md text-ink">Our mission</h2>
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-ink-secondary md:text-lg">
              <p>
                RoreDevs is a community for student developers. We exist to close
                the gap between learning and doing: we learn by building real
                projects, we build in the open, and we share what we learn so we
                grow together.
              </p>
              <p>
                We don't pretend to have it all figured out. We document our
                process, contribute to open source, and support each other
                through the messy parts of learning to ship real software.
              </p>
            </div>
          </div>

          {/* Pillars — a single banded row rather than four more cards */}
          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ value, sub }, index) => (
              <div key={value} className="bg-surface-bone p-6">
                <dt className="font-mono text-[11px] text-primary">
                  0{index + 1}
                </dt>
                <dd className="mt-3">
                  <span className="block text-lg font-semibold text-ink">
                    {value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-ink-muted">
                    {sub}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. HOW WE WORK
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-4">
            <p className="eyebrow">03 — Practice</p>
            <h2 className="mt-4 text-display-md text-ink">How we work</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-secondary">
              We're students, not a corporation. We work in the open, keep our
              projects collaborative, and learn as we go — here's what keeps us
              moving.
            </p>
          </div>

          <ol className="min-w-0 lg:col-span-8">
            {APPROACH.map(({ icon: Icon, title, body }, index) => (
              <li
                key={title}
                className="grid grid-cols-1 gap-4 border-t border-border py-7 first:border-t-0 first:pt-0 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <div className="flex items-center gap-3 sm:w-28 sm:flex-col sm:items-start sm:gap-2">
                  <span className="font-mono text-[11px] text-primary">
                    0{index + 1}
                  </span>
                  <Icon size={18} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaPanel
        surface="bone"
        eyebrow="Collaborate"
        title="Want to support or collaborate?"
        description="If you want to support the community, collaborate on a project, or just follow along, reach out."
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
