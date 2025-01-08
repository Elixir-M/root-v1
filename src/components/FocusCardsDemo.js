import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      replacement:
        "Demystify AI/ML with us! Our team leverages cutting-edge tools like TensorFlow, PyTorch, and Hugging Face to integrate AI into your business workflows seamlessly. From Generative AI (ChatGPT, DALL·E) for personalized customer interactions to predictive analytics and deep learning algorithms, we build solutions that revolutionize decision-making and unlock new business opportunities.",
      original:
        "Does the complexity of AI/ML and the buzz around Generative AI leave you overwhelmed?",
    },
    {
      replacement:
        "Turn your vision into reality with our expertise in Three.js, React Three Fiber, Next.js, and Node.js. From interactive 3D models to immersive animations, we’ll create visually stunning websites that make your brand stand out. Flaunt your digital presence and captivate your audience with cutting-edge web technology.",
      original:
        "Do futuristic 3D websites captivate you, but seem too complex to implement?",
    },
    {
      replacement:
        "Don’t let outdated infrastructure hold you back. Our team specializes in AWS ECS, Kubernetes, Azure DevOps, and Google Cloud to design cloud-native applications that are scalable, resilient, and cost-efficient. Leveraging microservices architecture, serverless computing, and CI/CD pipelines, we future-proof your business operations while optimizing costs.",
      original: "Do your applications struggle to scale with business growth?",
    },
    {
      replacement:
        "Stay one step ahead with our AI-enhanced cybersecurity solutions. Our team employs GraphQL security layers, zero-trust architectures, and real-time threat intelligence to secure your digital assets. From data encryption to 24/7 monitoring systems, we ensure your systems remain impervious to evolving cyber threats.",
      original: "Cybersecurity & Data Protection?",
    },
    {
      replacement:
        "Our experts demystify blockchain for you! With proficiency in Solidity, Hyperledger, Ethereum, and Web3.js, we create secure, decentralized solutions tailored to your needs. Whether it’s building transparent supply chains or deploying DeFi solutions, we help you harness blockchain’s potential with ease. ",
      original:
        "Confused about how blockchain can revolutionize your industry?",
    },
    {
      replacement:
        "Build your dream team with us! We provide access to a global pool of certified experts in technologies like React, Next.js, Node.js, AI/ML, and Kubernetes. Need specialists in Generative AI, AR/VR, or IoT ecosystems? We’ve got you covered! Whether it’s project-based support or long-term hires, we ensure you onboard professionals with the right skill set to supercharge your innovation and growth.",
      original:
        "Struggling to find the right tech talent for your company’s unique challenges?",
    },
  ];

  return <FocusCards cards={cards} />;
}
