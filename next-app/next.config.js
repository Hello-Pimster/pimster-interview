/**  @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["live.staticflickr.com", "images2.imgbox.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
