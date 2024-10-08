/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/sw.js",
            to: "./public/sw.js",
          },
          {
            from: "./public/about-bmi.htm",
            to: "./public/about-bmi.htm",
          },
          {
            from: "./public/benefits-of-healthy-bmi.htm",
            to: "./public/benefits-of-healthy-bmi.htm",
          },
          {
            from: "./public/bmi-and-body-types.htm",
            to: "./public/bmi-and-body-types.htm",
          },
          {
            from: "./public/bmi-and-children.htm",
            to: "./public/bmi-and-children.htm",
          },
          {
            from: "./public/bmi-myths.htm",
            to: "./public/bmi-myths.htm",
          },
          {
            from: "./public/health-risks-high-bmi.htm",
            to: "./public/health-risks-hight-bmi.htm",
          },
          {
            from: "./public/lower-your-bmi.htm",
            to: "./public/lower-your-bmi.htm",
          },
        ],
      })
    );
    return config;
  },
  output: 'export'
};

module.exports = nextConfig;
