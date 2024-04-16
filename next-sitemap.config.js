/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sellluxurywatch.my",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
