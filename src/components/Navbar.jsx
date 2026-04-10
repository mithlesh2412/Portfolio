import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold gradient-text tracking-tight">
          MP.
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-body text-muted hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm font-display px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 rounded"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-muted hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" target="_blank" className="text-sm font-display text-accent">
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
