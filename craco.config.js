module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        // Ajoutez d'autres plugins PostCSS au besoin
      ],
    },
  },
};
