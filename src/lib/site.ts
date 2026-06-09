export const site = {
  name: "Pavel Smelov",
  shortName: "Pavel",
  role: "Software Engineer",
  // One-line tagline used in the hero and metadata.
  tagline: "Engineer building thoughtful, durable software for the web.",
  // A short paragraph for the about hub.
  intro:
    "I design and build software that's meant to last — clear systems, calm interfaces, and code other people can read. This is where I keep my work, my writing, and the occasional thing I'm still figuring out.",
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
