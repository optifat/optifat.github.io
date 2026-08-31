import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — a physicist-turned-protocol-engineer who builds DeFi systems from the math up.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <PageHeader
        eyebrow="About"
        title="Recognizing an old friend"
        lead="I'm Pavel — a backend and protocol engineer who builds DeFi systems from the math up. I trained as a physicist, and I never expected smart-contract development to be where I'd meet serious math again — but there it was, hiding inside leveraged-trading pools and vault mechanics."
      />

      <div className="max-w-2xl space-y-6 pb-16 text-lg leading-relaxed text-ink-soft">
        <p>
          I studied applied math and physics at MIPT, one of Russia&apos;s top
          physics-and-math institutes, and started out in numerical simulation —
          modeling physical processes, the kind of work that&apos;s math all the
          way down. When I moved into web3 and smart contracts, I didn&apos;t
          expect to carry much of that with me; from the outside it looked
          mostly like plumbing.
        </p>

        <p>
          Then a pool full of leveraged positions turned out to be a{" "}
          <Link
            href="/blog/marginly-deleverage-coefficients"
            className="link-underline text-ink hover:text-accent"
          >
            2×2 matrix
          </Link>
          : deleveraging a whole side of a margin protocol collapsed into a
          couple of coefficients I could update in constant time.{" "}
          <Link
            href="/blog/levva-liquidity-balancer-milp"
            className="link-underline text-ink hover:text-accent"
          >
            Rebalancing a vault across a dozen protocols
          </Link>{" "}
          was a min-cost flow;{" "}
          <Link
            href="/blog/socialized-bad-debt-many-tokens"
            className="link-underline text-ink hover:text-accent"
          >
            socializing bad debt across many tokens
          </Link>{" "}
          was a linear map that only looked like it should explode. Finding each
          one felt less like inventing something than recognizing an old friend
          — the same math, in the last place I&apos;d expected it.
        </p>

        <p>
          That&apos;s the thread through most of what I do — I look for the
          structure hiding inside a problem that presents itself as expensive
          bookkeeping. And I like to carry it the whole way down: derive the
          mechanism on paper, build the Rust and C# services that run it in
          production, plus the smart contracts underneath. I&apos;ve done that
          across EVM, Solana, Substrate, and Stellar, on protocols that shipped
          to mainnet and through audits.
        </p>

        <p>
          That curiosity spills past what has to ship. I taught myself{" "}
          <Link
            href="/blog/zero-knowledge-from-scratch-pedersen"
            className="link-underline text-ink hover:text-accent"
          >
            zero-knowledge proof systems
          </Link>{" "}
          the only way I know how — building small ones from scratch,{" "}
          <Link
            href="/blog/bailsmen-on-a-snark"
            className="link-underline text-ink hover:text-accent"
          >
            handing a real problem to a SNARK
          </Link>
          , and writing up what I got right and wrong. Some derivations never
          make it into production. I write those up too.
        </p>

        <p>
          Away from the keyboard, the same instinct tends to follow me. I play{" "}
          <a
            href="https://lichess.org/@/Mopgop"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-ink hover:text-accent"
          >
            chess
          </a>{" "}
          — not master level, but the best I ever have — and one of my earliest
          projects was a doomed attempt to{" "}
          <a
            href="https://github.com/optifat/chess_engine"
            target="_blank"
            rel="noreferrer"
            className="link-underline text-ink hover:text-accent"
          >
            build an engine for it
          </a>
          . I picked up pool a while back for the geometry of it — reading the
          angles, planning the break, even if my cue still lags my intentions. I
          also like pointing new tools at everyday problems — lately leaning on
          AI to sharpen my chess openings and to get back into Korean. I&apos;ve
          also been trading films for novels — I used to watch far more than I
          read, and these days it&apos;s the other way round.
        </p>

        <p>
          What pulls me is a problem with real mathematical teeth — the kind
          where the shape of the answer isn&apos;t obvious until you find the
          right way to look at it. I&apos;m always glad to talk to people
          working on those.
        </p>
      </div>

      <section className="max-w-2xl border-t border-line pb-4 pt-10">
        <h2 className="eyebrow">A few books I&apos;d recommend</h2>
        <ul className="mt-6 space-y-5">
          <li>
            <p className="text-ink">
              <span className="font-medium">Les Rougon-Macquart</span>
              <span className="text-muted"> — Émile Zola</span>
            </p>
            <p className="mt-0.5 leading-relaxed text-ink-soft">
              Twenty novels following one family across an era — some of the
              best writing I&apos;ve come across.
            </p>
          </li>
          <li>
            <p className="text-ink">
              <span className="font-medium">One Hundred Years of Solitude</span>
              <span className="text-muted"> — Gabriel García Márquez</span>
            </p>
            <p className="mt-0.5 leading-relaxed text-ink-soft">
              Read it a year ago and still can&apos;t shake it.
            </p>
          </li>
          <li>
            <p className="text-ink">
              <span className="font-medium">The Forsyte Saga</span>
              <span className="text-muted"> — John Galsworthy</span>
            </p>
            <p className="mt-0.5 leading-relaxed text-ink-soft">
              A family saga in the Zola vein — for the long, generational sweep.
            </p>
          </li>
          <li>
            <p className="text-ink">
              <span className="font-medium">Ulysses</span>
              <span className="text-muted"> — James Joyce</span>
            </p>
            <p className="mt-0.5 leading-relaxed text-ink-soft">
              I read it in English, my second language, and won&apos;t pretend I
              caught all of it — but I&apos;m glad I tried.
            </p>
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap items-center gap-4 border-t border-line pb-16 pt-10">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          Get in touch
        </a>
        <span className="font-mono text-xs text-muted">
          Open to interesting problems
        </span>
      </div>
    </div>
  );
}
