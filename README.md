# Personal site — blog + portfolio

A static, content-driven personal site built with **Next.js (App Router) + TypeScript + Tailwind v4**.
Editorial-minimal aesthetic: paper-cream canvas, warm ink, a single vermilion accent, with light/dark themes.

No backend required — everything is statically generated at build time and can be hosted free on
Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## Run

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build (static export of all routes)
npm run start    # serve the production build
```

## Where things live

| What you want to change         | File                                   |
| ------------------------------- | -------------------------------------- |
| Name, role, bio, social links   | `src/lib/site.ts`                      |
| Portfolio / projects            | `src/data/projects.ts`                 |
| Résumé (experience, skills…)    | `src/data/cv.ts`                       |
| Blog posts                      | `content/blog/*.mdx`                   |
| Colors, fonts, prose styling    | `src/app/globals.css`                  |

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

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config. Or run
`npm run build` and host the output anywhere that serves static files.
