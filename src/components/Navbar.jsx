import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mark from "../assets/roredevs-mark.png";

const NAV_LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/projects", label: "Projects" },
  { to: "/team",     label: "Team"     },
  { to: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Border + shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation
  useEffect(() => setMenuOpen(false), [pathname]);

  // Drawer behaves like a modal: Escape closes it and the page behind is locked
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      {/* Dim layer sits outside the header: backdrop-filter on the header would
          otherwise become the containing block for a fixed child. */}
      {menuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-x-0 bottom-0 top-16 z-40 bg-ink/25 md:hidden"
        />
      )}

      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b bg-surface-white/90 backdrop-blur-md transition-colors duration-200",
          scrolled || menuOpen ? "border-border" : "border-transparent",
        ].join(" ")}
      >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        {/* Wordmark */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 rounded-md text-ink no-underline"
        >
          <img
            src={mark}
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            className="h-8 w-8 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            RoreDevs
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "relative py-1 text-sm transition-colors duration-150",
                    isActive
                      ? "font-medium text-primary after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-primary after:content-['']"
                      : "text-ink-secondary hover:text-ink",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile trigger — 44×44 touch target */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-surface-soft md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-surface-white shadow-card md:hidden"
          >
            <ul className="container-page flex flex-col py-3">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      [
                        "flex min-h-[44px] items-center rounded-lg px-3 text-sm transition-colors",
                        isActive
                          ? "bg-primary-50 font-medium text-primary"
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
    </>
  );
}
