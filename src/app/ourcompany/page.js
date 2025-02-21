'use client';

import { useState, useEffect } from 'react';
// import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import InfiniteMovingCards from '@/components/InfiniteMovingCardsDemo';
import OurStory from '@/components/OurStory';
import ServiceSection from '@/components/ServicesContent';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setCurrentSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black">
        <Navbar className="top-2"/>
      
      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      
      <section id="about" className="min-h-screen">
        <AboutUs />
      </section>
      
      <section id="overview" className="min-h-screen">
        <ServiceSection 
          heading="Company Overview" 
          description="Elixir is at the forefront of technological evolution, helping businesses adopt intelligent automation, secure digital ecosystems, and customer-centric software solutions. Our expertise covers Artificial Intelligence & Machine Learning, Blockchain & Smart Contracts, Custom Software & Cloud Solutions, Internet of Things (IoT), and Cybersecurity & Data Protection. By combining human creativity with technological innovation, we build solutions that solve real-world problems, enhance operational efficiency, and unlock new opportunities for businesses."
          animateFrom="left"
        />
      </section>
      
      <section id="story" className="min-h-screen">
        <OurStory />
      </section>
      
      <section id="team" className="min-h-screen">
        <ServiceSection 
          heading="Get to Know Us" 
          description="We are a team of creators, innovators, and problem-solvers passionate about building technology that makes a difference. Our culture is rooted in Customer-Centricity – We prioritize our clients' goals and tailor solutions to their needs. Innovation & Agility – We embrace the latest technologies to stay ahead of the curve. Collaboration & Transparency – We foster strong partnerships through clear communication. Continuous Growth & Learning – We believe in constant improvement and upskilling. At Elixir, we believe in building long-term relationships, fostering innovation, and helping businesses achieve digital excellence."
          animateFrom="right"
        />
      </section>
      
      <section id="business-model" className="min-h-screen">
        <ServiceSection 
          heading="Our Business Model" 
          description="Elixir operates on a value-driven business model that ensures success for our clients by focusing on: Tailored Digital Solutions – No one-size-fits-all; we customize technology to fit business needs. Scalability & Security – Future-proof solutions that grow with your business. Agile Methodology – Rapid innovation cycles for quicker go-to-market strategies. Data-Driven Insights – Advanced analytics to optimize decision-making. Sustainable Innovation – Long-term technology investments for continuous growth. Our client-first approach ensures that every product, solution, or service we deliver adds measurable value to businesses."
          animateFrom="left"
        />
      </section>
      
      <section id="workflow" className="min-h-screen">
        <ServiceSection 
          heading="How We Work" 
          description="Our workflow is designed for efficiency, innovation, and results. We follow a structured yet flexible methodology that allows businesses to leverage the power of technology effectively: 1. Discovery & Strategy – We understand your business goals and define the best tech roadmap. 2. Design & Development – Creating user-centric, high-performance solutions tailored to your needs. 3. Testing & Optimization – Rigorous testing for performance, security, and reliability. 4. Deployment & Support – Seamless integration, ongoing maintenance, and continuous improvements. By aligning technology with business strategy, we turn ideas into impactful digital solutions."
          animateFrom="right"
        />
      </section>
      
      <section id="approach" className="min-h-screen">
        <ServiceSection 
          heading="Our Approach" 
          description="At Elixir, our approach is simple yet powerful: Innovation-Driven Mindset – We push boundaries to create pioneering solutions. Customer-First Focus – Our solutions are built around client needs and market demands. Data-Backed Decisions – AI and analytics fuel our strategies for optimal results. Sustainable & Scalable Solutions – We build technology that grows with your business. By blending creativity, technical expertise, and business acumen, we create technology that enhances efficiency, improves user experience, and unlocks new possibilities."
          animateFrom="left"
        />
      </section>
      
      <section id="innovations" className="bg-black py-16">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h2 className="text-4xl font-bold text-center mb-8">Innovations & Solutions</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto items-center">By harnessing emerging technologies, we help businesses stay ahead of the competition, optimize performance, and drive digital transformation.</p>
        </div>
        <InfiniteMovingCards />
      </section>
      
      <section id="contact" className=" bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build the Future Together!</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto items-center">
            At Elixir, we don't just build software; we build digital ecosystems that shape the future. Whether you're a startup, an enterprise, or an innovator looking to disrupt your industry, we have the expertise to bring your vision to life.
          </p>
          <a href="https://elixirmultinational.com" className="inline-block bg-white text-black  font-bold py-4 px-8 rounded-lg text-xl hover:bg-gray-800  hover:text-white transition-colors duration-300">
            Discover the Elixir Difference
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}