// next.config.js
module.exports = {
  // Add custom Webpack configuration here if needed
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // For example, to load SVG files using 'file-loader':
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static/images", // Adjust this path as needed
            outputPath: "static/images", // Adjust this path as needed
          },
        },
      ],
    });

    return config;
  },

  // Configure page extensions for hot-reloading
  pageExtensions: ["js", "jsx", "ts", "tsx"],

  // Add any other custom configuration options here
};
