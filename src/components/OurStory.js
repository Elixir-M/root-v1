// 'use client';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect, useRef } from 'react';

// const timelineEvents = [
//   {
//     year: '2015',
//     title: 'Founding Vision',
//     description: 'Founded by a team of visionary entrepreneurs and technology pioneers, Elixir was established with a mission to revolutionize industries with intelligent technology.'
//   },
//   {
//     year: '2017',
//     title: 'First Major Client',
//     description: 'Secured our first Fortune 500 client and delivered a transformative AI-powered analytics platform that set the foundation for our enterprise solutions.'
//   },
//   {
//     year: '2018',
//     title: 'Blockchain Innovation',
//     description: 'Launched our blockchain division, developing secure and transparent solutions for finance, supply chain, and digital identity verification.'
//   },
//   {
//     year: '2020',
//     title: 'Global Expansion',
//     description: 'Opened international offices in Europe and Asia, expanding our global footprint and diversifying our talent pool across continents.'
//   },
//   {
//     year: '2022',
//     title: 'AI Research Lab',
//     description: 'Established a dedicated AI research laboratory focused on developing cutting-edge machine learning algorithms and predictive analytics tools.'
//   },
//   {
//     year: '2024',
//     title: 'Industry Recognition',
//     description: 'Recognized as a leader in digital transformation by multiple industry bodies, with our solutions implemented across diverse sectors globally.'
//   }
// ];

// const OurStory = () => {
//   // Ref for the container
//   const timelineContainerRef = useRef(null);
  
//   // Main section animation
//   const mainControls = useAnimation();
//   const [mainRef, mainInView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1
//   });

//   useEffect(() => {
//     if (mainInView) {
//       mainControls.start('visible');
//     }
//   }, [mainControls, mainInView]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1 }
//   };

//   // Timeline line reveal animation that tracks scroll position
//   const [lineRef, lineInView] = useInView({
//     triggerOnce: false,
//     threshold: 0
//   });

//   const lineControls = useAnimation();

//   useEffect(() => {
//     const updateLineHeight = () => {
//       if (!timelineContainerRef.current) return;
      
//       const container = timelineContainerRef.current;
//       const containerRect = container.getBoundingClientRect();
//       const containerTop = containerRect.top;
//       const containerHeight = containerRect.height;
//       const windowHeight = window.innerHeight;
      
//       // Calculate how much of the container is in view
//       const visibleAmount = Math.min(
//         Math.max(0, (windowHeight - containerTop) / containerHeight), 
//         1
//       );
      
//       lineControls.start({
//         scaleY: visibleAmount,
//         transition: { duration: 0.1, ease: "linear" }
//       });
//     };

//     // Initial update
//     if (lineInView) {
//       updateLineHeight();
//       window.addEventListener('scroll', updateLineHeight);
//     }

//     // Cleanup
//     return () => {
//       window.removeEventListener('scroll', updateLineHeight);
//     };
//   }, [lineControls, lineInView]);

//   // Function to create individual timeline item animations
//   const TimelineItem = ({ event, index }) => {
//     const [itemRef, itemInView] = useInView({
//       triggerOnce: false,
//       threshold: 0.2,
//       rootMargin: '-50px 0px'
//     });

//     const itemControls = useAnimation();
    
//     useEffect(() => {
//       if (itemInView) {
//         itemControls.start('visible');
//       } else {
//         itemControls.start('hidden');
//       }
//     }, [itemControls, itemInView]);

//     const itemVariants = {
//       hidden: { 
//         y: 50, 
//         opacity: 0,
//         scale: 0.95
//       },
//       visible: { 
//         y: 0, 
//         opacity: 1, 
//         scale: 1,
//         transition: { 
//           duration: 0.7, 
//           ease: "easeOut"
//         } 
//       }
//     };

//     const dotVariants = {
//       hidden: { scale: 0, opacity: 0 },
//       visible: { 
//         scale: 1, 
//         opacity: 1,
//         transition: {
//           duration: 0.5,
//           delay: 0.2,
//           type: "spring",
//           stiffness: 200
//         }
//       }
//     };

//     return (
//       <div ref={itemRef} className="relative">
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate={itemControls}
//           className={`flex items-center mb-16 ${
//             index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
//           }`}
//         >
//           {/* Content Box */}
//           <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
//             <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
//             <p className="text-gray-600">{event.description}</p>
//           </div>

//           {/* Timeline Dot with its own animation */}
//           <motion.div 
//             variants={dotVariants}
//             initial="hidden"
//             animate={itemControls}
//             className="relative z-10"
//           >
//             <div className="absolute w-8 h-8 bg-white rounded-full border-4 border-indigo-600 shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
//               <span className="text-xs font-bold">{event.year}</span>
//             </div>
//           </motion.div>

//           {/* Empty Space (for alternating layout) */}
//           <div className="w-5/12"></div>
//         </motion.div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white py-20">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold">Our Story</h2>
//           <div className="w-24 h-1 bg-black mx-auto mt-8 mb-8"></div>
//           <p className="max-w-3xl mx-auto text-lg text-gray-600">
//             Our journey began with a vision to revolutionize industries with intelligent technology. 
//             Founded by a team of visionary entrepreneurs and technology pioneers, Elixir was built 
//             on the principles of innovation, collaboration, and excellence.
//           </p>
//         </motion.div>

//         <motion.div
//           ref={(el) => {
//             mainRef(el);
//             timelineContainerRef.current = el;
//           }}
//           variants={containerVariants}
//           initial="hidden"
//           animate={mainControls}
//           className="relative max-w-5xl mx-auto"
//         >
//           {/* Connected Timeline Line with Scroll-Based Reveal */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
//           <motion.div 
//             ref={lineRef}
//             initial={{ scaleY: 0, opacity: 1 }}
//             animate={lineControls}
//             className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-600 via-blue-500 to-green-500 shadow-glow"
//             style={{ transformOrigin: "top center" }}
//           />

//           {/* Timeline Events */}
//           {timelineEvents.map((event, index) => (
//             <TimelineItem key={index} event={event} index={index} />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default OurStory;


'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const timelineEvents = [
  {
    year: '2015',
    title: 'Founding Vision',
    description: 'Founded by a team of visionary entrepreneurs and technology pioneers, Elixir was established with a mission to revolutionize industries with intelligent technology.'
  },
  {
    year: '2017',
    title: 'First Major Client',
    description: 'Secured our first Fortune 500 client and delivered a transformative AI-powered analytics platform that set the foundation for our enterprise solutions.'
  },
  {
    year: '2018',
    title: 'Blockchain Innovation',
    description: 'Launched our blockchain division, developing secure and transparent solutions for finance, supply chain, and digital identity verification.'
  },
  {
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened international offices in Europe and Asia, expanding our global footprint and diversifying our talent pool across continents.'
  },
  {
    year: '2022',
    title: 'AI Research Lab',
    description: 'Established a dedicated AI research laboratory focused on developing cutting-edge machine learning algorithms and predictive analytics tools.'
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Recognized as a leader in digital transformation by multiple industry bodies, with our solutions implemented across diverse sectors globally.'
  }
];

const OurStory = () => {
  // Main section animation
  const mainControls = useAnimation();
  const [mainRef, mainInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (mainInView) {
      mainControls.start('visible');
    }
  }, [mainControls, mainInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  // Function to create individual timeline item animations
  const TimelineItem = ({ event, index }) => {
    const [itemRef, itemInView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
      rootMargin: '-50px 0px'
    });

    const itemControls = useAnimation();
    
    useEffect(() => {
      if (itemInView) {
        itemControls.start('visible');
      }
    }, [itemControls, itemInView]);

    const itemVariants = {
      hidden: { 
        y: 50, 
        opacity: 0,
        scale: 0.95
      },
      visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.7, 
          ease: "easeOut",
          delay: 0.1
        } 
      }
    };

    const dotVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.4,
          type: "spring",
          stiffness: 200
        }
      }
    };

    // Line segment grow effect
    const lineSegmentHeight = index === timelineEvents.length - 1 ? '50%' : '100%';
    const lineVariants = {
      hidden: { height: 0, opacity: 0.3 },
      visible: { 
        height: lineSegmentHeight, 
        opacity: 1,
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
          delay: 0.2 
        } 
      }
    };

    return (
      <div ref={itemRef} className="relative">
        {/* Line segment that grows as you scroll */}
        {index < timelineEvents.length && (
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={itemInView ? "visible" : "hidden"}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-600 via-blue-500 to-green-500 shadow-glow z-0"
            style={{ 
              top: 0,
              originY: 0
            }}
          />
        )}

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={itemControls}
          className={`flex items-center mb-16 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Content Box */}
          <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>

          {/* Timeline Dot with its own animation */}
          <motion.div 
            variants={dotVariants}
            className="relative z-10"
          >
            <div className="absolute w-8 h-8 bg-black rounded-full border-4 border-indigo-600 shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className=" text-xs font-bold">{event.year}</span>
            </div>
          </motion.div>

          {/* Empty Space (for alternating layout) */}
          <div className="w-5/12"></div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">Our Story</h2>
          <div className="w-24 h-1 bg-black mx-auto mt-8 mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our journey began with a vision to revolutionize industries with intelligent technology. 
            Founded by a team of visionary entrepreneurs and technology pioneers, Elixir was built 
            on the principles of innovation, collaboration, and excellence.
          </p>
        </motion.div>

        <motion.div
          ref={mainRef}
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="relative max-w-5xl mx-auto"
        >
          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;