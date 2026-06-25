export const site = {
  name: "Pavel Smelov",
  shortName: "Pavel",
  role: "Protocol & Smart Contract Engineer",
  // One-line tagline used in the hero and metadata.
  tagline: "I build DeFi protocols from the math up.",
  // A short paragraph for the about hub.
  intro:
    "I build DeFi protocols end to end — deriving the protocol math, writing the smart contracts, and building the Rust and C# services that run them in production, across EVM, Solana, Substrate, and Stellar. This is where I keep my work, my writing, and the occasional derivation I'm still chasing.",
  location: "Remote",
  email: "pavsmel@hotmail.com",
  // Used for absolute URLs in metadata / sitemap. Change when you deploy.
  url: "https://pavelsmelov.dev",
  socials: [
    { label: "GitHub", href: "https://github.com/optifat" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:pavsmel@hotmail.com" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/blog" },
  { label: "CV", href: "/cv" },
] as const;
