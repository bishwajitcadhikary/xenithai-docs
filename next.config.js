const withNextra = require('nextra')({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
})

module.exports = withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
})