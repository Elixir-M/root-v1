// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       domains: ["imgs.search.brave.com", "images.unsplash.com","i.pinimg.com","assets.aceternity.com" , "images.remotePatterns", "plus.unsplash.com"],
//       // Add your allowed image domains here
//     },
//     reactStrictMode: true,
//     // swcMinify: true,
//   };

//   export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "imgs.search.brave.com", 
      "images.unsplash.com",
      "i.pinimg.com",
      "assets.aceternity.com", 
      "images.remotePatterns", 
      "plus.unsplash.com",
      "res.cloudinary.com"  // Add Cloudinary domain
    ],
  },
  reactStrictMode: true,
  // swcMinify: true,
  
  async headers() {
    return [
      {
        source: '/api/upload',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'POST' },
        ],
      },
    ];
  },
};

export default nextConfig;