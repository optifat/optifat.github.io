import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
