/** @type {import('next').NextConfig} */

const nextConfig = {
  // distDir: 'build'
  reactStrictMode: true,
  transpilePackages: ['antd'],
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/dev-api/:path*',
        destination: `http://localhost:8000/:path*` // 将请求转发到目标服务器
      }
    ]
  }
}

module.exports = nextConfig
