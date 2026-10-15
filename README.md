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

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Leave build settings as defaults (`npm run build`).
5. Update `siteConfig.url` in `src/data/site.ts` to your production domain.
6. Deploy.

Do not commit secrets. This site is fully static/frontend and needs no environment variables for basic deployment.
