import { motion } from "framer-motion";
import TeamMemberCard from "../components/TeamMemberCard";
import ericaImg from "../assets/Erica.jpg";
import obedImg from "../assets/Obed.png";
import raymondImg from "../assets/Raymond.jpg";
import rosemaryImg from "../assets/Rosemary.jpeg";

// ── Animation helpers ──────────────────────────────────────────────────────
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay } },
});

// ── Team data ──────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    image: rosemaryImg,
    name: "Rosemary Boahemaa Dwamena",
    initials: "RBD",
    role: "Team Lead & Developer",
    bio: "99 little bugs in the code...",
    socials: {
      Facebook: "https://www.facebook.com/share/18xA92qCCi/?mibextid=wwXIfr",
      Instagram: "https://www.instagram.com/_rosemaryboahemaa",
      Twitter: "https://x.com/dwamen1dwamena?s=11",
      Linkedin: "https://www.linkedin.com/in/rosemaryboahemaa",
      Github: "https://github.com/Rosieeee344",
    },
  },
  {
    image: ericaImg,
    name: "Erica Dansowaa",
    initials: "ED",
    role: "Frontend Developer & Documentation Lead",
    bio: "My code works. Don't ask why....",
    socials: {
      Facebook: "https://www.facebook.com/share/1J2amxJsQE/",
      Instagram: "https://www.instagram.com/doitlikericka",
      Twitter: "https://x.com/Dansowaa28",
      Linkedin: "https://www.linkedin.com/in/erica-dansowaa-007047400",
      Github: "https://github.com/dansowaaerica28",
    },
  },
  {
    image: raymondImg,
    name: "Raymond Selorm Tormeti",
    initials: "RST",
    role: "Design Lead & Developer",
    bio: "error 404 : bio not found",
    socials: {
      Facebook: "https://www.facebook.com/share/1DNTLhBzZ2/",
      Instagram: "https://www.instagram.com/raymond_notch",
      Twitter: "https://x.com/raymomd06",
      Linkedin: "https://www.linkedin.com/in/raymond-tormeti",
      Github: "https://github.com/raymondnotch-sketch",
    },
  },
  {
    image: obedImg,
    name: "Obed Yakpa",
    initials: "OY",
    role: "Backend Lead & Developer",
    bio: "I just build.",
    socials: {
      Facebook: "https://www.facebook.com/share/194HBTYmC4/",
      Instagram: "https://www.instagram.com/mr.yakpa90",
      Twitter: "https://x.com/mr_yakpa90",
      Linkedin: "https://www.linkedin.com/in/obed-yakpa-20aa39374",
      Github: "https://github.com/obedyakpa0-dev",
    },
  },
];

const CONTRIBUTORS = [];

const MAINTAINERS = [];

// ── Component ──────────────────────────────────────────────────────────────
export default function Team() {
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
            <motion.div variants={fadeUp()}>
              <span className="badge bg-primary/10 text-primary border border-primary/20">
                Our people
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp()}
              className="text-display-xl md:text-display-2xl text-ink max-w-2xl"
            >
              The People Behind RoreDevs
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary max-w-xl leading-relaxed"
            >
              Meet the people building, organizing, and contributing to the
              RoreDevs community.
            </motion.p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. FOUNDERS
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
              <span className="badge bg-primary/10 text-primary border border-primary/20 mb-4">
                Founders
              </span>
              <h2 className="text-display-md text-ink mt-3">Founders</h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                The people who started RoreDevs and keep it moving.
              </p>
            </motion.div>

            {/* Founders grid */}
            <motion.div
              variants={stagger(0, 0.08)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {FOUNDERS.map((member) => (
                <motion.div key={member.name} variants={fadeUp()}>
                  <TeamMemberCard {...member} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. CONTRIBUTORS
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
            <motion.div variants={fadeUp()} className="max-w-xl">
              <span className="badge bg-primary/10 text-primary border border-primary/20 mb-4">
                Contributors
              </span>
              <h2 className="text-display-md text-ink mt-3">Contributors</h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                People who contribute to RoreDevs projects and the community.
              </p>
            </motion.div>

            {CONTRIBUTORS.length > 0 ? (
              <motion.div
                variants={stagger(0, 0.08)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {CONTRIBUTORS.map((member) => (
                  <motion.div key={member.name} variants={fadeUp()}>
                    <TeamMemberCard {...member} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div variants={fadeUp()}>
                <div className="card border-dashed flex items-center justify-center py-12 text-center">
                  <p className="text-sm text-ink-muted">
                    No contributors yet — they'll appear here as people start
                    contributing to RoreDevs projects.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          4. MAINTAINERS & PROJECT LEADS
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
            <motion.div variants={fadeUp()} className="max-w-xl">
              <span className="badge bg-primary/10 text-primary border border-primary/20 mb-4">
                Maintainers & Project Leads
              </span>
              <h2 className="text-display-md text-ink mt-3">
                Maintainers & Project Leads
              </h2>
              <p className="mt-3 text-base text-ink-secondary leading-relaxed">
                People who maintain RoreDevs projects or lead specific projects.
              </p>
            </motion.div>

            {MAINTAINERS.length > 0 ? (
              <motion.div
                variants={stagger(0, 0.08)}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {MAINTAINERS.map((member) => (
                  <motion.div key={member.name} variants={fadeUp()}>
                    <TeamMemberCard {...member} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div variants={fadeUp()}>
                <div className="card border-dashed flex items-center justify-center py-12 text-center">
                  <p className="text-sm text-ink-muted">
                    No maintainers or project leads yet — they'll appear here as
                    projects grow.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
