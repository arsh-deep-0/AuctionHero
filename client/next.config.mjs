/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:slug*',
          destination: 'http://localhost:8080/api/:slug*',
        },
      ];
    },
  };
  
  export default nextConfig;