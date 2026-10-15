# Rakesh Borra — Portfolio

Professional software engineering portfolio built with Next.js, TypeScript, Tailwind CSS, and Motion.

## Features

- Dark/light theme toggle
- Sticky navigation with active section highlighting
- Featured projects: **Clinical Trial AI** and **Real Estate Investment Analysis**
- Project filtering by category
- Three downloadable role-specific resumes
- SEO metadata, Open Graph, sitemap, and robots.txt
- Accessible keyboard navigation and reduced-motion support

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start local development  |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Updating content

All personal content lives in `src/data/`:

- `site.ts` — name, headline, links, SEO
- `skills.ts` — skill categories
- `projects.ts` — project showcase
- `experience.ts` — work experience
- `education.ts` — education history
- `certifications.ts` — certifications
- `resumes.ts` — resume downloads

Resume PDFs are stored in `public/resumes/`.

## Deploy to GitHub Pages

This project uses Next.js static export (`output: "export"`) and deploys via GitHub Actions.

1. Push to the `main` branch of [rakesh-borra.github.io](https://github.com/Rakesh-Borra/rakesh-borra.github.io).
2. In the repository on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Allow the **Deploy Next.js site to Pages** workflow to run.
4. Site URL: [https://rakesh-borra.github.io/](https://rakesh-borra.github.io/)

The workflow builds `./out` and deploys that artifact. Generated files are not committed to `main`.

Preview the static export locally:

```bash
npm run build
npx --yes serve out
```

Do not commit secrets. This site is fully static and needs no environment variables for basic deployment.
