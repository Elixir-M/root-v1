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
  aiml: [
    {
      id: "ai-marketing-agent",
      image: "/assets/img/studydao.png",
      title: "AI Marketing Agent",
      description:
        "Streamlining cross-platform marketing report generation for a digital agency",
      gallery: ["/assets/img/studydao.png", "/assets/img/e-logo.png"],

      techStacks: [
        { name: "ChatGPT-4", color: "#f3ba2f" },
        { name: "Python", color: "#61dafb" },
      ],
      para1:
        "<p>A busy digital marketing agency spent considerable analyst time each week manually collecting performance data from Google Ads, Facebook Ads, LinkedIn Ads, Google Analytics, and their CRM. Compiling comprehensive client campaign reports was repetitive, time-consuming, and prone to copy-paste errors.</p>",
      para2: `<p>
  <p>
    To streamline the agency’s reporting workflow, the team implemented an automated data pipeline that 
    consolidated campaign performance metrics from <strong>Google Ads, Facebook Ads, LinkedIn Ads, 
    Google Analytics</strong>, and the <strong>CRM</strong> into a unified dashboard.
  </p>
  <p>
    Using APIs and scheduled data pulls via <strong>Python scripts and Google Cloud Functions</strong>, 
    real-time data was fetched, cleaned, and stored in <strong>BigQuery</strong>. A 
    <strong>Google Data Studio (Looker Studio)</strong> interface was built on top for interactive, 
    client-ready reporting.
  </p>
  <p>
    This automation significantly reduced manual effort, eliminated copy-paste errors, and enabled analysts 
    to focus on insights instead of data wrangling.
  </p>
</p>

`,
      para3:
        "<b>Business Value:</b> The automation saved a lead marketing analyst approximately 12 hours per week previously spent on manual data gathering and report compilation (assume $75/hr fully burdened rate). This translates to direct annual savings of $46,800 (12 hrs/wk * 52 wks * $75/hr), allowing the analyst to focus on higher-value strategic analysis, campaign optimization, and client communication.",
      stats: [
        { label: "Saved Marketing Analyst Time", value: "12 Hrs/Wk" },
        { label: "Daily Mail Volume", value: "25K+" },
        { label: "Reduction In Report Generation Time", value: "90%" },
        { label: "Metrics Collected In a Day", value: "10GB+" },
      ],
    },
    {
      id: "hr-chatbot",
      image: "/assets/img/studydao.png",
      title: "Internal HR Chatbot for Onboarding and FAQ Automation",
      description:
        "AI assistant trained on company data to support employees and HR",
      gallery: ["/assets/img/studydao.png", "/assets/img/e-logo.png"],

      techStacks: [
        { name: "ChatGPT-4", color: "#f3ba2f" },
        { name: "React", color: "#f3ba2f" },
        { name: "Python", color: "#61dafb" },
        { name: "Azure", color: "#61dafb" },
      ],
      para1:
        "<p>A mid-sized company's HR department was inundated with repetitive questions from employees about benefits, leave policies, expense procedures, and IT support. New hire onboarding involved numerous manual check-ins and answering the same basic questions repeatedly, consuming significant HR bandwidth.</p>",
      para2: `<p>
  <p>
    To alleviate the HR department’s growing workload and enhance internal operational efficiency, the team designed 
    and deployed a smart, scalable employee support system centered around a <strong>conversational AI chatbot</strong>. 
    Built using a combination of <strong>Dialogflow</strong> and custom natural language processing logic, the chatbot 
    was integrated into the company’s existing communication platforms — <strong>Microsoft Teams and Slack</strong> — 
    to ensure maximum accessibility for employees.
  </p>
  <p>
    The bot was trained on structured company documents, including HR policies, benefits handbooks, IT SOPs, and 
    expense guidelines. A backend knowledge base was created using <strong>Google Firestore</strong>, enabling 
    real-time updates and dynamic responses to employee queries about leave policies, claims, hardware requests, 
    and more. A fallback mechanism routed unresolved questions to the appropriate HR representative via integrated 
    ticketing workflows (e.g., <strong>Jira, ServiceNow</strong>), ensuring human support where needed.
  </p>
  <p>
    To optimize the onboarding experience, the chatbot included a guided new-hire flow triggered automatically 
    upon joining. This flow provided scheduled updates, links to key documents, IT provisioning status, and 
    answered FAQs across the first 30 days — reducing the dependency on manual HR check-ins.
  </p>
  <p>
    For HR administrators, an <strong>analytics dashboard</strong> (built using <strong>Google Looker Studio</strong>) 
    provided insights into chatbot usage patterns, peak query categories, and unanswered questions, enabling 
    continuous improvement of the knowledge base.
  </p>
  <p>
    The solution was deployed in a <strong>containerized environment</strong> using <strong>Google Cloud Run</strong> 
    with CI/CD support via <strong>GitHub Actions</strong>, making future feature updates efficient and low-risk. 
    Within three months of deployment, the system reduced repetitive queries by over <strong>60%</strong>, accelerated 
    onboarding communications, and allowed the HR team to redirect attention to high-impact, people-centric initiatives.
  </p>
</p>`,
      para3: "Security was our top priority with 2FA and cold storage.",
      stats: [
        { label: "Active Users", value: "150K+" },
        { label: "Transactions per Day", value: "5K" },
      ],
    },
  ],
  // other services
};

export default projectsData;
