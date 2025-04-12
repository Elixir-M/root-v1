// data/projectsData.js

const projectsData = {
  blockchain: [
    {
      id: "study-dao",
      image: '/assets/img/studydao.png',
      title: 'StudyDAO',
      description: 'Decentralized educational platform leveraging blockchain for transparent knowledge sharing',
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
        { label: "Transactions per Day", value: "5K" }
      ]
    },
    // ...other projects
  ],
  // other services
};

export default projectsData;
