import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, BookOpen, Rocket, Heart } from "lucide-react";
import logo from '../assets/ROREDEVS.png';

// ── Animation helpers (mirrors Home.jsx pattern) ───────────────────────────
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

const fadeUp = () => ({
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
});

const cardHover = {
  rest:  { y: 0,  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)" },
  hover: { y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)" },
};

// ── How We Work cards ──────────────────────────────────────────────────────
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

// ── Component ──────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div>

      {/* ════════════════════════════════════════════════════════════════
          1. PAGE HEADER
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-white">
        {/* Soft background blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2
                     w-[700px] h-[400px] rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container-page relative z-10 pt-20 pb-16 md:pt-28 md:pb-20">
          <motion.div
            variants={stagger(0.08, 0.13)}
            initial="hidden"
            animate="show"
            className="max-w-3xl flex flex-col gap-5"
          >
            <motion.h1
              variants={fadeUp()}
              className="text-display-lg md:text-display-xl text-ink"
            >
              About{" "}
              <span className="text-primary">RoreDevs</span>
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary leading-relaxed max-w-2xl"
            >
              A community of student developers learning, building, and
              open-sourcing real projects together.
            </motion.p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. OUR STORY
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Text */}
            <div className="flex flex-col gap-6">
              <motion.h2 variants={fadeUp()} className="text-display-md text-ink">
                How it started
              </motion.h2>

              <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
                RoreDevs started with a simple frustration. We were students
                learning to code in classrooms, but most of what we built
                existed only to be graded, then forgotten. Theory without
                practice felt hollow.
              </motion.p>

              <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
                So a small group of us decided to stop waiting until we felt
                "ready" and start building instead. What began as a few students
                shipping side projects is growing into a community of developers
                who learn by building in the open.
              </motion.p>

              <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
                Our early projects came straight from problems we lived.{" "}
                <strong className="text-ink font-semibold">Seemul</strong> grew
                out of wanting a better way to learn from peers, and{" "}
                <strong className="text-ink font-semibold">Acadex</strong> became
                the academic toolkit we wished existed when deadlines piled up.
              </motion.p>

              <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
                None of them shipped perfectly. Some are still under construction.
                That's the point — we're learning as we build.
              </motion.p>
            </div>

            {/* Pull-quote card */}
            <motion.div variants={fadeUp()}>
              <div className="card bg-primary text-white border-0 shadow-elevated flex flex-col gap-6 p-8 md:p-10">
                <span className="text-5xl font-bold text-white/20 leading-none select-none" aria-hidden="true">
                  "
                </span>
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed -mt-6">
                  We didn't know what we were doing.
                  We built it anyway. That's still our strategy.
                </blockquote>
                <p className="text-sm text-white/70 font-medium">
                 - RoreDevs
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. OUR MISSION
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-white">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center flex flex-col gap-7"
          >
            

            <motion.h2 variants={fadeUp()} className="text-display-md text-ink">
              Our mission
            </motion.h2>

            <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
              RoreDevs is a community for student developers. We exist to close
              the gap between learning and doing: we learn by building real
              projects, we build in the open, and we share what we learn so we
              grow together.
            </motion.p>

            <motion.p variants={fadeUp()} className="text-base md:text-lg text-ink-secondary leading-relaxed">
              We don't pretend to have it all figured out. We document our
              process, contribute to open source, and support each other through
              the messy parts of learning to ship real software.
            </motion.p>

            {/* Mission pillars */}
            <motion.div
              variants={stagger(0, 0.09)}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-left"
            >
              {[
                { value: "Learn",   sub: "by building real projects"  },
                { value: "Build",   sub: "in the open, together"      },
                { value: "Share",   sub: "ideas and knowledge"         },
                { value: "Grow",    sub: "as a community"              },
              ].map(({ value, sub }) => (
                <motion.div
                  key={value}
                  variants={fadeUp()}
                  className="card flex flex-col gap-1 p-4"
                >
                  <p className="text-base font-semibold text-primary">{value}</p>
                  <p className="text-xs text-ink-muted leading-snug">{sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. HOW WE WORK
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-12"
          >
            {/* Header */}
            <motion.div variants={fadeUp()} className="max-w-xl">
              <h2 className="text-display-md text-ink mt-3">How we work</h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                We're students, not a corporation. We work in the open, keep our
                projects collaborative, and learn as we go — here's what keeps us
                moving.
              </p>
            </motion.div>

            {/* Cards grid */}
            <motion.div
              variants={stagger(0, 0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {APPROACH.map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp()}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    variants={cardHover}
                    className="card h-full flex flex-col gap-4 transition-shadow duration-200"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon size={20} />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-ink">{title}</h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          5. CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
          >
            <motion.img
            src={logo}
            alt="RoreDevs logo"
            variants={fadeUp()}
            aria-hidden="true"
            className="h-12 w-12 rounded-2xl object-cover"
            />

            <motion.h2 variants={fadeUp()} className="text-display-sm text-ink">
              Want to support or collaborate?
            </motion.h2>

            <motion.p
              variants={fadeUp()}
              className="text-base text-ink-secondary leading-relaxed"
            >
              If you want to support the community, collaborate on a project, or
              just follow along, reach out.
            </motion.p>

            <motion.div variants={fadeUp()}>
              <Link to="/contact" className="btn-primary text-base px-7 py-3">
                Work with us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
