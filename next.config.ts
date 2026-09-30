/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/web-portofolio', // Aktifkan jika nama repo di GitHub adalah web-portofolio
  allowedDevOrigins: ['192.168.56.102', 'localhost'],
};

export default nextConfig;