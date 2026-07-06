"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink"
          style={{ fontVariationSettings: '"opsz" 40, "SOFT" 0, "WONK" 0' }}
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {isActive(item.href) && (
                <span className="absolute inset-0 rounded-full bg-accent-ghost" />
              )}
              <span className="relative">{item.label}</span>
            </Link>
          ))}
          <span className="mx-1 h-5 w-px bg-line" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
