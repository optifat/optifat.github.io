import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { summary, experience, education, skills, writing } from "@/data/cv";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "CV",
  description: `Résumé and experience for ${site.name}.`,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="eyebrow sticky top-20 hidden self-start lg:block">
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <PageHeader
        eyebrow="Curriculum Vitae"
        title="Experience"
        lead={summary}
      />

      <div className="flex items-center gap-4 pb-12">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </a>
        <span className="font-mono text-xs text-muted">
          {site.location} · Available for select work
        </span>
      </div>

      {/* Experience */}
      <section className="grid gap-2 border-t border-line py-12 lg:grid-cols-[200px_1fr]">
        <SectionLabel>Experience</SectionLabel>
        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3
                  className="font-display text-2xl text-ink"
                  style={{ fontVariationSettings: '"opsz" 48, "WONK" 0' }}
                >
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-faint">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-ink-soft">
                <span className="text-accent">{job.company}</span>
                <span className="text-faint"> · {job.location}</span>
              </p>
              <ul className="mt-3 space-y-2">
                {job.points.map((pt, i) => (
                  <li
                    key={i}
                    className="relative pl-5 leading-relaxed text-ink-soft"
                  >
                    <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rotate-45 rounded-[1px] bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-2 border-t border-line py-12 lg:grid-cols-[200px_1fr]">
        <SectionLabel>Capabilities</SectionLabel>
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                {s.group}
              </h3>
              <p className="mt-2 leading-relaxed text-ink">
                {s.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected writing */}
      <section className="grid gap-2 border-t border-line py-12 lg:grid-cols-[200px_1fr]">
        <SectionLabel>Selected writing</SectionLabel>
        <div className="space-y-6">
          {writing.map((w) => (
            <Link key={w.slug} href={`/blog/${w.slug}`} className="group block">
              <h3
                className="font-display text-xl text-ink transition-colors group-hover:text-accent"
                style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}
              >
                {w.title}
              </h3>
              <p className="mt-0.5 text-ink-soft">{w.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="grid gap-2 border-t border-line py-12 lg:grid-cols-[200px_1fr]">
        <SectionLabel>Education</SectionLabel>
        <div className="space-y-6">
          {education.map((e) => (
            <div
              key={e.degree}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h3
                  className="font-display text-xl text-ink"
                  style={{ fontVariationSettings: '"opsz" 40, "WONK" 0' }}
                >
                  {e.degree}
                </h3>
                <p className="text-ink-soft">{e.school}</p>
              </div>
              <span className="font-mono text-xs text-faint">{e.period}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
