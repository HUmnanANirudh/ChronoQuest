/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.chronoquest.xyz',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1.0,
  exclude: ['/404', '/server-error'],
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2,
      },
    ],
  },
};
