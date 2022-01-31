module.exports = {
  webpack(config) {
    config.externals["node:buffer"]
    return config;
  },
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  }
}