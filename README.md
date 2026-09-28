# Hassan Jaan — 3D Portfolio

An immersive, production-ready 3D personal portfolio for a full-stack developer, web designer, and IT management founder. A single continuous Three.js "developer workspace in space" scene moves the camera along a scroll-driven path; each portfolio section is a "station" the camera arrives at, with accessible HTML overlays on top.

## Stack

- React + Vite, Tailwind CSS
- Three.js via `@react-three/fiber` + `@react-three/drei`
- `framer-motion` for UI motion
- Contact form via EmailJS (client-side), with a simulated-send fallback when env vars are missing
- Plain JavaScript (no TypeScript)

## Features

- Scroll-driven 3D camera path through a dark, futuristic space workspace (procedural geometry — no large model files)
- Stations: Hero (3D name), About, Skills, Projects, Services, Contact
- Project cards with hover tilt and a detail modal (description, features, tech, role, live + GitHub links)
- Working EmailJS contact form with success/error states and demo fallback
- Fully responsive; mobile/low-power devices fall back to a lighter scene (fewer particles, no parallax, capped DPR)
- Respects `prefers-reduced-motion`: replaces the canvas with a static gradient and uses a simple scrolling layout
- Accessibility: skip link, semantic HTML, keyboard navigation, visible focus rings, screen-reader-friendly name, alt/aria on the modal
- SEO: title, meta description, Open Graph + Twitter tags, favicon
- All content lives in `src/data/content.js` — edit bio, skills, projects, services, and links there without touching components

## Project structure

```
public/
  .htaccess            # cPanel SPA rewrites
  favicon.svg
src/
  components/
    canvas/            # R3F scene (Scene, Starfield, HeroText3D, AmbientShapes)
    ui/                # Framer Motion overlays + sections + modal + form
    layout/            # HUD navigation
  data/content.js      # Single source of truth for all content
  hooks/               # usePrefersReducedMotion, usePerformanceTier
  pages/Portfolio.jsx
  App.jsx
  index.css
index.html
.env.example
vercel.json
```

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and fill in your EmailJS keys:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

If these are unset, the contact form runs in simulated-send mode (it logs the message and shows success, but no email is sent).

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Deploy

### Vercel

1. Push the repo to GitHub and import it into Vercel (auto-detects Vite).
2. Add the three `VITE_EMAILJS_*` env vars in Project → Settings → Environment Variables.
3. `vercel.json` is included for framework detection and SPA rewrites.

### cPanel / shared hosting (no Node server)

1. Run `npm run build`.
2. Upload everything inside `dist/` to your `public_html/` directory.
3. Upload `public/.htaccess` to `public_html/.htaccess` (SPA rewrites for React Router).

## Editing content

Open `src/data/content.js` and update `name`, `tagline`, `email`, `about`, `skills`, `projects`, `services`, and `socials`. Replace `[LIVE_URL]`, `[GITHUB_URL]`, and `[PLACEHOLDER]` values with real data. No component changes required.

> Note: This project is built on the Base44 platform, which handles hosting automatically. The `vercel.json` and `.htaccess` files are included for standalone export/deployment to Vercel or cPanel as requested.
