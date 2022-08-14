/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  swcMinify: true,
}

module.exports = nextConfig
