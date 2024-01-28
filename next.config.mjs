import NextPWA from "@ducanh2912/next-pwa";

import BundleAnalyzer from "@next/bundle-analyzer";

import "./src/env.mjs";

const prod = process.env.NODE_ENV === "production";

const withPWA = NextPWA({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: !prod,
  fallbacks: {
    document: "/offline",
  },
  workboxOptions: {
    disableDevLogs: true,
  },
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "img.youtube.com", protocol: "https" }],
  },
  optimizeFonts: true,
  transpilePackages: ["@ducanh2912/next-pwa", "lucide-react"],
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  analyzerMode: "static",
});

export default withPWA(withBundleAnalyzer(config));
