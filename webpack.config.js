const Dotenv = require("dotenv-webpack");

module.exports = {
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: "./postcss.config.js", // Chemin vers le fichier de configuration PostCSS
              },
            },
          },
        ],
      },
    ],
    plugins: [
      new Dotenv(),
      // ...
    ],
  },
  // ...
};
