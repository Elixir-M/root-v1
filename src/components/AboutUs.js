// components/AboutUs.js
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div ref={ref} className="min-h-screen bg-black py-20 flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">About Us</h2>
            {/* <div className="w-24 h-1 bg-black mx-auto mb-10"></div> */}
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full backdrop-blur-xl bg-white/5 rounded-2xl p-8 sm:p-12 md:p-12 lg:p-16 mb-9
            shadow-[0_8px_32px_0_rgba(255,0,255,0.28)] border border-white/20
          
            transition-all duration-300 ease-in-out"
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}>
            <p className="text-lg sm:text-xl leading-relaxed">
              Elixir is a global technology firm specializing in AI-powered solutions, enterprise software, blockchain integration, and digital transformation services. Since our inception, we have been dedicated to delivering high-performance, scalable, and secure digital solutions that empower businesses to innovate and grow.
            </p>
            <p className="text-lg sm:text-xl  leading-relaxed mt-6">
              We partner with startups, enterprises, and Fortune 500 companies across diverse industries, helping them embrace data-driven decision-making, automation, and intelligent software systems. Our commitment to excellence, coupled with our ability to adapt to ever-changing market trends, has positioned us as a trusted technology partner for businesses worldwide.
            </p>
            <p className="text-lg sm:text-xl  leading-relaxed mt-6">
              At Elixir, we don't just develop technology—we create experiences, build trust, and drive meaningful impact.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🧠",
                title: "Advanced AI Solutions",
                description: "Cutting-edge artificial intelligence and machine learning technologies to solve complex business challenges."
              },
              {
                icon: "🔗",
                title: "Blockchain Integration",
                description: "Secure, transparent blockchain solutions that revolutionize business processes and build trust."
              },
              {
                icon: "💻",
                title: "Custom Software",
                description: "Tailored software solutions designed specifically for your unique business requirements."
              },
              {
                icon: "☁️",
                title: "Cloud Expertise",
                description: "Seamless cloud migration and optimization to enhance performance and scalability."
              },
              {
                icon: "🔐",
                title: "Cybersecurity",
                description: "Robust security frameworks to protect your valuable data and digital assets."
              },
              {
                icon: "📱",
                title: "IoT Innovation",
                description: "Connected device ecosystems that bring intelligence to physical operations and products."
              }
            ].map((service, index) => (
              <div
                key={index}
                className=" backdrop-blur-xl bg-white/5 border border-white/20  rounded-xl  p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;