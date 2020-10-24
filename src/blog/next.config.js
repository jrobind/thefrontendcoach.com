const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  basePath: '/blog',
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
