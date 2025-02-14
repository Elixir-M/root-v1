// 'use client'
// import React, { useEffect, useRef } from 'react';

// const sampleMoatsData = [
//   {
//     title: "Innovating with Cutting-Edge Technologies",
//     description: "We deliver next-gen solutions with expertise in AI/ML, cloud apps, IoT, and blockchain.",
//     image: "/assets/gridicons/artificial-intelligence-5.png",
//     gradientColor: "blue-800",
//     accentColor: "bg-blue-500"
//   },
//   {
//     title: "Delivering Results that Matter",
//     description: "We drive measurable results, from cost savings to faster go-to-market, with proven ROI through impactful solutions.",
//     image: "/assets/gridicons/results.png",
//     gradientColor: "neutral-500",
//     accentColor: "bg-neutral-500"
//   },
//   {
//     title: "Solutions Tailored to You",
//     description: "We create tailored solutions to meet your unique business challenges—no one-size-fits-all",
//     image: "/assets/gridicons/solutions tailor.png",
//     gradientColor: "green-800",
//     accentColor: "bg-green-500"
//   },
//   {
//     title: "Agility at the Speed of Business",
//     description: "We deliver fast, efficient solutions to help you meet tight deadlines and tackle time-sensitive projects with confidence",
//     image: "/assets/gridicons/agility.png",
//     gradientColor: "blue-400",
//     accentColor: "bg-blue-500"
//   },
//   {
//     title: "Bridging Tech and Business",
//     description: "We blend technical expertise with business insight to align IT strategies with your goals, delivering solutions that drive true value.",
//     image: "/assets/gridicons/tech and business.png",
//     gradientColor: "yellow-600",
//     accentColor: "bg-yellow-500"
//   },
//   {
//     title: "Staffing Excellence, Guaranteed",
//     description: "We specialize in sourcing top talent for even the toughest tech roles, ensuring quick placements, low attrition, and high client satisfaction.",
//     image: "/assets/gridicons/staffing.png",
//     gradientColor: "pink-700",
//     accentColor: "bg-pink-500"
//   },
//   {
//     title: "Your One-Stop IT Partner",
//     description: "We provide end-to-end IT services, from consulting to staffing and support, simplifying your tech needs with a seamless approach.",
//     image: "/assets/gridicons/one stop.png",
//     gradientColor: "indigo-800",
//     accentColor: "bg-indigo-500"
//   },
//   {
//     title: "Tapping Into Emerging Markets",
//     description: "We unlock potential in emerging markets by introducing cutting-edge technologies, giving businesses a competitive edge in untapped areas.",
//     image: "/assets/gridicons/it market.png",
//     gradientColor: "teal-800",
//     accentColor: "bg-teal-500"
//   },
// ];

// const MoatsSection = ({ data = sampleMoatsData }) => {
//   const getGradientClass = (color) => {
//     return `bg-gradient-to-br from-${color} to-${color}/80`;
//   };

//   return (
//     <div className="w-full">
//       {data.map((section, index) => (
//         <div
//           key={index}
//           className={`w-full py-16 transition-all duration-500 ${getGradientClass(section.gradientColor)}`}
//         >
//           <div className="container mx-auto px-4">
//             <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
//               {/* Text Content */}
//               <div className="w-full lg:w-1/2 space-y-6">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0 animate-fadeInUp">
//                   {section.title}
//                 </h2>
//                 <p className="text-lg text-gray-100 opacity-0 animate-fadeInUp animation-delay-200">
//                   {section.description}
//                 </p>
//               </div>
              
//               {/* Image */}
//               <div className="w-full lg:w-1/2 flex justify-center">
//                 <div className="relative overflow-hidden rounded-lg shadow-xl w-64 h-64 md:w-80 md:h-80">
//                   <img
//                     src={section.image}
//                     alt={section.title}
//                     className="w-full h-full object-contain p-4 opacity-0 animate-fadeInSlide bg-white/10 backdrop-blur-sm"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Add custom animations to Tailwind
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes fadeInSlide {
//     from {
//       opacity: 0;
//       transform: translateX(${Math.random() > 0.5 ? '' : '-'}50px);
//     }
//     to {
//       opacity: 1;
//       transform: translateX(0);
//     }
//   }
  
//   .animate-fadeInUp {
//     animation: fadeInUp 0.6s ease-out forwards;
//   }
  
//   .animate-fadeInSlide {
//     animation: fadeInSlide 0.8s ease-out forwards;
//   }
  
//   .animation-delay-200 {
//     animation-delay: 0.2s;
//   }
// `;
// document.head.appendChild(style);

// export default MoatsSection;

'use client'
import React, { useEffect } from 'react';

const sampleMoatsData = [
  {
    title: "Innovating with Cutting-Edge Technologies",
    description: "We deliver next-gen solutions with expertise in AI/ML, cloud apps, IoT, and blockchain.",
    image: "/assets/gridicons/artificial-intelligence-5.png",
    gradientColor: "blue-800",
    accentColor: "bg-blue-500"
  },
  {
    title: "Delivering Results that Matter",
    description: "We drive measurable results, from cost savings to faster go-to-market, with proven ROI through impactful solutions.",
    image: "/assets/gridicons/results.png",
    gradientColor: "neutral-500",
    accentColor: "bg-neutral-500"
  },
  {
    title: "Solutions Tailored to You",
    description: "We create tailored solutions to meet your unique business challenges—no one-size-fits-all",
    image: "/assets/gridicons/solutions tailor.png",
    gradientColor: "green-800",
    accentColor: "bg-green-500"
  },
  {
    title: "Agility at the Speed of Business",
    description: "We deliver fast, efficient solutions to help you meet tight deadlines and tackle time-sensitive projects with confidence",
    image: "/assets/gridicons/agility.png",
    gradientColor: "blue-400",
    accentColor: "bg-blue-500"
  },
  {
    title: "Bridging Tech and Business",
    description: "We blend technical expertise with business insight to align IT strategies with your goals, delivering solutions that drive true value.",
    image: "/assets/gridicons/tech and business.png",
    gradientColor: "yellow-600",
    accentColor: "bg-yellow-500"
  },
  {
    title: "Staffing Excellence, Guaranteed",
    description: "We specialize in sourcing top talent for even the toughest tech roles, ensuring quick placements, low attrition, and high client satisfaction.",
    image: "/assets/gridicons/staffing.png",
    gradientColor: "pink-700",
    accentColor: "bg-pink-500"
  },
  {
    title: "Your One-Stop IT Partner",
    description: "We provide end-to-end IT services, from consulting to staffing and support, simplifying your tech needs with a seamless approach.",
    image: "/assets/gridicons/one stop.png",
    gradientColor: "indigo-800",
    accentColor: "bg-indigo-500"
  },
  {
    title: "Tapping Into Emerging Markets",
    description: "We unlock potential in emerging markets by introducing cutting-edge technologies, giving businesses a competitive edge in untapped areas.",
    image: "/assets/gridicons/it market.png",
    gradientColor: "teal-800",
    accentColor: "bg-teal-500"
  },
];

const MoatsSection = ({ data = sampleMoatsData }) => {
  const getGradientClass = (color) => {
    return `bg-gradient-to-br from-${color} to-${color}/80`;
  };

  // Dynamically add custom styles for animations after component mounts
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInSlide {
        from {
          opacity: 0;
          transform: translateX(${Math.random() > 0.5 ? '' : '-'}50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .animate-fadeInUp {
        animation: fadeInUp 0.6s ease-out forwards;
      }

      .animate-fadeInSlide {
        animation: fadeInSlide 0.8s ease-out forwards;
      }

      .animation-delay-200 {
        animation-delay: 0.2s;
      }
    `;
    document.head.appendChild(style);

    // Clean up the style tag on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array means this will only run on mount

  return (
    <div className="w-full">
      {data.map((section, index) => (
        <div
          key={index}
          className={`w-full py-16 transition-all duration-500 ${getGradientClass(section.gradientColor)}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 opacity-0 animate-fadeInUp">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-100 opacity-0 animate-fadeInUp animation-delay-200">
                  {section.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative overflow-hidden rounded-lg shadow-xl w-64 h-64 md:w-80 md:h-80">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-contain p-4 opacity-0 animate-fadeInSlide bg-white/10 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoatsSection;
