// import React from "react";
// import Footer from "@/components/Footer";

// import { Navbar } from "@/components/Navbar";
// import ContactForm from "./ContactForm";

// const Page = () => {
//   return (
//     <div className="bg-black text-white">
//       <Navbar className="top-2"/>
//       <ContactForm/>
//       <Footer />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import { motion } from "framer-motion"
// import React, { useRef, useState, useEffect } from "react";
// import Image from 'next/image'
// // import SelectRole from "./SelectRole";
// // import FormSignUp from "./FormSignUp";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navbar } from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ContactForm from "./ContactForm";
// // import Snackbar from '@mui/joy/Snackbar';
// export default function Signup() {

//   const [userData, setUserData] = useState({
//     role: "",
//     modelData: {}
//   })

//   const [view, setView] = useState("ROLE")
//   const [isSnackbarOpen, setIsSnackbarOpen] = useState({
//     color: "",
//     message: ""
//   })

//   useEffect(() => {
//     console.log(userData)
//   }, [userData])

//   const slides = [
//     {
//       image: "image",
//       title: "Credit Models",
//       desc: "We use superior algo-driven credit models to curate invoices - Our credit models are much more superior & sharper than that of any other financial institution in India - And we are open to discussing with you about how they work."
//     },
//     {
//       image: "Image2",
//       title: "Liquidation",
//       desc: "Down sell your asset to another investor at a click of a button at zero cost. 100% of liquidity requests on TradeCred platform have been honoured till date."
//     },
//     {
//       image: "Image3",
//       title: "Track Record",
//       desc: "We have zero delinquency till date."
//     },
//     {
//       image: "Image4",
//       title: "Diverse Set of Products",
//       desc: "Invoice Discounting, Asset Leasing, Corporate Bonds, Sovereign Bonds"
//     },
//   ]

//   return (
//     <div className="flex flex-col h-screen bg-[#000000]">
//         <Navbar classNAme="top-2"/>
//       <section className="absolute hidden xl:block left-20 top-1/3">

        // <Swiper
        //   direction={'vertical'}
        //   pagination={{
        //     clickable: false,
        //   }}
        //   loop={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        //   modules={[Pagination, Autoplay, Navigation]}
        //   className="mySwiper h-96 w-[35vw]"
        // >
        //   {slides.map((slide, id) => {
        //     return (
        //       <SwiperSlide key={id} className="flex flex-col">
        //         {/* <Image alt="altText" src={slide.image} width="20" height="20" /> */}
        //         <h1 className="text-green-300 text-4xl mt-4">{slide.title}</h1>
        //         <div className="text-white text-lg mt-2">{slide.desc}</div>
        //       </SwiperSlide>
        //     )
        //   })}
        // </Swiper>
//       </section>


//         <div className="hidden py-44 px-8 sm:px-32 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center sm:flex flex-col">
//           {/* <SelectRole userData={userData} setUserData={setUserData} view={view} setView={setView} /> */}
//           {/* <FormSignUp setIsSnackbarOpen={setIsSnackbarOpen} userData={userData} setUserData={setUserData} view={view} setView={setView} /> */}
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: "700px" }}
//           animate={{ opacity: 1, y: ["400px", "-50px", "0px"], transition: { duration: 0.8, ease: "easeOut" } }}
//           exit={{ opacity: 0, y: "700px", transition: { duration: 0.3, ease: "easeOut" } }}
//           transition={{ duration: 0.3 }}
//           className="sm:hidden h-max overflow-y-hidden py-44 px-8 sm:px-32 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center flex flex-col">
//           {/* <SelectRole userData={userData} setUserData={setUserData} view={view} setView={setView} />
//           <FormSignUp setIsSnackbarOpen={setIsSnackbarOpen} userData={userData} setUserData={setUserData} view={view} setView={setView} /> */}
//         </motion.div>
//             <ContactForm/>

//         {/* <Snackbar
//           autoHideDuration={4000}
//           open={isSnackbarOpen}
//           variant={"outlined"}
//           color={isSnackbarOpen.color}
//           onClose={(event, reason) => {
//             if (reason === 'clickaway') {
//               return;
//             }
//             setIsSnackbarOpen(false);
//           }}
//         >
//           {isSnackbarOpen.message}
//         </Snackbar> */}
//         {/* <Footer/> */}
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.description) {
      newErrors.description = 'Message is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({ email: '', phone: '', description: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const slides = [
    {
      image: "image",
      title: "Credit Models",
      desc: "We use superior algo-driven credit models to curate invoices - Our credit models are much more superior & sharper than that of any other financial institution in India - And we are open to discussing with you about how they work."
    },
    {
      image: "Image2",
      title: "Liquidation",
      desc: "Down sell your asset to another investor at a click of a button at zero cost. 100% of liquidity requests on TradeCred platform have been honoured till date."
    },
    {
      image: "Image3",
      title: "Track Record",
      desc: "We have zero delinquency till date."
    },
    {
      image: "Image4",
      title: "Diverse Set of Products",
      desc: "Invoice Discounting, Asset Leasing, Corporate Bonds, Sovereign Bonds"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-500 to-black flex flex-col">
      <Navbar className="z-50" />
      
      <div className="flex-1 relative">
        {/* Swiper Section */}
        <section className="absolute hidden xl:block left-20 top-1/3 z-20">
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: false,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-96 w-[35vw]"
        >
          {slides.map((slide, id) => {
            return (
              <SwiperSlide key={id} className="flex flex-col">
                {/* <Image alt="altText" src={slide.image} width="20" height="20" /> */}
                <h1 className="bg-gradient-to-br from-black to-blue-900 text-transparent bg-clip-text text-4xl mt-4 inline-block">{slide.title}</h1>
                <div className="text-white text-lg mt-2">{slide.desc}</div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </section>

        {/* Desktop Form */}
        <div className="hidden sm:block absolute right-0 top-32 bottom-0 w-[600px] bg-white rounded-tl-[80px] z-10">
          <div className="p-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-black">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-black">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-black">Message:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                  rows="4"
                  placeholder="Your message"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              {status.message && (
                <div className={`p-3 rounded ${
                  status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-300 disabled:bg-green-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Form */}
        <motion.div
          initial={{ opacity: 0, y: "700px" }}
          animate={{ opacity: 1, y: ["400px", "-50px", "0px"] }}
          exit={{ opacity: 0, y: "700px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="sm:hidden absolute w-full top-32 bg-white rounded-t-[40px] z-10"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Same form fields as desktop */}
              <div>
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-1">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block mb-1">Message:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                  rows="4"
                  placeholder="Your message"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>

              {status.message && (
                <div className={`p-3 rounded ${
                  status.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* <Footer className="relative z-30" /> */}
    </div>
  );
}

