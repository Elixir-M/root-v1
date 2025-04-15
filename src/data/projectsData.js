// data/projectsData.js

const projectsData = {
  blockchain: [
    {
      id: "study-dao",
      image: "/assets/img/studydao.png",
      title: "StudyDAO",
      description:
        "Decentralized educational platform leveraging blockchain for transparent knowledge sharing",
      gallery: ["/assets/img/studydao.png", "/assets/img/e-logo.png"],

      techStacks: [
        { name: "Solidity", color: "#f3ba2f" },
        { name: "React", color: "#61dafb" },
      ],
      para1: "We built a robust and scalable crypto wallet.",
      para2: "It supports multiple currencies with real-time sync.",
      para3: "Security was our top priority with 2FA and cold storage.",
      stats: [
        { label: "Active Users", value: "150K+" },
        { label: "Transactions per Day", value: "5K" },
      ],
    },
    {
      id: "nft",
      image: "/assets/img/studydao.png",
      title: "NFT Marketplace",
      description:
        "Decentralized educational platform leveraging blockchain for transparent knowledge sharing",
      gallery: ["/assets/img/studydao.png", "/assets/img/e-logo.png"],

      techStacks: [
        { name: "Solidity", color: "#f3ba2f" },
        { name: "Ethers.js", color: "#61dafb" },
        { name: "MongoDB", color: "#61dafb" },
      ],
      para1: `<p>A Web3 startup planned to launch an NFT marketplace on the Polygon blockchain but needed an intuitive, visually appealing, and secure front-end application. Users needed to easily connect their wallets, browse NFTs, view details (metadata, ownership history), place bids, buy/sell items, and mint new NFTs, all while interacting seamlessly with the underlying smart contracts.</p>
      <br/><p>To address the startup’s need for an intuitive and secure NFT marketplace on the Polygon blockchain, 
    <strong>Elixir</strong> designed and developed a fully responsive front-end application using 
    <strong>React and Tailwind CSS</strong>, drawing inspiration from proven marketplace UI/UX patterns 
    to ensure ease of navigation and aesthetic appeal.
  </p>`,
      para2: `<p>
  <p>
    We integrated <strong>ethers.js</strong> for seamless wallet connectivity (supporting MetaMask and WalletConnect), 
    enabling users to authenticate, browse NFTs, and interact with the platform in real-time. Smart contract interactions 
    such as <em>bidding, buying/selling, minting, and ownership transfers</em> were handled directly via the front end, 
    with robust error handling and transaction state tracking implemented for transparency and usability.
  </p>

  <p>
    To ensure decentralized and tamper-proof asset storage, NFT metadata and images were uploaded to 
    <strong>IPFS via Pinata</strong>, with appropriate content hashing and fallback mechanisms to handle link failures 
    gracefully. The platform dynamically fetches and displays token metadata, real-time pricing, and ownership history by 
    integrating with <strong>Polygon node providers</strong> (e.g., Alchemy) and optionally <strong>The Graph</strong> 
    for indexed querying.
  </p>
<br/>
  <p>We also implemented:</p>
  <ul>
    <li><strong>Dynamic metadata rendering</strong> for both on-chain and off-chain NFT data</li>
    <li><strong>Lazy loading and pagination</strong> for performance optimization</li>
    <li><strong>Custom error messaging</strong> and wallet state persistence for a smooth user experience</li>
    <li>Optional <strong>backend indexing layer</strong> for faster querying of NFT collections and transaction history</li>
  </ul>

  <p>
    Security was a key focus — with <strong>client-side validation</strong>, secure Web3 signature handling, 
    and transaction confirmation flows designed to prevent spoofing and user error.
  </p>
</p>

`,
      para3: `<p>
    The entire product was delivered in collaboration with the client’s smart contract team within a 
    <strong>6-week timeline</strong>, with iterative UAT sessions, full device/browser QA, and a staging environment set up 
    for testing Web3 interactions in a simulated environment before launch.
  </p>`,
      stats: [
        { label: "Active Users", value: "20K+" },
        { label: "Transactions per Day", value: "15K+" },
        { label: "Transaction Success Rate", value: "99.9%" },
        { label: "In Revenue In First 3 Months", value: "$50K+" },
      ],
    },
    // ...other projects
  ],
  aiml: [],
  // other services
};

export default projectsData;
