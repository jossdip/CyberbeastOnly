/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'hips.hearstapps.com',
        port: '',
        pathname: '**',
      },
    ],
    domains: [
      'upload.wikimedia.org',
      'hips.hearstapps.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/rentals/:path*',
        destination: 'https://rentals.wattevillegroup.ch/:path*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cyberbeast',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
