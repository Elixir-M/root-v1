// import React from "react";
// import CustomVid from "@/components/CustomVid";
// import Footer from "@/components/Footer";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
// import { ThreeDCard, ThreeDCardGrid } from "@/components/3DCardEffect";
// import { WobbleCardDemo } from "@/components/WobbleCard";
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
//         videoSrc="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
//         heading="Web Development"
//         content="Elixir offers exceptional web development services designed to elevate your business in today's dynamic digital environment. Our team of skilled developers delivers a broad spectrum of solutions, including custom website design, responsive and mobile-first development, e-commerce platforms, and seamless API integrations. By utilizing the latest technologies and following industry-leading practices, we create visually stunning, high-performing, and secure websites tailored to your unique needs. With Elixir, you can transform your online presence, enhance user experiences, and drive business growth with a reliable partner dedicated to bringing your vision to life."
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
//         <ThreeDCardGrid>
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//        <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />   
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
//         <ThreeDCard
//             imgSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             title="First Card"
//             description="Description for first card"
//             tryNowLink="https://example.com/1"
//         />
          
//         </ThreeDCardGrid>

//         <ThreeDimage />
//       {/* 3D Card Section */}
//       <ThreeDCardDemo />
      
//       {/* <AnimatedTestimonials  testimonials={testimonials} /> */}
//       <WobbleCardDemo/>

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;
