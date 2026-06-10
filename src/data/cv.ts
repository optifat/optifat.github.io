export const summary =
  "DeFi protocol engineer building lending and leveraged-trading systems across EVM, Solana, Substrate, and Stellar. I like working top to bottom — deriving the protocol math, writing the smart contracts, and building the C# and Rust services that run them in production.";

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
      "Designed and built Marginly from scratch — a leveraged-trading EVM protocol — including the deleverage-coefficient model I derived with linear algebra, and adapters bridging its pools to multiple DEXs.",
      "Built Levva's v2 vaults and pools (factory, vaults, withdrawal queue, DeFi adapters), the C# backend APIs and services behind them, and a Rust MILP solver that optimizes vault liquidity allocation in production.",
      "Shipped vault contracts across EVM, Solana, Aptos, and Sui for Enjoyoors, plus reward and airdrop distribution systems.",
      "Started on a Substrate-based Polkadot parachain (Equilibrium), learning on-chain finance, web3, and rigorous testing.",
    ],
  },
  {
    role: "Research Intern",
    company: "Kintech Lab",
    period: "2018 — 2021",
    location: "Moscow",
    points: [
      "Worked on multilayer SLM (selective laser melting) simulations as part of my diploma research, contributing to the FaSTLaB, KiSSAM predecessor, modeling effort.",
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
  { group: "Chains", items: ["EVM", "Solana", "Substrate / Polkadot", "Stellar / Soroban", "Aptos", "Sui"] },
  { group: "Backend & Services", items: ["C# APIs & services", "EVM event handlers", "Transaction relaying", "SDKs"] },
  { group: "Modeling & Math", items: ["Linear algebra", "MILP / optimization (Rust)", "DeFi protocol design"] },
];
