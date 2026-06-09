import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { getPost, getPostSlugs, getAllPosts, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Find adjacent posts for prev/next navigation.
  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? all[idx - 1] : null;
  const older = idx < all.length - 1 ? all[idx + 1] : null;

  return (
    <article className="mx-auto max-w-2xl px-6">
      <header className="pb-10 pt-20 sm:pt-24">
        <Link
          href="/blog"
          className="link-underline font-mono text-xs uppercase tracking-wider text-muted hover:text-ink"
        >
          ← Writing
        </Link>
        <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
          {post.draft && (
            <>
              <span className="rounded-full bg-accent-ghost px-2 py-0.5 text-accent">
                Draft
              </span>
              <span className="text-line">/</span>
            </>
          )}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-line">/</span>
          <span>{post.readingTime} min read</span>
        </div>
        <h1
          className="font-display mt-4 text-4xl leading-[1.08] text-ink sm:text-5xl"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
        >
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.summary}</p>
      </header>

      <div className="prose border-t border-line pt-10">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeKatex],
            },
          }}
        />
      </div>

      {/* prev / next */}
      <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {older ? (
          <Link href={`/blog/${older.slug}`} className="group rounded-xl border border-line p-5 transition-colors hover:border-accent/50">
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
              ← Older
            </span>
            <p className="mt-1 font-display text-lg text-ink group-hover:text-accent" style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}>
              {older.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {newer ? (
          <Link href={`/blog/${newer.slug}`} className="group rounded-xl border border-line p-5 text-right transition-colors hover:border-accent/50">
            <span className="font-mono text-[0.68rem] uppercase tracking-wider text-muted">
              Newer →
            </span>
            <p className="mt-1 font-display text-lg text-ink group-hover:text-accent" style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}>
              {newer.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
