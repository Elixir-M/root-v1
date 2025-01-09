// import React from "react";
// import CustomVid from "@/components/CustomVid";
// import Footer from "@/components/Footer";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
// import { WobbleCardDemo } from "@/components/WobbleCard";
// import ThreeDServices from "@/components/3DElement";
// import { ThreeDCard, ThreeDCardGrid } from "@/components/3DCardEffect";
// import { Navbar } from "@/components/Navbar";
// import ThreeDimage from "@/components/3DImageGaming";

// const projects = [
//   {
//     title: "Stripe",
//     description:
//       "A technology company that builds economic infrastructure for the internet.",
//     link: "https://stripe.com",
//   },
//   {
//     title: "Netflix",
//     description:
//       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//     link: "https://netflix.com",
//   },
//   {
//     title: "Google",
//     description:
//       "A multinational technology company that specializes in Internet-related services and products.",
//     link: "https://google.com",
//   },
//   {
//     title: "Meta",
//     description:
//       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//     link: "https://meta.com",
//   },
//   {
//     title: "Amazon",
//     description:
//       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//     link: "https://amazon.com",
//   },
//   {
//     title: "Microsoft",
//     description:
//       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//     link: "https://microsoft.com",
//   },
// ];

// const testimonials = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: "Sarah Chen",
//     designation: "Product Manager at TechFlow",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: "Michael Rodriguez",
//     designation: "CTO at InnovateSphere",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: "Emily Watson",
//     designation: "Operations Director at CloudScale",
//     src: "https://i.pinimg.com/236x/e8/3a/da/e83adaaef8a50e459426d7d3c28b3947.jpg",
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: "James Kim",
//     designation: "Engineering Lead at DataPro",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//     name: "Lisa Thompson",
//     designation: "VP of Technology at FutureNet",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const Page = () => {
//   return (
//     <div className="bg-black text-white">
//       <Navbar className="top-2"/>
//       {/* Hero Section */}
//       <CustomVid
//         videoSrc="https://videos.pexels.com/video-files/5223113/5223113-hd_2560_1440_30fps.mp4"
//         heading="CyberSecurity"
//         content="Elixir provides comprehensive cybersecurity services to safeguard your business in today's increasingly digital landscape.
//               Our team of experts delivers a wide range of solutions, including advanced threat detection and response, vulnerability assessments, penetration testing,
//               and the implementation of robust security controls. By leveraging cutting-edge technologies and adhering to industry best practices, we proactively identify
//               and mitigate potential risks, ensuring your data, systems, and reputation remain protected. With Elixir, you can experience peace of mind knowing your digital
//               assets are in capable hands and your business is well-equipped to withstand evolving cyber threats."
//       />

//       {/* Projects Section */}
//       {/* <div className="container mx-auto py-16 px-4 sm:px-8 lg:px-16">
//         <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
//             >
//               <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
//               <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 Visit {project.title}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div> */}

//       {/* 3D Card Section */}
//       <ThreeDCardGrid>
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//              <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />   
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
//               <ThreeDCard
//                   imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//                   title="First Card"
//                   description="Description for first card"
//                   tryNowLink="https://example.com/1"
//               />
                
//               </ThreeDCardGrid>
//       <ThreeDimage />        
//       {/* <ThreeDCardDemo /> */}
//       {/* <AnimatedTestimonials  testimonials={testimonials} /> */}
//       <ThreeDServices/>
//       <WobbleCardDemo/>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;
