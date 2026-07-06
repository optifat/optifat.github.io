import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-6 py-32">
      <p className="eyebrow">Error 404</p>
      <h1
        className="font-display mt-4 text-6xl text-ink sm:text-8xl"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
      >
        Lost the thread.
      </h1>
      <p className="mt-5 max-w-md text-lg text-ink-soft">
        This page doesn&rsquo;t exist — or it wandered off. Let&rsquo;s get you
        back to something real.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
      >
        Back home
      </Link>
    </div>
  );
}
