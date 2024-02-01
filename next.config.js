/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname:  'wallpapercave.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname:  'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
        },
      };
      return config;
    },
}

module.exports = nextConfig
