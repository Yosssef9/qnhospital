import BreadcrumbArea from "../components/BreadcrumbArea";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HospitalAccreditations() {
  return (
    <div>
      <div className="md:mt-[122px] mt-[50px]">
        <BreadcrumbArea imgUrl="/images/HospitalAccreditations/awards-header.jpg" />
      </div>

      <div className="mb-12">
        <PictureSelector />
      </div>
    </div>
  );
}

function PictureSelector() {
  const pictures = [
    {
      id: 1,
      certificate:
        "/images/HospitalAccreditations/Certificates/WhatsApp Image 2025-11-02 at 19.40.52_063d495d.jpg",
      icon: "/images/HospitalAccreditations/Icons/WhatsApp Image 2025-11-02 at 19.20.59_852243e0.jpg",
      text: `Al-Qassim National Hospital has obtained Joint Commission International (JCI) accreditation...

🏅 JCI Accreditation
📋 Evidence of Quality
🌍 Other Accreditations`,
    },
    {
      id: 2,
      certificate:
        "/images/HospitalAccreditations/Certificates/WhatsApp Image 2025-11-02 at 19.40.53_94fc8d7a.jpg",
      icon: "/images/HospitalAccreditations/Icons/WhatsApp Image 2025-11-02 at 19.21.00_15b00be8.jpg",
      text: "We are recognized for our continuous improvement and dedication to patient safety and quality service.",
    },
    {
      id: 3,
      certificate:
        "/images/HospitalAccreditations/Certificates/WhatsApp Image 2025-11-02 at 19.40.53_660e7702.jpg",
      icon: "/images/HospitalAccreditations/Icons/WhatsApp Image 2025-11-02 at 19.21.00_803d8837.jpg",
      text: "Our advanced medical departments maintain high international standards across all specialties.",
    },
    {
      id: 4,
      certificate:
        "/images/HospitalAccreditations/Certificates/WhatsApp Image 2025-11-02 at 19.40.53_68dcc20f.jpg",
      icon: "/images/HospitalAccreditations/Icons/WhatsApp Image 2025-11-02 at 19.21.00_75624687.jpg",
      text: "We are proud to be a trusted healthcare provider, serving the community with compassion and innovation.",
    },
    {
      id: 5,
      certificate:
        "/images/HospitalAccreditations/Certificates/WhatsApp Image 2025-11-02 at 19.40.53_04f9607b.jpg",
      icon: "/images/HospitalAccreditations/Icons/WhatsApp Image 2025-11-02 at 19.21.01_5642488e.jpg",
      text: "Our hospital continues to uphold excellence in clinical outcomes, patient satisfaction, and quality management.",
    },
  ];

  const [selected, setSelected] = useState(pictures[0]);

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-4">
      {/* 🖼️ ICONS CAROUSEL (mobile) / GRID (desktop) */}
      <div
        className="
          flex md:flex-wrap
          gap-4
          w-full
          justify-start md:justify-center
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          scrollbar-hide
          px-2
          py-4
        "
      >
        {pictures.map((pic) => (
          <motion.img
            key={pic.id}
            src={pic.icon}
            alt={`icon-${pic.id}`}
            onClick={(e) => {
              setSelected(pic);
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                inline: "center",
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              sm:w-28 md:w-32 lg:w-36
              aspect-square
              object-contain
              rounded-full
              bg-white
              p-2
              cursor-pointer
              border-4
              transition-all duration-300 ease-in-out
              shadow-sm
              flex-shrink-0
              snap-center
              ${
                selected.id === pic.id
                  ? "border-blue-500 shadow-md scale-105"
                  : "border-transparent hover:border-blue-300"
              }
            `}
          />
        ))}
      </div>

      {/* ✨ CERTIFICATE SECTION */}
      <div className="relative w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            layout
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            <motion.img
              layout
              src={selected.certificate}
              alt="Accreditation Certificate"
              className="w-full md:w-1/2 rounded-xl shadow-lg border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              layout
              className="md:w-1/2 text-center md:text-left space-y-4"
            >
              <h3 className="text-2xl font-semibold text-[var(--main-color)]">
                Accreditation Achievement
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {selected.text}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
