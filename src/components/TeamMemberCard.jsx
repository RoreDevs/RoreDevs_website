import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const PLATFORM_ICONS = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
};

const PLATFORM_ORDER = ["Facebook", "Instagram", "Twitter", "Linkedin", "Github"];

export default function TeamMemberCard({ name, image, role, bio, socials }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-72 w-full max-w-xs mx-auto shadow-lg border border-gray-100 cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Overlay with Information */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-zinc-950/90 via-zinc-900/60 to-transparent p-6 text-zinc-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-xl font-bold text-white tracking-wide">{name}</h3>
        <p className="text-sm font-medium text-slate-300/90">{role}</p>
        <p className="mt-2 text-xs italic text-slate-400 leading-relaxed">&ldquo;{bio}&rdquo;</p>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-4 mt-2 border-t border-white/20">
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
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/30 transition-colors"
                aria-label={platform}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
