import Link from "next/link";
import { site, nav } from "@/lib/site";

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-line print:hidden">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="font-display text-2xl text-ink"
              style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}
            >
              Let&rsquo;s build something.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline mt-2 inline-block text-muted hover:text-ink"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Built with care.
          </p>
          <nav className="flex gap-5">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
