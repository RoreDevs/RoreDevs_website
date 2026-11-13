import { useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Github, Plus, X } from "lucide-react";

const PLATFORM_ICONS = { Facebook, Instagram, Twitter, Linkedin, Github };
const PLATFORM_ORDER = ["Facebook", "Instagram", "Twitter", "Linkedin", "Github"];

/**
 * TeamMemberCard
 *
 * Preserves the existing reveal interaction:
 *   • desktop — hovering the portrait turns the card over
 *   • touch   — tapping the portrait turns the card over
 *   • keyboard — the corner control toggles the card
 *
 * The portrait and the person's name/role stay visible while the card is at
 * rest, so identity never depends on discovering the reveal.
 */
export default function TeamMemberCard({
  name,
  role,
  bio,
  socials,
  image,
  image2x,
  imageWidth,
  imageHeight,
}) {
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const isOpen = hovered || toggled;

  const handlePointerEnter = (e) => {
    if (e.pointerType === "mouse") setHovered(true);
  };
  const handlePointerLeave = (e) => {
    if (e.pointerType === "mouse") setHovered(false);
  };
  // Tapping anywhere on the card flips it on touch; links and the corner
  // control handle their own events.
  const handleClick = (e) => {
    if (e.target.closest("a, button")) return;
    setToggled((v) => !v);
  };

  return (
    <article
      className="relative mx-auto w-full max-w-[280px] cursor-pointer"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      <div className="[perspective:1200px]">
        <div
          className={[
            "relative aspect-[4/5] w-full transition-transform duration-500 ease-editorial [transform-style:preserve-3d]",
            isOpen ? "[transform:rotateY(180deg)]" : "",
          ].join(" ")}
        >
          {/* ── Front: portrait + identity ──────────────────────────────── */}
          <div
            className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-surface-soft [backface-visibility:hidden]"
            aria-hidden={isOpen ? "true" : undefined}
          >
            <img
              src={image}
              srcSet={`${image} 480w, ${image2x} 800w`}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 80vw"
              width={imageWidth}
              height={imageHeight}
              alt={`${name} — ${role}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent px-4 pb-4 pt-16">
              <p className="text-sm font-semibold leading-snug text-white">{name}</p>
              <p className="mt-1 text-[11px] leading-snug text-white/75">{role}</p>
            </div>
          </div>

          {/* ── Back: biography + social links ──────────────────────────── */}
          <div
            className="absolute inset-0 flex flex-col overflow-y-auto rounded-xl border border-primary-800 bg-primary p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]"
            aria-hidden={!isOpen ? "true" : undefined}
          >
            <p className="pr-9 text-sm font-semibold leading-snug text-white">{name}</p>
            <p className="mt-1 pr-9 text-[11px] leading-snug text-primary-200">{role}</p>

            <p className="mt-3 text-xs leading-relaxed text-primary-100">
              &ldquo;{bio}&rdquo;
            </p>

            <div className="mt-auto flex flex-wrap items-center gap-1.5 border-t border-white/20 pt-4">
              {PLATFORM_ORDER.map((platform) => {
                const url = socials?.[platform];
                if (!url) return null;
                const Icon = PLATFORM_ICONS[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/25"
                    aria-label={`${name} on ${platform}`}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible, always-reachable control for keyboard and touch users */}
      <button
        type="button"
        onClick={() => setToggled((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? `Hide details for ${name}` : `Show details for ${name}`}
        className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-lg bg-ink/50 text-white backdrop-blur-sm transition-colors hover:bg-ink/75"
      >
        {isOpen ? <X size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
      </button>
    </article>
  );
}
