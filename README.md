# Personal site — blog + portfolio

A static, content-driven personal site built with **Next.js (App Router) + TypeScript + Tailwind v4**.
Editorial-minimal aesthetic: paper-cream canvas, warm ink, a single vermilion accent, with light/dark themes.

No backend required — everything is statically generated at build time and can be hosted free on
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Run

```bash
pnpm install     # install dependencies
pnpm dev         # local dev at http://localhost:3000
pnpm build       # production build (static export of all routes)
pnpm start       # serve the production build
```

## Where things live

| What you want to change       | File                   |
| ----------------------------- | ---------------------- |
| Name, role, bio, social links | `src/lib/site.ts`      |
| Portfolio / projects          | `src/data/projects.ts` |
| Résumé (experience, skills…)  | `src/data/cv.ts`       |
| Blog posts                    | `content/blog/*.mdx`   |
| Colors, fonts, prose styling  | `src/app/globals.css`  |

### Adding a blog post

Drop a new `.mdx` file in `content/blog/` with frontmatter:

```mdx
---
title: "My post title"
date: "2026-06-09"
summary: "One-line teaser shown in the list."
tags: ["engineering", "notes"]
---

Write **Markdown / MDX** here. Reading time is computed automatically.
```

It appears on `/blog` automatically (sorted by date) with its own `/blog/<filename>` page.

## Pages

- `/` — home / about hub (hero, featured work, recent writing)
- `/work` — full project list
- `/blog` + `/blog/[slug]` — writing index and posts (MDX)
- `/cv` — résumé

## Stack notes

- **Type:** Fraunces (display) · Hanken Grotesk (body) · JetBrains Mono (labels) — via `next/font`.
- **Content:** MDX files read at build with `gray-matter` + rendered by `next-mdx-remote/rsc`.
- **Theme:** class-based dark mode, set before paint to avoid flashes (`src/app/layout.tsx`).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and
publishes it to GitHub Pages. Alternatively, run `pnpm build` and host the `out/` directory
anywhere that serves static files (Vercel, Netlify, Cloudflare Pages, …).
