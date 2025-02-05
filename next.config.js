/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Apply to all pages
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // Allows indexing and following links
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
