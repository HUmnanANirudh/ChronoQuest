/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.chronoquest.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 1000,
  exclude: ['/404', '/server-error'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      'https://www.chronoquest.xyz/sitemap.xml',
    ],
  },
}
