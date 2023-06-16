/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://nextjs-13-full-stack-ecommerce.vercel.app",
    MONGODB_URI:
      "",
    NEXTAUTH_SECRET: "",
    NEXTAUTH_URL: "https://nextjs-13-full-stack-ecommerce.vercel.app",
    CLOUDINARY_URL:
      "",
    CLOUDINARY_PRESET: "",
    CLOUDINARY_NAME: "",
    PAYPAL_CLIENT_ID:
      "",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/msa-programing/**",
      },
    ],
  },
  // webpack(config) {
  //   config.experiments = {
  //     ...config.experiments,
  //     topLevelAwait: true,
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
