import BreadcrumbArea from "../components/BreadcrumbArea";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HospitalAccreditations() {
  return (
    <div className="">
      <div className="mt-[122px]">
        <BreadcrumbArea
          imgUrl={"/images/HospitalAccreditations/awards-header.jpg"}
        />
      </div>
      <div className="mb-12 ">
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
      text: `Al-Qassim National Hospital has obtained Joint Commission International (JCI) accreditation, which is an international certification for healthcare quality. 
        This accreditation signifies the hospital's commitment to providing a high standard of patient care and a safe environment. 
        In addition to JCI, the hospital also holds other accreditations, such as from the Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI).

        🏅 **JCI Accreditation:** Al-Qassim National Hospital received JCI accreditation after a team from the organization evaluated the hospital's services.  
        📋 **Evidence of Quality:** The hospital states that this accreditation, along with its successful passing of the JCI evaluation, is proof of its commitment to high-quality healthcare and its ability to create a safe environment for patients and staff.  
        🌍 **Other Accreditations:** Besides JCI, Al-Qassim National Hospital has also been accredited by the Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI). Additionally, it has achieved accreditations from the College of American Pathologists (CAP) and the Association for the Advancement of Blood & Biotherapies (AABB).`,
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
      {/* 🖼️ Icons Section */}
      <div className="flex flex-wrap justify-center gap-4">
        {pictures.map((pic) => (
          <motion.img
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={pic.id}
            src={pic.icon}
            alt={`icon-${pic.id}`}
            onClick={() => setSelected(pic)}
            className={`sm:w-28 md:w-32 lg:w-36 aspect-square object-contain rounded-full bg-white p-2 cursor-pointer border-4
            transition-all duration-300 ease-in-out shadow-sm
            ${
              selected?.id === pic.id
                ? "border-blue-500 shadow-md scale-105"
                : "border-transparent hover:border-blue-300"
            }`}
          />
        ))}
      </div>

      {/* ✨ Animated Certificate Section */}
      <div className="relative w-full max-w-5xl mt-4">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              layout // ✅ this makes height changes smooth
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row justify-center gap-10 w-full"
            >
              <motion.img
                layout // ✅ also animate image resizing
                src={selected.certificate}
                alt="Accreditation Certificate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full md:w-1/2 rounded-xl shadow-lg border border-gray-200"
              />

              <motion.div
                layout // ✅ animates text height changes too
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
