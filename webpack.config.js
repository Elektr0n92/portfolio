module.exports = {
  // ...
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
  },
  // ...
};
