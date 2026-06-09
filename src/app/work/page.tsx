import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Tag } from "@/components/Cards";
import PageHeader from "@/components/PageHeader";
import { getPost } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        lead="A few projects I'm proud of — the kind where the problem was interesting and the craft mattered."
      />

      <div className="border-t border-line">
        {projects.map((p) => {
          // Only surface the writeup link once the post exists and is published.
          const writeup = p.writeupSlug ? getPost(p.writeupSlug) : null;
          const showWriteup = writeup && !writeup.draft;
          return (
            <article
              key={p.slug}
              className="group grid gap-6 border-b border-line py-10 sm:grid-cols-[1fr_2fr]"
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-faint">{p.year}</span>
                <h2
                  className="font-display text-3xl text-ink"
                  style={{ fontVariationSettings: '"opsz" 72, "WONK" 0' }}
                >
                  {p.title}
                </h2>
                <p className="eyebrow">{p.role}</p>
              </div>

              <div>
                <p className="text-lg leading-relaxed text-ink-soft">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  {p.link && (
                    <a
                      href={p.link.href}
                      target={p.link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="link-underline font-medium text-ink hover:text-accent"
                    >
                      {p.link.label} ↗
                    </a>
                  )}
                  {showWriteup && (
                    <Link
                      href={`/blog/${p.writeupSlug}`}
                      className="link-underline font-medium text-ink hover:text-accent"
                    >
                      Read the writeup →
                    </Link>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-muted hover:text-ink"
                    >
                      Source
                    </a>
                  )}
                  {p.closedSource && !p.repo && (
                    <span className="font-mono text-xs uppercase tracking-wider text-faint">
                      Closed source
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
