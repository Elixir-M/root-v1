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
      <br/>`,
      para2: `<p>
      <p>To address the startup’s need for an intuitive and secure NFT marketplace on the Polygon blockchain, 
    <strong>Elixir</strong> designed and developed a fully responsive front-end application using 
    <strong>React and Tailwind CSS</strong>, drawing inspiration from proven marketplace UI/UX patterns 
    to ensure ease of navigation and aesthetic appeal.
  </p><br/>
  <p>
    We integrated <strong>ethers.js</strong> for seamless wallet connectivity (supporting MetaMask and WalletConnect), 
    enabling users to authenticate, browse NFTs, and interact with the platform in real-time. Smart contract interactions 
    such as <em>bidding, buying/selling, minting, and ownership transfers</em> were handled directly via the front end, 
    with robust error handling and transaction state tracking implemented for transparency and usability.
  </p>
<br/>
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
      para2: `

<article>
    <h2>Elixir Deploys Custom LLM Solution to Automate and Enhance Multi-Source Marketing Analytics Reporting</h2>

    <h3>The Challenge: Manual Reporting Overload</h3>
    <p>A dynamic digital marketing agency faced a significant operational bottleneck: the weekly, labor-intensive process of manually aggregating and reporting on campaign performance. Data was painstakingly collected from diverse sources including <strong>Google Ads, Facebook Ads, LinkedIn Ads, Google Analytics, and internal CRM systems</strong>. This consumed extensive skilled analyst hours, diverting focus from strategic campaign improvement, and inherently introduced risks of manual errors and inconsistencies in client communications.</p>
<br/>
    <h3>Elixir's Solution: AI-Driven Automation & Insight</h3>
    <p>Elixir, an IT consultancy specializing in bespoke AI implementations, engineered an <em>intelligent automation solution</em> designed to specifically address this challenge. The core of the solution is a sophisticated <strong>Large Language Model (LLM)</strong>, integrated within a secure, custom-built platform.</p>
<br/>

    <h3>How It Works</h3>
    <p>The system operates in distinct, automated stages:</p>
    <ol>
        <li><strong>Automated Data Aggregation:</strong> Secure, scheduled API connections were established to each marketing platform and the CRM. These pipelines reliably fetch raw performance data, handling authentication protocols (e.g., OAuth, API keys) via secure credential management and ensuring data integrity from the source.</li>
<br/>
        
        <li><strong>LLM Processing & Analysis:</strong> The aggregated, multi-format data is then channeled into the central LLM engine. Elixir meticulously <strong>fine-tuned this powerful model</strong> using anonymized historical report examples, agency-specific KPI definitions (e.g., custom conversion values, lead scoring rules), and cross-platform terminology to ensure high relevance and accuracy in its outputs.</li>
    </ol>
<br/>

    <h3>Core LLM Capabilities Unleashed</h3>
    <p>The fine-tuned LLM performs several critical functions:</p>
    <ul>
        <li><strong>Data Normalization & Synthesis:</strong> The LLM intelligently understands and standardizes disparate metrics arriving in various formats (e.g., normalizing <code>cost_per_result</code> from Facebook Ads against <code>cost_per_acquisition</code> from Google Ads, aligning different conversion event definitions, handling currency variations). This creates a unified, analysis-ready dataset essential for cross-channel comparisons.</li>
<br/>
        
        <li><strong>Deep Contextual Analysis:</strong> The LLM interprets the unified data within the broader context of specific client campaigns and strategic objectives. It evaluates performance not just in isolation but against pre-defined goals loaded into the system, historical performance benchmarks stored over time, and even industry trends where available.</li>
<br/>
        
        <li><strong>Automated Insight Extraction:</strong> Moving beyond simple data reporting, the AI automatically surfaces significant performance insights that are difficult and time-consuming to spot manually. Examples include identifying ad creative fatigue based on declining CTR trends, pinpointing high-value audience segments demonstrating strong conversion rates across both Google Analytics and CRM data, and uncovering cross-channel correlations (e.g., how specific LinkedIn Ad campaign interactions influence subsequent website behavior and lead quality).</li>
        
<br/>
        <li><strong>Natural Language Generation & Reporting:</strong> Leveraging advanced Natural Language Generation (NLG), the LLM drafts clear, concise, and accurate report sections. This includes generating executive summaries suitable for C-level stakeholders, detailed channel-specific performance commentary for campaign managers, identifying key takeaways, and formulating actionable recommendations – all composed in professional, client-friendly language. The output format and level of detail can often be customized based on templates or user prompts.</li>
    </ul>
<br/>

    <div class="outcome">
        <h3>Outcomes & Workflow Integration</h3>
        <p>Elixir's solution seamlessly integrates into the agency's existing workflow, typically delivering draft reports in editable formats (like Word documents or Google Docs) or pushing structured data summaries directly to dashboards (like Google Data Studio/Looker). This transformation:</p>
        <ul>
            <li>Significantly reduced manual reporting time, often by <strong>over 80%</strong>.</li>
            <li>Virtually eliminated data transfer and copy-paste errors, enhancing report accuracy and client trust.</li>
            <li>Accelerated the delivery cycle of comprehensive, insightful client reports.</li>
            <li>Provided a richer analytical foundation through AI-generated insights, empowering analysts to make faster, more data-driven strategic decisions about budget allocation and campaign optimization.</li>
        </ul>
    </div>
<br/>

    <p class="security"><strong>Security & Privacy:</strong> All data processing occurs within a secure cloud environment architected by Elixir, strictly adhering to data privacy regulations (like GDPR or CCPA, as applicable) and ensuring client data confidentiality.</p>

</article>`,
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
  </p><br/>
  <p>
    The bot was trained on structured company documents, including HR policies, benefits handbooks, IT SOPs, and 
    expense guidelines. A backend knowledge base was created using <strong>Google Firestore</strong>, enabling 
    real-time updates and dynamic responses to employee queries about leave policies, claims, hardware requests, 
    and more. A fallback mechanism routed unresolved questions to the appropriate HR representative via integrated 
    ticketing workflows (e.g., <strong>Jira, ServiceNow</strong>), ensuring human support where needed.
  </p><br/>
  <p>
    To optimize the onboarding experience, the chatbot included a guided new-hire flow triggered automatically 
    upon joining. This flow provided scheduled updates, links to key documents, IT provisioning status, and 
    answered FAQs across the first 30 days — reducing the dependency on manual HR check-ins.
  </p><br/>
  <p>
    For HR administrators, an <strong>analytics dashboard</strong> (built using <strong>Google Looker Studio</strong>) 
    provided insights into chatbot usage patterns, peak query categories, and unanswered questions, enabling 
    continuous improvement of the knowledge base.
  </p><br/>
  <p>
    The solution was deployed in a <strong>containerized environment</strong> using <strong>Google Cloud Run</strong> 
    with CI/CD support via <strong>GitHub Actions</strong>, making future feature updates efficient and low-risk. 
    Within three months of deployment, the system reduced repetitive queries by over <strong>60%</strong>, accelerated 
    onboarding communications, and allowed the HR team to redirect attention to high-impact, people-centric initiatives.
  </p>
</p>`,
      para3: `<p><b>Business Value:</b> The chatbot saved the HR team an estimated 15 hours per week answering repetitive questions (assume $55/hr HR generalist rate), yielding annual savings of $42,900 (15 hrs/wk * 52 wks * $55/hr). Additionally, reducing HR touchpoint time during onboarding by 30% saved approx. 2 hours per new hire. For 50 new hires annually, this adds another $5,500 in savings (50 hires * 2 hrs * $55/hr), totaling over $48,000 in annual quantifiable value.</p>`,
      stats: [
        { label: "Queries Per Day", value: "25K+" },
        { label: "Follow Up Questions In Engagement", value: "85%" },
        { label: "Average Response Time", value: "~3s" },
        { label: "Manuals Used To Train", value: "200+" },
      ],
    },
  ],
  // other services
};

export default projectsData;
