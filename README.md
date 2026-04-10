# Mithlesh Paswan — Portfolio

A modern, dark-themed developer portfolio built with **React + Vite + Tailwind CSS**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Structure

```
src/
  components/
    Navbar.jsx       → Fixed top nav with scroll detection
    Hero.jsx         → Typewriter effect, CTA, social links
    About.jsx        → Who you are + cards
    Skills.jsx       → Frontend / Backend / Tools chips
    Projects.jsx     → Project cards with GitHub + Live links
    Contact.jsx      → Contact form + social links
  App.jsx
  main.jsx
  index.css          → Global styles + Tailwind
```

## ✏️ Personalizing

### Change your info:
- **Hero.jsx** → Update name, tagline, social links
- **About.jsx** → Edit bio paragraphs and tags
- **Skills.jsx** → Update your tech stack
- **Projects.jsx** → Replace with your real projects (title, desc, tags, links)
- **Contact.jsx** → Add your real email / GitHub / LinkedIn URLs

### Connect the contact form:
Replace the `handleSubmit` in `Contact.jsx` with one of:
- **[EmailJS](https://emailjs.com)** — free, no backend needed
- **[Formspree](https://formspree.io)** — dead simple form endpoint
- Your own Express API

## 🌐 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com).

## 🎨 Theme Colors

Edit `tailwind.config.js` to change:
- `accent: '#7C3AED'` → primary purple
- `accent-2: '#06B6D4'` → cyan highlight  
- `bg: '#0A0A0F'` → page background

---

Built with ❤️ by Mithlesh Paswan
