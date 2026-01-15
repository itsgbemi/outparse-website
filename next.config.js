/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // If you're not using Next.js Image optimization
  },
  // Enable static exports for full static site generation
  output: 'standalone', // Or 'export' for static hosting
}

module.exports = nextConfig
