/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // Nếu bạn cần xuất sang static site
    images: {
      unoptimized: true, // Tắt tối ưu hóa hình ảnh
    },
  };
  
  module.exports = nextConfig;