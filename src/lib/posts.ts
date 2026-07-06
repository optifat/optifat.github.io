import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  tags: string[];
  readingTime: number; // minutes
  draft: boolean; // hidden from listings, still reachable by direct URL
  featured: boolean; // pinned to the top of home "Selected writing"
};

export type Post = PostMeta & { content: string };

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? "1970-01-01"),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    readingTime: readingTime(content),
    draft: Boolean(data.draft),
    featured: Boolean(data.featured),
    content,
  };
}

function readAllFiles(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const { content: _content, ...meta } = parseFile(f);
      void _content;
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Published posts only — used for all listings (blog index, home, prev/next). */
export function getAllPosts(): PostMeta[] {
  return readAllFiles().filter((p) => !p.draft);
}

export function getPost(slug: string): Post | null {
  const mdx = path.join(POSTS_DIR, `${slug}.mdx`);
  const md = path.join(POSTS_DIR, `${slug}.md`);
  const file = fs.existsSync(mdx)
    ? `${slug}.mdx`
    : fs.existsSync(md)
      ? `${slug}.md`
      : null;
  if (!file) return null;
  return parseFile(file);
}

/** All slugs incl. drafts — so draft pages are built and reachable by direct link. */
export function getPostSlugs(): string[] {
  return readAllFiles().map((p) => p.slug);
}

/** Formats an ISO date as e.g. "9 June 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
