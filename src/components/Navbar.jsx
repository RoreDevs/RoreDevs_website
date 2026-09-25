import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/ROREDEVS.png';

const NAV_LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/projects", label: "Projects" },
  { to: "/team",     label: "Team"     },
  { to: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  // Add shadow + border when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Shared active / inactive link styles
  const linkClass = ({ isActive }) =>
    [
      "relative text-sm font-medium transition-colors duration-150 py-1",
      isActive
        ? "text-primary"
        : "text-ink-secondary hover:text-ink",
    ].join(" ");

  // Underline indicator for active desktop link
  const activeIndicator =
    "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full " +
    "after:rounded-full after:bg-primary after:content-['']";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 bg-surface-white/90 backdrop-blur-md transition-all duration-200",
        scrolled ? "border-b border-border shadow-soft" : "border-b border-transparent",
      ].join(" ")}
    >
      <nav className="container-page flex h-16 items-center justify-between">

        {/* ── Wordmark ───────────────────────────────────────────── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-ink no-underline hover:opacity-80 transition-opacity"
        >
          {/* RoreDevs logo mark */}
          <img
            src={logo}
            alt="RoreDevs logo"
            className="h-7 w-7 rounded-lg object-cover"
          />
          <span className="text-base font-semibold tracking-tight text-ink">
            RoreDevs
          </span>
        </NavLink>

        {/* ── Desktop nav links ──────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [linkClass({ isActive }), isActive ? activeIndicator : ""].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger button ────────────────────────────── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-ink-secondary hover:bg-surface-soft transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-surface-white/95 backdrop-blur-md"
        >
          <ul className="container-page flex flex-col py-4 gap-1" role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150",
                      isActive
                        ? "bg-primary/8 text-primary"
                        : "text-ink-secondary hover:bg-surface-soft hover:text-ink",
                    ].join(" ")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
