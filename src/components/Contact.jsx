import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/meepbyrp", {
        // ← replace with your Formspree URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="font-display text-accent text-xs tracking-[0.25em] mb-3">
            04. CONTACT
          </p>
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Get In Touch
            </h2>
            <div className="section-line" />
          </div>
          <p className="text-muted mb-12 max-w-lg">
            I'm currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to connect — my inbox is always
            open.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-display text-xs text-muted tracking-wider mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-bg border border-border focus:border-accent/50 text-white text-sm px-4 py-3 rounded outline-none transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block font-display text-xs text-muted tracking-wider mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-bg border border-border focus:border-accent/50 text-white text-sm px-4 py-3 rounded outline-none transition-colors placeholder:text-muted/40"
                />
              </div>
              <div>
                <label className="block font-display text-xs text-muted tracking-wider mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="What's on your mind?"
                  className="w-full bg-bg border border-border focus:border-accent/50 text-white text-sm px-4 py-3 rounded outline-none transition-colors resize-none placeholder:text-muted/40"
                />
              </div>

              {/* Status messages */}
              {sent && (
                <p className="text-sm text-emerald-400 font-display tracking-wide">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-sm text-red-400 font-display tracking-wide">
                  ✗ Something went wrong. Try emailing me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-display text-sm tracking-wide py-3 rounded transition-all duration-200 active:scale-95"
              >
                <Send size={14} />
                {loading
                  ? "Sending..."
                  : sent
                    ? "Message Sent!"
                    : "Send Message"}
              </button>
            </form>

            {/* Links */}
            <div className="flex flex-col gap-6 justify-center">
              <p className="text-muted text-sm leading-relaxed">
                Prefer a direct line? Reach out through any of the channels
                below. I typically respond within 24 hours.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "explore5850@gmail.com",
                    href: "mailto:explore5850@gmail.com",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    value: "mithlesh2412",
                    href: "https://github.com/mithlesh2412",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Mithlesh Paswan",
                    href: "https://www.linkedin.com/in/mithlesh-paswan-4aa79630a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover flex items-center gap-4 p-4 bg-bg border border-border rounded-lg"
                  >
                    <div className="p-2 rounded bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-display text-xs text-muted tracking-wider">
                        {label}
                      </p>
                      <p className="text-white text-sm font-medium">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
