import Link from "next/link";
import { site } from "@/lib/site";
import { featuredProjects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";
import { ProjectCard, PostListItem } from "@/components/Cards";

export default function Home() {
  // Pinned (featured) posts first, then most-recent; getAllPosts() is date-sorted and
  // Array.prototype.sort is stable, so date order is preserved within each group.
  const posts = [...getAllPosts()]
    .sort((a, b) => Number(b.featured) - Number(a.featured))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ---- Hero ---- */}
      <section className="relative pb-20 pt-20 sm:pt-28">
        {/* atmospheric accent glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, var(--accent-ghost), transparent)",
          }}
        />
        <p className="eyebrow rise" style={{ animationDelay: "0ms" }}>
          {site.role} · {site.location}
        </p>
        <h1
          className="font-display rise mt-5 max-w-3xl text-5xl leading-[1.02] text-ink sm:text-7xl"
          style={{
            animationDelay: "80ms",
            fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
          }}
        >
          {site.tagline}
        </h1>
        <p
          className="rise mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "180ms" }}
        >
          {site.intro}
        </p>
        <div
          className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
          style={{ animationDelay: "280ms" }}
        >
          <Link
            href="/work"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            View selected work
          </Link>
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="link-underline text-sm text-muted hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* ---- Featured work ---- */}
      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="eyebrow">Selected work</h2>
          <Link
            href="/work"
            className="link-underline text-sm text-muted hover:text-ink"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ---- Recent writing ---- */}
      <section className="border-t border-line py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="eyebrow">Selected writing</h2>
          <Link
            href="/blog"
            className="link-underline text-sm text-muted hover:text-ink"
          >
            All posts →
          </Link>
        </div>
        <div className="mt-2 divide-y divide-line">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
