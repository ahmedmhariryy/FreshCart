import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  // (https://ecommerce.routemisr.com/Route-Academy-brands/1678286824747.png
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-products/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-categories/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-brands/**',
      },
    ],
  },
};

export default nextConfig;
