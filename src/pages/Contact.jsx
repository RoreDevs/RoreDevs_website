import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import logo from '../assets/ROREDEVS.png';

// ── Animation helpers (mirrors Home.jsx) ────────────────────────────────────
const stagger = (delayChildren = 0.05, staggerChildren = 0.12) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut", delay } },
});

// ── Contact channels ─────────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@novutech.tech",
    href: "mailto:novutech.hq@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RoreDevs",
    href: "https://github.com/Rosieeee344/NovuTech_website",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@roredevs",
    href: "https://x.com/NovuTechHQ",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "RoreDevs",
    href: "https://www.linkedin.com/company/novutech-hq",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

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
            <motion.h1
              variants={fadeUp()}
              className="text-display-xl md:text-display-2xl text-ink max-w-2xl"
            >
              Support, collaborate,{" "}
              <span className="text-primary">or work with us.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp()}
              className="text-lg md:text-xl text-ink-secondary max-w-xl leading-relaxed"
            >
              RoreDevs is a community of students building in the open. If you
              want to support what we're doing, collaborate on a project,
              contribute resources, or just follow along, drop us a line.
            </motion.p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </section>

      {/* ════════════════════════════════════════════════════════════════
          2. FORM + CHANNELS
      ════════════════════════════════════════════════════════════════ */}
      <section className="section bg-surface-soft">
        <div className="container-page">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
          >
            {/* ── Form card ──────────────────────────────────────────── */}
            <motion.div variants={fadeUp()} className="lg:col-span-3 card p-6 md:p-8">
              {status === "sent" ? (
                <div className="flex flex-col items-center text-center gap-4 py-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CheckCircle2 size={24} />
                  </span>
                  <h3 className="text-display-sm text-ink">Message sent!</h3>
                  <p className="text-ink-secondary max-w-sm">
                    Thanks for reaching out, we'll get back to you as soon as
                    we surface from our latest debugging session.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost text-sm px-5 py-2 mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageSquare size={18} className="text-primary" />
                    <h2 className="text-display-sm text-ink">Send us a message</h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-ink-secondary">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        className="w-full rounded-xl border border-border bg-surface-white px-4 py-2.5
                                   text-ink placeholder:text-ink-muted outline-none transition
                                   focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-ink-secondary">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ada@example.com"
                        className="w-full rounded-xl border border-border bg-surface-white px-4 py-2.5
                                   text-ink placeholder:text-ink-muted outline-none transition
                                   focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-ink-secondary">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Let's build something together"
                      className="w-full rounded-xl border border-border bg-surface-white px-4 py-2.5
                                 text-ink placeholder:text-ink-muted outline-none transition
                                 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-ink-secondary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      className="w-full resize-none rounded-xl border border-border bg-surface-white px-4 py-2.5
                                 text-ink placeholder:text-ink-muted outline-none transition
                                 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Mind trying again?
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary text-base px-6 py-3 self-start disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* ── Channels ───────────────────────────────────────────── */}
            <motion.div variants={fadeUp(0.1)} className="lg:col-span-2 flex flex-col gap-5">
              <div className="card flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-ink-secondary uppercase tracking-wide">
                  Other ways to reach us
                </h3>

                <div className="flex flex-col gap-1">
                  {CHANNELS.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 -mx-3 transition
                                 hover:bg-surface-soft"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon size={16} />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-xs text-ink-muted">{label}</span>
                        <span className="text-sm font-medium text-ink">{value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card bg-primary/5 border border-primary/10">
                <p className="text-sm text-ink-secondary leading-relaxed">
                  <strong className="text-ink font-semibold">Heads up:</strong>{" "}
                  we're a small student team, so replies might take a day or
                  two. We promise it's not because we're stuck in a merge
                  conflict. (It's probably because we're stuck in a merge
                  conflict.)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}