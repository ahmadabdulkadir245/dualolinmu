/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"]
  },
}

module.exports = nextConfig
