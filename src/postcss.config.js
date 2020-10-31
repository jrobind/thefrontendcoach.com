module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  plugins: [
    "postcss-import",
    "tailwindcss",
    ["postcss-preset-env", { stage: 1 }],
  ],
}