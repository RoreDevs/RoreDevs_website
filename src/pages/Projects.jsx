import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  GraduationCap,
  Users,
  Layers,
  Shield,
  BookOpen,
  FileText,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import logo from '../assets/ROREDEVS.png';

// ── Animation helpers (mirrors Home.jsx pattern) ───────────────────────────
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay },
  },
});

const cardHover = {
  rest: {
    y: 0,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
  },
  hover: {
    y: -4,
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.06)",
  },
};

// ── Project data ───────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name: "Acadex",
    status: "Live",
    statusColor: "success",
    description:
      "Acadex is an academic management platform that streamlines classroom administration. Students can securely mark attendance using session codes, while lecturers and administrators can upload lecture slides, post assignments, and manage attendance records efficiently.",
    features: [
      { icon: CheckCircle2, text: "Digital attendance system" },
      { icon: Shield, text: "Secure session code generation" },
      { icon: Users, text: "Student attendance tracking" },
      { icon: BookOpen, text: "Student dashboard" },
      { icon: Layers, text: "Admin dashboard" },
      { icon: FileText, text: "Upload lecture slides" },
      { icon: GraduationCap, text: "Upload assignments" },
    ],
    liveUrl: "https://acadex-ktu.vercel.app/",
    featured: true,
  },
  {
    name: "Seemul Website",
    status: "In Development",
    statusColor: "warning",
    description:
      "Seemul Website is the web version of Seemul, a peer-to-peer learning platform that connects people who want to learn with those willing to teach. It aims to foster collaboration, mentorship, and knowledge sharing within communities.",
    features: [],
    liveUrl: null,
    featured: false,
  },
  {
    name: "Seemul Mobile App",
    status: "In Development",
    statusColor: "warning",
    description:
      "Seemul Mobile App is the mobile version of Seemul, bringing the same peer-to-peer learning experience to iOS and Android. It is part of the same Seemul ecosystem as the website, not a separate product.",
    features: [],
    liveUrl: null,
    featured: false,
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function Projects() {
  useEffect(() => {
    document.title = "Projects | RoreDevs — Acadex, Seemul & More";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Explore RoreDevs projects including Acadex, a live academic management system, and Seemul, a peer-to-peer learning platform currently in development.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/projects");
  }, []);

  return (
    <div>
      {/* ════════════════════════════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-surface-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
                     rounded-full bg-primary/5 blur-3xl"
        />

        <div className="container-page relative z-10 pt-24 pb-16 md:pt-32 md:pb-20 text-center">
          <motion.div
            variants={stagger(0.1, 0.14)}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-6"
          >

            <motion.h1
              variants={fadeUp()}
              className="text-display-xl md:text-display-2xl text-ink max-w-2xl"
            >
              Projects
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary max-w-xl leading-relaxed"
            >
              Solutions we've built and are currently developing to solve
              real-world problems. From academic tools to peer learning
              platforms, here's what we're working on.
            </motion.p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. FEATURED PROJECT — AC ADEX
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
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
                {PROJECTS[0].name}
              </h2>
            </motion.div>

            {/* Featured card */}
            <motion.div
              variants={fadeUp()}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.div
                variants={cardHover}
                className="card bg-primary text-white border-0 shadow-elevated p-8 md:p-10 flex flex-col gap-8 transition-shadow duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-success-light text-success border-0">
                    <CheckCircle2 size={14} />
                    Live
                  </span>
                </div>

                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-3xl">
                  {PROJECTS[0].description}
                </p>

                {/* Key Features */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wide">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROJECTS[0].features.map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                          <Icon size={16} />
                        </span>
                        <span className="text-sm font-medium text-white">
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {PROJECTS[0].liveUrl && (
                  <div>
                    <a
                      href={PROJECTS[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-primary font-medium
                                 px-6 py-3 rounded-xl shadow-soft
                                 hover:bg-white/90 active:scale-95
                                 transition-all duration-150 text-sm"
                    >
                      View Live
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. SEEMUL (Website + Mobile App)
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
              <h2 className="text-display-md text-ink mt-3">Seemul</h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                Seemul is a peer-to-peer learning platform we're building as one
                ecosystem, shipping in two forms: a website for the web and a
                mobile app for iOS and Android.
              </p>
            </motion.div>

            {/* Project cards */}
            <div className="flex flex-col gap-6">
              {PROJECTS.slice(1).map((project) => (
                <motion.div
                  key={project.name}
                  variants={fadeUp()}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    variants={cardHover}
                    className="card flex flex-col gap-6 transition-shadow duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <h3 className="text-lg font-semibold text-ink">
                        {project.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-warning-light text-warning border-0">
                        <Clock size={14} />
                        In Development
                      </span>
                    </div>

                    <p className="text-base md:text-lg text-ink-secondary leading-relaxed max-w-3xl">
                      {project.description}
                    </p>

                    {/* Coming Soon indicator */}
                    <div className="flex items-center gap-2 text-ink-muted">
                      <Sparkles size={16} />
                      <span className="text-sm font-medium">Coming Soon</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. FUTURE PROJECTS
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
              More on the way
            </motion.h2>

            <motion.p
              variants={fadeUp()}
              className="text-base text-ink-secondary leading-relaxed"
            >
              More innovative solutions are currently in development. Stay
              tuned for upcoming projects.
            </motion.p>

            <motion.div variants={fadeUp()}>
              <a
                href="https://github.com/Rosieeee344/RoreDevs_website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-base px-7 py-3"
              >
                Follow our progress
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
