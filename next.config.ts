import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (user site: https://rakesh-borra.github.io/).
 * No basePath — content is served from the site root.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
