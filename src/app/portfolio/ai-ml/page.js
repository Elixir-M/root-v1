import React from "react";
import Footer from "@/components/Footer";
import ServicePage from '@/components/ServicePage';
import { Navbar } from "@/components/Navbar";
const serviceData = {
    slug: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Transforming data into intelligent solutions through advanced artificial intelligence and machine learning algorithms. ',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};


const projectsData = [
    {
        id: 1,
        slug: 'predictive-analytics',
        title: 'Predictive Analytics Engine',
        description: 'Advanced ML model predicting market trends with 94% accuracy using time-series analysis and deep learning',
        image: '/images/projects/ai-ml/prediction.jpg',
        techStack: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn']
    },
    {
        id: 2,
        slug: 'nlp-platform',
        title: 'NLP Content Analyzer',
        description: 'Natural language processing system for sentiment analysis and content classification across multiple languages',
        image: '/images/projects/ai-ml/nlp.jpg',
        techStack: ['PyTorch', 'BERT', 'FastAPI', 'Docker', 'Redis']
    }
];

const Page = () => {
    return (
      <div className="bg-black text-white">
        <Navbar className="top-2"/>
  
        <ServicePage 
      serviceData={serviceData} 
      projectsData={projectsData} 
    />
  
        {/* Footer Section */}
        <Footer />
      </div>
    );
  };
  
  export default Page;