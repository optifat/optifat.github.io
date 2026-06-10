/**
 * Example assets graph for the Levva liquidity-balancer post.
 * Pure inline SVG so it inherits the theme via CSS variables (light/dark).
 * Models the Eth "Safe" strategy as a hub-and-spoke: USDC at the core, with each
 * protocol sent off in its OWN direction so no two routes run parallel —
 * Aave up-left, Morpho up-right, and the ETH leg (Curve swap -> WETH -> stake ->
 * wstETH -> request -> pending -> claim) dropping down as its own little cycle.
 */
const EDGE = "var(--accent)";
const labelStyle = {
  fontSize: 11,
  fill: "var(--muted)",
  stroke: "none",
  fontFamily: "var(--font-mono)",
  textAnchor: "middle" as const,
  dominantBaseline: "middle" as const,
};

function Path({ d }: { d: string }) {
  return <path d={d} fill="none" stroke={EDGE} strokeWidth={1.5} markerEnd="url(#ag-end)" />;
}

/** Two parallel directed edges (a->b and b->a) with labels, offset perpendicular. */
function Pair({
  x1, y1, x2, y2, labA, labB, single, side = 1, lo = 26,
}: {
  x1: number; y1: number; x2: number; y2: number;
  labA: string; labB?: string; single?: boolean;
  /** which perpendicular side both labels sit on: +1 or -1 */
  side?: number;
  /** how far labels sit off the line (perpendicular) */
  lo?: number;
}) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const px = -dy / len, py = dx / len; // unit perpendicular
  const o = 5;   // how far the two arrows sit off the center line
  // Each label rides ALONGSIDE the arrow it describes: labA (the x1->x2 arrow,
  // offset +perp) sits on the +perp side, labB (the return arrow, -perp) on the
  // -perp side — so the two labels straddle the line on opposite sides.
  const lab = (s: number) => ({ x: x1 + 0.5 * dx + px * lo * s, y: y1 + 0.5 * dy + py * lo * s });
  const a = lab(1), b = lab(-1), m = lab(side);
  // A lone wide label (e.g. "Curve swap") is anchored to the side so it grows
  // away from the line instead of straddling the two arrowheads.
  const singleAnchor = px * side < 0 ? ("end" as const) : ("start" as const);
  return (
    <g>
      <Path d={`M${x1 + px * o},${y1 + py * o} L${x2 + px * o},${y2 + py * o}`} />
      <Path d={`M${x2 - px * o},${y2 - py * o} L${x1 - px * o},${y1 - py * o}`} />
      {single ? (
        <text x={m.x} y={m.y} style={{ ...labelStyle, textAnchor: singleAnchor }}>{labA}</text>
      ) : (
        <>
          <text x={a.x} y={a.y} style={labelStyle}>{labA}</text>
          <text x={b.x} y={b.y} style={labelStyle}>{labB}</text>
        </>
      )}
    </g>
  );
}

function Edge({ x1, y1, x2, y2, lab, lx, ly }: {
  x1: number; y1: number; x2: number; y2: number; lab: string; lx: number; ly: number;
}) {
  return (
    <g>
      <Path d={`M${x1},${y1} L${x2},${y2}`} />
      <text x={lx} y={ly} style={labelStyle}>{lab}</text>
    </g>
  );
}

function Node({ cx, cy, w, h, label, core, dashed, fs }: {
  cx: number; cy: number; w: number; h: number; label: string; core?: boolean; dashed?: boolean; fs?: number;
}) {
  return (
    <g>
      <rect
        x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={10}
        fill={core ? "var(--accent-ghost)" : "var(--paper-2)"}
        stroke={core || dashed ? "var(--accent)" : "var(--line)"}
        strokeWidth={core ? 1.5 : dashed ? 1.25 : 1}
        strokeDasharray={dashed ? "5 4" : undefined}
      />
      <text
        x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
        fontSize={fs ?? 13} fontWeight={core ? 600 : 400}
        fill="var(--ink)" stroke="none" fontFamily="var(--font-sans)"
      >
        {label}
      </text>
    </g>
  );
}

export default function AssetsGraphDiagram() {
  return (
    <figure style={{ margin: "2.4rem 0" }}>
      <svg
        viewBox="0 0 700 470"
        role="img"
        aria-label="An example assets graph: USDC at the core hub; reversible routes radiating to Aave (up-left) and Morpho (up-right); and an ETH leg dropping down through WETH to wstETH and a pending-withdrawal node."
        style={{ width: "100%", height: "auto" }}
      >
        <defs>
          <marker id="ag-end" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L7.5,3 L0,6 Z" fill={EDGE} />
          </marker>
        </defs>

        {/* USDC <-> Aave — spoke up-left; deposit/withdraw straddle the line */}
        <Pair x1={312} y1={182} x2={238} y2={96} labA="deposit" labB="withdraw" lo={32} />
        {/* USDC <-> Morpho — spoke up-right; deposit/redeem straddle the line */}
        <Pair x1={388} y1={182} x2={472} y2={96} labA="deposit" labB="redeem" lo={32} />
        {/* USDC <-> WETH (Curve swap, both directions) — spoke straight down;
            label anchored to the left so it clears both arrowheads */}
        <Pair x1={348} y1={225} x2={340} y2={306} labA="Curve swap" single side={1} lo={12} />
        {/* WETH -> wstETH (stake) */}
        <Edge x1={384} y1={336} x2={494} y2={361} lab="stake" lx={436} ly={336} />
        {/* wstETH -> pending (request) */}
        <Edge x1={514} y1={395} x2={432} y2={416} lab="request withdrawal" lx={538} ly={415} />
        {/* pending -> WETH (claim) */}
        <Edge x1={336} y1={406} x2={332} y2={354} lab="claim" lx={300} ly={380} />

        {/* nodes */}
        <Node cx={350} cy={200} w={96} h={46} label="USDC" core />
        <Node cx={150} cy={72} w={168} h={42} label="Aave USDC" />
        <Node cx={560} cy={72} w={168} h={42} label="Morpho vault" />
        <Node cx={330} cy={330} w={104} h={42} label="WETH" />
        <Node cx={560} cy={372} w={128} h={42} label="wstETH" />
        <Node cx={336} cy={428} w={184} h={40} label="pending withdrawal" dashed fs={12} />
      </svg>
      <figcaption
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--muted)",
          textAlign: "center",
          marginTop: "0.6rem",
          lineHeight: 1.5,
        }}
      >
        An example assets graph (the Eth &ldquo;Safe&rdquo; strategy), drawn as a hub
        around USDC. Aave and Morpho are reversible; the ETH leg swaps
        USDC&nbsp;↔&nbsp;WETH, stakes into wstETH, and exits one way — through a
        pending-withdrawal node.
      </figcaption>
    </figure>
  );
}
