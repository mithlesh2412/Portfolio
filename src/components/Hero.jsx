import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const roles = ['Web Developer', 'CSE Student', 'React Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-2/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Greeting */}
        <p
          className="font-display text-accent text-sm tracking-[0.2em] mb-4 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          &gt; Hello, World!
        </p>

        {/* Name */}
        <h1
          className="font-display text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-up leading-tight"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Mithlesh
          <br />
          <span className="gradient-text">Paswan</span>
        </h1>

        {/* Role typewriter */}
        <div
          className="font-display text-xl md:text-2xl text-muted mb-6 h-8 animate-fade-up flex items-center gap-1"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <span className="text-accent-2">//</span>
          <span className="ml-2">{displayed}</span>
          <span className="animate-blink text-accent">|</span>
        </div>

        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-2 blur-md opacity-40" />
          <img
            src="/profile.jpg"
            alt="Mithlesh Paswan"
            className="relative w-32 h-32 rounded-full object-cover object-top border-2 border-accent/40"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-muted text-lg max-w-xl mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          I build fast, clean, and user-focused web experiences. Currently a CSE
          student turning ideas into code.
        </p>

        {/* CTA */}
        <div
          className="flex flex-wrap items-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:bg-violet-600 text-white font-display text-sm tracking-wide rounded transition-all duration-200 animate-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border hover:border-accent text-muted hover:text-white font-display text-sm tracking-wide rounded transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex items-center gap-6 mt-10 animate-fade-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          {[
            {
              icon: Github,
              href: "https://github.com/mithlesh2412",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/mithlesh-paswan-4aa79630a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
              label: "LinkedIn",
            },
            { icon: Mail, href: "mailto:explore5850@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
          <span className="text-border text-sm">—</span>
          <span className="text-muted text-xs font-display tracking-widest">
            FIND ME
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
