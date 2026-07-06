import Link from "next/link";
import type { Project } from "@/data/projects";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-paper-2/40 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-paper-2/70">
      <div className="flex items-baseline justify-between gap-4">
        <h3
          className="font-display text-2xl text-ink"
          style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}
        >
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-faint">
          {project.year}
        </span>
      </div>
      <p className="eyebrow mt-1">{project.role}</p>
      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        {project.blurb}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-sm">
        {project.link && (
          <a
            href={project.link.href}
            className="link-underline font-medium text-ink hover:text-accent"
            target={project.link.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            {project.link.label} ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="link-underline text-muted hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export function PostListItem({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block py-7">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3
          className="font-display text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl"
          style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}
        >
          {post.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-faint">
          {formatDate(post.date)}
        </span>
      </div>
      <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
        {post.summary}
      </p>
      <div className="mt-3 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
        <span>{post.readingTime} min read</span>
        {post.tags.length > 0 && (
          <>
            <span className="text-line">/</span>
            <span>{post.tags.join(", ")}</span>
          </>
        )}
      </div>
    </Link>
  );
}
