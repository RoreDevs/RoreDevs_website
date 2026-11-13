import { useState, useEffect, useRef } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

// ── Contact channels — destinations unchanged ──────────────────────────────
const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@roredevs.tech",
    href: "mailto:roredevs.hq@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/RoreDevs",
    href: "https://github.com/Rosieeee344/RoreDevs_website",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@roredevs",
    href: "https://x.com/RoreDevsHQ",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "RoreDevs",
    href: "https://www.linkedin.com/company/roredevs-hq",
  },
];

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const successRef = useRef(null);

  useEffect(() => {
    document.title = "Contact RoreDevs | Work With Us or Support the Community";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Get in touch with RoreDevs. Whether you want to collaborate on a project, support the community, or just follow what we're building — reach out.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://roredevs.tech/contact");
  }, []);

  // Move focus to the confirmation so it is announced and reachable
  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

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

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Support, collaborate,{" "}
            <span className="text-primary">or work with us.</span>
          </>
        }
        lead="RoreDevs is a community of students building in the open. If you want to support what we're doing, collaborate on a project, contribute resources, or just follow along, drop us a line."
      />

      <section className="section bg-surface-white">
        <div className="container-page grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ── Form ──────────────────────────────────────────────────── */}
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-xl border border-border bg-surface-white p-6 sm:p-8">
              {status === "sent" ? (
                <div
                  ref={successRef}
                  tabIndex={-1}
                  role="status"
                  className="flex flex-col items-start gap-4 py-6 outline-none"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-success-light text-success">
                    <CheckCircle2 size={22} aria-hidden="true" />
                  </span>
                  <h2 className="text-display-sm text-ink">Message sent!</h2>
                  <p className="max-w-md text-base leading-relaxed text-ink-secondary">
                    Thanks for reaching out, we'll get back to you as soon as we
                    surface from our latest debugging session.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="btn-ghost mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare
                      size={18}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    <h2 className="text-display-sm text-ink">
                      Send us a message
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-ink-secondary"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ada Lovelace"
                        className="input-field"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-ink-secondary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="ada@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-ink-secondary"
                    >
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
                      className="input-field"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-ink-secondary"
                    >
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
                      className="input-field resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-danger/25 bg-danger-light px-4 py-3"
                    >
                      <AlertCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-danger"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-danger">
                        Something went wrong. Mind trying again?
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    aria-busy={status === "sending"}
                    className="btn-primary btn-lg self-start"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2
                          size={16}
                          className="animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={16} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── Channels ──────────────────────────────────────────────── */}
          <div className="flex min-w-0 flex-col gap-5 lg:col-span-5">
            <div className="rounded-xl border border-border bg-surface-white p-6">
              <h2 className="eyebrow">Other ways to reach us</h2>

              <ul className="mt-4 flex flex-col">
                {CHANNELS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-surface-soft"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                          {label}
                        </span>
                        <span className="truncate text-sm font-medium text-ink">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-primary/15 bg-primary-50 p-6">
              <p className="text-sm leading-relaxed text-ink-secondary">
                <strong className="font-semibold text-ink">Heads up:</strong>{" "}
                we're a small student team, so replies might take a day or two.
                We promise it's not because we're stuck in a merge conflict.
                (It's probably because we're stuck in a merge conflict.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
