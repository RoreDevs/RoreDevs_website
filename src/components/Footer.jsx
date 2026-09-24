import { NavLink } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const NAV_LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/projects", label: "Projects" },
  { to: "/team",     label: "Team"     },
  { to: "/contact",  label: "Contact"  },
];

// Placeholder socials — swap hrefs for real URLs later
const SOCIALS = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/RoreDevs" },
  { icon: Twitter,  label: "Twitter",  href: "https://x.com/NovuTechHQ" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/novutech-hq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="container-page py-12 md:py-16">

        {/* ── Top row: brand + nav columns ───────────────────────── */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand block */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white text-xs font-bold select-none"
                aria-hidden="true"
              >
                R
              </span>
              <span className="text-base font-semibold text-ink">RoreDevs</span>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed">
              A community of student developers learning, building, and
              open-sourcing together.
            </p>
            <p className="text-xs text-ink-muted leading-relaxed">
              Building real projects in the open — one commit at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Pages
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "text-sm transition-colors duration-150",
                        isActive
                          ? "text-primary font-medium"
                          : "text-ink-secondary hover:text-ink",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
              Connect
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
                  >
                    <Icon size={14} className="shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom row: copyright ───────────────────────────────── */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {year} RoreDevs. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Built by Rosie, Erica, Obed &amp; Raymond.
          </p>
        </div>

      </div>
    </footer>
  );
}
