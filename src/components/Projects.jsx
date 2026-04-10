import { useEffect, useRef, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'DevBlog Platform',
    desc: 'A full-stack blogging platform for developers with Markdown support, authentication, and syntax highlighting.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/devblog',
    live: 'https://devblog.vercel.app',
    featured: true,
    number: '01',
  },
  {
    title: 'Task Manager App',
    desc: 'A Kanban-style task management tool with drag-and-drop, labels, and real-time collaboration.',
    tags: ['React', 'Tailwind', 'Firebase'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://tasks.vercel.app',
    featured: true,
    number: '02',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app using OpenWeather API with location search, 5-day forecast, and animated icons.',
    tags: ['JavaScript', 'API', 'CSS3'],
    github: 'https://github.com/yourusername/weather',
    live: 'https://weather.vercel.app',
    featured: false,
    number: '03',
  },
  {
    title: 'Portfolio Website',
    desc: 'This very portfolio — built with React, Tailwind CSS, and Framer Motion. Dark mode, smooth animations.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/yourusername/portfolio',
    live: '#',
    featured: false,
    number: '04',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="font-display text-accent text-xs tracking-[0.25em] mb-3">03. PROJECTS</p>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Things I've Built</h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ title, desc, tags, github, live, featured, number }, i) => (
            <div
              key={title}
              className={`card-hover relative p-6 bg-surface border rounded-xl flex flex-col gap-4 ${featured ? 'border-accent/30' : 'border-border'}`}
              style={{
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
              }}
            >
              {featured && (
                <span className="absolute top-4 right-4 text-[10px] font-display tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
                  FEATURED
                </span>
              )}

              <div className="flex items-start justify-between gap-2">
                <span className="font-display text-4xl font-bold text-border select-none">{number}</span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map(tag => (
                  <span key={tag} className="text-[11px] font-display text-accent-2/80 bg-accent-2/5 border border-accent-2/20 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors font-display"
                >
                  <Github size={14} />
                  Code
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors font-display"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-sm text-muted hover:text-white border border-border hover:border-accent/50 px-6 py-3 rounded transition-all duration-200"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
