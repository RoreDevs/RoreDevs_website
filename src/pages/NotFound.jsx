import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found | RoreDevs";
  }, []);

  return (
    <section className="bg-surface-bone">
      <div className="container-page flex min-h-[60vh] flex-col justify-center py-20">
        <p className="eyebrow">404 — Not found</p>
        <h1 className="mt-4 max-w-2xl text-display-xl text-ink">
          This page doesn't exist.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-secondary">
          The link may be out of date, or the page may have moved.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-primary btn-lg">
            Back to home
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link to="/projects" className="btn-ghost btn-lg">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
