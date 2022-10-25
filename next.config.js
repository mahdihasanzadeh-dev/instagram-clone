/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cloudflare-ipfs.com', 'lh3.googleusercontent.com', 'firebasestorage.googleapis.com'],
    },
  };
  
  module.exports = nextConfig;
  