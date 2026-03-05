/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slotspk.com.pk',
      },
    ],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 90, 100], // Configure allowed image quality values
  },

  // 301 redirects for old URLs (Card Rummy -> Royal X Casino)
  async redirects() {
    return [
      { source: '/download', destination: '/royal-x-casino-download', permanent: true },
      { source: '/deposit-guide', destination: '/royal-x-casino-deposit-guide', permanent: true },
      { source: '/withdraw-guide', destination: '/royal-x-casino-withdraw-guide', permanent: true },
      { source: '/download-card-rummy', destination: '/royal-x-casino-download', permanent: true },
      { source: '/deposit-money-in-card-rummy', destination: '/royal-x-casino-deposit-guide', permanent: true },
      { source: '/withdraw-money-from-card-rummy', destination: '/royal-x-casino-withdraw-guide', permanent: true },
      { source: '/card-rummy-for-pc', destination: '/royal-x-casino-for-pc', permanent: true },
      { source: '/blog/royal-x-casino-for-ios-download-2026', destination: '/royal-x-casino-for-ios', permanent: true },
      { source: '/blog/royal-x-casino-old-versions-download-2026', destination: '/royal-x-casino-old-versions', permanent: true },
      { source: '/blog/how-to-register-royal-x-casino-2026', destination: '/how-to-register-royal-x-casino', permanent: true },
      { source: '/blog/how-to-login-royal-x-casino-2026', destination: '/how-to-login-royal-x-casino', permanent: true },
      { source: '/about-us', destination: '/royal-x-casino-about-us', permanent: true },
      { source: '/contact-us', destination: '/royal-x-casino-contact-us', permanent: true },
      { source: '/blog/card-rummy-app-review-2026', destination: '/blog/royal-x-casino-app-review-2026', permanent: true },
      { source: '/blog/is-card-rummy-real-or-fake', destination: '/blog/is-royal-x-casino-real-or-fake', permanent: true },
      { source: '/blog/how-to-use-card-rummy-app-pakistan-guide-2026', destination: '/blog/how-to-use-royal-x-casino-app-pakistan-guide-2026', permanent: true },
      { source: '/blog/create-card-rummy-account-and-login', destination: '/blog/royal-x-casino-create-account-and-login', permanent: true },
      { source: '/blog/create-account-login', destination: '/blog/royal-x-casino-create-account-and-login', permanent: true },
      { source: '/blog/tips-to-win-big-in-card-rummy', destination: '/blog/tips-to-win-big-in-royal-x-casino', permanent: true },
      { source: '/blog/card-rummy-tips-10-smart-tricks', destination: '/blog/royal-x-casino-tips-10-smart-tricks', permanent: true },
      { source: '/blog/dragon-vs-tiger-andar-bahar-high-payout-games', destination: '/blog/royal-x-casino-dragon-vs-tiger-andar-bahar-high-payout-games', permanent: true },
      { source: '/blog/card-rummy-bonuses-vip-guide', destination: '/blog/royal-x-casino-bonuses-vip-guide', permanent: true },
      { source: '/blog/is-card-rummy-safe-legal-pakistan', destination: '/blog/is-royal-x-casino-safe-legal-pakistan', permanent: true },
      { source: '/blog/responsible-gaming-guide-card-rummy', destination: '/blog/responsible-gaming-guide-royal-x-casino', permanent: true },
      { source: '/blog/3patti-blue-vs-card-rummy', destination: '/blog/3patti-blue-vs-royal-x-casino', permanent: true },
      { source: '/blog/3patti-gold-vs-card-rummy', destination: '/blog/3patti-gold-vs-royal-x-casino', permanent: true },
      { source: '/blog/3patti-lucky-vs-card-rummy', destination: '/blog/3patti-lucky-vs-royal-x-casino', permanent: true },
      { source: '/blog/3patti-room-vs-card-rummy', destination: '/blog/3patti-room-vs-royal-x-casino', permanent: true },
    ];
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
      // Redirect old 3Patti Blue logo to Royal X Casino logo
      {
        source: '/3-patti-blue-logo.webp',
        destination: '/royal-x-casino-logo.webp',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig 