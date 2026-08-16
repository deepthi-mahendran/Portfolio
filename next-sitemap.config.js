/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://deepthi-mahendran.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
