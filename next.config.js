/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nextConfig = {
    webpack(config) {
        config.plugins.push(
          new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/sw.js',
                    to: './public/sw.js',
                  },
            ],
          })
        );
        return config;
      },
    output: 'export'
}

module.exports = nextConfig
