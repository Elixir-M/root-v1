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
        serviceName="Blockchain Solutions"
        tagline="Beyond Boundaries: Smarter, Safer Blockchain Solutions."
        videoUrl="https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4"
        gradientshade="#000000"
      />
      <div className="relative w-full">
            <div className="absolute inset-0 bg-black" />
            <div className='relative z-10'>
                <ThreeDCardGrid>
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
              <ThreeDCard
                    imgSrc="/assets/img/solidity.jpg"
                    title="Solidity"
                    description="Empowering Blockchain Innovation"
                    // tryNowLink="https://example.com/1"
                    modalContent={{
                      // description: "Detailed modal description",
                      features: [
                        "Solidity is the primary programming language for developing smart contracts on blockchain platforms like Ethereum. Designed specifically for decentralized applications, Solidity allows developers to write secure, robust contracts that facilitate trustless transactions and automate complex processes. ",
                        "Its syntax, similar to JavaScript, makes it accessible to web developers transitioning to blockchain development. Solidity’s strong typing and contract-oriented features reduce vulnerabilities, ensuring safer deployments. ",
                        "With an ever-growing ecosystem, Solidity continues to evolve, driving innovation in decentralized finance, NFTs, and beyond. Harness the power of blockchain with Solidity, and build next-generation applications that redefine how we interact, transact, and trust in the digital world."
                      ],
                      // expandedImage:"https://images.unsplash.com/photo-1735767975829-71496633d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",  // Different image for modal
                      deployedLink: "https://your-deployed-site.com"  // Link to Project
                    }}
                />
                </ThreeDCardGrid>
            </div>
          </div>
          

          <div>   
          <ServiceSection
            heading="Blockchain technology is reshaping industries by offering security, transparency, and decentralization. Our blockchain services include:"
            // description="In an era characterized by unprecedented technological advancement, digital transformation trends like the pervasive influence of AI have become a focal point for businesses worldwide. As we explore the impact of AI on organizations, the data reveals an overwhelming trend as the vast majority strategically prioritize AI integration."
            description = {[
              "Smart Contract Development: Automate processes without intermediaries.",
              "Decentralized Applications (DApps): Secure and efficient blockchain applications.",
              "Token & Cryptocurrency Development: Secure, scalable digital assets.",
              "NFT Development: Build and manage unique digital assets.",
              "Blockchain Consulting & Auditing: Optimize blockchain strategies for businesses."
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

          
          <CaseStudyGrid service="blockchain" />

     
      
     

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Page;


