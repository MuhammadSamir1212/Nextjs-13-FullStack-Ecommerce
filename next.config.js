/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://nextjs-13-full-stack-ecommerce.vercel.app/",
    MONGODB_URI:
      "mongodb+srv://muhammad:H6lXIHKl53hR0p9K@cluster0.k6foovo.mongodb.net/next13-ecommarce?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "msaprogramming",
    NEXTAUTH_URL: "https://nextjs-13-full-stack-ecommerce.vercel.app/",
    CLOUDINARY_URL:
      "https://api.cloudinary.com/v1_1/msa-programing/image/upload",
    CLOUDINARY_PRESET: "msa-programming",
    CLOUDINARY_NAME: "msa-programing",
    PAYPAL_CLIENT_ID:
      "AW7fuiuwWy6K9w5AkxTUv2I1Y5XAwO7aFwlqJPxyw0Mhdc2eHI3DqmNZcqw9WWjbp-t-SOLjyer-3wmf",
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
