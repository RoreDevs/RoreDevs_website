import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import TeamMemberCard from "../components/TeamMemberCard";

// Optimised derivatives of the original photographs (480w / 800w)
import rosemary480 from "../assets/team/rosemary-480.jpg";
import rosemary800 from "../assets/team/rosemary-800.jpg";
import erica480    from "../assets/team/erica-480.jpg";
import erica800    from "../assets/team/erica-800.jpg";
import raymond480  from "../assets/team/raymond-480.jpg";
import raymond800  from "../assets/team/raymond-800.jpg";
import obed480     from "../assets/team/obed-480.jpg";
import obed800     from "../assets/team/obed-800.jpg";
import kobby480    from "../assets/team/kobby-480.jpg";
import kobby800    from "../assets/team/kobby-800.jpg";

// ── Team data — content and destinations unchanged ─────────────────────────
const FOUNDERS = [
  {
    image: rosemary480,
    image2x: rosemary800,
    imageWidth: 480,
    imageHeight: 853,
    name: "Rosemary Boahemaa Dwamena",
    initials: "RBD",
    role: "Founder, Team Lead & Developer",
    bio: "A little bit of everything...",
    socials: {
      Facebook: "https://www.facebook.com/share/18xA92qCCi/?mibextid=wwXIfr",
      Instagram: "https://www.instagram.com/_rosemaryboahemaa",
      Twitter: "https://x.com/dwamen1dwamena?s=11",
      Linkedin: "https://www.linkedin.com/in/rosemaryboahemaa",
      Github: "https://github.com/Rosieeee344",
    },
  },
  {
    image: erica480,
    image2x: erica800,
    imageWidth: 480,
    imageHeight: 640,
    name: "Erica Dansowaa",
    initials: "ED",
    role: "Co-founder, Frontend Developer & Documentation Lead",
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
    image: raymond480,
    image2x: raymond800,
    imageWidth: 480,
    imageHeight: 720,
    name: "Raymond Selorm Tormeti",
    initials: "RST",
    role: "Co-founder, Design Lead & Developer",
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
    image: obed480,
    image2x: obed800,
    imageWidth: 480,
    imageHeight: 643,
    name: "Obed Yakpa",
    initials: "OY",
    role: "Co-founder, Backend Lead & Developer",
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

export default function Team() {
  useEffect(() => {
    document.title = "Team | RoreDevs — Meet the People Behind the Community";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Meet the founders, contributors, and maintainers building RoreDevs — a student developer community creating open-source projects in the open.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/team");
  }, []);

  return (
    <div>
      <PageHeader
        eyebrow="Team"
        title="The People Behind RoreDevs"
        lead="Meet the people building, organizing, and contributing to the RoreDevs community."
      />

      {/* ════════════════════════════════════════════════════════════════
          1. FOUNDERS
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-white">
        <div className="container-page">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">01 — Founders</p>
              <h2 className="mt-4 text-display-md text-ink">Founders</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary">
                The people who started RoreDevs and keep it moving.
              </p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
              Tap or hover a portrait
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDERS.map((member) => (
              <li key={member.name}>
                <TeamMemberCard {...member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. CONTRIBUTORS
      ════════════════════════════════════════════════════════════════ */}
      <section className="section border-b border-border bg-surface-bone">
        <div className="container-page">
          <div className="max-w-xl">
            <p className="eyebrow">02 — Contributors</p>
            <h2 className="mt-4 text-display-md text-ink">Contributors</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-secondary">
              People who contribute to RoreDevs projects and the community.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CONTRIBUTORS.map((member) => (
              <li key={member.name}>
                <TeamMemberCard {...member} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          3. MAINTAINERS — only rendered once the roster is populated
      ════════════════════════════════════════════════════════════════ */}
      {MAINTAINERS.length > 0 && (
        <section className="section border-b border-border bg-surface-white">
          <div className="container-page">
            <div className="max-w-xl">
              <p className="eyebrow">03 — Maintainers</p>
              <h2 className="mt-4 text-display-md text-ink">
                Maintainers &amp; Project Leads
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary">
                People who maintain RoreDevs projects or lead specific projects.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {MAINTAINERS.map((member) => (
                <li key={member.name}>
                  <TeamMemberCard {...member} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
