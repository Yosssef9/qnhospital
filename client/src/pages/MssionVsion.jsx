import { motion } from "framer-motion";
import BreadcrumbArea from "../components/BreadcrumbArea";

const sections = [
  {
    imgUrl: "/images/MssionVsion/WhatsApp Image 2018-11-05 at 11.31.24.jpeg",
    h1: "Mission",
    p: "Qassim National Hospital provides medical care with high patient safety and excellent quality of care through evidence-based medicine, learning environment and employee’s empowerment.",
  },
  {
    imgUrl: "/images/MssionVsion/WhatsApp Image 2018-11-05 at 11.31.24(1).jpeg",
    h1: "Vision",
    p: "To be a well-recognized hospital and among the distinguished healthcare providers in the Kingdom of Saudi Arabia.",
  },
];

export default function MssionVsion() {
  return (
    <div>
      <div className="mt-[122px]">
        <BreadcrumbArea imgUrl={"/images/about-us-header.jpg"} />
      </div>
      <div className="flex flex-col mb-20 px-40">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex mb-8 gap-44 my-20 items-center ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={section.imgUrl}
              alt={section.h1}
              className="h-[350px] w-[400px] flex-shrink-0 rounded-2xl shadow-md"
            />
            <div className="flex flex-col mt-10">
              <h1 className="mb-5 text-2xl font-bold text-[#2e438a]">
                {section.h1}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed tracking-wide max-w-2xl">
                {section.p}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
