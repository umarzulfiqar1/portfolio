# Portfolio — Data / AI / ML

A fast, accessible, dark-mode-first portfolio built with **Next.js 15 (App Router)** and **TypeScript**.
Everything you need to change lives in one file: [`content/profile.ts`](content/profile.ts).

---

## 1. Run it locally

Open a terminal in this folder and run:

```powershell
npm install
npm run dev
```

Then open <http://localhost:3000>.

> On this machine, use `npm.cmd` if `npm` is blocked by the PowerShell execution policy
> (e.g. `npm.cmd install`, `npm.cmd run dev`).

Build a production bundle to check for errors:

```powershell
npm run build
npm start
```

---

## 2. Make it yours (5 minutes)

Open `content/profile.ts`. Every placeholder is marked `// TODO`.

| What to change | Field |
| --- | --- |
| Your name / nav badge | `name`, `initials` |
| Rotating job titles in the hero | `roles` |
| Hero sentence | `headline` |
| Location + availability badge | `location`, `availability` |
| Email | `email` |
| Résumé PDF | `resumeUrl` — put the file in `public/resume.pdf`, then set `"/resume.pdf"` |
| Social links | `socials` (icons: github, linkedin, scholar, kaggle, x, email, orcid, medium, website) |
| Top numbers | `stats` |
| Bio paragraphs + quick facts | `about`, `facts` |
| Skills columns | `skillGroups` |
| Projects (title, summary, tags, metrics, links) | `projects` |
| Jobs | `experience` |
| Papers | `publications` — set the array to `[]` to hide the whole section |
| Degrees | `education` |
| Contact wording | `contactTitle`, `contactText` |

### Adding a project

```ts
{
  title: "My new model",
  year: "2026",
  featured: true,              // highlights the card
  summary: "What it does and why it matters.",
  tags: ["PyTorch", "MLOps"],
  metrics: [{ value: "+9%", label: "AUC" }],   // optional
  links: [{ label: "Code", href: "https://github.com/...", icon: "github" }],
}
```

Link icons: `github`, `website`, `paper`, `demo`, `data`.
Swap any `href: "#"` placeholder for a real URL.

---

## 3. Put it online (free)

### Vercel (easiest — makes the "website link")

1. Create a free account at <https://vercel.com>.
2. Push this folder to a GitHub repository (install [Git](https://git-scm.com/download/win) first):

   ```powershell
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/portfolio.git
   git push -u origin main
   ```

3. In Vercel: **Add New → Project → import the repo → Deploy**.
   You get a live link like `https://portfolio-yourname.vercel.app`, and every future
   `git push` redeploys automatically.

### Netlify / Cloudflare Pages
Same idea: connect the repo, build command `npm run build`, output directory `.next`.

### Static export (GitHub Pages, any host)
Add `output: "export"` to `next.config.mjs`, run `npm run build`, and upload the
generated `out/` folder. Note: with static export, drop `next/image` optimisations
(this project doesn't use them, so it works as-is).

---

## 4. What's included

- Sticky glass navigation with active-section highlighting and a mobile menu
- Animated "neural network" hero canvas (pauses when off-screen, respects reduced motion)
- Light/dark theme toggle with no flash of the wrong theme
- Scroll-reveal sections, equal-height project cards, metric callouts
- Experience timeline, publications, education, contact card
- Semantic HTML, skip link, focus rings, `aria` labels, print styles
- Zero UI dependencies beyond `react-icons`; no external fonts or trackers

## Project structure

```
app/
  layout.tsx      metadata, theme bootstrap
  page.tsx        section order
  globals.css     the entire design system
  icon.svg        favicon
components/
  Nav.tsx  Hero.tsx  About.tsx  Skills.tsx  Projects.tsx
  Experience.tsx  Publications.tsx  Contact.tsx  Footer.tsx
  NodeField.tsx   hero canvas
  Reveal.tsx      scroll animations
  Icons.tsx       social / link icons
content/
  profile.ts      ← edit everything here
```
