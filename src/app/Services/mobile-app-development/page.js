import React from "react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ThreeDCardGrid, ThreeDCard } from "@/components/3DCardEffect";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import ServiceSection from "@/components/ServicesContent";


const Page = () => {
  return (
    <div className="bg-black text-white">
      <Navbar className="top-2"/>

      <ServicePageTemplate 
        serviceName="Mobile Application Development"
        tagline="Transforming Ideas into Digital Excellence"
        videoUrl="https://videos.pexels.com/video-files/13522186/13522186-uhd_2560_1440_25fps.mp4"
        gradientshade="#000000"
      />
      <div className="relative w-full">
            <div className="absolute inset-0 bg-black" />
            <div className='relative z-10'>
                {/* <ThreeDCardGrid>
                <ThreeDCard
                    imgSrc="/assets/img/SmartContracts.avif"
                    title="Smart Contracts"
                    description="Automating Trust"
                    // tryNowLink="https://example.com/1"
                    modalContent={{
                      // description: "Detailed modal description",
                      features: [
                        "Smart contracts are transforming how agreements are executed by automating transactions and enforcing contract terms on blockchain networks. These self-executing contracts eliminate intermediaries, reducing costs and ensuring transparency.",
                        "Once deployed, smart contracts operate autonomously, executing predefined conditions securely and immutably. They play a pivotal role in decentralizing finance (DeFi), supply chain management, and digital identity verification, among other applications. ",
                        "With smart contracts, trust is built into the code, mitigating risks associated with traditional contract management. Embrace automation, enhance security, and unlock new business potentials by integrating smart contracts into your digital strategy."
                      ],
                      // expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Link to Poject
                    }}
                />
                </ThreeDCardGrid> */}
            </div>
          </div>
          

          <div>   
          <ServiceSection
            heading="We build high-performance mobile applications tailored to business needs:"
            // description="In an era characterized by unprecedented technological advancement, digital transformation trends like the pervasive influence of AI have become a focal point for businesses worldwide. As we explore the impact of AI on organizations, the data reveals an overwhelming trend as the vast majority strategically prioritize AI integration."
            description = {[
              "Native & Cross-Platform Apps: iOS, Android, and hybrid solutions.",
              "UI/UX Design: Engaging, user-friendly interfaces.",
              "Enterprise Mobility Solutions: Custom business applications.",
                "AI & IoT-Enabled Apps: Smart functionalities for enhanced performance.",
                "App Maintenance & Support: Continuous optimization and updates."


            ]}
            
            animateFrom="left"
            image1Path="/assets/img/e-logo.png"
            image2Path="/assets/img/Elixir_Logo.png"
            image1Size={{ width: 200, height: 200 }}
            image2Size={{ width: 150, height: 150 }}
            image1Position={{ top: '20%' }}
            image2Position={{ bottom: '20%' }}
          />
          </div>

          
          <CaseStudyGrid service="mobile dev" />

     
      
     

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


