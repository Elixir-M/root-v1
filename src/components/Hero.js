'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative  w-full overflow-hidden bg-black flex items-center">
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '150px'
        }}
      />

      <div className="container mx-auto px-6 z-10 mt-36">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-white bg-clip-text text-transparent">
              Architects of the Digital Revolution
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed">
            Our expertise spans across Artificial Intelligence (AI), Blockchain, Software Development, Cloud Computing, and IoT, enabling businesses to embrace innovation, optimize operations, and scale efficiently.
            </p>
            <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed">
            We believe in the power of technology to transform industries, enhance human experiences, and create a smarter, more connected world. Our mission is to help businesses navigate the complexities of digital transformation with cutting-edge solutions, turning challenges into opportunities and ideas into reality.
            </p>
            <p className="text-xl sm:text-2xl text-white mb-10 leading-relaxed">
            With a team of passionate technologists, strategists, and industry experts, we work closely with organizations to build intelligent, future-ready solutions that drive business success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300">
              Explore Our Solutions
            </button>
            <button className="bg-white text-black font-bold py-3 px-8 rounded-lg shadow-lg  hover:bg-gray-500 transition-colors duration-300">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-gradient-to-t from-transparent to-blue-900 opacity-10 rounded-tl-full"
      />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-gradient-to-b from-green-900 to-transparent opacity-5"
      />
    </div>
  );
};

export default Hero;