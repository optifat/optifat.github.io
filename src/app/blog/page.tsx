import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostListItem } from "@/components/Cards";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on engineering, design, and the craft of building software.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6">
      <PageHeader
        eyebrow="Writing"
        title="Notes & essays"
        lead="Thinking out loud about engineering, design, and the craft of building things that last."
      />

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet — check back soon.</p>
      ) : (
        <div className="divide-y divide-line border-t border-line">
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
