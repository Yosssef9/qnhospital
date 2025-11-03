import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // نضيف أول صورة في النهاية علشان تبان بعد الأخيرة مباشرة
  const extendedImages = [...images, images[0]];

  const nextSlide = () => {
    if (index === images.length) return; // لو وصلنا لآخر نسخة (المكررة)
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (index === 0) {
      // نتحرك لأقصى اليمين (النسخة المكررة)
      setIsTransitioning(false);
      setIndex(images.length);
      requestAnimationFrame(() => {
        setIsTransitioning(true);
        setIndex(images.length - 1);
      });
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  // Auto-slide كل 4 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length) return;
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  // لما نوصل لآخر نسخة (اللي بعد الأخيرة)، نرجع للأولى فورًا بدون أنيميشن
  useEffect(() => {
    if (index === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
        requestAnimationFrame(() => setIsTransitioning(true));
      }, 800); // نفس مدة الأنيميشن
      return () => clearTimeout(timeout);
    }
  }, [index, images.length]);

  return (
    <div className="px-12">
      <div className="relative w-full h-[550px] overflow-hidden rounded-2xl shadow-lg group">
        {/* Sliding container */}
        <motion.div
          className="flex w-full h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={
            isTransitioning
              ? { duration: 0.8, ease: "easeInOut" }
              : { duration: 0 }
          }
        >
          {extendedImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index % images.length ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
