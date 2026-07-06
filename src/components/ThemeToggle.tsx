"use client";

import { useSyncExternalStore } from "react";

// The `dark` class on <html> is the source of truth: set before paint by the
// inline script in layout.tsx, and toggled here. We subscribe to it rather than
// mirror it into React state, so there's a single source and no effect.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const isDark = () => document.documentElement.classList.contains("dark");

export default function ThemeToggle() {
  // Server snapshot is `false` so the first client render matches the server
  // HTML (avoids a hydration mismatch); it re-syncs to the real DOM immediately.
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={dark}
      className="group relative grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent"
    >
      <span className="text-[15px] leading-none">{dark ? "☾" : "☀"}</span>
    </button>
  );
}
