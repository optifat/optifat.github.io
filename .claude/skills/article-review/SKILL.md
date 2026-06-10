---
name: article-review
description: Review a blog post or article draft for reader-facing problems using fresh-context subagents that read it cold, with no prior knowledge of the project. Use when the user asks to review an article, check whether a draft is clear, find confusing parts, get an outside-perspective read, or otherwise critique prose (NOT code — use code-review for that).
---

This skill reviews **prose** — blog posts, articles, docs, essays — the way a real reader
would meet it: cold. Its whole premise is that the author (and you, having helped write it)
can no longer see the gaps, because you already know what every term means and where the
argument is going. So the review is delegated to **fresh-context subagents** that have *only*
the article in front of them — no conversation history, no repo context, no summary of what
the piece is "supposed" to say.

## When to use

- "Review this article" / "is this draft clear?" / "what's confusing here?"
- "Read it from an outside perspective" / "fresh eyes on this post"
- Before publishing a draft, to catch reader-facing friction.

Do **not** use this for code (use `code-review`), and do not use it to fact-check claims
against the world (that's research) — it judges the text *as written*.

## Step 1 — Pick the target

1. If the user named a file, use it.
2. Else look for a changed/draft article: `git status` for modified `.md`/`.mdx`, or a file
   with `draft: true` in its frontmatter.
3. If still ambiguous, ask which file.

Read the file yourself first, only to confirm it's prose and roughly how long it is — not to
form opinions. The opinions come from the cold readers.

## Step 2 — Pick the review lenses

Default to the **Clarity** lens (the outside-reader read) unless the user asks for more.
Each lens is run by its own subagent so their perspectives stay independent. Offer the others
if the user wants a fuller pass:

- **Clarity** *(default)* — a smart but non-specialist reader flags every place that is hard
  to follow: undefined terms, jargon used before it's introduced, unexplained leaps in
  reasoning, ambiguous pronouns/references, sentences that are hard to parse.
- **Structure & flow** — does the piece earn each section in order? Are there ordering
  problems (a concept used before it's introduced), redundant passages, a weak open or a
  missing payoff, sections that drag or are too thin?
- **Consistency & accuracy** — internal contradictions only: a term defined two ways, a
  symbol or sign convention that flips between sections, a number/name that disagrees with
  itself, a claim the piece sets up but never delivers.
- **Tone & voice** — consistency of register, hedging/filler, clichés, places where the
  voice slips (too salesy, too academic, too casual for the surrounding text).

When the user wants "a thorough review" or "everything," run all four **in parallel** (one
Agent call per lens, in a single message).

## Step 3 — Run cold readers

For each lens, launch a `general-purpose` subagent via the Agent tool. The prompt MUST:

- give it **zero project context** — only the absolute file path and the rubric;
- name the intended **audience** (ask the user if unknown; for this blog, default to
  "software engineers who may not know the specific domain, but who are comfortable
  with school and first-year-university math — basic calculus/analysis, linear algebra,
  big-O — so don't flag those as unexplained");
- tell it to **diagnose, not rewrite** — no fixes, no praise, no summary of what's good;
- require, per finding: a **short quote or heading + line number**, **what** is wrong, and a
  **severity** (BLOCKER / MODERATE / MINOR, defined below);
- require findings **grouped by section in reading order**, plus a one-paragraph overall read.

Reuse this template, filling in `{lens}`, `{rubric}`, `{audience}`, `{path}`:

> You are a sharp, attentive reader with NO prior context about this project. Read this
> article in full: `{path}`. Audience: {audience}.
>
> Your job is the **{lens}** lens: {rubric}
>
> For EACH issue report: (1) a short quote or the section heading + line number, (2) what
> specifically is wrong, (3) severity — BLOCKER (a target reader is genuinely lost),
> MODERATE (a recoverable stumble), or MINOR (slightly unclear/awkward). Quote the text.
> Do NOT rewrite or fix anything. Do NOT praise or summarize what's good — only friction.
> Group findings by section in reading order, then give a one-paragraph overall read.
> Read the actual file; do not assume its contents.

Run lenses concurrently when there's more than one.

## Step 4 — Report and offer to fix

Synthesize the subagents' findings into one report for the user, **ordered by severity**
(blockers first), de-duplicated across lenses, each item keeping its quote + location.

Then **recommend a small high-leverage subset** rather than every nit — a good review proposes
the few fixes that remove the most reader friction, and notes what's deliberately being left
(e.g. domain terms a link already carries, jargon the audience knows). Do **not** edit the
article yet; ask which fixes to apply. Apply only what the user approves, then offer to send a
fresh cold reader back over the revised draft to confirm the blockers are gone.

## Notes

- Independence is the point: never feed the subagents the article's intended meaning, the
  prior conversation, or each other's findings — that reintroduces exactly the blind spot
  the skill exists to defeat.
- Severity discipline keeps it actionable: a wall of MINORs is noise. Push reviewers to
  reserve BLOCKER for genuine lost-the-reader moments.
