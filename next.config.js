/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["idatyen-wedding.vercel.app"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datyen-wedding.vercel.app",
      },
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
};

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl(nextConfig);
