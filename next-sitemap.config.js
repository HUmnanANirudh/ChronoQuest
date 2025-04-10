/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.chronoquest.xyz',
  generateRobotsTxt: true,
  sitemapSize: 1,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/404', '/server-error'],
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    return null;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: ['https://www.chronoquest.xyz/sitemap.xml'],
  },
}
