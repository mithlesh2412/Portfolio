import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    label: 'Frontend',
    color: 'text-violet-400',
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
  },
  {
    label: 'Backend',
    color: 'text-cyan-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    label: 'Tools & Others',
    color: 'text-emerald-400',
    skills: ['Git & GitHub', 'VS Code', 'Figma', 'Vercel', 'Postman', 'Linux'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-display text-accent text-xs tracking-[0.25em] mb-3">02. SKILLS</p>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
            <div className="section-line" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map(({ label, color, skills }, gi) => (
              <div
                key={label}
                className="p-6 bg-bg border border-border rounded-xl"
                style={{
                  transition: `opacity 0.6s ease ${gi * 150}ms, transform 0.6s ease ${gi * 150}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(20px)',
                }}
              >
                <h3 className={`font-display text-sm tracking-[0.15em] mb-5 ${color}`}>
                  / {label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="skill-chip text-xs font-display px-3 py-1.5 border border-border text-muted rounded cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently learning */}
          <div className="mt-10 p-5 border border-dashed border-border rounded-xl">
            <p className="font-display text-xs text-muted tracking-widest mb-3">CURRENTLY EXPLORING</p>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'Docker', 'GraphQL', 'AWS'].map(s => (
                <span key={s} className="text-xs font-display px-3 py-1.5 border border-accent/30 text-accent/70 rounded bg-accent/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
