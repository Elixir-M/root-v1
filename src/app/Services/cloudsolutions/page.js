import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ThreeDCardGrid, ThreeDCard } from "@/components/3DCardEffect";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <ServicePageTemplate 
        serviceName="Cloud Solutions"
        tagline="Empowering Tomorrow with Secure and Scalable Cloud Solutions"
        videoUrl="https://videos.pexels.com/video-files/7565438/7565438-hd_1080_1920_25fps.mp4"
        gradientshade="#001219"
      />
      <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001219] via-[#001219] to-black" />
            <div className='relative z-10'>
                <ThreeDCardGrid>
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
              <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                <ThreeDCard
                    imgSrc="https://images.unsplash.com/photo-1735064812359-b0dde30d4323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
                    title="First Card"
                    description="Description for first card"
                    tryNowLink="https://example.com/1"
                    modalContent={{
                      description: "Detailed modal description",
                      features: [
                        "Feature point 1",
                        "Feature point 2",
                        "Feature point 3"
                      ],
                      expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Live site link
                    }}
                />
                </ThreeDCardGrid>
            </div>
          </div>
          <CaseStudyGrid service="cloud solutions" />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


