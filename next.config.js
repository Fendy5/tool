/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build'
  reactStrictMode: true,
  transpilePackages: ['antd'],
  output: 'standalone'
}

module.exports = nextConfig
