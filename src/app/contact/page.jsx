"use client";
import { useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ phone: "", description: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const slides = [
    {
      title: "Credit Models",
      desc: "We use superior algo-driven credit models to curate invoices...",
    },
    {
      title: "Liquidation",
      desc: "Downsell your asset to another investor at zero cost...",
    },
    {
      title: "Track Record",
      desc: "We have zero delinquency till date.",
    },
    {
      title: "Diverse Set of Products",
      desc: "Invoice Discounting, Asset Leasing, Corporate Bonds, Sovereign Bonds.",
    },
  ];

  const verifyEmail = async () => {
    if (!email) {
      setStatus({ type: "error", message: "Please enter an email!" });
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/verifyemail", { email });
      if (response.data.smtp_check) {
        setStatus({ type: "success", message: "✅ Email Verified!" });
        setStep(2);
      } else {
        setStatus({ type: "error", message: "❌ Invalid Email!" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error verifying email!" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{8,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.description || formData.description.length < 10) {
      newErrors.description = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, ...formData }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you! We will contact you soon." });
        setFormData({ phone: "", description: "" });
        setStep(1);
        setEmail("");
      } else {
        setStatus({ type: "error", message: "Something went wrong. Try again!" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error submitting form!" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-purple-900 rounded-lg shadow-lg overflow-hidden">

        {/* Left - Sliding Text */}
        <div className="flex flex-col md:w-1/2 bg-gradient-to-b from-purple-700 via-purple-600 to-pink-500 text-white p-8 justify-center items-center shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <Swiper
            direction="vertical"
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="w-full h-80"
          >
            {slides.map((slide, id) => (
              <SwiperSlide
                key={id}
                className="flex flex-col justify-center items-center p-4 text-center bg-opacity-80 bg-purple-800 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold text-pink-300">{slide.title}</h3>
                <p className="mt-4 text-lg text-gray-100">{slide.desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-pink-300">Contact Us</h2>

          {status.message && (
            <p
              className={`text-center p-2 mb-4 rounded ${
                status.type === "success" ? "bg-pink-400" : "bg-purple-600"
              }`}
            >
              {status.message}
            </p>
          )}

          {step === 1 && (
            <div>
              <label className="block mb-2 text-gray-200">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-purple-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="your@email.com"
              />
              <button
                onClick={verifyEmail}
                className="w-full mt-4 bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition duration-300"
              >
                Verify Email
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-gray-200">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded bg-black text-white focus:outline-none focus:ring-2 ${
                    errors.phone ? "border-pink-500 focus:ring-pink-500" : "border-purple-600 focus:ring-pink-400"
                  }`}
                  placeholder="Phone number"
                />
                {errors.phone && <p className="text-pink-400 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block mb-1 text-gray-200">Message:</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded bg-black text-white focus:outline-none focus:ring-2 ${
                    errors.description ? "border-pink-500 focus:ring-pink-500" : "border-purple-600 focus:ring-pink-400"
                  }`}
                  rows="4"
                  placeholder="Your message"
                />
                {errors.description && <p className="text-pink-400 text-sm mt-1">{errors.description}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-pink-500 text-white p-3 rounded hover:bg-pink-600 transition duration-300 disabled:bg-pink-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
