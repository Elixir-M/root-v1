import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      replacement:
        "We simplify AI/ML for you with TensorFlow, PyTorch, and Generative AI for smarter solutions",
      original:
        "Does the complexity of AI/ML and the buzz around Generative AI leave you overwhelmed?",
    },
    {
      replacement:
        "Let us create stunning 3D websites with Three.js, React Three Fiber, and Next.js",
      original:
        "Do futuristic 3D websites captivate you, but seem too complex to implement?",
    },
    {
      replacement:
        "We can scale effortlessly with AWS ECS, Kubernetes, and microservices",
      original: "Do your applications struggle to scale with business growth?",
    },
    {
      replacement:
        "Oue expertise helps you stay secure with AI-driven protection, zero-trust, and real-time monitoring",
      original: "Cybersecurity & Data Protection?",
    },
    {
      replacement:
        "We unlock blockchain’s potential for you with Solidity, Hyperledger, and Ethereum",
      original:
        "Confused about how blockchain can revolutionize your industry?",
    },
    {
      replacement:
        "Build your dream team with experts in React, AI/ML, and Kubernetes",
      original:
        "Struggling to find the right tech talent for your company’s unique challenges?",
    },
  ];

  return <FocusCards cards={cards} />;
}
