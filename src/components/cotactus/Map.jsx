import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center p-4 lg:p-24">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55658372844!2d75.78144864111462!3d22.724109981067947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1743828534016!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          borderRadius: "10px",
          filter: "grayscale(100%)",
        }}
        className="w-full h-[400px] lg:h-[500px] rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Map;
