import { useEffect, useRef, useState } from "react";
import { Code2, GraduationCap, Target } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "B.Tech CSE student at Guru Jambheshwar University. Currently in 2nd year, building strong fundamentals in core CS subjects and development.",
  },
  {
    icon: Code2,
    title: "What I Do",
    desc: "I build full-stack web applications using the MERN stack. Focused on clean UI, performance, and solving real-world problems.",
  },
  {
    icon: Target,
    title: "Goals",
    desc: "Actively looking for internship opportunities to gain real-world experience, improve skills, and grow as a software developer.",
  },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => {
      if (ref.current) obs.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6 max-w-6xl mx-auto">
      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="font-display text-accent text-xs tracking-[0.25em] mb-3">
          01. ABOUT
        </p>

        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Who I Am
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Profile Photo */}
            <div className="mb-8 flex justify-start">
              <div className="relative w-44 h-44">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-accent-2 blur-xl opacity-30" />
                {/* Accent border ring */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-accent to-accent-2 opacity-50" />
                <img
                  src="https://ibb.co/rGWrDwLn"
                  alt="Mithlesh Paswan"
                  className="relative w-44 h-44 rounded-2xl object-cover object-top"
                />
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I'm{" "}
              <span className="text-white font-medium">Mithlesh Paswan</span>, a
              Computer Science student at Guru Jambheshwar University and a
              passionate full-stack web developer focused on building
              real-world, user-friendly applications.
            </p>

            <p className="text-muted leading-relaxed mb-5">
              I have been actively working with the MERN stack (React, Node.js,
              MongoDB) and enjoy creating responsive, scalable web apps.
              Currently, I'm strengthening my core fundamentals by learning Data
              Structures & Algorithms alongside development.
            </p>

            <p className="text-muted leading-relaxed">
              My goal is to secure a solid internship where I can apply my
              skills, learn from experienced developers, and contribute to
              meaningful projects. I'm constantly improving through hands-on
              projects and continuous learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Open to Internships",
                "MERN Stack",
                "DSA Learner",
                "CSE Student",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display tracking-wider px-3 py-1 border border-border text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {cards.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="card-hover p-5 bg-surface border border-border rounded-lg flex gap-4 items-start"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mt-1 p-2 rounded bg-accent/10 text-accent shrink-0">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold text-white mb-1">
                    {title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
