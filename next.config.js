const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  //   output: "export",
  webpack: (config, options) => {
    // Broken: https://github.com/vercel/next.js/issues/44524
    // config.module.rules.push({
    //     test: /\.(pdf)$/,
    //     type: 'asset/resource',
    // });
    config.module.rules.push({
      test: /\.(wasm)$/,
      type: "asset/resource",
    });
    // config.module.rules.push({
    //   test: /\.wasm$/,
    //   use: ["url-loader"],
    // });
    return config;
  },
};

module.exports = nextConfig;
