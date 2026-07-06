export const summary =
  "DeFi protocol engineer who works top to bottom — deriving the mechanism math, writing the smart contracts, and building the C# and Rust services that run them in production. Top contributor to an audited leveraged-trading protocol (Marginly) and lead author of a multi-asset vault protocol (Levva), both shipped to mainnet — with further work spanning EVM, Solana, Substrate, and Stellar. On the side, I've been learning zero-knowledge proof systems by building them from scratch and writing them up on my blog.";

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Protocol & Smart Contract Engineer",
    company: "EQ LAB",
    period: "2022 — Present",
    location: "Remote",
    points: [
      "Designed and derived Marginly's deleverage-coefficient model — a linear-algebra reduction that turns pool-wide deleveraging into an O(1) coefficient update and keeps positions liquidatable even when one side's collateral is fully borrowed out. Marginly (EQ LAB's first EVM protocol) was audited by Quantstamp and shipped to mainnet; I was its top contributor (~260 commits) on the core leveraged-trading contracts and DEX adapters.",
      "Lead author (~60% of commits) of Levva Vaults v2 — an upgradeable ERC-4626 multi-asset vault on EVM (factory, vault, NFT withdrawal queue, 15+ DeFi-protocol adapters), audited and live in production.",
      "Built the C# backend APIs and services behind the Levva vaults, and a Rust MILP solver that computes cross-protocol liquidity allocation in production — a min-cost-flow formulation that replaced a per-asset heuristic, solving each rebalance in one pass (consistent by construction) instead of fragmenting it into a tail of small transactions.",
      "Shipped vault contracts across EVM, Solana, Aptos, and Sui for Enjoyoors, plus reward and airdrop distribution systems.",
      "Started on a Substrate-based Polkadot parachain (Equilibrium), cutting my teeth on on-chain finance, web3, and rigorous testing.",
    ],
  },
  {
    role: "Research Intern",
    company: "Kintech Lab",
    period: "2018 — 2021",
    location: "Moscow",
    points: [
      "Worked on multilayer SLM (selective laser melting) simulations as part of my diploma research, contributing to the FaSTLaB, the KiSSAM predecessor, modeling effort.",
      "Built Bash automation that chained Yade (powder-layer generation) and FaSTLaB (melting simulation) into repeatable, looped multilayer simulation runs.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Applied Mathematics & Physics",
    school: "MIPT — Molecular & Chemical Physics (ФМХФ)",
    period: "2019 — 2021",
  },
  {
    degree: "B.Sc. Applied Mathematics & Physics",
    school: "MIPT — Molecular & Chemical Physics (ФМХФ)",
    period: "2015 — 2019",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Rust", "C#", "Solidity", "TypeScript"] },
  {
    group: "Chains",
    items: [
      "EVM",
      "Solana",
      "Substrate / Polkadot",
      "Stellar / Soroban",
      "Aptos",
      "Sui",
    ],
  },
  {
    group: "Smart contracts",
    items: [
      "ERC-4626 / 20 / 721",
      "Upgradeable proxies",
      "DeFi protocol integration",
      "Audit remediation",
      "MEV / slippage design",
    ],
  },
  {
    group: "Backend & Services",
    items: [
      "C# APIs & services",
      "EVM event handlers",
      "Transaction relaying",
      "SDKs",
    ],
  },
  {
    group: "Applied math & modeling",
    items: [
      "Linear algebra & fixed-point math",
      "MILP / optimization (Rust)",
      "Mechanism design",
      "DeFi protocol design",
    ],
  },
  {
    group: "Cryptography",
    items: [
      "Merkle trees & proofs",
      "EIP-712 signatures",
      "Zero-knowledge proofs (from-scratch)",
    ],
  },
];

export const writing: { title: string; blurb: string; slug: string }[] = [
  {
    title: "Deleverage coefficients: the math behind Marginly",
    blurb:
      "Deriving an O(1) pool-wide deleverage with a little linear algebra.",
    slug: "marginly-deleverage-coefficients",
  },
  {
    title: "From heuristics to MILP: rebuilding the Levva liquidity balancer",
    blurb:
      "Modeling vault rebalancing as a min-cost flow and handing it to a solver.",
    slug: "levva-liquidity-balancer-milp",
  },
  {
    title: "Socializing bad debt across many tokens",
    blurb:
      "When the tidy 2×2 coefficient stretches into a 2K×2K one — and still works.",
    slug: "socialized-bad-debt-many-tokens",
  },
];
