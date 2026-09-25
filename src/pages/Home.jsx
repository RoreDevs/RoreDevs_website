import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Github, BookOpen, Users } from "lucide-react";
import logo from '../assets/ROREDEVS.png';

// ── Animation helpers ──────────────────────────────────────────────────────
// Staggered parent container
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

// Individual child variant — fade + subtle upward slide
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay } },
});

// Hover lift for cards
const cardHover = {
  rest: { y: 0,  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)" },
  hover: { y: -4, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)" },
};

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
const PROJECTS = [
  {
    name: "Seemul Website",
    blurb: "The web version of Seemul, a peer-to-peer learning platform.",
  },
  {
    name: "Seemul Mobile App",
    blurb: "The mobile version of Seemul, built for iOS and Android.",
  },
  {
    name: "Acadex",
    blurb: "An academic management platform for attendance, slides, and assignments.",
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>
      {/* ════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-white">
        {/* Decorative background grain / gradient blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
                     rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container-page relative z-10 pt-24 pb-20 md:pt-32 md:pb-28 text-center">
          <motion.div
            variants={stagger(0.1, 0.14)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-7"
          >
            {/* Main heading */}
            <motion.h1
              variants={fadeUp()}
              className="text-display-xl md:text-display-2xl text-ink max-w-3xl"
            >
              Learning by building.{" "}
              <span className="text-primary">Shipping in the open.</span>{" "}
              Growing together.
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed"
            >
              RoreDevs is a community of student developers who learn by
              building, share ideas, and open-source real projects together.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp()}
              className="flex flex-col sm:flex-row items-center gap-3 mt-2"
            >
              <Link to="/projects" className="btn-primary text-base px-6 py-3">
                View Projects
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-ghost text-base px-6 py-3">
                About the Community
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom border fade */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. COMMUNITY VALUES
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center gap-12"
          >
            {/* Section header */}
            <motion.div variants={fadeUp()} className="text-center max-w-2xl">
              <h2 className="text-display-md text-ink">What we're about</h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                RoreDevs is a place for student developers to learn by building
                real projects, explore technology together, and contribute to
                open source.
              </p>
            </motion.div>

            {/* Values cards */}
            <motion.div
              variants={stagger(0, 0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
            >
              {VALUES.map(({ icon: Icon, title, body }) => (
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
          3. PROJECTS TEASER
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-white">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-10"
          >
            {/* Section header */}
            <motion.div variants={fadeUp()} className="max-w-xl">
              <h2 className="text-display-md text-ink mt-3">
                Real projects, built in public
              </h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                We work on real projects as a community. Here are a few of the
                things we're currently building.
              </p>
            </motion.div>

            {/* Project teaser cards */}
            <motion.div
              variants={stagger(0, 0.1)}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {PROJECTS.map(({ name, blurb }) => (
                <motion.div
                  key={name}
                  variants={fadeUp()}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    variants={cardHover}
                    className="card h-full flex flex-col gap-3 transition-shadow duration-200"
                  >
                    <h3 className="text-base font-semibold text-ink">{name}</h3>
                    <p className="text-sm text-ink-secondary leading-relaxed">{blurb}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp()}>
              <Link to="/projects" className="btn-ghost text-base px-7 py-3">
                View all projects
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. CLOSING CTA
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
            <motion.div
              variants={fadeUp()}
              aria-hidden="true"
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white text-xl font-bold select-none"
            >
              R
            </motion.div>

            <motion.h2 variants={fadeUp()} className="text-display-sm text-ink">
              Want to support what we're building?
            </motion.h2>

            <motion.p
              variants={fadeUp()}
              className="text-base text-ink-secondary leading-relaxed"
            >
              We're a community of students building in the open. If you want
              to collaborate, support us, or just follow along, we'd love to
              hear from you.
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
