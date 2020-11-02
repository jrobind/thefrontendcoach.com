const fs = require('fs');

const globby = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*{.js,.md}',
    'posts/**/*{.js,.md}',
    '!pages/_*.js',
    '!pages/blog/[slug].js',
    '!pages/api'
  ]);
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.js', '')
            .replace('.md', '')
            .replace('posts', '/blog')
            .replace('index', '');
          const route = path === '/index' ? '' : path;
          console.log(page)

          return `
            <url>
                <loc>${`https://thefrontendcoach.com${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
