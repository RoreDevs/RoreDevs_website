import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar         from "../components/Navbar";
import Footer         from "../components/Footer";
import AnimatedOutlet from "../components/AnimatedOutlet";

/**
 * MainLayout
 *
 * Shell used by every public route:
 *   ┌──────────────────────────────┐
 *   │  Navbar  (fixed, z-50)       │
 *   ├──────────────────────────────┤
 *   │  <page content>  (flex-grow) │
 *   ├──────────────────────────────┤
 *   │  Footer                      │
 *   └──────────────────────────────┘
 *
 * pt-16 offsets the fixed 64px Navbar so content is never hidden behind it.
 */
export default function MainLayout() {
  const { pathname } = useLocation();

  // Route changes should start at the top of the new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-surface-bone">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-surface-white focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-ink focus:shadow-elevated"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="flex flex-1 flex-col pt-16 outline-none">
        <AnimatedOutlet />
      </main>

      <Footer />
    </div>
  );
}
