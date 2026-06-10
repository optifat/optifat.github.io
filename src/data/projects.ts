export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  blurb: string;
  description: string;
  tags: string[];
  link?: { label: string; href: string };
  repo?: string;
  /** Slug of a blog post that goes deeper on this project. */
  writeupSlug?: string;
  /** Set when the source isn't public, so the card doesn't dangle a dead link. */
  closedSource?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pipeline",
    title: "Pipeline",
    year: "2026",
    role: "Smart Contracts",
    blurb: "The protocol I'm building now — EVM contracts plus Stellar / Soroban.",
    description:
      "The protocol I'm currently working on. The EVM contracts are public; a separate Stellar / Soroban implementation is in progress.",
    tags: ["Solidity", "EVM", "Stellar", "Soroban"],
    repo: "https://github.com/eq-lab/pipeline-contracts",
  },
  {
    slug: "levva-liquidity-balancer",
    title: "Levva Liquidity Balancer",
    year: "2025 — 26",
    role: "Optimization · Rust",
    blurb: "A Rust MILP solver that allocates vault liquidity in production.",
    description:
      "The service that decides how a Levva vault's liquidity is split across target protocols and pending withdrawal requests. I reworked it from an earlier C# heuristic — one I'd also worked on — into a Rust solver built on a mixed-integer linear programming (MILP) graph formulation, substantially more accurate and running in production. It began as a free-time experiment in MILP that I later hardened for prod — the production version is built directly on the now-open-source proof-of-concept.",
    tags: ["Rust", "MILP", "Optimization", "DeFi"],
    repo: "https://github.com/optifat/levva-vault-liquidity-balancer",
    writeupSlug: "levva-liquidity-balancer-milp",
    featured: true,
  },
  {
    slug: "levva-vaults",
    title: "Levva Vaults v2 & Pools",
    year: "2025",
    role: "Protocol Engineer",
    blurb: "Vaults, pools, withdrawal queue, and DeFi adapters — plus the C# backend.",
    description:
      "The second generation of Levva's vaults and pools — the pools being a refactor of the Marginly pool. I built the factory, the vaults, the withdrawal queue, and the adapters into external DeFi protocols, alongside a substantial set of C# backend APIs and services around them.",
    tags: ["Solidity", "C#", "EVM", "DeFi"],
    link: { label: "levva.fi", href: "https://levva.fi/" },
    repo: "https://github.com/levvafi/levva-pools",
    featured: true,
  },
  {
    slug: "enjoyoors",
    title: "Enjoyoors",
    year: "2024 — 25",
    role: "Multi-chain Vaults",
    blurb: "Vault contracts across EVM, Solana, Aptos, and Sui.",
    description:
      "Vault contracts across four ecosystems — EVM, Solana, Aptos, and Sui — together with periphery like the rewards distributor. A crash course in shipping the same financial primitives idiomatically on very different chains.",
    tags: ["Solidity", "Solana", "Aptos", "Sui"],
    link: { label: "blog.enjoyoors.xyz", href: "https://blog.enjoyoors.xyz/" },
    repo: "https://github.com/eq-lab/enjoyoors-evm-contracts",
  },
  {
    slug: "warden-yield",
    title: "Warden Yield",
    year: "2024",
    role: "Contracts & Backend",
    blurb: "A cross-chain yield protocol bridging EVM and the Warden chain.",
    description:
      "A cross-chain yield protocol connecting EVM chains with the Warden chain, with cross-chain messaging handled over the Axelar bridge. I built the smart contracts and the C# backend services behind it.",
    tags: ["Solidity", "C#", "Cross-chain", "Axelar"],
    link: { label: "yieldward.com", href: "https://yieldward.com/" },
    repo: "https://github.com/eq-lab/warden-yield",
  },
  {
    slug: "marginly",
    title: "Marginly",
    year: "2023 — 24",
    role: "Protocol Engineer — built from scratch",
    blurb: "Our first major EVM protocol — leveraged trading, built from the ground up.",
    description:
      "EQ LAB's first major EVM protocol, built from the ground up. I implemented the core leveraged-trading contracts — including the deleverage-coefficient model, protocol math I derived with linear algebra and remain proud of — and later wrote the adapters connecting Marginly pools to a range of DEXs for token swaps.",
    tags: ["Solidity", "TypeScript", "DeFi", "EVM"],
    link: { label: "marginly.com", href: "https://marginly.com" },
    repo: "https://github.com/eq-lab/marginly",
    writeupSlug: "marginly-deleverage-coefficients",
    featured: true,
  },
  {
    slug: "equilibrium",
    title: "Equilibrium Parachain",
    year: "2022",
    role: "Substrate · early role",
    blurb: "Where I started: a Polkadot parachain on Substrate.",
    description:
      "Where I started at EQ LAB — a Polkadot parachain built on Substrate. An early role, where I cut my teeth on on-chain finance, web3, and writing serious tests.",
    tags: ["Rust", "Substrate", "Polkadot"],
    link: { label: "equilibrium.io", href: "https://equilibrium.io/" },
    repo: "https://github.com/eq-lab/equilibrium",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
