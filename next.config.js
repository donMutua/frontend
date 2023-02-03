/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "localhost",
      "farm9.staticflickr.com",
      "farm8.staticflickr.com",
      "farm1.staticflickr.com",
      "farm2.staticflickr.com",
      "farm3.staticflickr.com",
      "farm4.staticflickr.com",
      "farm5.staticflickr.com",
      "farm6.staticflickr.com",
      "farm7.staticflickr.com",
      "farm10.staticflickr.com",
      "live.staticflickr.com",
    ],
  },
};

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  ...nextConfig,
  publicRuntimeConfig: {
    API_URL: isProduction
      ? "https://spacex-api-v4to.onrender.com/api/v1"
      : "http://localhost:4000/api/v1",
  },
};
