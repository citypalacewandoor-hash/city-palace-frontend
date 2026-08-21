/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "city-palace-backend.onrender.com", pathname: "/**" },
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "localhost", port: "5001", pathname: "/**" },
      { protocol: "http", hostname: "localhost", port: "5000", pathname: "/**" },
      { protocol: "http", hostname: "127.0.0.1", port: "5001", pathname: "/**" },
      { protocol: "http", hostname: "localhost" },
    ],
    unoptimized: true, // serve local upload streams directly, bypassing /_next/image
    // Kept so flipping `unoptimized` back off restores the previous behaviour.
    formats: ["image/avif", "image/webp"],
    // Limit simultaneous image optimizations
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  // Reduce JS payload — remove console.* in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Faster builds + smaller output
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "lucide-react",
      "@radix-ui/react-icons",
      "framer-motion",
    ],
  },
};

export default nextConfig;
