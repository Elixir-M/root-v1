/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["imgs.search.brave.com", "images.unsplash.com","i.pinimg.com","assets.aceternity.com" , "images.remotePatterns"],
      // Add your allowed image domains here
    },
    reactStrictMode: true,
    swcMinify: true,
  };

  export default nextConfig;
