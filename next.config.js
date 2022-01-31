module.exports = {
  webpack(config) {
    config.externals["node:buffer"]
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.infura.io']
  }
}