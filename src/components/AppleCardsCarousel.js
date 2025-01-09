"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        What We Offer
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const BlockchainContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Leverage the power of decentralized technologies to enhance security, streamline operations, and innovate business processes. With blockchain, ensure trust and transparency in transactions, automate processes through smart contracts, and reduce dependency on intermediaries.<br />
            <strong>Tech/Tools:</strong> Solidity, Ethereum, Hyperledger, Web3.js, IPFS, Truffle Suite, Chainlink.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const DevContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Crafting seamless, user-friendly mobile and web applications tailored to your business needs with advanced features. Our team ensures optimized performance, intuitive UI/UX, and cross-platform compatibility.
             From mobile-first applications to enterprise-grade web solutions, we provide end-to-end development.<br />
            <strong>Tech/Tools:</strong> React, Vue.js, Angular, Flutter, React Native, Node.js, Express.js, MongoDB, Swift, Kotlin.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const AIMLContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Unlock the potential of data-driven insights, predictive analytics, and automation to solve complex challenges and enhance decision-making. We build advanced AI/ML models that leverage big data for smarter predictions,
             automation, and insights, empowering businesses to make data-driven decisions.<br />
            <strong>Tech/Tools:</strong> TensorFlow, PyTorch, Scikit-Learn, Keras, Hugging Face, Pandas, Apache Spark, OpenCV, Jupyter Notebooks, Google Cloud AI.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const IotContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Enable smart devices to communicate, optimize operations, and drive innovation with IoT solutions that provide real-time data and control. We create
             custom IoT systems that connect physical devices to the internet, enabling automation, real-time data collection, and remote control.<br />
            <strong>Tech/Tools:</strong> Raspberry Pi, Arduino, MQTT, Node-RED, Google Cloud IoT, AWS IoT, Microsoft Azure IoT, Zigbee, LoRaWAN.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const DesignContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Creating visually appealing and intuitive designs that elevate user experience and engage your audience across
             digital platforms. Our designs are focused on simplicity, user-centric interactions, and maximizing conversions through aesthetically pleasing interfaces and graphics.<br />
            <strong>Tech/Tools:</strong>Adobe XD, Figma, Sketch, InVision, Illustrator, Photoshop, Zeplin, Principle, Marvel App.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const STContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Delivering Excellence Through Rigorous Testing Ensure the highest quality of your software with comprehensive testing
             services that identify and resolve issues, ensuring flawless performance. We perform unit testing, integration testing, regression testing, and performance testing to make sure your solution works seamlessly.<br />
            <strong>Tech/Tools:</strong> Selenium, JUnit, Appium, TestNG, Jenkins, Postman, Katalon Studio, LoadRunner, Cucumber, SonarQube.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const GameDevContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Design and develop interactive and engaging games that captivate audiences, with cutting-edge graphics and
             intuitive gameplay. We create fully immersive, high-performance games across different platforms, from mobile to PC and VR/AR.<br />
            <strong>Tech/Tools:</strong> Unity, Unreal Engine, Cocos2d, Blender, Autodesk Maya, Adobe Animate, VR/AR SDKs, GameMaker Studio, CryEngine.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const SCMContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Streamline your supply chain processes with innovative technology solutions that ensure efficiency, reduce costs, and enhance performance.
           Our solutions provide real-time tracking, demand forecasting, and optimized inventory management for smoother and more efficient operations.<br />
            <strong>Tech/Tools:</strong> SAP SCM, Oracle SCM Cloud, Microsoft Dynamics 365, Tableau, IBM Watson Supply Chain, IoT Sensors, AI-driven Analytics, RPA.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const CybersecContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Fortify your digital asset designed to prevent breaches, data loss, and cyberattacks. Our proactive approach includes threat detection, encryption, vulnerability assessments,
 and 24/7 monitoring to safeguard your systems.<br />
            <strong>Tech/Tools:</strong> Firewalls (Cisco, Palo Alto), SIEM Tools (Splunk, LogRhythm), Intrusion Detection Systems (Snort, Suricata), Endpoint Protection (CrowdStrike, McAfee), SSL/TLS, Encryption (AES, RSA), IAM Solutions (Okta, Auth0), Penetration Testing (Metasploit, Burp Suite).`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const DigitalMContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Crafting impactful digital marketing strategies and branding solutions that amplify your brand’s presence and drive customer engagement. Our
           services include SEO, content marketing, social media strategies, and online advertising, tailored to boost your business visibility and performance.<br />
            <strong>Tech/Tools:</strong> Google Analytics, Google Ads, Facebook Ads, HubSpot, SEMrush, Moz, Hootsuite, MailChimp, Canva, Ahrefs, Buffer.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const CloudContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Harness the power of cloud computing with flexible, reliable, and secure solutions on AWS and Azure to enhance performance and scalability.
           We design and deploy cloud-native applications that ensure seamless scalability and cost optimization for businesses of all sizes.<br />
            <strong>Tech/Tools:</strong> AWS EC2, Azure Virtual Machines, AWS S3, Azure Blob Storage, AWS Lambda, Azure Functions, Kubernetes, Docker, CloudFormation, Terraform, CI/CD Pipelines.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const SystemIContent = () => {
  return (
    <div className="bg-gradient-to-b backdrop-blur-3xl from-blue-400 to-violet-400 p-8 md:p-14 rounded-3xl mb-4">
      <p
        dangerouslySetInnerHTML={{
          __html: `Ensure all your systems work harmoniously with our expert integration services, optimizing workflows and data flow across platforms. Whether it’s connecting legacy
           systems or integrating modern SaaS solutions, we create cohesive ecosystems that maximize operational efficiency.<br />
            <strong>Tech/Tools:</strong> MuleSoft, Apache Camel, Dell Boomi, Microsoft Power Automate, Zapier, API Management, GraphQL, REST APIs, ServiceNow, IBM Integration Bus.`,
        }}
        className=" text-white text-base md:text-2xl font-sans max-w-3xl mx-auto"
      ></p>
      <Image
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
// const DummyContent = () => {
//   return (<>
//     {[...new Array(3).fill(1)].map((_, index) => {
//       return (
//         (<div
//           key={"dummy-content" + index}
//           className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
//           <p
//             className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//             <span className="font-bold text-neutral-700 dark:text-neutral-200">
//               The first rule of Apple club is that you boast about Apple club.
//             </span>{" "}
//             Keep a journal, quickly jot down a grocery list, and take amazing
//             class notes. Want to convert those notes to text? No problem.
//             Langotiya jeetu ka mara hua yaar is ready to capture every
//             thought.
//           </p>
//           <Image
//             src="https://assets.aceternity.com/macbook.png"
//             alt="Macbook mockup from Aceternity UI"
//             height="500"
//             width="500"
//             className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
//         </div>)
//       );
//     })}
//   </>);
// };

const data = [
  {
    category: "Blockchain Solutions",
    title: "Transforming Transparency and Security",
    src: "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <BlockchainContent />,
  },
  {
    category: "Mobile & Web Application Development",
    title: "Custom Apps That Drive Success",
    src: "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DevContent />,
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    title: "Intelligent Solutions for a Smarter Future",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AIMLContent />,
  },

  {
    category: "Internet of Things (IoT) Solutions",
    title: "Connecting the World, One Device at a Time",
    src: "https://images.unsplash.com/photo-1553341640-9397992456f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <IotContent />,
  },
  {
    category: "UI/UX Design & Graphic Design",
    title: "Design That Captivates and Converts",
    src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DesignContent />,
  },
  {
    category: "Quality Assurance & Software Testing",
    title: "Delivering Excellence Through Rigorous Testing",
    src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <STContent />,
  },
  {
    category: "Game Development",
    title: "Immersive Experiences, Exceptional Gameplay",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GameDevContent />,
  },
  {
    category: "Supply Chain Management Solutions",
    title: "Optimizing Efficiency, Redefining Logistics",
    src: "https://plus.unsplash.com/premium_photo-1661919663903-ce7a9749883e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <SCMContent />,
  },
  {
    category: "Cybersecurity Solutions",
    title: "Protecting What Matters Most",
    src: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CybersecContent />,
  },
  {
    category: "Digital Marketing & Brand Strategy",
    title: "Empowering Brands in the Digital Age",
    src: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DigitalMContent />,
  },
  {
    category: "Cloud Solutions (AWS & Azure)",
    title: "Scalable, Secure, and Agile Cloud Services",
    src: "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CloudContent />,
  },
  {
    category: "System Integration Services",
    title: "Seamless Integration, Maximum Efficiency",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <SystemIContent />,
  },
];
