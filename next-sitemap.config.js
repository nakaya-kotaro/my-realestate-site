/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://smart-living-jp.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // 特定ページごとにオプションを上書き
  transform: async (config, path) => {
    let changefreq = 'monthly';
    let priority = 0.6;

    if (path === '/') {
      changefreq = 'monthly';
      priority = 1.0;
    } else if (path === '/company') {
      changefreq = 'yearly';
      priority = 0.7;
    } else if (path === '/contact') {
      changefreq = 'yearly';
      priority = 0.5;
    } else if (path === '/privacy-policy') {
      changefreq = 'yearly';
      priority = 0.4;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
