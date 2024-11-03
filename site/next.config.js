/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Vivabyte IT Solutions',
    description: 'The official place for our Kasm Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://vivabyteitsolutions.github.io/kasm-registry/',
    contactUrl: 'https://github.com/vivabyteitsolutions/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
