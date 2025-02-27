


import { cn } from "@/lib/utils";
import Image from "next/image";



export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Pioneering the Future with Advanced Technologies",
      // description: `We specialize in emerging technologies like AI/ML, cloud-native apps, IoT, and blockchain, staying
      //  ahead of the curve since before they were mainstream. With certifications from AWS, Microsoft Azure, and Google
      //   Cloud, and strong partnerships with tech giants, we deliver next-gen solutions that set you apart.`,
      description:"We specialize in AI, cloud, IoT, and blockchain to deliver next-gen solutions that drive innovation.",
      image: "/assets/gridicons/artificial-intelligence-5.png",
      gradientColor: "from-blue-800",
      accentColor: "bg-blue-500"
    },
    {
      title: "Driving Impactful Outcomes with Smart Solutions",
      // description: `We focus on delivering measurable outcomes that make a real impact, whether it’s cost
      //  savings, improved efficiency, or faster go-to-market. With case studies that showcase tangible ROI, we
      //   prove that our solutions consistently drive business success, transforming challenges into opportunities.`,
      description:"Our tailored strategies maximize efficiency, reduce costs, and ensure measurable business growth.",
      image: "/assets/gridicons/results.png",
      gradientColor: "from-neutral-500",
      accentColor: "bg-neutral-500"
    },
    {
      title: "Custom-Built Strategies for Your Success",
      // description: `No two businesses are the same, and neither are our solutions. We design customized strategies that align
      //  perfectly with your industry’s unique challenges and goals, ensuring that every service we provide is a perfect fit for
      //   your needs—no one-size-fits-all here.`,
      description:"Every business is unique—our personalized solutions align with your specific challenges and goals." ,     image: "/assets/gridicons/solutions tailor.png",
      gradientColor: "from-green-800",
      accentColor: "bg-green-500"
    },
    {
      title: "Accelerating Business with Agile Innovation",
      // description: `In today’s fast-paced world, speed is everything. We pride ourselves on quickly deploying teams and solutions, enabling
      //  you to stay ahead of deadlines and tackle time-sensitive IT projects with confidence, ensuring fast and efficient execution every time.`,
      description:"Speed and precision define our approach, ensuring fast, adaptable solutions for evolving markets.",
      image: "/assets/gridicons/agility.png",
      gradientColor: "from-blue-400",
      accentColor: "bg-blue-500"
    },
    {
      title: "Seamlessly Connecting Technology & Business",
      // description: `We combine top-tier technical expertise with a deep understanding of business processes, ensuring
      //  that your IT strategy aligns with your overall business goals. This hybrid approach allows us to deliver solutions
      //   that drive real business value, not just technical outcomes.`,
      description:"Bridging IT expertise with strategic insights, we deliver solutions that create real business value.",
      image: "/assets/gridicons/tech and business.png",
      gradientColor: "from-yellow-600",
      accentColor: "bg-yellow-500"
    },
    {
      title: "Top-Tier Talent for Exceptional IT Excellence",
      // description: `We excel at finding the right talent, even for hard-to-fill tech roles. With low attrition rates, quick
      //  time-to-fill, and outstanding client satisfaction scores, our staffing solutions ensure that you get the best-fit talent
      //   that helps drive your projects forward with success.`,
      description:"We source elite IT professionals to fill even the most complex roles, ensuring quality and retention.",
      image: "/assets/gridicons/staffing.png",
      gradientColor: "from-pink-700",
      accentColor: "bg-pink-500"
    },
    {
      title: "Comprehensive IT Solutions, All in One Place",
      // description: `From consulting and implementation to staffing and ongoing support, we offer a full suite of services
      //  that streamline your IT needs. By acting as your comprehensive, end-to-end service provider, we simplify the vendor
      //  ecosystem and make managing your tech requirements effortless.`,
      description:"From consulting to staffing and support, we simplify IT management for seamless operations.",
      image: "/assets/gridicons/one stop.png",
      gradientColor: "from-indigo-800",
      accentColor: "bg-indigo-500"
    },
    {
      title: "Unlocking New Opportunities in Emerging Markets",
      // description: `We focus on unlocking potential in emerging markets—industries or geographies that are under-served 
      // by cutting-edge technologies. By bringing expertise in the latest innovations to these spaces, we help businesses gain
      //  a competitive edge in untapped areas.`,
      description:"We introduce cutting-edge technologies to untapped markets, helping businesses gain a competitive edge.",
      image: "/assets/gridicons/it market.png",
      gradientColor: "from-teal-800",
      accentColor: "bg-teal-500"
    },
  ];

  return (
    <div className="w-full bg-black px-16 pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  image,
  index,
  gradientColor,
  accentColor
}) => {
  return (
    <div
      className={cn(
        "flex flex-col min-h-[350px] lg:min-h-[400px] relative group/feature",
        index < 4 && "border-b dark:border-neutral-800",
        "lg:border-r dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        "transition-all duration-300"
      )}>
      {/* Gradient Hover Effect */}
      {index < 4 && (
        <div className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t to-transparent pointer-events-none",
          gradientColor
        )} />
      )}
      {index >= 4 && (
        <div className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b to-transparent pointer-events-none",
          gradientColor
        )} />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 lg:p-8">
        {/* Image Section */}
        <div className="mb-6 w-[5rem] h-[5.5rem] relative">
          <Image
            src={image}
            alt={title}
            fill
            className=" rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow">
          <div className="text-xl font-bold mb-4 relative">
            <div className={cn(
              "absolute left-0 -ml-3 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300",
              accentColor,
              "group-hover/feature:h-10"
            )} />
            <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white text-2xl">
              {title}
            </span>
          </div>

          <p className="text-base leading-relaxed text-neutral-300 group-hover/feature:text-white transition-colors duration-300">
            {description}
          </p>
        </div>

         {/* Learn More Link */}
         <div className="mt-4">
         <a 
    href="/test" 
    className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
  >
    Learn more →
  </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSectionDemo;
