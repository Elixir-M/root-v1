"use client";;
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  // const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  // const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate item dimensions
  // const getItemDimensions = () => {
  //   const isMobile = window && window.innerWidth < 768;
  //   return {
  //     width: isMobile ? 230 : 384, // (md:w-96)
  //     gap: isMobile ? 4 : 8
  //   };
  // };

  // CHANGED: Modified getItemDimensions to be responsive

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getItemDimensions = () => {
    return {
      width: isMobile ? 230 : Math.min(384, containerWidth * 0.3),
      gap: isMobile ? 16 : Math.min(32, containerWidth * 0.02)
    };
  };

// const getItemDimensions = () => {
//   const isMobile = window && window.innerWidth < 768;
//   return {
//     // CHANGED: Now calculates width based on container size
//     width: isMobile ? 230 : Math.min(384, containerWidth * 0.3),
//     // CHANGED: Responsive gap
//     gap: isMobile ? 16 : Math.min(32, containerWidth * 0.02)
//   };
// };

// Update container width on resize
useEffect(() => {
  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  updateWidth();
  window.addEventListener('resize', updateWidth);
  return () => window.removeEventListener('resize', updateWidth);
}, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      // checkScrollability();
    }
  }, [initialScroll]);

  // const checkScrollability = () => {
  //   if (carouselRef.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
  //     setCanScrollLeft(scrollLeft > 0);
  //     setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  //   }
  // };

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  // const handleCardClose = (index) => {
  //   if (carouselRef.current) {
  //     const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
  //     const gap = isMobile() ? 4 : 8;
  //     const scrollPosition = (cardWidth + gap) * (index + 1);
  //     carouselRef.current.scrollTo({
  //       left: scrollPosition,
  //       behavior: "smooth",
  //     });
  //     setCurrentIndex(index);
  //   }
  // };

  const scrollTo = (direction) => {
    if (isTransitioning || !carouselRef.current) return;

    setIsTransitioning(true);
    const { width, gap } = getItemDimensions();
    const containerWidth = carouselRef.current.clientWidth;
    const scrollWidth = carouselRef.current.scrollWidth;
    const currentScroll = carouselRef.current.scrollLeft;
    
    let nextScroll;
    let nextIndex;

    if (direction === 'left') {
      if (currentScroll <= 0) {
        // When at the start and scrolling left, smoothly scroll to the end
        nextScroll = scrollWidth - containerWidth;
        nextIndex = items.length - 1;
      } else {
        nextScroll = currentScroll - (width + gap);
        nextIndex = (currentIndex - 1 + items.length) % items.length;
      }
    } else {
      if (currentScroll >= scrollWidth - containerWidth - 10) { // Added small threshold
        // When at the end and scrolling right, smoothly scroll to the start
        nextScroll = 0;
        nextIndex = 0;
      } else {
        nextScroll = currentScroll + (width + gap);
        nextIndex = (currentIndex + 1) % items.length;
      }
    }

    carouselRef.current.scrollTo({
      left: nextScroll,
      behavior: "smooth"
    });

    setCurrentIndex(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500); // Match this with scroll animation duration
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const { width, gap } = getItemDimensions();
      const scrollPosition = (width + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const extendedItems = [...items];

  // const isMobile = () => {
  //   return window && window.innerWidth < 768;
  // };

//   return (
//     (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
//       <div className="relative w-full">
//         <div
//           className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
//           ref={carouselRef}
//           onScroll={checkScrollability}>
//           <div
//             className={cn(
//               "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
//             )}></div>

//           <div
//             className={cn(
//               "flex flex-row justify-start gap-4 pl-4",
//               // remove max-w-4xl if you want the carousel to span the full width of its container
//               "mx-auto"
//             )}>
//             {items.map((item, index) => (
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.5,
//                     delay: 0.2 * index,
//                     ease: "easeOut",
//                     once: true,
//                   },
//                 }}
//                 key={"card" + index}
//                 className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
//                 {item}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-end gap-2 mr-10">
//           <button
//             className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}>
//             <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
//           </button>
//           <button
//             className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
//             onClick={scrollRight}
//             disabled={!canScrollRight}>
//             <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
//           </button>
//         </div>
//       </div>
//     </CarouselContext.Provider>)
//   );
// };

return (
  <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
    <div className="relative w-full"  ref={containerRef} >
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto py-4 md:py-6 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}>
        <div className={cn(
         "flex flex-row gap-4 md:gap-8 px-4 md:px-8",
          "mx-auto"
        )}>
          {extendedItems.map((item, index) => (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                  once: true,
                },
              }}
              key={"card" + index}
              style={{
                flex: `0 0 ${getItemDimensions().width}px`
              }}
              className="rounded-3xl">
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center gap-4">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
          onClick={() => scrollTo('left')}>
          <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
          onClick={() => scrollTo('right')}>
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div> */}
      <button
  className="absolute left-4 top-1/2 -translate-y-1/2 z-40 h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center backdrop-blur-sm transition-colors"
  onClick={() => scrollTo('left')}>
  <IconArrowNarrowLeft className="h-6 w-6 text-gray-700" />
</button>
<button
  className="absolute right-4 top-1/2 -translate-y-1/2 z-40 h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center backdrop-blur-sm transition-colors"
  onClick={() => scrollTo('right')}>
  <IconArrowNarrowRight className="h-6 w-6 text-gray-700" />
</button>
    </div>
  </CarouselContext.Provider>
);
};
export const Card = ({
  card,
  index,
  layout = false
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (<>
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            layoutId={layout ? `card-${card.title}` : undefined}
            className="max-w-5xl mx-auto bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative">
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-white rounded-full flex items-center justify-center"
              onClick={handleClose}>
              <IconX className="h-6 w-6 text-neutral-900" />
            </button>
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-white">
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-2xl md:text-5xl font-semibold mt-4 text-white">
              {card.title}
            </motion.p>
            <div className="py-10">{card.content}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={handleOpen}
      className="rounded-3xl bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10">
      <div
        className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="text-white text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0" />
    </motion.button>
  </>);
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    (<Image
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest} />)
  );
};
