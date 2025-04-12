// data/servicesData.js
const servicesData = {
    // blockchain: {
    //   serviceName: "Blockchain Solutions",
    //   tagline: "Beyond Boundaries: Smarter, Safer Blockchain Solutions.",
    //   videoUrl: "https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4",
    //   gradientshade: "#000000",
    //   cards: [
    //     {
    //       imgSrc: "/assets/img/SmartContracts.avif",
    //       techName: "Smart Contracts",
    //       description: "Automating Trust",
          
    //         features: [
    //           "Smart contracts are transforming how agreements are executed.",
    //           "Once deployed, smart contracts operate autonomously.",
    //           "With smart contracts, trust is built into the code."
    //         ],
    //         deployedLink: "https://your-deployed-site.com"
          
    //     },
    //     {
    //       imgSrc: "/assets/img/solidity.jpg",
    //       techName: "Solidity",
    //       description: "Empowering Blockchain Innovation",
    //         features: [
    //           "Solidity is the primary programming language.",
    //           "Its syntax, similar to JavaScript, makes it accessible.",
    //           "With an ever-growing ecosystem, Solidity continues to evolve."
    //         ],
    //         deployedLink: "https://your-deployed-site.com"
    //     }
    //   ],
    //   serviceSection: {
    //     heading: "Blockchain technology is reshaping industries by offering security, transparency, and decentralization.",
    //     description: [
    //       "Smart Contract Development: Automate processes without intermediaries.",
    //       "Decentralized Applications (DApps): Secure and efficient blockchain applications.",
    //       "Token & Cryptocurrency Development: Secure, scalable digital assets.",
    //       "NFT Development: Build and manage unique digital assets.",
    //       "Blockchain Consulting & Auditing: Optimize blockchain strategies for businesses."
    //     ],
    //     image1Path: "/assets/img/bt.webp"
    //   },
    //   queryname: "blockchain"
    // },
    
blockchain: {
  serviceName: "Blockchain Solutions",
  tagline: "Beyond Boundaries: Smarter, Safer Blockchain Solutions.",
  videoUrl: "https://videos.pexels.com/video-files/4389377/4389377-uhd_2732_1440_30fps.mp4",
  gradientshade: "#000000",
  cards: [
    // Core Concepts
    {
      imgSrc: "/assets/img/SmartContracts.avif",
      techName: "Smart Contracts",
      description: "Automating Trust & Agreements",
      features: [
        "Self-executing code on the blockchain automating agreements.",
        "Enhance transparency, reduce costs and counterparty risk.",
        "Foundation for dApps, DeFi, NFTs, and DAOs."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/dapps.webp",
      techName: "Decentralized Apps (dApps)",
      description: "Building on the Blockchain",
      features: [
        "Applications run on a peer-to-peer network, not central servers.",
        "Resistant to censorship and single points of failure.",
        "Leverage smart contracts for backend logic."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/defi.png", // Placeholder
      techName: "DeFi (Decentralized Finance)",
      description: "Reinventing Financial Services",
      features: [
        "Financial applications built on blockchain without intermediaries.",
        "Includes lending, borrowing, exchanges, yield farming.",
        "Aims for open, permissionless, and transparent finance."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/nft_dev.jpg",
      techName: "NFTs (Non-Fungible Tokens)",
      description: "Unique Digital Asset Creation",
      features: [
        "Representing verifiable ownership of unique digital/physical items.",
        "Utilizing standards like ERC-721 (unique) & ERC-1155 (semi-fungible).",
        "Applications in digital art, collectibles, gaming, identity, ticketing."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/dao.png", // Placeholder
      techName: "DAOs (Decentralized Autonomous Orgs)",
      description: "Community-Governed Organizations",
      features: [
        "Organizations managed by code and community voting.",
        "Rules encoded in smart contracts for transparency.",
        "Used for managing protocols, treasuries, and collective decisions."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/consensus.png", // Placeholder
      techName: "Consensus Mechanisms",
      description: "Agreeing on the Truth",
      features: [
        "Protocols enabling distributed networks to agree on transaction validity.",
        "Examples: Proof-of-Work (PoW), Proof-of-Stake (PoS), Proof-of-Authority (PoA).",
        "Crucial for blockchain security and integrity."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/zkp.png", // Placeholder
      techName: "Zero-Knowledge Proofs (ZKPs)",
      description: "Privacy-Enhancing Technology",
      features: [
        "Cryptographic method to prove knowledge without revealing the data.",
        "Used in ZK-Rollups for scaling and enhancing privacy.",
        "Enables confidential transactions and identity verification."
      ],
      deployedLink: "https://your-deployed-site.com"
    },

    // Major Platforms (Layer 1)
    {
      imgSrc: "/assets/img/ethereum.png",
      techName: "Ethereum",
      description: "Pioneering Smart Contract Platform",
      features: [
        "Largest ecosystem for dApps, DeFi, and NFTs (EVM).",
        "Transitioned to Proof-of-Stake (PoS) for scalability & efficiency.",
        "Strong developer community and established standards (ERC-20, ERC-721)."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/hyperledger.png",
      techName: "Hyperledger Fabric",
      description: "Enterprise Blockchain Framework",
      features: [
        "Permissioned blockchain platform for business consortiums.",
        "Modular architecture with pluggable consensus and identity.",
        "Focuses on privacy, confidentiality, and B2B use cases."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/solana.png", // Placeholder
      techName: "Solana",
      description: "High-Performance Blockchain",
      features: [
        "Known for high throughput (TPS) and low transaction fees.",
        "Uses Proof-of-History (PoH) alongside PoS.",
        "Growing ecosystem for DeFi, NFTs, and high-frequency applications."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/polkadot.png", // Placeholder
      techName: "Polkadot",
      description: "Interoperable Blockchain Network",
      features: [
        "Enables cross-blockchain communication (interoperability) via Relay Chain.",
        "Allows specialized blockchains (Parachains) to connect and share security.",
        "Built using the Substrate framework."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/cardano.png", // Placeholder
      techName: "Cardano",
      description: "Research-Driven PoS Platform",
      features: [
        "Focuses on sustainability, scalability, and interoperability.",
        "Uses Ouroboros PoS consensus mechanism.",
        "Employs formal methods and peer-reviewed research for development."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/bsc.png", // Placeholder
      techName: "BNB Smart Chain (BSC)",
      description: "EVM-Compatible Performance Chain",
      features: [
        "High-speed, low-cost alternative compatible with Ethereum tools (EVM).",
        "Popular for DeFi, gaming, and NFT projects (BEP-20 tokens).",
        "Connected to the broader Binance ecosystem."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/avalanche.png", // Placeholder
      techName: "Avalanche",
      description: "Scalable Platform with Subnets",
      features: [
        "Known for fast transaction finality and high throughput.",
        "Allows creation of custom blockchains (Subnets).",
        "Supports multiple virtual machines, including EVM."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/cosmos.png", // Placeholder
      techName: "Cosmos",
      description: "The Internet of Blockchains",
      features: [
        "Focuses on interoperability via the Inter-Blockchain Communication (IBC) protocol.",
        "Enables sovereign blockchains to connect and exchange data/value.",
        "Utilizes the Tendermint consensus engine."
      ],
      deployedLink: "https://your-deployed-site.com"
    },

    // Programming Languages
    {
      imgSrc: "/assets/img/solidity.jpg",
      techName: "Solidity",
      description: "Primary Language for EVM",
      features: [
        "Statically-typed language for Ethereum and EVM-compatible chains.",
        "Used for writing smart contracts for dApps, DeFi, NFTs.",
        "Largest ecosystem of tools and developer support."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/rust.png", // Placeholder
      techName: "Rust",
      description: "Performance & Safety Focused",
      features: [
        "Memory-safe language gaining traction in blockchain.",
        "Used by Solana, Polkadot (Substrate), Near Protocol.",
        "Offers high performance suitable for core protocol development."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/golang.png", // Placeholder
      techName: "Go (Golang)",
      description: "Efficient & Concurrent Language",
      features: [
        "Simple, efficient language good for building scalable systems.",
        "Used in Hyperledger Fabric (Chaincode) and Cosmos SDK.",
        "Strong support for concurrency."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/vyper.png", // Placeholder
      techName: "Vyper",
      description: "Security-Oriented Pythonic Language",
      features: [
        "Python-like syntax aiming for security and auditability.",
        "Alternative to Solidity for EVM smart contracts.",
        "Designed to be simpler and prevent certain vulnerabilities."
      ],
      deployedLink: "https://your-deployed-site.com"
    },

     // Layer 2 Scaling Solutions
    {
      imgSrc: "/assets/img/optimistic_rollups.png", // Placeholder
      techName: "Optimistic Rollups",
      description: "Layer 2 Scaling Technique",
      features: [
        "Bundle transactions off-chain, assume validity ('optimistic').",
        "Use fraud proofs for challenges; EVM-compatible.",
        "Examples: Arbitrum, Optimism, Base."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/zk_rollups.png", // Placeholder
      techName: "ZK-Rollups",
      description: "Validity Proof Scaling",
      features: [
        "Use zero-knowledge proofs (validity proofs) to verify off-chain transactions.",
        "Potentially higher security and faster finality than optimistic.",
        "Examples: zkSync, StarkNet, Polygon zkEVM."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/polygon.png", // Placeholder
      techName: "Polygon (POS & zkEVM)",
      description: "Ethereum Scaling Ecosystem",
      features: [
        "Offers multiple scaling solutions: PoS sidechain, ZK-Rollups (zkEVM).",
        "Aims to create an 'Internet of Blockchains' connected to Ethereum.",
        "Widely adopted for DeFi, NFTs, and gaming due to lower fees."
      ],
      deployedLink: "https://your-deployed-site.com"
    },

     // Infrastructure & Tools
    {
      imgSrc: "/assets/img/chainlink.png", // Placeholder
      techName: "Oracles (e.g., Chainlink)",
      description: "Connecting Blockchains to Real World Data",
      features: [
        "Securely feed external, off-chain data (prices, weather) into smart contracts.",
        "Essential for many DeFi applications, insurance, prediction markets.",
        "Chainlink is the market leader, others include Band Protocol, Pyth."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/ipfs.png", // Placeholder
      techName: "Decentralized Storage (e.g., IPFS)",
      description: "Distributed Data Storage",
      features: [
        "Store data across a peer-to-peer network, not central servers.",
        "IPFS uses content-addressing for data integrity.",
        "Used for storing NFT metadata, dApp frontends, large datasets."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
    {
      imgSrc: "/assets/img/metamask.png", // Placeholder
      techName: "Wallets (e.g., MetaMask)",
      description: "User Gateway to Blockchain",
      features: [
        "Allow users to store keys, manage assets, and interact with dApps.",
        "Browser extensions (MetaMask) or mobile apps.",
        "Essential for user onboarding and interaction."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/truffle_hardhat.png", // Placeholder
      techName: "Dev Frameworks (Truffle/Hardhat)",
      description: "Smart Contract Development Tools",
      features: [
        "Suite of tools for compiling, testing, deploying smart contracts.",
        "Provide local blockchain environments for development.",
        "Essential for efficient and secure Ethereum/EVM development."
      ],
      deployedLink: "https://your-deployed-site.com"
    },
     {
      imgSrc: "/assets/img/interoperability.png", // Placeholder
      techName: "Interoperability Protocols",
      description: "Connecting Different Blockchains",
      features: [
        "Enable communication and asset transfer between distinct blockchains.",
        "Examples: Cosmos (IBC), Polkadot (XCMP), LayerZero, Axelar.",
        "Crucial for avoiding siloes and creating a connected Web3."
      ],
      deployedLink: "https://your-deployed-site.com"
    }
  ],
  serviceSection: {
    heading: "Blockchain technology is reshaping industries by offering security, transparency, and decentralization.",
    description: [
      "Smart Contract Development: Automate processes without intermediaries.",
      "Decentralized Applications (DApps): Secure and efficient blockchain applications.",
      "Token & Cryptocurrency Development: Secure, scalable digital assets.",
      "NFT Development: Build and manage unique digital assets.",
      "Blockchain Consulting & Auditing: Optimize blockchain strategies for businesses."
    ],
    image1Path: "/assets/img/bt.webp"
  },
  queryname: "blockchain"
},

mobileAppDev: {
    serviceName: "Mobile App Development",
    tagline: "Engaging Mobile Experiences, Expertly Crafted.",
    videoUrl: "https://videos.pexels.com/video-files/3999528/3999528-uhd_2732_1440_25fps.mp4", // Example mobile dev video
    gradientshade: "#3498DB", // Example blue shade
    cards: [
      // Platforms & Native Languages
      {
        imgSrc: "/assets/img/ios_dev.png", // Placeholder
        techName: "iOS Development",
        description: "Native Apps for Apple Devices",
        features: [
          "Building high-performance apps for iPhone, iPad, Apple Watch.",
          "Expertise in Swift, SwiftUI, and the latest iOS SDK features.",
          "Focus on seamless user experience and platform integration."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/android_dev.png", // Placeholder
        techName: "Android Development",
        description: "Native Apps for the Android Ecosystem",
        features: [
          "Developing robust and scalable apps for diverse Android devices.",
          "Proficiency in Kotlin, Jetpack Compose, and Android SDK.",
          "Adherence to Material Design guidelines for intuitive interfaces."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/swift_lang.png", // Placeholder
        techName: "Swift",
        description: "Modern Language for Apple Platforms",
        features: [
          "Powerful and intuitive language for iOS, macOS, watchOS, tvOS.",
          "Emphasis on safety, performance, and expressive syntax.",
          "Continuously evolving with strong community support."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/kotlin_lang.png", // Placeholder
        techName: "Kotlin",
        description: "Preferred Language for Android",
        features: [
          "Concise, safe, and interoperable language, officially supported by Google.",
          "Reduces boilerplate code and enhances developer productivity.",
          "Used for modern Android development, including Coroutines for async tasks."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Cross-Platform Frameworks
      {
        imgSrc: "/assets/img/react_native.png", // Placeholder
        techName: "React Native",
        description: "Cross-Platform Apps with JavaScript",
        features: [
          "Build native-like apps for iOS and Android from a single codebase.",
          "Leverages React principles and a large ecosystem of libraries.",
          "Ideal for faster development cycles and code reusability."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/flutter_dev.png", // Placeholder
        techName: "Flutter",
        description: "UI Toolkit for Cross-Platform Apps",
        features: [
          "Google's UI toolkit for building natively compiled applications.",
          "Create beautiful, fast UIs for mobile, web, and desktop from one codebase.",
          "Uses the Dart language and offers expressive widgets."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Supporting Concepts & Tools
      {
        imgSrc: "/assets/img/mobile_uiux.png", // Placeholder
        techName: "Mobile UI/UX Design",
        description: "Crafting User-Centric Interfaces",
        features: [
          "Designing intuitive, accessible, and visually appealing mobile experiences.",
          "Focus on user flows, information architecture, and platform conventions.",
          "Utilizing tools like Figma, Sketch, Adobe XD for prototyping."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/api_integration.png", // Placeholder
        techName: "API Integration",
        description: "Connecting Apps to Backends",
        features: [
          "Integrating mobile apps with RESTful APIs, GraphQL, and other services.",
          "Handling data synchronization, authentication, and real-time updates.",
          "Ensuring secure and efficient communication with server-side systems."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/mobile_testing.png", // Placeholder
        techName: "Mobile App Testing",
        description: "Ensuring Quality and Performance",
        features: [
          "Comprehensive testing including unit, integration, UI, and performance tests.",
          "Utilizing frameworks like XCTest (iOS) and Espresso (Android).",
          "Cross-device testing to ensure compatibility and stability."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Innovative Mobile App Solutions Tailored To Your Business Needs",
      description: [
        "Native iOS App Development: Creating seamless experiences for Apple users using Swift.",
        "Native Android App Development: Building robust apps for the Android ecosystem using Kotlin.",
        "Cross-Platform Development: Efficiently target both iOS & Android with React Native & Flutter.",
        "Mobile UI/UX Design: Crafting intuitive interfaces for optimal user engagement.",
        "App Maintenance & Support: Providing ongoing updates, bug fixes, and optimization.",
        "API Development & Integration: Connecting mobile apps to backend systems."
      ],
      image1Path: "/assets/img/mobile_dev_main.webp" // Placeholder
    },
    queryname: "mobile dev" // Using the tag from your list
  },

  webDev: {
    serviceName: "Web Development",
    tagline: "Building Responsive, Scalable, and Engaging Web Solutions.",
    videoUrl: "https://videos.pexels.com/video-files/5775187/5775187-uhd_2732_1440_25fps.mp4", // Example web dev video
    gradientshade: "#2ECC71", // Example green shade
    cards: [
      // Core Frontend
      {
        imgSrc: "/assets/img/html_css_js.png", // Placeholder
        techName: "HTML5, CSS3, ESNext JS",
        description: "Fundamental Web Technologies",
        features: [
          "Latest standards for structuring (HTML), styling (CSS), and behavior (JavaScript).",
          "Foundation for modern, accessible, and interactive web experiences.",
          "Essential skill set for any web developer."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/typescript_logo.png", // Placeholder
        techName: "TypeScript",
        description: "JavaScript Superset with Types",
        features: [
          "Adds static typing to JavaScript, improving code quality and maintainability.",
          "Enhances developer productivity through better tooling and error detection.",
          "Widely adopted with frameworks like Angular, React, and Vue."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Frontend Libraries & Frameworks
      {
        imgSrc: "/assets/img/react_logo.png", // Placeholder
        techName: "React",
        description: "Component-Based UI Library",
        features: [
          "Leading JavaScript library for building dynamic user interfaces.",
          "Focuses on reusable UI components and declarative programming.",
          "Vast ecosystem including state management (Redux, Zustand) and routing."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/nextjs_logo.png", // Placeholder
        techName: "Next.js",
        description: "The React Framework",
        features: [
          "Production framework for React applications.",
          "Offers Server-Side Rendering (SSR), Static Site Generation (SSG), API routes.",
          "Optimized for performance, SEO, and developer experience."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/angular_logo.png", // Placeholder
        techName: "Angular",
        description: "Comprehensive Frontend Platform",
        features: [
          "Opinionated framework by Google for building large-scale applications.",
          "Uses TypeScript and provides a complete ecosystem (routing, state mgmt).",
          "Well-suited for enterprise-level projects requiring structure."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/vue_logo.png", // Placeholder
        techName: "Vue.js",
        description: "Progressive JavaScript Framework",
        features: [
          "Approachable and versatile framework, incrementally adoptable.",
          "Excellent documentation and gentle learning curve.",
          "Offers reactive data binding; ecosystem includes Nuxt.js for SSR/SSG."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/svelte_logo.png", // Placeholder
        techName: "Svelte / SvelteKit",
        description: "Compiler-Based UI Framework",
        features: [
          "Compiles components into efficient imperative code at build time.",
          "Results in highly performant apps with no virtual DOM overhead.",
          "SvelteKit provides routing, SSR/SSG, and serverless functions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // CSS & Styling
      {
        imgSrc: "/assets/img/tailwind_logo.png", // Placeholder
        techName: "Tailwind CSS",
        description: "Utility-First CSS Framework",
        features: [
          "Provides low-level utility classes to build custom designs directly in HTML.",
          "Highly customizable and results in small production bundles via purging.",
          "Rapidly growing popularity for efficient styling workflows."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/css_in_js.png", // Placeholder
        techName: "CSS-in-JS (Styled Comp/Emotion)",
        description: "Component-Scoped Styling",
        features: [
          "Write CSS styles directly within JavaScript component files.",
          "Offers component scoping, dynamic styling, and theming.",
          "Popular libraries include Styled Components and Emotion."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
       // State Management (React Focus)
       {
        imgSrc: "/assets/img/redux_zustand.png", // Placeholder
        techName: "Redux Toolkit / Zustand",
        description: "React State Management",
        features: [
          "Redux Toolkit: Official, opinionated toolset for efficient Redux development.",
          "Zustand: Minimalistic, hook-based state management solution.",
          "Used for managing global or complex application state in React."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Backend Technologies
      {
        imgSrc: "/assets/img/nodejs_express_nest.png", // Placeholder
        techName: "Node.js (Express/NestJS)",
        description: "JavaScript Backend Runtime & Frameworks",
        features: [
          "Node.js allows server-side JavaScript execution.",
          "Express: Minimalist and flexible web framework.",
          "NestJS: Opinionated framework using TypeScript for building efficient server-side apps."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/python_django_fastapi.png", // Placeholder
        techName: "Python (Django/FastAPI)",
        description: "Versatile Backend Language & Frameworks",
        features: [
          "Python's readability and libraries excel in backend development.",
          "Django: Robust 'batteries-included' framework.",
          "FastAPI: Modern, high-performance framework for building APIs with automatic docs."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Databases
      {
        imgSrc: "/assets/img/postgresql_logo.png", // Placeholder
        techName: "PostgreSQL",
        description: "Powerful Relational Database",
        features: [
          "Advanced open-source object-relational database system.",
          "Known for reliability, feature robustness, and performance.",
          "Supports complex queries, JSON data types, and extensions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/mongodb_logo.png", // Placeholder
        techName: "MongoDB",
        description: "Popular NoSQL Document Database",
        features: [
          "Stores data in flexible, JSON-like documents (BSON).",
          "Scalable and suitable for applications with evolving schemas.",
          "Widely used for large datasets and real-time applications."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/redis_logo.png", // Placeholder
        techName: "Redis",
        description: "In-Memory Data Store",
        features: [
          "Used as a cache, message broker, and high-performance database.",
          "Stores data in memory for extremely fast read/write operations.",
          "Supports various data structures (strings, lists, sets, hashes)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // APIs
      {
        imgSrc: "/assets/img/rest_api.png", // Placeholder
        techName: "RESTful APIs",
        description: "Standard for Web Services",
        features: [
          "Architectural style for designing networked applications.",
          "Uses standard HTTP methods (GET, POST, PUT, DELETE).",
          "Stateless communication, commonly uses JSON for data exchange."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/graphql_logo.png", // Placeholder
        techName: "GraphQL",
        description: "Query Language for APIs",
        features: [
          "Allows clients to request exactly the data they need.",
          "Reduces over-fetching and under-fetching of data.",
          "Strongly typed schema; popular implementations include Apollo and Relay."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Testing
      {
        imgSrc: "/assets/img/jest_vitest.png", // Placeholder
        techName: "Jest / Vitest",
        description: "JavaScript Testing Frameworks",
        features: [
          "Used for unit, integration, and snapshot testing.",
          "Jest: Feature-rich framework developed by Facebook.",
          "Vitest: Modern, fast testing framework compatible with Vite."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cypress_playwright.png", // Placeholder
        techName: "Cypress / Playwright",
        description: "End-to-End Testing Tools",
        features: [
          "Automate browser interactions to test user flows from end-to-end.",
          "Cypress: Developer-focused tool with real-time feedback.",
          "Playwright: Microsoft tool supporting multiple browsers (Chrome, Firefox, Safari)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Deployment & DevOps
      {
        imgSrc: "/assets/img/vercel_netlify.png", // Placeholder
        techName: "Vercel / Netlify",
        description: "Modern Frontend Deployment Platforms",
        features: [
          "Streamlined platforms for deploying frontend apps and static sites.",
          "Integrate directly with Git repositories for CI/CD.",
          "Offer features like serverless functions, edge network, preview deployments."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/aws_azure_gcp.png", // Placeholder
        techName: "AWS / Azure / GCP",
        description: "Major Cloud Providers",
        features: [
          "Offer a vast range of services for hosting, compute, storage, databases, ML.",
          "Provide infrastructure for scalable and reliable applications.",
          "Dominant players in the cloud computing market."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/docker_kubernetes.png", // Placeholder
        techName: "Docker & Kubernetes",
        description: "Containerization & Orchestration",
        features: [
          "Docker: Packages applications and dependencies into containers.",
          "Kubernetes (K8s): Automates deployment, scaling, and management of containerized apps.",
          "Standard tools for modern DevOps practices."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Build Tools
       {
        imgSrc: "/assets/img/vite_logo.png", // Placeholder
        techName: "Vite",
        description: "Next-Generation Frontend Tooling",
        features: [
          "Extremely fast development server using native ES module imports.",
          "Optimized production builds using Rollup (or esbuild).",
          "Rapidly gaining popularity for its speed and developer experience."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/webpack_logo.png", // Placeholder
        techName: "Webpack",
        description: "Powerful Module Bundler",
        features: [
          "Highly configurable bundler with a vast ecosystem of loaders and plugins.",
          "Mature and battle-tested for complex build pipelines.",
          "Still widely used, especially in legacy systems or complex setups."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // CMS
       {
        imgSrc: "/assets/img/headless_cms.png", // Placeholder
        techName: "Headless CMS",
        description: "Decoupled Content Management",
        features: [
          "Manages content via APIs, separating it from the presentation layer.",
          "Allows using modern frontend frameworks for display.",
          "Popular options: Strapi, Contentful, Sanity, Storyblok."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/wordpress_logo.png", // Placeholder
        techName: "WordPress",
        description: "Dominant Traditional CMS",
        features: [
          "Powers a significant portion of the web.",
          "Extensive theme and plugin ecosystem.",
          "Can also be used headlessly via its REST API."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Concepts & Emerging Tech
      {
        imgSrc: "/assets/img/pwa_logo.png", // Placeholder
        techName: "Progressive Web Apps (PWA)",
        description: "App-Like Web Experiences",
        features: [
          "Web apps providing native app features like offline access, push notifications.",
          "Installable on user devices directly from the browser.",
          "Enhances user engagement and reliability."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/wasm_logo.png", // Placeholder
        techName: "WebAssembly (Wasm)",
        description: "High-Performance Web Execution",
        features: [
          "Binary format allowing code (C++, Rust) to run near-natively in browsers.",
          "Used for performance-critical tasks like gaming, video editing, simulations.",
          "Complements JavaScript, not replaces it."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/serverless_logo.png", // Placeholder
        techName: "Serverless Functions",
        description: "Event-Driven Backend Compute",
        features: [
          "Run backend code without managing servers (e.g., AWS Lambda, Azure Functions).",
          "Pay-per-execution model, scales automatically.",
          "Ideal for APIs, microservices, and event processing."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Custom Web Development Services for Digital Success",
      description: [
        "Frontend Development: Crafting responsive UIs with React, Angular, Vue.",
        "Backend Development: Building robust server-side logic & APIs (Node.js, Python, PHP).",
        "Full-Stack Development: End-to-end web application development.",
        "CMS Development: Customizing WordPress sites & implementing Headless CMS.",
        "E-commerce Solutions: Developing scalable online stores with secure payments.",
        "Web Application Maintenance: Providing ongoing support, updates, and tuning."
      ],
      image1Path: "/assets/img/web_dev_main.webp" // Placeholder
    },
    queryname: "web dev" // Using the tag from your list
  },

  aiml: {
    serviceName: "AI & Machine Learning",
    tagline: "Unlocking Insights and Automation with Intelligent Solutions.",
    videoUrl: "https://videos.pexels.com/video-files/8140241/8140241-uhd_3840_2160_25fps.mp4", // Example AI/ML video
    gradientshade: "#8E44AD", // Example purple shade
    cards: [
      // Core Language & Data Libraries
      {
        imgSrc: "/assets/img/python_logo.png", // Placeholder
        techName: "Python",
        description: "Dominant Language for AI/ML",
        features: [
          "Extensive ecosystem of libraries (NumPy, Pandas, Scikit-learn, etc.).",
          "Readability and ease of use facilitate rapid prototyping.",
          "Strong community support and vast learning resources."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/numpy_pandas.png", // Placeholder
        techName: "NumPy & Pandas",
        description: "Fundamental Data Manipulation",
        features: [
          "NumPy: Efficient numerical operations and N-dimensional arrays.",
          "Pandas: High-performance data structures (DataFrames) and analysis tools.",
          "Essential for data cleaning, transformation, and preparation."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Machine Learning Libraries
      {
        imgSrc: "/assets/img/scikit_learn.png", // Placeholder
        techName: "Scikit-learn",
        description: "Classical Machine Learning Toolkit",
        features: [
          "Comprehensive library for classification, regression, clustering, dimensionality reduction.",
          "Simple and consistent API for various algorithms.",
          "Includes tools for model selection, evaluation, and preprocessing."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Deep Learning Frameworks
      {
        imgSrc: "/assets/img/tensorflow_logo.png", // Placeholder
        techName: "TensorFlow",
        description: "End-to-End Deep Learning Platform",
        features: [
          "Developed by Google, strong in production deployment and scalability.",
          "Extensive ecosystem including TensorBoard (visualization) and TensorFlow Lite (mobile/edge).",
          "Supports distributed training across CPUs, GPUs, and TPUs."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/pytorch_logo.png", // Placeholder
        techName: "PyTorch",
        description: "Flexible Deep Learning Framework",
        features: [
          "Developed by Meta AI, popular in research for its Pythonic feel and dynamic graphs.",
          "Easy debugging and experimentation capabilities.",
          "Growing ecosystem with libraries like TorchVision, TorchText, TorchAudio."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/keras_logo.png", // Placeholder
        techName: "Keras",
        description: "High-Level Deep Learning API",
        features: [
          "User-friendly API focused on rapid prototyping and experimentation.",
          "Can run on top of TensorFlow, Theano, or CNTK (primarily TensorFlow now).",
          "Simplifies building and training neural networks."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Natural Language Processing (NLP)
       {
        imgSrc: "/assets/img/nlp_concept.png", // Placeholder
        techName: "Natural Language Processing (NLP)",
        description: "Understanding Human Language",
        features: [
          "Field focused on enabling computers to process and understand text and speech.",
          "Applications include sentiment analysis, translation, chatbots, summarization.",
          "Key libraries include NLTK, spaCy, and Hugging Face."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/transformers_logo.png", // Placeholder
        techName: "Transformers (Architecture)",
        description: "Dominant NLP Model Architecture",
        features: [
          "Architecture based on self-attention mechanisms.",
          "Foundation for models like BERT, GPT, T5.",
          "Revolutionized performance on various NLP tasks."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/huggingface_logo.png", // Placeholder
        techName: "Hugging Face",
        description: "Platform & Library for Transformers",
        features: [
          "Provides easy access to thousands of pre-trained transformer models.",
          "Offers libraries (Transformers, Datasets, Tokenizers) for NLP workflows.",
          "Central hub for the NLP research and development community."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/llm_concept.png", // Placeholder
        techName: "Large Language Models (LLMs)",
        description: "Advanced Language Understanding & Generation",
        features: [
          "Models (like GPT series, PaLM, Llama) trained on vast text data.",
          "Capable of few-shot/zero-shot learning for various tasks.",
          "Powering conversational AI, content creation, coding assistance."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
       // Generative AI
      {
        imgSrc: "/assets/img/genai_concept.png", // Placeholder
        techName: "Generative AI",
        description: "Creating Novel Content",
        features: [
          "AI capable of generating new text, images, audio, code, etc.",
          "Includes LLMs, Generative Adversarial Networks (GANs), Diffusion Models.",
          "Applications in creative arts, synthetic data generation, drug discovery."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/diffusion_models.png", // Placeholder
        techName: "Diffusion Models",
        description: "State-of-the-Art Image Generation",
        features: [
          "Generate high-quality images by gradually adding and removing noise.",
          "Powering models like DALL-E 2, Stable Diffusion, Midjourney.",
          "Leading approach for realistic and creative image synthesis."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Computer Vision (CV)
       {
        imgSrc: "/assets/img/cv_concept.png", // Placeholder
        techName: "Computer Vision",
        description: "Enabling Machines to 'See'",
        features: [
          "Field focused on analyzing and understanding visual information from images/videos.",
          "Tasks include image classification, object detection, segmentation, tracking.",
          "Utilizes classical image processing and deep learning (CNNs)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/opencv_logo.png", // Placeholder
        techName: "OpenCV",
        description: "Fundamental Computer Vision Library",
        features: [
          "Open-source library with thousands of optimized algorithms.",
          "Covers wide range of classical image processing and CV tasks.",
          "Interfaces with deep learning frameworks; optimized for real-time."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cnn_concept.png", // Placeholder
        techName: "Convolutional Neural Networks (CNNs)",
        description: "Deep Learning for Vision",
        features: [
          "Specialized neural network architecture for processing grid-like data (images).",
          "Automatically learn hierarchical features from images.",
          "Foundation for most modern CV deep learning models."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/yolo_concept.png", // Placeholder
        techName: "Object Detection (e.g., YOLO)",
        description: "Identifying & Locating Objects",
        features: [
          "Task of detecting instances of objects within images/videos.",
          "YOLO (You Only Look Once) is a popular real-time detection model family.",
          "Other approaches include Faster R-CNN, SSD."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Other AI/ML Areas & Tools
       {
        imgSrc: "/assets/img/rl_concept.png", // Placeholder
        techName: "Reinforcement Learning (RL)",
        description: "Learning through Trial & Error",
        features: [
          "Training agents to make sequences of decisions by rewarding desired behaviors.",
          "Applications in robotics, game playing, optimization problems.",
          "Libraries include OpenAI Gym, Stable Baselines3, RLlib."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/spark_logo.png", // Placeholder
        techName: "Apache Spark (MLlib)",
        description: "Distributed Machine Learning",
        features: [
          "Big data processing engine with a library (MLlib) for scalable ML.",
          "Suitable for large datasets that don't fit on a single machine.",
          "Includes algorithms for classification, regression, clustering, recommendations."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/mlops_concept.png", // Placeholder
        techName: "MLOps (Machine Learning Operations)",
        description: "Streamlining the ML Lifecycle",
        features: [
          "Set of practices combining ML, DevOps, and Data Engineering.",
          "Aims to deploy and maintain ML models reliably and efficiently.",
          "Covers model training, versioning, deployment, monitoring, governance."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_ai_platforms.png", // Placeholder
        techName: "Cloud AI Platforms (AWS/Azure/GCP)",
        description: "Managed End-to-End ML Services",
        features: [
          "Platforms like AWS SageMaker, Azure ML, Google Vertex AI.",
          "Provide managed services for data prep, training, deployment, MLOps.",
          "Simplify infrastructure management and accelerate development."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/vector_db.png", // Placeholder
        techName: "Vector Databases",
        description: "Storing & Querying Embeddings",
        features: [
          "Specialized databases for efficient similarity search on high-dimensional vectors.",
          "Essential for semantic search, recommendations, RAG with LLMs.",
          "Popular options: Pinecone, Weaviate, Chroma, Milvus."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/predictive_analytics.png", // Placeholder
        techName: "Predictive Analytics",
        description: "Forecasting Future Outcomes",
        features: [
          "Using historical data and ML models to predict future events.",
          "Applications in sales forecasting, risk assessment, customer churn prediction.",
          "Utilizes regression, time series analysis, classification models."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/recommender_systems.png", // Placeholder
        techName: "Recommender Systems",
        description: "Personalizing Suggestions",
        features: [
          "Predicting user preferences and suggesting relevant items (products, content).",
          "Techniques include collaborative filtering, content-based filtering, hybrid.",
          "Widely used in e-commerce, streaming services, social media."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/responsible_ai.png", // Placeholder
        techName: "Responsible AI / XAI",
        description: "Ethical & Explainable AI",
        features: [
          "Developing AI systems that are fair, transparent, accountable, and secure.",
          "Explainable AI (XAI) focuses on making model decisions understandable.",
          "Growing importance due to societal impact and regulatory requirements."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Leveraging AI & ML for Data-Driven Decisions and Intelligent Automation",
      description: [
        "Custom AI/ML Model Development: Building tailored models for prediction, classification, etc.",
        "Natural Language Processing (NLP) Solutions: Developing systems for text analysis, chatbots, translation.",
        "Computer Vision Applications: Creating solutions for image recognition, object detection, video analysis.",
        "Predictive Analytics & Forecasting: Utilizing historical data to predict future trends.",
        "Recommender Systems: Building personalized recommendation engines.",
        "MLOps & Deployment: Implementing robust pipelines for model deployment and management.",
        "AI Strategy & Consulting: Helping businesses identify opportunities and implement AI/ML.",
        "Generative AI Solutions: Implementing solutions using LLMs, diffusion models, etc."
      ],
      image1Path: "/assets/img/ai_ml_main.webp" // Placeholder
    },
    queryname: "ai and ml" // Using the tag from your list
  },
  appDev: {
    serviceName: "Application Development",
    tagline: "Building Robust, Scalable, and Custom Software Applications.",
    videoUrl: "https://videos.pexels.com/video-files/3183166/3183166-uhd_3840_2160_25fps.mp4", // Example coding/dev video
    gradientshade: "#1ABC9C", // Example teal/turquoise shade
    cards: [
      // Core Programming Languages
      {
        imgSrc: "/assets/img/java_logo.png", // Placeholder
        techName: "Java",
        description: "Enterprise Standard Language",
        features: [
          "Platform-independent (JVM), widely used for large-scale enterprise systems.",
          "Strongly typed, object-oriented, robust ecosystem (Spring, Jakarta EE).",
          "Used for backend services, Android apps (legacy), desktop apps (JavaFX)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/csharp_dotnet.png", // Placeholder
        techName: "C# & .NET",
        description: "Microsoft Ecosystem Language",
        features: [
          "Modern, object-oriented language developed by Microsoft.",
          ".NET platform enables cross-platform development (web, desktop, mobile, cloud).",
          "Strong tooling (Visual Studio), popular for Windows apps, web services (ASP.NET), games (Unity)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/python_logo.png", // Placeholder
        techName: "Python",
        description: "Versatile & Rapid Development",
        features: [
          "Readable syntax, large standard library, vast package ecosystem.",
          "Widely used for web backends (Django, FastAPI), scripting, data science, AI/ML.",
          "Suitable for rapid application development and automation."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cpp_logo.png", // Placeholder
        techName: "C++",
        description: "High-Performance Systems Language",
        features: [
          "Offers low-level memory manipulation and high performance.",
          "Used for game engines, operating systems, high-frequency trading, performance-critical apps.",
          "Frameworks like Qt enable cross-platform GUI development."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Desktop Application Frameworks
      {
        imgSrc: "/assets/img/electron_logo.png", // Placeholder
        techName: "Electron",
        description: "Cross-Platform Desktop (JS/HTML/CSS)",
        features: [
          "Build desktop apps using web technologies (Node.js, Chromium).",
          "Enables cross-platform deployment (Windows, macOS, Linux) from single codebase.",
          "Used by apps like VS Code, Slack, Discord."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/flutter_dev.png", // Placeholder - Reused
        techName: "Flutter",
        description: "Cross-Platform UI Toolkit (Dart)",
        features: [
          "Google's framework for building natively compiled apps (Mobile, Web, Desktop).",
          "Uses Dart language, known for expressive UI and fast development.",
          "Growing popularity for consistent cross-platform experiences."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/dotnet_maui.png", // Placeholder
        techName: ".NET MAUI",
        description: "Cross-Platform UI (.NET)",
        features: [
          "Evolution of Xamarin.Forms for building native apps (Mobile, Desktop) with C#/.NET.",
          "Single project structure targeting multiple platforms.",
          "Leverages native platform controls and UI paradigms."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/wpf_winui.png", // Placeholder
        techName: "WPF / WinUI",
        description: "Windows Native UI Frameworks",
        features: [
          "Microsoft frameworks for building modern Windows desktop applications.",
          "Utilize XAML for UI definition, support data binding.",
          "WinUI is the latest evolution for Windows App SDK."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cocoa_appkit.png", // Placeholder
        techName: "Cocoa / AppKit",
        description: "macOS Native UI Frameworks",
        features: [
          "Apple's frameworks for building native macOS applications.",
          "Written in Objective-C and Swift.",
          "Provides access to native macOS features and look-and-feel."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Backend & Enterprise Frameworks
      {
        imgSrc: "/assets/img/spring_boot_logo.png", // Placeholder
        techName: "Spring Boot",
        description: "Java Application Framework",
        features: [
          "Simplifies building production-ready Spring applications (Java/Kotlin).",
          "Opinionated approach with auto-configuration, embedded servers.",
          "Widely used for microservices, web applications, enterprise systems."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/aspnetcore_logo.png", // Placeholder
        techName: "ASP.NET Core",
        description: ".NET Web & API Framework",
        features: [
          "Cross-platform, high-performance framework for web apps and APIs using C#.",
          "Part of the modern .NET ecosystem.",
          "Supports building RESTful APIs, MVC web apps, Blazor (WebAssembly)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Architectural Patterns
      {
        imgSrc: "/assets/img/microservices.png", // Placeholder
        techName: "Microservices Architecture",
        description: "Independently Deployable Services",
        features: [
          "Structuring an application as a collection of small, autonomous services.",
          "Enables independent scaling, deployment, and technology choices per service.",
          "Improves resilience and team autonomy but adds complexity."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/event_driven.png", // Placeholder
        techName: "Event-Driven Architecture (EDA)",
        description: "Communication via Events",
        features: [
          "Components communicate asynchronously by producing/consuming events.",
          "Promotes loose coupling and scalability.",
          "Often uses message queues (Kafka, RabbitMQ) or event streams."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Databases
      {
        imgSrc: "/assets/img/sql_databases.png", // Placeholder
        techName: "SQL Databases (PostgreSQL, SQL Server)",
        description: "Relational Data Storage",
        features: [
          "Store data in structured tables with predefined schemas.",
          "Support ACID transactions, ensuring data integrity.",
          "PostgreSQL (Open Source), SQL Server (Microsoft) are popular choices."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/nosql_databases.png", // Placeholder
        techName: "NoSQL Databases (MongoDB, Redis)",
        description: "Flexible & Scalable Data Storage",
        features: [
          "Non-relational databases offering flexible schemas.",
          "MongoDB (Document), Redis (Key-Value/Cache), Cassandra (Columnar).",
          "Used for large volumes, high velocity, or unstructured data."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Integration & APIs
      {
        imgSrc: "/assets/img/api_design.png", // Placeholder
        techName: "API Design (REST, GraphQL, gRPC)",
        description: "Application Communication Interfaces",
        features: [
          "Defining contracts for how software components interact.",
          "REST (Stateless, HTTP-based), GraphQL (Query language), gRPC (High-performance RPC).",
          "Crucial for microservices, frontend-backend communication, integrations."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/message_queues.png", // Placeholder
        techName: "Message Queues (Kafka, RabbitMQ)",
        description: "Asynchronous Communication Middleware",
        features: [
          "Enable decoupling and reliable communication between services.",
          "Used in event-driven architectures and microservices.",
          "Kafka (Streaming Platform), RabbitMQ (Traditional Message Broker)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // DevOps & Cloud
      {
        imgSrc: "/assets/img/docker_kubernetes.png", // Placeholder - Reused
        techName: "Docker & Kubernetes",
        description: "Containerization & Orchestration",
        features: [
          "Docker: Standard for packaging applications into containers.",
          "Kubernetes: Platform for automating deployment, scaling, and management of containers.",
          "Fundamental tools for modern application deployment and MLOps."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cicd_pipelines.png", // Placeholder
        techName: "CI/CD Pipelines",
        description: "Automated Build, Test, Deploy",
        features: [
          "Continuous Integration & Continuous Deployment/Delivery practices.",
          "Automates software delivery process, enabling faster releases.",
          "Tools include Jenkins, GitHub Actions, GitLab CI, Azure DevOps."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_platforms_appdev.png", // Placeholder
        techName: "Cloud Platforms (AWS/Azure/GCP)",
        description: "Infrastructure & Services",
        features: [
          "Provide scalable compute, storage, databases, networking, and specialized services.",
          "Enable building cloud-native applications.",
          "Offer Platform-as-a-Service (PaaS) and Infrastructure-as-a-Service (IaaS)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Methodologies & Principles
      {
        imgSrc: "/assets/img/agile_methodology.png", // Placeholder
        techName: "Agile Methodologies",
        description: "Iterative Development Process",
        features: [
          "Focus on collaboration, customer feedback, and rapid iterations.",
          "Frameworks include Scrum (Sprints, Roles) and Kanban (Flow visualization).",
          "Standard approach for modern software development teams."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/software_testing.png", // Placeholder
        techName: "Software Testing Principles",
        description: "Ensuring Application Quality",
        features: [
          "Includes Unit, Integration, System, Acceptance, Performance, Security testing.",
          "Test-Driven Development (TDD) practices.",
          "Automation frameworks (JUnit, NUnit, PyTest, Selenium, Cypress) are key."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/uiux_design_apps.png", // Placeholder
        techName: "UI/UX for Applications",
        description: "User-Centric Application Design",
        features: [
          "Designing intuitive, efficient, and accessible user interfaces.",
          "Considering user workflows, information architecture, platform conventions.",
          "Different considerations for desktop vs. web vs. mobile applications."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/design_patterns.png", // Placeholder
        techName: "Software Design Patterns",
        description: "Reusable Solution Templates",
        features: [
          "Proven solutions to common software design problems (e.g., Singleton, Factory, Observer).",
          "Improve code readability, maintainability, and reusability.",
          "Categorized as Creational, Structural, and Behavioral patterns."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "End-to-End Custom Application Development Services",
      description: [
        "Custom Software Development: Building tailored applications to meet unique business needs.",
        "Desktop Application Development: Creating native & cross-platform desktop apps.",
        "Enterprise Application Development: Developing complex, scalable, and secure solutions.",
        "Application Modernization: Upgrading legacy systems with modern technologies.",
        "API Development & Integration: Building robust APIs and connecting systems.",
        "Cloud-Native Application Development: Designing apps optimized for cloud environments.",
        "Application Maintenance & Support: Providing ongoing enhancements and support."
      ],
      image1Path: "/assets/img/app_dev_main.webp" // Placeholder
    },
    queryname: "app dev" // Using the tag from your list
  },
  cybersec: {
    serviceName: "Cybersecurity Services",
    tagline: "Protecting Your Digital Assets with Proactive Security Solutions.",
    videoUrl: "https://videos.pexels.com/video-files/7689914/7689914-hd_1920_1080_25fps.mp4", // Example cybersecurity/network video
    gradientshade: "#E74C3C", // Example red/alert shade
    cards: [
      // Network Security
      {
        imgSrc: "/assets/img/firewall_ngfw.png", // Placeholder
        techName: "Firewalls (NGFW)",
        description: "Network Traffic Filtering",
        features: [
          "Monitor and control incoming/outgoing network traffic based on security rules.",
          "Next-Generation Firewalls (NGFW) add application awareness, IPS, threat intelligence.",
          "Essential perimeter defense mechanism."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/ids_ips.png", // Placeholder
        techName: "IDS/IPS",
        description: "Intrusion Detection & Prevention",
        features: [
          "Intrusion Detection Systems (IDS) monitor network/system activity for malicious actions.",
          "Intrusion Prevention Systems (IPS) actively block detected threats.",
          "Analyze traffic patterns, signatures, and anomalies."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/vpn_zerotrust.png", // Placeholder
        techName: "VPNs & Zero Trust Architecture",
        description: "Secure Access & Modern Security Model",
        features: [
          "VPNs (Virtual Private Networks) create secure encrypted connections over public networks.",
          "Zero Trust Architecture (ZTA): 'Never trust, always verify' security model.",
          "ZTA focuses on strict identity verification, micro-segmentation, least privilege."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/network_segmentation.png", // Placeholder
        techName: "Network Segmentation",
        description: "Dividing Network into Zones",
        features: [
          "Splitting a network into smaller, isolated segments or zones.",
          "Limits the blast radius of security breaches; enhances security.",
          "Implemented using VLANs, firewalls, micro-segmentation."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Endpoint Security
      {
        imgSrc: "/assets/img/edr_xdr.png", // Placeholder
        techName: "EDR / XDR",
        description: "Advanced Endpoint/Threat Detection",
        features: [
          "Endpoint Detection & Response (EDR): Monitors endpoints, detects threats, enables response.",
          "Extended Detection & Response (XDR): Integrates data from endpoints, network, cloud, email.",
          "Provides holistic threat visibility and coordinated response."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/antivirus_antimalware.png", // Placeholder
        techName: "Antivirus / Anti-Malware",
        description: "Endpoint Malware Protection",
        features: [
          "Detects and removes known viruses, worms, trojans, ransomware, spyware.",
          "Uses signature-based detection, heuristics, behavioral analysis.",
          "Fundamental layer of endpoint security."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/mdm_uem.png", // Placeholder
        techName: "MDM / UEM",
        description: "Mobile & Unified Endpoint Management",
        features: [
          "Mobile Device Management (MDM): Manages and secures mobile devices (smartphones, tablets).",
          "Unified Endpoint Management (UEM): Extends management to laptops, desktops, IoT.",
          "Enforces security policies, configurations, application management."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Cloud Security
      {
        imgSrc: "/assets/img/cspm_cwpp.png", // Placeholder
        techName: "CSPM / CWPP",
        description: "Cloud Security Management",
        features: [
          "Cloud Security Posture Management (CSPM): Identifies misconfigurations, compliance risks.",
          "Cloud Workload Protection Platform (CWPP): Secures workloads (VMs, containers, serverless).",
          "Essential for managing security in AWS, Azure, GCP environments."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cloud_iam.png", // Placeholder
        techName: "Cloud IAM",
        description: "Identity Management in Cloud",
        features: [
          "Managing identities and access permissions within cloud platforms (AWS IAM, Azure AD, GCP IAM).",
          "Controls who can access which cloud resources.",
          "Utilizes roles, policies, and conditions for fine-grained control."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Application Security (AppSec)
      {
        imgSrc: "/assets/img/waf_logo.png", // Placeholder
        techName: "Web Application Firewall (WAF)",
        description: "Filtering Web Traffic",
        features: [
          "Filters, monitors, and blocks HTTP traffic to and from a web application.",
          "Protects against common web exploits like SQL injection, XSS.",
          "Deployed in front of web servers."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sast_dast.png", // Placeholder
        techName: "SAST & DAST",
        description: "Application Security Testing",
        features: [
          "Static Application Security Testing (SAST): Analyzes source code for vulnerabilities.",
          "Dynamic Application Security Testing (DAST): Tests running applications for flaws.",
          "Integral parts of a Secure Software Development Lifecycle (SSDLC)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/owasp_top10.png", // Placeholder
        techName: "OWASP Top 10",
        description: "Web App Security Risks Standard",
        features: [
          "Standard awareness document outlining the most critical web app security risks.",
          "Includes risks like Injection, Broken Authentication, Sensitive Data Exposure.",
          "Widely used guide for developers and security professionals."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/ssdlc.png", // Placeholder
        techName: "Secure SDLC (SSDLC)",
        description: "Integrating Security into Development",
        features: [
          "Building security practices into every phase of the software development lifecycle.",
          "Includes threat modeling, secure coding standards, security testing (SAST/DAST).",
          "Aims to build more secure software from the ground up."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Data Security
      {
        imgSrc: "/assets/img/encryption.png", // Placeholder
        techName: "Encryption (At Rest & In Transit)",
        description: "Protecting Data Confidentiality",
        features: [
          "Encoding data so only authorized parties can access it.",
          "Encryption At Rest: Securing stored data (databases, files).",
          "Encryption In Transit: Securing data moving across networks (TLS/SSL, VPNs)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dlp_logo.png", // Placeholder
        techName: "Data Loss Prevention (DLP)",
        description: "Preventing Data Breaches",
        features: [
          "Tools and processes to prevent sensitive data from leaving organizational control.",
          "Monitors data in use, in motion, and at rest.",
          "Detects and blocks unauthorized data exfiltration attempts."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Identity & Access Management (IAM)
       {
        imgSrc: "/assets/img/iam_concept.png", // Placeholder
        techName: "Identity & Access Management (IAM)",
        description: "Managing Digital Identities",
        features: [
          "Framework of policies and technologies for managing digital identities.",
          "Ensures the right individuals access the right resources at the right times.",
          "Includes authentication, authorization, identity lifecycle management."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/mfa_logo.png", // Placeholder
        techName: "Multi-Factor Authentication (MFA)",
        description: "Layered Authentication Security",
        features: [
          "Requires users to provide two or more verification factors to gain access.",
          "Factors include something you know (password), something you have (token), something you are (biometric).",
          "Significantly increases account security."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sso_logo.png", // Placeholder
        techName: "Single Sign-On (SSO)",
        description: "Centralized User Authentication",
        features: [
          "Allows users to log in once and access multiple related applications.",
          "Improves user experience and simplifies credential management.",
          "Protocols include SAML, OAuth 2.0, OpenID Connect."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/pam_logo.png", // Placeholder
        techName: "Privileged Access Management (PAM)",
        description: "Securing Privileged Accounts",
        features: [
          "Manages and monitors accounts with elevated privileges (admin accounts).",
          "Includes features like password vaulting, session monitoring, least privilege enforcement.",
          "Critical for preventing misuse of powerful accounts."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Security Operations (SecOps)
      {
        imgSrc: "/assets/img/siem_logo.png", // Placeholder
        techName: "SIEM",
        description: "Security Information & Event Management",
        features: [
          "Collects and aggregates log data from various sources.",
          "Analyzes data for security threats, provides real-time alerts.",
          "Enables security monitoring, incident investigation, compliance reporting."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/soar_logo.png", // Placeholder
        techName: "SOAR",
        description: "Security Orchestration, Automation, Response",
        features: [
          "Integrates security tools and automates incident response workflows.",
          "Uses playbooks to define automated actions for specific alerts.",
          "Improves response times and efficiency of security teams."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/vulnerability_management.png", // Placeholder
        techName: "Vulnerability Management",
        description: "Identifying & Remediating Weaknesses",
        features: [
          "Process of identifying, classifying, prioritizing, and remediating vulnerabilities.",
          "Involves regular scanning using tools like Nessus, Qualys, OpenVAS.",
          "Continuous process to reduce attack surface."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/pentesting.png", // Placeholder
        techName: "Penetration Testing",
        description: "Ethical Hacking Simulation",
        features: [
          "Authorized simulated cyberattack to evaluate system security.",
          "Identifies exploitable vulnerabilities from an attacker's perspective.",
          "Different types: black-box, white-box, grey-box."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/incident_response.png", // Placeholder
        techName: "Incident Response (IR)",
        description: "Managing Security Breaches",
        features: [
          "Process for handling cybersecurity incidents and data breaches.",
          "Phases include preparation, identification, containment, eradication, recovery, lessons learned.",
          "Aims to minimize damage and restore normal operations quickly."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/threat_intelligence.png", // Placeholder
        techName: "Threat Intelligence",
        description: "Understanding Cyber Threats",
        features: [
          "Collecting and analyzing information about current and potential threats.",
          "Provides context on attackers, motivations, TTPs (Tactics, Techniques, Procedures).",
          "Helps organizations make informed security decisions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Compliance & Governance
      {
        imgSrc: "/assets/img/compliance_frameworks.png", // Placeholder
        techName: "Compliance Frameworks",
        description: "Standards & Regulations",
        features: [
          "Guidelines and requirements for information security management.",
          "Examples: ISO 27001 (ISMS), NIST CSF, GDPR (Data Privacy), HIPAA (Healthcare), PCI DSS (Payments), SOC 2.",
          "Ensuring adherence is crucial for trust and avoiding penalties."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Emerging Areas
       {
        imgSrc: "/assets/img/ai_cybersecurity.png", // Placeholder
        techName: "AI in Cybersecurity",
        description: "Leveraging AI for Defense",
        features: [
          "Using AI/ML for enhanced threat detection, anomaly analysis, automated response.",
          "Analyzing vast datasets to identify sophisticated attacks.",
          "Also presents new challenges (adversarial AI)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/iot_ot_security.png", // Placeholder
        techName: "IoT / OT Security",
        description: "Securing Connected Devices & Industrial Systems",
        features: [
          "Addressing security challenges specific to Internet of Things (IoT) devices.",
          "Protecting Operational Technology (OT) used in industrial control systems (ICS).",
          "Requires specialized approaches due to device constraints and criticality."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Comprehensive Cybersecurity Services to Mitigate Risks and Protect Your Business",
      description: [
        "Managed Security Services (MSSP): 24/7 monitoring, threat detection, and response.",
        "Vulnerability Assessment & Penetration Testing (VAPT): Identifying security weaknesses.",
        "Cloud Security Assessment & Configuration: Securing AWS, Azure, GCP environments.",
        "Application Security Testing: Assessing web/mobile apps for vulnerabilities (SAST/DAST).",
        "Incident Response & Forensics: Managing breaches and conducting investigations.",
        "Compliance & Governance Consulting: Assisting with ISO 27001, NIST, GDPR adherence.",
        "Security Awareness Training: Educating employees to recognize and prevent threats.",
        "Identity & Access Management Solutions: Implementing MFA, SSO, PAM for secure access."
      ],
      image1Path: "/assets/img/cybersec_main.webp" // Placeholder
    },
    queryname: "cybersec" // Using the tag from your list
  },
  cloudsolutions: { // Corrected: Unquoted top-level key
    serviceName: "Cloud Solutions", // Matches the naming convention
    tagline: "Leveraging the Cloud for Scalability, Innovation, and Efficiency.",
    videoUrl: "https://videos.pexels.com/video-files/8093278/8093278-hd_1920_1080_25fps.mp4", // Example cloud/data center video
    gradientshade: "#3498DB", // Example blue/cloud shade
    cards: [
      // Compute Services
      {
        imgSrc: "/assets/img/cloud_vms.png", // Placeholder
        techName: "Virtual Machines (IaaS)",
        description: "Scalable On-Demand Computing",
        features: [
          "Provision virtual servers (Linux, Windows) with customizable CPU, RAM, storage.",
          "Foundation of Infrastructure as a Service (IaaS) offering flexibility and control.",
          "Examples: AWS EC2, Azure Virtual Machines, Google Compute Engine."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_containers.png", // Placeholder
        techName: "Containers & Orchestration (e.g., Kubernetes)",
        description: "Application Packaging & Management",
        features: [
          "Package applications and dependencies for consistent deployment (Docker).",
          "Orchestration platforms (Kubernetes, EKS, AKS, GKE) automate deployment, scaling, management.",
          "Enables microservices architectures and efficient resource utilization."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_serverless.png", // Placeholder
        techName: "Serverless Computing (FaaS)",
        description: "Event-Driven Code Execution",
        features: [
          "Run code without provisioning or managing servers (Functions as a Service).",
          "Pay only for compute time consumed; scales automatically.",
          "Examples: AWS Lambda, Azure Functions, Google Cloud Functions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Storage Services
      {
        imgSrc: "/assets/img/cloud_object_storage.png", // Placeholder
        techName: "Object Storage",
        description: "Scalable Data Storage",
        features: [
          "Highly durable and scalable storage for unstructured data (images, videos, backups).",
          "Accessed via APIs; cost-effective for large volumes.",
          "Examples: AWS S3, Azure Blob Storage, Google Cloud Storage."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_block_storage.png", // Placeholder
        techName: "Block Storage",
        description: "Persistent VM Storage",
        features: [
          "Provides persistent block-level storage volumes for use with VMs.",
          "Ideal for databases, file systems, applications requiring low-latency access.",
          "Examples: AWS EBS, Azure Managed Disks, Google Persistent Disk."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Database Services
      {
        imgSrc: "/assets/img/cloud_managed_db.png", // Placeholder
        techName: "Managed Databases (SQL & NoSQL)",
        description: "Simplified Database Operations",
        features: [
          "Cloud providers manage patching, backups, scaling, high availability for databases.",
          "Supports various engines: Relational (RDS, Azure SQL, Cloud SQL) & NoSQL (DynamoDB, Cosmos DB, Firestore).",
          "Reduces operational overhead for database administrators."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Networking Services
      {
        imgSrc: "/assets/img/cloud_vpc.png", // Placeholder
        techName: "Virtual Private Cloud (VPC)",
        description: "Isolated Network Environments",
        features: [
          "Logically isolated section of the public cloud to launch resources in a virtual network.",
          "Provides control over IP addressing, subnets, route tables, network gateways.",
          "Fundamental for network security and organization in the cloud."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_load_balancer.png", // Placeholder
        techName: "Load Balancing",
        description: "Distributing Application Traffic",
        features: [
          "Automatically distributes incoming application traffic across multiple targets (VMs, containers).",
          "Increases application availability, fault tolerance, and scalability.",
          "Operates at different layers (Application Load Balancer, Network Load Balancer)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cloud_cdn.png", // Placeholder
        techName: "Content Delivery Network (CDN)",
        description: "Accelerated Content Delivery",
        features: [
          "Globally distributed network of proxy servers caching content closer to users.",
          "Reduces latency and improves performance for websites and applications.",
          "Examples: AWS CloudFront, Azure CDN, Google Cloud CDN."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
  
      // Platform as a Service (PaaS) & Development
      {
        imgSrc: "/assets/img/cloud_paas.png", // Placeholder
        techName: "Platform as a Service (PaaS)",
        description: "Managed Application Platforms",
        features: [
          "Provides a platform allowing customers to develop, run, and manage applications without infrastructure complexity.",
          "Includes OS, programming language execution environment, database, web server.",
          "Examples: Heroku, AWS Elastic Beanstalk, Azure App Service, Google App Engine."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_devops_cicd.png", // Placeholder
        techName: "DevOps & CI/CD Tools",
        description: "Automated Software Delivery",
        features: [
          "Cloud platforms offer integrated tools for source control, build, testing, deployment.",
          "Facilitates Continuous Integration and Continuous Delivery/Deployment (CI/CD) pipelines.",
          "Examples: AWS CodePipeline/CodeBuild, Azure DevOps, Google Cloud Build."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cloud_iac.png", // Placeholder
        techName: "Infrastructure as Code (IaC)",
        description: "Managing Infrastructure via Code",
        features: [
          "Managing and provisioning infrastructure through machine-readable definition files.",
          "Enables automation, version control, and repeatable environment creation.",
          "Tools: Terraform, AWS CloudFormation, Azure Resource Manager (ARM), Google Cloud Deployment Manager."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Advanced Services
      {
        imgSrc: "/assets/img/cloud_bigdata.png", // Placeholder
        techName: "Big Data & Analytics",
        description: "Processing & Analyzing Large Datasets",
        features: [
          "Managed services for data warehousing, data lakes, ETL, stream processing, and analytics.",
          "Scalable platforms to derive insights from vast amounts of data.",
          "Examples: AWS Redshift/EMR, Azure Synapse/Data Factory, Google BigQuery/Dataproc."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cloud_ai_ml.png", // Placeholder
        techName: "AI & Machine Learning Services",
        description: "Integrating Intelligence into Apps",
        features: [
          "Pre-trained AI services (vision, speech, language) and platforms for building custom ML models.",
          "Tools for data labeling, model training, deployment, and management.",
          "Examples: AWS SageMaker/Rekognition, Azure Machine Learning/Cognitive Services, Google AI Platform/Vision AI."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Management & Migration
      {
        imgSrc: "/assets/img/cloud_hybrid_multi.png", // Placeholder
        techName: "Hybrid & Multi-Cloud Management",
        description: "Managing Diverse Cloud Environments",
        features: [
          "Tools and platforms to manage resources across on-premises, private, and public clouds.",
          "Provides consistent management, governance, and operations.",
          "Examples: Azure Arc, Google Anthos, AWS Outposts (for hybrid)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/cloud_migration.png", // Placeholder
        techName: "Cloud Migration Strategies",
        description: "Moving Workloads to the Cloud",
        features: [
          "Methodologies for migrating applications and data (Rehost, Replatform, Refactor, Rearchitect, etc.).",
          "Services and tools offered by cloud providers to assist migration.",
          "Requires careful planning, assessment, and execution."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
        {
        imgSrc: "/assets/img/cloud_monitoring.png", // Placeholder
        techName: "Monitoring & Observability",
        description: "Performance & Health Tracking",
        features: [
          "Services for collecting metrics, logs, and traces from cloud resources and applications.",
          "Provides visibility into performance, health, and troubleshooting.",
          "Examples: AWS CloudWatch, Azure Monitor, Google Cloud Operations (Stackdriver)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "End-to-End Cloud Solutions for Business Transformation",
      description: [
        "Cloud Strategy & Consulting: Defining your cloud roadmap and architecture.",
        "Cloud Migration Services: Seamlessly moving applications and data to AWS, Azure, or GCP.",
        "Infrastructure Design & Deployment: Building scalable and resilient IaaS/PaaS environments.",
        "Managed Cloud Services: Ongoing operations, optimization, monitoring, and support.",
        "DevOps & Automation Implementation: Establishing CI/CD pipelines and Infrastructure as Code.",
        "Serverless Application Development: Building cost-efficient, event-driven solutions.",
        "Containerization & Kubernetes Management: Modernizing applications with containers.",
        "Data Analytics & AI/ML Solutions: Leveraging cloud platforms for insights and intelligence.",
        "Cloud Cost Optimization: Analyzing and reducing cloud spending.",
         "Hybrid and Multi-Cloud Integration & Management: Connecting and managing diverse environments."
      ],
      image1Path: "/assets/img/cloud_main.webp" // Placeholder
    },
    queryname: "cloud solutions" // Corrected: Matches top-level key and naming convention
  },
  systemintegration: {
    serviceName: "System Integration Services",
    tagline: "Connecting Your Systems for Seamless Operations and Data Flow.",
    videoUrl: "https://videos.pexels.com/video-files/8573969/8573969-hd_1920_1080_25fps.mp4", // Example connectivity/network video
    gradientshade: "#5D6D7E", // Example professional grey/slate shade
    cards: [
      // Core Integration Concepts
      {
        imgSrc: "/assets/img/si_app_integration.png", // Placeholder
        techName: "Application Integration",
        description: "Connecting Disparate Software",
        features: [
          "Enabling different software applications to communicate and share data.",
          "Point-to-point connections, middleware, or API-led approaches.",
          "Improves efficiency and eliminates data silos between business systems."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_api.png", // Placeholder
        techName: "API Integration & Management",
        description: "Leveraging APIs for Connectivity",
        features: [
          "Using Application Programming Interfaces (APIs) to connect applications and services.",
          "Designing, securing, deploying, and managing APIs (API Gateways, Developer Portals).",
          "Facilitates modularity, reusability, and third-party integrations."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_middleware.png", // Placeholder
        techName: "Middleware Solutions (ESB/iPaaS)",
        description: "Centralized Integration Hubs",
        features: [
          "Using software like Enterprise Service Bus (ESB) or Integration Platform as a Service (iPaaS) to mediate communication.",
          "Provides capabilities like message routing, transformation, protocol conversion.",
          "Simplifies complex integration scenarios and enhances manageability."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_data_integration.png", // Placeholder
        techName: "Data Integration & ETL",
        description: "Consolidating & Transforming Data",
        features: [
          "Combining data from different sources into a unified view.",
          "Extract, Transform, Load (ETL) processes for data warehousing and analytics.",
          "Ensures data consistency, accuracy, and accessibility across the organization."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_bpi.png", // Placeholder
        techName: "Business Process Integration (BPI)",
        description: "Streamlining Cross-System Workflows",
        features: [
          "Automating and optimizing business processes that span multiple applications.",
          "Ensuring smooth handoffs and data flow between steps in different systems.",
          "Improves operational speed, reduces errors, and enhances visibility."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Specific Integration Areas
      {
        imgSrc: "/assets/img/si_cloud_integration.png", // Placeholder
        techName: "Cloud Integration",
        description: "Connecting Cloud & On-Premise Systems",
        features: [
          "Integrating cloud-based applications (SaaS) with each other or with on-premise systems.",
          "Addressing challenges of hybrid environments (security, data synchronization).",
          "Utilizing iPaaS or specific cloud provider integration services."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_erp_crm.png", // Placeholder
        techName: "ERP/CRM Integration",
        description: "Connecting Core Business Systems",
        features: [
          "Integrating Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems.",
          "Synchronizing customer, product, order, and financial data.",
          "Provides a unified view of business operations and customer interactions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/si_legacy.png", // Placeholder
        techName: "Legacy System Integration",
        description: "Modernizing Existing Infrastructure",
        features: [
          "Connecting older, often mission-critical systems with modern applications.",
          "Employing techniques like screen scraping, messaging queues, or API wrapping.",
          "Extends the life and value of legacy investments while enabling new capabilities."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
       // Supporting Elements
      {
        imgSrc: "/assets/img/si_testing.png", // Placeholder
        techName: "Integration Testing",
        description: "Ensuring Integrated Systems Work",
        features: [
          "Verifying that independently developed modules or applications work correctly together.",
          "Testing data flow, interfaces, and end-to-end process execution.",
          "Crucial for identifying issues at the interaction points between systems."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Expert System Integration Services for a Unified IT Landscape",
      description: [
        "Integration Strategy & Architecture Design: Planning robust and scalable integration solutions.",
        "API Development & Management Services: Building and managing secure, reliable APIs.",
        "Middleware Implementation & Configuration (ESB, iPaaS): Deploying centralized integration platforms.",
        "Data Migration, Synchronization & ETL Services: Ensuring seamless data flow and consistency.",
        "Custom Application & Platform Integration: Connecting bespoke and standard software.",
        "Cloud Integration Services: Bridging gaps between cloud, on-premise, and hybrid environments.",
        "Legacy System Modernization & Integration: Connecting the old with the new.",
        "Business Process Automation & Orchestration: Streamlining workflows across systems.",
        "End-to-End Integration Testing & Validation: Guaranteeing reliability and performance.",
        "Ongoing Integration Platform Management & Support: Ensuring continued smooth operation."
      ],
      image1Path: "/assets/img/si_main.webp" // Placeholder
    },
    queryname: "system integration services" // Matches top-level key and naming convention
  },
  qatesting: {
    serviceName: "Quality Assurance & Testing",
    tagline: "Ensuring Software Quality, Reliability, and Performance Through Comprehensive Testing.", // Slightly enhanced tagline
    videoUrl: "https://videos.pexels.com/video-files/5477840/5477840-hd_1920_1080_25fps.mp4", // Example software testing/code analysis video
    gradientshade: "#2ECC71", // Example reliable green shade
    cards: [
      // QA Process & Strategy
      {
        imgSrc: "/assets/img/qa_process_strategy.png", // Placeholder
        techName: "QA Process & Strategy",
        description: "Establishing Quality Foundations",
        features: [
          "Defining clear quality standards, objectives (SMART), and acceptance criteria.",
          "Developing comprehensive test plans, strategies, and process documentation.",
          "Implementing quality audits, metrics tracking (KPIs), and continuous improvement cycles."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      // Testing Levels
      {
        imgSrc: "/assets/img/qa_testing_levels.png", // Placeholder
        techName: "Testing Levels (Unit, Integration, System, UAT)",
        description: "Structured Testing Throughout SDLC",
        features: [
          "Unit Testing: Verifying individual components/modules by developers.",
          "Integration Testing: Testing interactions between integrated units/modules.",
          "System Testing: Evaluating the entire system against specified requirements.",
          "User Acceptance Testing (UAT): Validating software meets business needs and user requirements (incl. Alpha/Beta)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      // Functional & Regression
      {
        imgSrc: "/assets/img/qa_functional.png", // Placeholder
        techName: "Functional Testing (Manual & Automated)",
        description: "Verifying Core Functionality",
        features: [
          "Testing software against functional requirements to ensure it behaves as expected.",
          "Includes black-box testing techniques, specification-based testing.",
          "Can involve manual execution or automated scripts for efficiency."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/qa_regression.png", // Placeholder
        techName: "Regression Testing",
        description: "Preventing New Defects",
        features: [
          "Re-testing after changes (bug fixes, new features) to ensure no adverse impact on existing functionality.",
          "Crucial for maintaining stability throughout development cycles.",
          "Heavily reliant on automated test suites for comprehensive coverage."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       // Automation
      {
        imgSrc: "/assets/img/qa_automation.png", // Placeholder
        techName: "Test Automation Frameworks",
        description: "Efficient & Repeatable Testing",
        features: [
          "Developing automated scripts using frameworks/tools (Selenium, Cypress, Playwright, Appium, Katalon Studio, TestComplete).",
          "Covering UI, API, Mobile automation; supporting CI/CD integration.",
          "Includes trends like scriptless automation and AI-augmented testing."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      // Non-Functional Testing
      {
        imgSrc: "/assets/img/qa_performance.png", // Placeholder
        techName: "Performance & Load Testing",
        description: "Assessing Stability & Responsiveness",
        features: [
          "Evaluating application performance under load (Load Testing), peak load (Stress Testing), and prolonged use (Soak Testing).",
          "Identifying bottlenecks using tools like JMeter, LoadRunner, K6.",
          "Ensuring scalability, responsiveness, and resource utilization meet requirements."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/qa_security.png", // Placeholder
        techName: "Security Testing Fundamentals",
        description: "Identifying Vulnerabilities",
        features: [
          "Testing applications for security flaws (e.g., OWASP Top 10), data breaches, unauthorized access.",
          "Includes vulnerability scanning, basic penetration testing, security code reviews within QA scope.",
          "Ensuring compliance with security standards and data protection regulations."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_usability.png", // Placeholder
        techName: "Usability & Accessibility Testing",
        description: "Ensuring User-Friendliness & Access",
        features: [
          "Evaluating ease of use, intuitiveness, and overall user experience (UX).",
          "Testing compliance with accessibility standards (WCAG, Section 508) for inclusivity.",
          "Involves heuristic evaluation, user feedback sessions, and testing with assistive technologies."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_compatibility.png", // Placeholder
        techName: "Compatibility Testing",
        description: "Testing Across Environments",
        features: [
          "Ensuring application works correctly across different browsers, operating systems, devices, network conditions, and screen resolutions.",
          "Validating backward compatibility with previous versions where required.",
          "Utilizing device labs, emulators/simulators, and cloud testing platforms."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      // Specialized Testing Areas
       {
        imgSrc: "/assets/img/qa_mobile.png", // Placeholder
        techName: "Mobile Application Testing",
        description: "Testing for iOS, Android & More",
        features: [
          "Specific testing for native, hybrid, and progressive web apps (PWAs).",
          "Covers installation, UI/UX, performance, network variability, interruptions, platform specifics.",
          "Utilizing tools like Appium and device farms (e.g., HeadSpin)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/qa_api.png", // Placeholder
        techName: "API & Web Services Testing",
        description: "Testing Backend Logic & Integration",
        features: [
          "Testing APIs (REST, SOAP) directly for functionality, reliability, performance, and security.",
          "Validating data exchange, error handling, and integration points between services.",
          "Using tools like Postman, RestAssured, SoapUI, Katalon Studio."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_database.png", // Placeholder
        techName: "Database & Data Integrity Testing",
        description: "Validating Data Storage & Accuracy",
        features: [
          "Verifying data mapping, schema integrity, stored procedures, triggers, and data accuracy.",
          "Ensuring data consistency across transactions and migrations.",
          "Testing data retrieval performance and security."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_globalization.png", // Placeholder
        techName: "Globalization Testing (I18N/L10N)",
        description: "Ensuring Global Readiness",
        features: [
          "Internationalization (I18N) Testing: Verifying adaptability for different locales without code change (UTF-8 support, text expansion handling, date/currency formats).",
          "Localization (L10N) Testing: Validating adaptation for specific locales (translation accuracy, cultural appropriateness, regional standards).",
          "Utilizing techniques like pseudolocalization."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_exploratory.png", // Placeholder
        techName: "Exploratory Testing",
        description: "Simultaneous Learning & Testing",
        features: [
          "Unscripted, intuitive testing where testers simultaneously learn about the software, design tests, and execute them.",
          "Effective for finding defects missed by formal testing.",
          "Relies on tester skill, intuition, and domain knowledge."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      // Management & Environment
      {
        imgSrc: "/assets/img/qa_test_data_mgmt.png", // Placeholder
        techName: "Test Environment & Data Management",
        description: "Managing Test Resources Effectively",
        features: [
          "Setting up and maintaining stable test environments mirroring production.",
          "Test Data Management (TDM): Discovery, subsetting, generation (synthetic/production), masking/anonymization (GDPR/CCPA compliance), provisioning, and refresh strategies.",
          "Ensuring data relevance, accuracy, security, and availability for testing needs."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/qa_agile.png", // Placeholder
        techName: "Agile QA & Continuous Testing",
        description: "Integrating QA into DevOps",
        features: [
          "Embedding QA practices throughout the agile development lifecycle (Shift-Left Testing).",
          "Automating tests within CI/CD pipelines for rapid feedback (Continuous Testing).",
          "Utilizing production monitoring and feedback (Shift-Right Testing) for ongoing quality.",
          "Focusing on collaboration (Dev, QA, Ops) and risk-based testing."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "End-to-End Quality Assurance and Testing Services", // Updated heading
      description: [ 
        "Comprehensive QA Strategy, Planning, and Process Implementation.",
        "Multi-Level Testing Execution (Unit, Integration, System, UAT).",
        "Manual & Automated Functional and Regression Testing.",
        "Robust Test Automation Framework Development (Web, Mobile, API).",
        "Performance Engineering, Load, Stress, and Scalability Testing.",
        "Application Security Assessment & Vulnerability Testing.",
        "Usability (UX) and Accessibility (WCAG) Compliance Testing.",
        "Cross-Browser, Cross-Platform, and Device Compatibility Validation.",
        "Dedicated Mobile Application Testing Services (iOS/Android).",
        "API, Microservices, and Backend System Testing.",
        "Database Integrity and Data Migration Testing.",
        "Globalization (I18N/L10N) Testing for Global Products.",
        "Exploratory and Ad-hoc Testing Services.",
        "Test Environment Setup and Test Data Management Solutions.",
        "Agile QA Integration and Continuous Testing within CI/CD Pipelines."
      ],
      image1Path: "/assets/img/qa_main.webp" // Placeholder
    },
    queryname: "quality assurance and testing" // Matches top-level key and naming convention
  },
  gamedev: {
    serviceName: "Game Development",
    tagline: "Creating Immersive and Engaging Gaming Experiences.",
    videoUrl: "https://videos.pexels.com/video-files/7168356/7168356-hd_1920_1080_25fps.mp4", // Example game development/graphics video
    gradientshade: "#F39C12", // Example vibrant orange shade
    cards: [
      // Core Engines & Technology
      {
        imgSrc: "/assets/img/gd_engine_unity.png", // Placeholder
        techName: "Game Engines (Unity, Unreal)",
        description: "Industry-Standard Development Platforms",
        features: [
          "Utilizing powerful engines like Unity (C#) and Unreal Engine (C++/Blueprints) for robust development.",
          "Cross-platform capabilities for PC, console, mobile, VR/AR, and web.",
          "Access to asset stores, extensive documentation, and large communities."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_programming.png", // Placeholder
        techName: "Game Programming",
        description: "Bringing Game Mechanics to Life",
        features: [
          "Core logic implementation using languages like C++, C#, Python, etc.",
          "Developing gameplay systems, AI behavior, physics interactions, and tooling.",
          "Optimizing code for performance across target platforms."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Design & Art
      {
        imgSrc: "/assets/img/gd_design.png", // Placeholder
        techName: "Game Design & Mechanics",
        description: "Crafting Engaging Gameplay",
        features: [
          "Designing core game loops, level layouts, player progression, and narrative elements.",
          "Balancing difficulty, engagement, and player experience.",
          "Creating detailed Game Design Documents (GDDs)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_art_2d3d.png", // Placeholder
        techName: "2D/3D Art & Animation",
        description: "Creating Visually Appealing Worlds",
        features: [
          "Producing concept art, character models, environment assets, textures, and UI elements.",
          "Creating sprite sheets, skeletal animation, and cinematic sequences.",
          "Matching art style to the game's vision and technical constraints."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_uiux.png", // Placeholder
        techName: "Game UI/UX Design",
        description: "Intuitive Player Interaction",
        features: [
          "Designing user interfaces (menus, HUDs) that are intuitive and visually appealing.",
          "Focusing on user experience (UX) to ensure smooth navigation and player interaction.",
          "Adapting UI for different screen sizes and input methods (mouse, controller, touch)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/gd_audio.png", // Placeholder
        techName: "Audio Design & Implementation",
        description: "Immersive Soundscapes & Music",
        features: [
          "Creating original sound effects (SFX), ambient sounds, and musical scores.",
          "Integrating audio into the game engine, handling spatial audio and mixing.",
          "Enhancing immersion and player feedback through sound."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Platforms & Features
      {
        imgSrc: "/assets/img/gd_multiplatform.png", // Placeholder
        techName: "Multiplatform Development",
        description: "Reaching Players Everywhere",
        features: [
          "Developing games for PC (Windows, macOS, Linux), Consoles (PlayStation, Xbox, Switch), Mobile (iOS, Android).",
          "Building for Web (HTML5) and emerging platforms like VR/AR.",
          "Handling platform-specific requirements, optimizations, and submission processes."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_multiplayer.png", // Placeholder
        techName: "Multiplayer & Networking",
        description: "Connecting Players Globally",
        features: [
          "Implementing real-time or turn-based multiplayer functionality.",
          "Developing server architecture, handling synchronization, and ensuring network security.",
          "Utilizing networking libraries and backend services (Photon, Mirror, etc.)."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_vrar.png", // Placeholder
        techName: "VR/AR Development",
        description: "Building Immersive Realities",
        features: [
          "Developing games and experiences for Virtual Reality (VR) and Augmented Reality (AR) platforms.",
          "Handling unique input methods, interaction models, and performance constraints.",
          "Expertise with platforms like Oculus (Meta) Quest, HTC Vive, HoloLens, ARKit, ARCore."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
  
      // Post-Development
      {
        imgSrc: "/assets/img/gd_qa.png", // Placeholder
        techName: "Game QA & Testing",
        description: "Ensuring Quality & Stability",
        features: [
          "Rigorous testing processes including functionality, compatibility, performance, usability testing.",
          "Bug tracking, reporting, and regression testing.",
          "Conducting playtesting sessions for feedback on gameplay and balance."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/gd_porting.png", // Placeholder
        techName: "Game Porting & Optimization",
        description: "Adapting Games for New Platforms",
        features: [
          "Adapting existing games to run smoothly on different hardware and platforms.",
          "Optimizing performance, memory usage, and controls for target devices.",
          "Navigating platform-specific certification requirements."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/gd_liveops.png", // Placeholder
        techName: "Live Operations (LiveOps)",
        description: "Ongoing Game Management",
        features: [
          "Managing games post-launch with updates, events, new content, and community engagement.",
          "Analyzing player data to inform decisions and improve retention.",
          "Implementing monetization strategies and managing backend infrastructure."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Full-Cycle Game Development Services",
      description: [
        "Game Concept Development & Prototyping: Bringing initial ideas to playable demos.",
        "Full-Scale Game Production: End-to-end development using Unity, Unreal, and other engines.",
        "Cross-Platform Development: Targeting PC, Consoles (PlayStation, Xbox, Switch), Mobile (iOS/Android), Web.",
        "2D & 3D Art Production: Creating stunning visuals, characters, environments, and animations.",
        "Multiplayer Game Development: Building engaging online experiences.",
        "VR & AR Game Development: Crafting immersive virtual and augmented reality games.",
        "Game Porting Services: Expanding your game's reach to new platforms.",
        "Comprehensive QA & Testing: Ensuring a polished and bug-free player experience.",
        "Monetization Strategy & Implementation: Designing effective revenue models (IAP, Ads, etc.).",
        "Post-Launch Support & LiveOps: Keeping games fresh and engaging after release."
      ],
      image1Path: "/assets/img/gd_main.webp" // Placeholder
    },
    queryname: "game dev" // Matches top-level key and naming convention
  },
  supplychain: {
    serviceName: "Supply Chain Solutions",
    tagline: "Optimizing Your Supply Chain for Efficiency, Visibility, and Resilience.",
    videoUrl: "https://videos.pexels.com/video-files/5021910/5021910-hd_1920_1080_30fps.mp4", // Example logistics/warehouse/global trade video
    gradientshade: "#1ABC9C", // Example turquoise/green shade
    cards: [
      // Planning & Strategy
      {
        imgSrc: "/assets/img/sc_planning.png", // Placeholder
        techName: "Supply Chain Planning (SCP)",
        description: "Strategic Demand & Supply Balancing",
        features: [
          "Software and processes for demand forecasting, inventory planning, supply planning, and Sales & Operations Planning (S&OP).",
          "Aims to align supply with demand using advanced analytics and AI/ML to optimize inventory, costs, and service levels.", // Enhanced feature
          "Includes leading Advanced Planning System (APS) / Integrated Business Planning (IBP) platforms like Kinaxis, o9 Solutions, OMP, SAP IBP, often enhanced by Decision Intelligence tools like Aera Technology." // Added specific tool examples
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/sc_procurement.png", // Placeholder
        techName: "Procurement & Sourcing Solutions",
        description: "Managing Supplier Relationships & Spend",
        features: [
          "Tools for eProcurement (automating purchase orders), strategic sourcing, supplier relationship management (SRM), and contract management.",
          "Optimizing sourcing strategies, negotiating better terms, and managing supplier performance.",
          "Enhancing compliance and reducing procurement costs."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sc_inventory.png", // Placeholder
        techName: "Inventory Management & Optimization",
        description: "Balancing Stock Levels & Costs",
        features: [
          "Techniques and systems for optimizing inventory levels across the supply chain.",
          "Includes demand forecasting, safety stock calculation, Just-In-Time (JIT) principles, ABC analysis.",
          "Minimizing holding costs, stockouts, and obsolescence while ensuring availability."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Execution Systems
      {
        imgSrc: "/assets/img/sc_wms.png", // Placeholder
        techName: "Warehouse Management Systems (WMS)",
        description: "Optimizing Warehouse Operations",
        features: [
          "Software managing day-to-day warehouse operations: receiving, putaway, picking, packing, shipping, inventory tracking.",
          "Improves efficiency, accuracy, space utilization, and labor productivity within the warehouse.",
          "Often integrates with barcode scanners, RFID, and automated systems."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sc_tms.png", // Placeholder
        techName: "Transportation Management Systems (TMS)",
        description: "Managing Freight & Logistics",
        features: [
          "Software for planning, executing, and optimizing the physical movement of goods.",
          "Includes route planning, carrier selection, load optimization, freight audit, and shipment tracking.",
          "Aims to reduce transportation costs, improve efficiency, and enhance visibility."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/sc_oms.png", // Placeholder
        techName: "Order Management Systems (OMS)",
        description: "Centralizing Order Processing",
        features: [
          "Systems for managing the entire order lifecycle from entry to fulfillment and post-sales service.",
          "Provides a central view of orders across multiple channels (online, retail, etc.).",
          "Facilitates efficient order orchestration, inventory allocation, and customer communication."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Visibility & Technology Enablers
       {
        imgSrc: "/assets/img/sc_visibility.png", // Placeholder
        techName: "Supply Chain Visibility & Analytics",
        description: "Real-time Insight & Performance Monitoring",
        features: [
          "Platforms providing end-to-end visibility into inventory, shipments, and orders across the supply chain (Control Towers).",
          "Utilizing real-time data, analytics, and dashboards for monitoring KPIs, identifying exceptions, and enabling proactive decisions.",
          "Leverages data from WMS, TMS, ERP, IoT devices."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sc_iot.png", // Placeholder
        techName: "IoT in Supply Chain",
        description: "Real-time Tracking & Condition Monitoring",
        features: [
          "Using Internet of Things (IoT) sensors for real-time tracking of assets, shipments, and inventory.",
          "Monitoring environmental conditions (temperature, humidity) for sensitive goods.",
          "Providing granular data for improved visibility, security, and quality control."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sc_blockchain.png", // Placeholder
        techName: "Blockchain for Traceability",
        description: "Enhancing Transparency & Trust",
        features: [
          "Leveraging blockchain technology for immutable and transparent tracking of goods from origin to consumer.",
          "Improving traceability, verifying authenticity, and enhancing trust among supply chain partners.",
          "Particularly relevant for food safety, pharmaceuticals, and high-value goods."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/sc_ai_ml.png", // Placeholder
        techName: "AI/ML in SCM",
        description: "Intelligent Automation & Optimization",
        features: [
          "Applying Artificial Intelligence (AI) and Machine Learning (ML) for enhanced demand forecasting.",
          "Optimizing logistics routes, predicting potential disruptions, automating warehouse tasks (robotics).",
          "Enabling predictive maintenance for supply chain assets."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Optimization & Resilience
       {
        imgSrc: "/assets/img/sc_risk.png", // Placeholder
        techName: "Risk Management & Resilience",
        description: "Mitigating Disruptions",
        features: [
          "Identifying, assessing, and mitigating potential risks (geopolitical, natural disasters, supplier failure) in the supply chain.",
          "Developing contingency plans and building resilient, flexible supply networks.",
          "Utilizing predictive analytics and scenario planning."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
        {
        imgSrc: "/assets/img/sc_sustainability.png", // Placeholder
        techName: "Sustainable & Green Supply Chains",
        description: "Environmental & Social Responsibility",
        features: [
          "Designing and managing supply chains to reduce environmental impact (carbon footprint, waste).",
          "Ensuring ethical sourcing, fair labor practices, and regulatory compliance.",
          "Focusing on circular economy principles and sustainable logistics."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Integrated Supply Chain Solutions for a Competitive Edge",
      description: [
        "Supply Chain Strategy Development & Network Optimization.",
        "Implementation of SCM Systems (WMS, TMS, SCP, OMS, SRM) including leading platforms like Kinaxis, o9, OMP, SAP IBP.", // Mentioned platforms here too
        "Digital Procurement Transformation & Sourcing Services.",
        "Advanced Inventory Planning & Demand Forecasting Solutions.",
        "Logistics Management & Transportation Optimization.",
        "End-to-End Supply Chain Visibility & Control Tower Solutions.",
        "IoT, Blockchain, AI/ML, and Decision Intelligence (e.g., Aera) Integration for Smarter Supply Chains.", // Added Aera example context
        "Supply Chain Risk Assessment & Resilience Building.",
        "Sustainable Supply Chain Design & Consulting.",
        "Integration Services with ERP, CRM, and other enterprise systems."
      ],
      image1Path: "/assets/img/sc_main.webp" // Placeholder
    },
    queryname: "supply chain" // Matches top-level key and naming convention
  },
  digitalmarketing: {
    serviceName: "Digital Marketing & Branding",
    tagline: "Building Your Brand and Driving Growth in the Digital Landscape.",
    videoUrl: "https://videos.pexels.com/video-files/3194231/3194231-hd_1920_1080_25fps.mp4", // Example digital marketing/social media/analytics video
    gradientshade: "#8E44AD", // Example purple shade
    cards: [
      // Branding & Strategy
      {
        imgSrc: "/assets/img/dm_branding.png", // Placeholder
        techName: "Brand Strategy & Identity",
        description: "Defining Your Market Presence",
        features: [
          "Developing core brand strategy, positioning, messaging, and voice.",
          "Designing visual identity: logo design, color palettes, typography, brand guidelines.",
          "Ensuring consistent brand representation across all digital touchpoints."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dm_strategy.png", // Placeholder
        techName: "Digital Marketing Strategy",
        description: "Planning for Online Success",
        features: [
          "Comprehensive planning based on business goals, target audience analysis, and competitor research.",
          "Defining key performance indicators (KPIs) and selecting optimal digital channels.",
          "Creating integrated roadmaps for execution and budget allocation."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Search Marketing
      {
        imgSrc: "/assets/img/dm_seo.png", // Placeholder
        techName: "Search Engine Optimization (SEO)",
        description: "Increasing Organic Visibility",
        features: [
          "Improving website ranking on Search Engine Results Pages (SERPs) like Google.",
          "Includes keyword research, on-page optimization, technical SEO, link building (off-page), and local SEO.",
          "Focusing on organic traffic growth and long-term online authority."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dm_ppc.png", // Placeholder
        techName: "PPC Advertising (SEM)",
        description: "Targeted Paid Search Campaigns",
        features: [
          "Managing paid advertising campaigns on platforms like Google Ads and Bing Ads (Search Engine Marketing).",
          "Includes keyword bidding, ad copywriting, landing page optimization, and performance tracking.",
          "Driving targeted traffic and immediate results based on campaign spend."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Social Media & Content
      {
        imgSrc: "/assets/img/dm_smm.png", // Placeholder
        techName: "Social Media Marketing (SMM)",
        description: "Engaging Audiences & Building Community",
        features: [
          "Developing strategy, creating content, and managing presence on platforms (Facebook, Instagram, LinkedIn, X, TikTok, etc.).",
          "Running paid social advertising campaigns for targeted reach and conversions.",
          "Includes community management, influencer marketing, and social listening."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dm_content.png", // Placeholder
        techName: "Content Marketing",
        description: "Attracting & Retaining Audiences",
        features: [
          "Creating and distributing valuable, relevant content (blogs, articles, videos, infographics, podcasts) to attract a defined audience.",
          "Focusing on building brand authority, driving traffic, and generating leads.",
          "Includes content strategy development, editorial calendar management, and performance analysis."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dm_video.png", // Placeholder
        techName: "Video Marketing",
        description: "Engaging Through Visual Storytelling",
        features: [
          "Strategizing, producing, and distributing video content for platforms like YouTube, TikTok, Instagram Reels, and websites.",
          "Utilizing video for brand awareness, tutorials, testimonials, product demos, and social engagement.",
          "Optimizing videos for search and platform algorithms."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
  
      // Email & Other Channels
       {
        imgSrc: "/assets/img/dm_email.png", // Placeholder
        techName: "Email Marketing Automation",
        description: "Nurturing Leads & Customer Retention",
        features: [
          "Designing and executing email campaigns for lead nurturing, promotions, newsletters, and customer retention.",
          "Utilizing marketing automation platforms (e.g., Mailchimp, HubSpot, ActiveCampaign) for segmentation, personalization, and automated workflows.",
          "Includes list building, A/B testing, and performance analytics."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/dm_cro.png", // Placeholder
        techName: "Conversion Rate Optimization (CRO)",
        description: "Maximizing Website Performance",
        features: [
          "Systematically improving website elements (layout, copy, CTAs) to increase the percentage of visitors who complete a desired action (e.g., purchase, sign-up).",
          "Utilizing A/B testing, heatmap analysis, user feedback, and analytics.",
          "Focusing on enhancing user experience (UX) to drive conversions."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Analytics & Management
      {
        imgSrc: "/assets/img/dm_analytics.png", // Placeholder
        techName: "Web Analytics & Reporting",
        description: "Measuring Performance & ROI",
        features: [
          "Setting up and managing analytics platforms like Google Analytics 4 (GA4).",
          "Tracking key metrics, analyzing campaign performance, user behavior, and conversion funnels.",
          "Providing regular reports and data-driven insights for strategy refinement and ROI measurement."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
        {
        imgSrc: "/assets/img/dm_reputation.png", // Placeholder
        techName: "Online Reputation Management (ORM)",
        description: "Monitoring & Managing Brand Perception",
        features: [
          "Monitoring online mentions, reviews (Google, Yelp, etc.), and social media conversations.",
          "Managing responses to feedback and proactively building a positive online reputation.",
          "Addressing negative sentiment and promoting positive customer experiences."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Comprehensive Digital Marketing and Branding Services",
      description: [
        "Holistic Brand Strategy Development and Visual Identity Design.",
        "Data-Driven Digital Marketing Strategy and Cross-Channel Planning.",
        "Expert Search Engine Optimization (SEO) for Organic Growth.",
        "Targeted PPC Campaign Management (Google Ads, Bing Ads, Social Ads).",
        "Engaging Social Media Marketing, Advertising, and Community Management.",
        "Compelling Content Strategy, Creation (Blogs, Video, etc.), and Distribution.",
        "Effective Email Marketing Automation and Lead Nurturing Campaigns.",
        "Conversion Rate Optimization (CRO) and User Experience Enhancement.",
        "Advanced Web Analytics (GA4) Implementation and Performance Reporting.",
        "Proactive Online Reputation Monitoring and Management."
      ],
      image1Path: "/assets/img/dm_main.webp" // Placeholder
    },
    queryname: "digital marketting and branding" // Matches top-level key and corrected spelling
  },
  cms: {
    serviceName: "CMS Development & Solutions",
    tagline: "Manage Your Content Effortlessly, Power Your Digital Presence.",
    videoUrl: "https://videos.pexels.com/video-files/6476260/6476260-hd_1920_1080_25fps.mp4", // Example CMS/web video
    gradientshade: "#F39C12", // Example orange shade
    cards: [
      // Core CMS Platforms (Traditional & Headless)
      {
        imgSrc: "/assets/img/wordpress_logo.png", // Placeholder
        techName: "WordPress",
        description: "Most Popular Traditional CMS",
        features: [
          "Dominant market share, powering a vast portion of the web.",
          "Extensive plugin and theme ecosystem for flexibility.",
          "Can be used headlessly via its REST API or GraphQL plugins."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/drupal_logo.png", // Placeholder
        techName: "Drupal",
        description: "Enterprise Open Source CMS",
        features: [
          "Known for robustness, security, and complex content modeling.",
          "Highly scalable, suitable for government and large organizations.",
          "Strong multilingual and accessibility features built-in."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/headless_cms.png", // Placeholder
        techName: "Headless CMS (Concept)",
        description: "Decoupled Content Architecture",
        features: [
          "Separates content backend from frontend presentation.",
          "Delivers content via API (REST/GraphQL) to any frontend/channel.",
          "Enables use of modern frontend frameworks and omnichannel strategies."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/strapi_logo.png", // Placeholder
        techName: "Strapi",
        description: "Leading Open-Source Headless CMS",
        features: [
          "Node.js based, highly customizable, developer-focused.",
          "Provides REST and GraphQL APIs, flexible content type builder.",
          "Self-hostable, offering full data control."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/contentful_logo.png", // Placeholder
        techName: "Contentful",
        description: "API-First SaaS Headless CMS",
        features: [
          "Cloud-native platform focused on content infrastructure and delivery.",
          "Robust APIs, SDKs, app framework, and content modeling.",
          "Scalable enterprise solution for omnichannel content delivery."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/sanity_logo.png", // Placeholder
        techName: "Sanity",
        description: "Platform for Structured Content",
        features: [
          "Offers real-time backend, customizable editor (Sanity Studio), GROQ query language.",
          "Treats content as data for maximum flexibility and reuse.",
          "Excellent for real-time collaboration and complex data relationships."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // E-commerce Platforms / CMS Integration
      {
        imgSrc: "/assets/img/shopify_logo.png", // Placeholder
        techName: "Shopify",
        description: "Leading SaaS E-commerce Platform",
        features: [
          "Hosted solution simplifying online store creation and management.",
          "Extensive app store and theme market.",
          "Offers headless commerce APIs via Shopify Plus."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/magento_logo.png", // Placeholder
        techName: "Magento (Adobe Commerce)",
        description: "Feature-Rich E-commerce Platform",
        features: [
          "Powerful open-source and SaaS options for large/complex stores.",
          "Highly customizable, scalable, strong B2B/B2C features.",
          "Requires significant development resources."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/woocommerce_logo.png", // Placeholder
        techName: "WooCommerce",
        description: "WordPress E-commerce Plugin",
        features: [
          "Transforms WordPress sites into online stores.",
          "Leverages WordPress ecosystem, highly customizable.",
          "Popular choice for small to medium-sized businesses."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Core Programming Languages
       {
        imgSrc: "/assets/img/php_logo.png", // Placeholder
        techName: "PHP",
        description: "Server-Side Language for CMS",
        features: [
          "Powers WordPress, Drupal, Joomla, Magento, and frameworks like Laravel/Symfony.",
          "Mature language with extensive documentation and community.",
          "Essential for traditional CMS theme and plugin development."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/javascript_logo.png", // Placeholder
        techName: "JavaScript",
        description: "Language for Frontend & Headless",
        features: [
          "Crucial for building interactive frontends for headless CMS.",
          "Used in modern WordPress (Gutenberg blocks) and Node.js-based CMS (Strapi).",
          "Frameworks like React, Vue, Angular are built with JS/TS."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
       // Frontend Frameworks (for Headless)
       {
        imgSrc: "/assets/img/react_logo.png", // Placeholder
        techName: "React / Next.js",
        description: "Popular Frontend for Headless CMS",
        features: [
          "React: Component-based library for building UIs.",
          "Next.js: Framework for production React apps (SSR, SSG) often paired with headless.",
          "Enables dynamic, high-performance frontends consuming CMS APIs."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/vue_nuxt.png", // Placeholder
        techName: "Vue.js / Nuxt.js",
        description: "Progressive Frontend for Headless",
        features: [
          "Vue: Approachable and versatile JavaScript framework.",
          "Nuxt.js: Framework for building Vue applications (SSR, SSG, routing).",
          "Popular choice for creating engaging frontends connected to CMS data."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // Databases & Servers
      {
        imgSrc: "/assets/img/mysql_mariadb.png", // Placeholder
        techName: "MySQL / MariaDB",
        description: "Common Databases for CMS",
        features: [
          "Relational databases frequently used by PHP-based CMS like WordPress, Drupal.",
          "Store website content, user data, settings.",
          "MariaDB is a popular open-source fork of MySQL."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/nginx_apache.png", // Placeholder
        techName: "Nginx / Apache",
        description: "Standard Web Servers",
        features: [
          "Handle HTTP requests and serve website files.",
          "Apache: Highly configurable, uses .htaccess.",
          "Nginx: Known for performance, often used as a reverse proxy."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
      // APIs (Primarily for Headless)
       {
        imgSrc: "/assets/img/rest_graphql_api.png", // Placeholder
        techName: "REST & GraphQL APIs",
        description: "Content Delivery for Headless",
        features: [
          "APIs used by headless CMS to expose content.",
          "REST: Standard architectural style using HTTP methods.",
          "GraphQL: Query language allowing clients to request specific data needed."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
  
       // Key Concepts & Practices
      {
        imgSrc: "/assets/img/content_modeling.png", // Placeholder
        techName: "Content Modeling",
        description: "Structuring Content Effectively",
        features: [
          "Defining content types (e.g., blog post, product), fields, and relationships.",
          "Ensures content is organized, manageable, and reusable.",
          "Critical foundation for both traditional and headless CMS."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/theming_templates.png", // Placeholder
        techName: "Theming / Templating",
        description: "Controlling Visual Presentation",
        features: [
          "Mechanism for defining the website's look and feel.",
          "Traditional CMS use template files (PHP, Twig); Headless uses frontend code.",
          "Allows separation of design from content."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/plugin_architecture.png", // Placeholder
        techName: "Plugin/Module Architecture",
        description: "Extending Core Functionality",
        features: [
          "Allows adding features via installable packages (plugins, modules, extensions).",
          "Reduces need to modify core CMS code.",
          "Vast ecosystems exist for platforms like WordPress and Drupal."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/seo_optimization.png", // Placeholder
        techName: "SEO Best Practices",
        description: "Optimizing for Search Engines",
        features: [
          "Utilizing CMS features/plugins for meta tags, sitemaps, clean URLs, schema.",
          "Ensuring mobile-friendliness and fast page load speeds.",
          "Content strategy and keyword optimization are key."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
      {
        imgSrc: "/assets/img/cms_security.png", // Placeholder
        techName: "CMS Security Hardening",
        description: "Protecting Against Threats",
        features: [
          "Regular updates (core, themes, plugins), strong passwords, user role limits.",
          "Using security plugins/firewalls, input sanitization, backups.",
          "Essential to prevent data breaches and website compromise."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/performance_optimization.png", // Placeholder
        techName: "Performance Optimization",
        description: "Ensuring Fast Load Times",
        features: [
          "Techniques like caching (server-side, browser, object), image optimization.",
          "Code minification (CSS/JS), database optimization, using CDNs.",
          "Crucial for user experience and SEO ranking."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      },
       {
        imgSrc: "/assets/img/accessibility_wcag.png", // Placeholder
        techName: "Web Accessibility (WCAG)",
        description: "Ensuring Access for All Users",
        features: [
          "Designing and developing CMS sites usable by people with disabilities.",
          "Following WCAG guidelines (Perceivable, Operable, Understandable, Robust).",
          "Involves semantic HTML, ARIA attributes, keyboard navigation, color contrast."
        ],
        deployedLink: "https://your-deployed-site.com" // Placeholder
      }
    ],
    serviceSection: {
      heading: "Flexible CMS Solutions for Powerful Content Management",
      description: [
        "WordPress Development: Custom theme/plugin development, site building & maintenance.",
        "Drupal Development: Building complex, secure websites for enterprises.",
        "Headless CMS Implementation: Integrating Strapi, Contentful, Sanity with custom frontends.",
        "CMS Platform Migration: Seamlessly migrating content between CMS platforms.",
        "E-commerce CMS Solutions: Developing online stores using Shopify, Magento, WooCommerce.",
        "CMS Customization & Integration: Tailoring features and integrating third-party tools.",
        "CMS Performance Optimization & Security: Enhancing speed and security best practices."
      ],
      image1Path: "/assets/img/cms_main.webp" // Placeholder
    },
    queryname: "cms" // Using the tag from your list
  },

  };
  
  export default servicesData;
  