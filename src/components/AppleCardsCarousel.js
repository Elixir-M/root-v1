"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-10 pb-10">
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
          __html: `At Elixir Multinational, we specialize in harnessing the power of blockchain to enhance
           transparency and security in your operations. Our expertise with Solidity, Hyperledger, and Ethereum enables
            us to develop tailored solutions that address your unique business challenges. By integrating blockchain technology,
             we help streamline processes, reduce fraud, and establish trust across your network. Partner with us to unlock the full
              potential of blockchain and drive innovation within your industry.<br /><br/>
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
          __html: `At Elixir Multinational, we specialize in crafting innovative, high-performance digital solutions tailored to your business needs. Whether it's mobile apps, web platforms, or desktop applications, our expert developers leverage the latest technologies to deliver seamless, scalable, and secure experiences.<br/><br/>
Our mobile development expertise spans iOS, Android, and cross-platform solutions, ensuring intuitive interfaces and smooth functionality. In web development, we create responsive, high-performing websites and custom applications that enhance your digital presence. From concept to deployment, we focus on user-centric designs, robust architecture, and cutting-edge features to bring your vision to life.<br/><br/>
Partner with us to elevate your brand with powerful, technology-driven solutions that drive engagement, efficiency, and growth. Let’s build something extraordinary together! 🚀
<br /><br/>
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
          __html: `Elixir Multinational harnesses the power of AI and Machine Learning
           to transform businesses with intelligent solutions. Our experts develop smart
            algorithms, predictive analytics, and automation tools that enhance efficiency
             and decision-making. From chatbots to deep learning models, we create AI-driven
              applications tailored to your needs. Stay ahead of the competition with cutting-edge technology that optimizes operations and drives growth. Let’s shape the future with AI! 🚀<br />
            <br/><strong>Tech/Tools:</strong> TensorFlow, PyTorch, Scikit-Learn, Keras, Hugging Face, Pandas, Apache Spark, OpenCV, Jupyter Notebooks, Google Cloud AI.`,
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
          __html: `Elixir Multinational empowers businesses with cutting-edge Internet of Things (IoT) solutions for seamless connectivity and automation. Our expertise spans smart devices, real-time data analytics, and secure IoT ecosystems that enhance efficiency and innovation. From industrial automation to smart homes, we develop scalable solutions tailored to your needs. Leverage the power of IoT to optimize operations and drive business growth. Let’s build a smarter, connected future together! 🚀<br />
           <br/> <strong>Tech/Tools:</strong> Raspberry Pi, Arduino, MQTT, Node-RED, Google Cloud IoT, AWS IoT, Microsoft Azure IoT, Zigbee, LoRaWAN.`,
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
          __html: `Elixir Multinational brings creativity to life with stunning graphic design solutions tailored to your brand. Our expert designers craft eye-catching visuals, logos, marketing materials, and UI/UX designs that captivate and engage your audience. Whether for digital or print, we ensure designs that leave a lasting impression. Elevate your brand identity with professional and innovative graphics. Let’s create visuals that inspire! 🎨🚀<br />
            <br/><strong>Tech/Tools:</strong>Adobe XD, Figma, Sketch, InVision, Illustrator, Photoshop, Zeplin, Principle, Marvel App.`,
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
          __html: `Elixir Multinational delivers top-tier Quality Assurance and Testing services to ensure flawless performance across applications and software. Our experts conduct rigorous testing, including functional, performance, security, and automation testing, to detect and eliminate bugs. We guarantee seamless user experiences with high reliability and efficiency. From startups to enterprises, we help you launch error-free, high-quality solutions. Let’s build perfection together! ✅🚀<br />
            <br/><strong>Tech/Tools:</strong> Selenium, JUnit, Appium, TestNG, Jenkins, Postman, Katalon Studio, LoadRunner, Cucumber, SonarQube.`,
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
          __html: `Elixir Multinational specializes in creating immersive and high-performance games across mobile, PC, and console platforms. Our expert developers and designers craft visually stunning, engaging, and interactive gaming experiences. From concept to launch, we use cutting-edge technology to bring your ideas to life. Whether it’s casual, AR/VR, or multiplayer games, we deliver seamless gameplay and innovation. Let’s build the next gaming sensation together! 🎮🚀<br />
            <br/><strong>Tech/Tools:</strong> Unity, Unreal Engine, Cocos2d, Blender, Autodesk Maya, Adobe Animate, VR/AR SDKs, GameMaker Studio, CryEngine.`,
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
          __html: `Elixir Multinational delivers smart and scalable Supply Chain Solutions to streamline operations and enhance productivity. Our expertise covers logistics management, inventory optimization, and real-time tracking for seamless workflow integration. Using cutting-edge technology and data-driven insights, we help businesses reduce costs and improve efficiency. Whether for retail, manufacturing, or distribution, we tailor solutions to meet your needs. Let’s build a smarter, more connected supply chain! 🚛📦🚀<br />
            <br/><strong>Tech/Tools:</strong> SAP SCM, Oracle SCM Cloud, Microsoft Dynamics 365, Tableau, IBM Watson Supply Chain, IoT Sensors, AI-driven Analytics, RPA.`,
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
          __html: `Elixir Multinational provides top-tier cybersecurity services to protect your business from evolving digital threats. Our experts specialize in threat detection, risk assessment, penetration testing, and data encryption to ensure maximum security. We safeguard your networks, applications, and sensitive data with cutting-edge cybersecurity solutions. Stay ahead of cyber risks with proactive protection and compliance-driven strategies. Let’s build a safer digital future together! 🔒🚀<br />
           <br/> <strong>Tech/Tools:</strong> Firewalls (Cisco, Palo Alto), SIEM Tools (Splunk, LogRhythm), Intrusion Detection Systems (Snort, Suricata), Endpoint Protection (CrowdStrike, McAfee), SSL/TLS, Encryption (AES, RSA), IAM Solutions (Okta, Auth0), Penetration Testing (Metasploit, Burp Suite).`,
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
          __html: `Elixir Multinational transforms businesses with cutting-edge digital marketing and branding solutions. From SEO and social media to content marketing and brand strategy, we craft compelling online experiences. Our data-driven approach ensures maximum visibility, engagement, and growth. Whether you're a startup or an established brand, we help you stand out in the digital world. Let’s create, innovate, and lead together! 🚀<br />
            <br/><strong>Tech/Tools:</strong> Google Analytics, Google Ads, Facebook Ads, HubSpot, SEMrush, Moz, Hootsuite, MailChimp, Canva, Ahrefs, Buffer.`,
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
          __html: `Elixir Multinational empowers businesses with cutting-edge cloud solutions for agility and efficiency. We offer cloud migration, storage, security, and infrastructure management tailored to your needs. Our solutions ensure scalability, cost-effectiveness, and seamless integration. Unlock the power of cloud computing with reliability and innovation. Future-proof your business with us today!<br />
           <br/> <strong>Tech/Tools:</strong> AWS EC2, Azure Virtual Machines, AWS S3, Azure Blob Storage, AWS Lambda, Azure Functions, Kubernetes, Docker, CloudFormation, Terraform, CI/CD Pipelines.`,
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
          __html: `Elixir Multinational specializes in seamless system integration to enhance business efficiency. We connect applications, data, and technology for smooth operations and scalability. Our expert solutions streamline workflows, reduce complexity, and boost performance. Whether cloud, on-premise, or hybrid, we ensure flawless connectivity. Experience seamless digital transformation with our integration expertise! 🚀<br />
            <br/><strong>Tech/Tools:</strong> MuleSoft, Apache Camel, Dell Boomi, Microsoft Power Automate, Zapier, API Management, GraphQL, REST APIs, ServiceNow, IBM Integration Bus.`,
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
    title: "Beyond Boundaries: Smarter, Safer Blockchain Solutions.",
    src: "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <BlockchainContent />,
  },
  {
    category: "Mobile & Web Application Development",
    title: "Transforming Ideas into Digital Excellence!",
    src: "https://images.unsplash.com/photo-1650636353551-1275516077b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DevContent />,
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    title: "Empowering Innovation with AI & Machine Learning!",
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AIMLContent />,
  },

  {
    category: "Internet of Things (IoT) Solutions",
    title: "Connecting the World, One Smart Device at a Time!",
    src: "https://images.unsplash.com/photo-1553341640-9397992456f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <IotContent />,
  },
  {
    category: "UI/UX Design & Graphic Design",
    title: "Designs That Speak, Brands That Shine!",
    src: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DesignContent />,
  },
  {
    category: "Quality Assurance & Software Testing",
    title: "Ensuring Perfection, One Test at a Time!",
    src: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <STContent />,
  },
  {
    category: "Game Development",
    title: "Bringing Imagination to Life with Epic Games!",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <GameDevContent />,
  },
  {
    category: "Supply Chain Management Solutions",
    title: "Optimizing Supply Chains, Maximizing Efficiency!",
    src: "https://plus.unsplash.com/premium_photo-1661919663903-ce7a9749883e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <SCMContent />,
  },
  {
    category: "Cybersecurity Solutions",
    title: "Securing Your Digital World, One Layer at a Time!",
    src: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CybersecContent />,
  },
  {
    category: "Digital Marketing & Brand Strategy",
    title: "Elevate Your Brand, Dominate Digital.",
    src: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DigitalMContent />,
  },
  {
    category: "Cloud Solutions (AWS & Azure)",
    title: "Seamless, Scalable, Secure – Cloud Done Right.",
    src: "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=3424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CloudContent />,
  },
  {
    category: "System Integration Services",
    title: "Unify. Optimize. Innovate.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <SystemIContent />,
  },
];
