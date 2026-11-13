import { NavLink } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";
import mark from "../assets/roredevs-mark.png";

const NAV_LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/projects", label: "Projects" },
  { to: "/team",     label: "Team"     },
  { to: "/contact",  label: "Contact"  },
];

const SOCIALS = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/RoreDevs" },
  { icon: Twitter,  label: "Twitter",  href: "https://x.com/RoreDevsHQ" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/roredevs-hq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src={mark}
                alt=""
                aria-hidden="true"
                width="28"
                height="28"
                className="h-7 w-7 object-contain"
              />
              <span className="text-[15px] font-semibold text-ink">RoreDevs</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              A community of student developers learning, building, and
              open-sourcing together.
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              Building real projects in the open — one commit at a time.
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer" className="md:col-span-3 lg:col-span-4">
            <h2 className="eyebrow">Pages</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "inline-block py-0.5 text-sm transition-colors duration-150",
                        isActive
                          ? "font-medium text-primary"
                          : "text-ink-secondary hover:text-ink",
                      ].join(" ")
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:col-span-3">
            <h2 className="eyebrow">Connect</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-0.5 text-sm text-ink-secondary transition-colors duration-150 hover:text-ink"
                  >
                    <Icon size={14} className="shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-1.5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-muted">
            © {year} RoreDevs
          </p>
          <p className="text-xs text-ink-muted">
            Built by Rosie, Erica, Obed &amp; Raymond.
          </p>
        </div>
      </div>
    </footer>
  );
}
