module.exports = {
  plugins: [
    // Should use as the first plugin of the list
    "postcss-import",
    "tailwindcss",
    /**
     * Stage 0: Aspirational - This is a crazy idea.
     * Stage 1: Experimental - This idea might not be crazy.
     * Stage 2: Allowable - This idea is not crazy. (Default)
     * Stage 3: Embraced - This idea is becoming part of the web.
     * Stage 4: Standardized - This idea is part of the web.
     * https://cssdb.org/#staging-process
     */
    ["postcss-preset-env", { stage: 1 }],

    // Alternative to `postcss-preset-env`
    // "postcss-nesting",
    // "autoprefixer",
  ],
}